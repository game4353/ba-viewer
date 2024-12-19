import {
  ArmorType,
  BulletType,
  ParcelType,
  PotentialStatBonusRateType,
  type CharacterExcel,
  type CostumeExcel,
} from "@/assets/game/types/flatDataExcel";
import { useSkill } from "@/components/skill/skill";
import { useSkillList } from "@/components/skill/skillList";
import { useBaseStats } from "@/components/student/stat";
import { dataStudentGoal, dataStudentNow } from "@/stores/student";
import {
  useExcelCharacter,
  useExcelCharacterGear,
  useExcelCharacterStat,
  useExcelCostume,
} from "@/utils/data/excel/character";
import { cache, isDefined, range } from "@/utils/misc";
import { Result, asResult, findFirst } from "@/utils/result/result";
import type { ReadonlyDeep } from "type-fest";
import { toHiragana, toKatakana } from "wanakana";
import {
  usePotentialStatBonusRate,
  usePotentialStatRecipeIngredient,
} from "../../student/potential";
import {
  useTranscendenceBonusRate,
  useTranscendenceRecipeIngredient,
} from "../../student/star";
import { AFilterableParcel, type CTag } from "../tag";
import {
  CharacterTagArmorTypeGroup,
  CharacterTagBulletTypeGroup,
  CharacterTagEquipmentCategoryGroup,
  CharacterTagProductionGroup,
  CharacterTagRarityGroup,
  CharacterTagSchoolGroup,
  CharacterTagSquadTypeGroup,
  CharacterTagStatLevelUpTypeGroup,
  CharacterTagTacticRangeGroup,
  CharacterTagTacticRoleGroup,
  CharacterTagWeaponTypeGroup,
} from "./tag";

export class CCharacter extends AFilterableParcel<
  ReadonlyDeep<CharacterExcel>
> {
  // IParcel

  type = ParcelType.Character as const;
  get iconPath() {
    return this.costume.TextureDir;
  }

  // IFilterable

  tags: CTag<Object>[];
  constructor(
    public obj: ReadonlyDeep<CharacterExcel>,
    public costume: ReadonlyDeep<CostumeExcel>,
  ) {
    super(obj);
    this.tags = [
      CharacterTagSquadTypeGroup.getTag(obj.SquadType),
      CharacterTagArmorTypeGroup.getTag(obj.ArmorType),
      CharacterTagBulletTypeGroup.getTag(obj.BulletType),
      CharacterTagTacticRoleGroup.getTag(obj.TacticRole),
      CharacterTagTacticRangeGroup.getTag(obj.TacticRange),
      CharacterTagRarityGroup.getTag(obj.Rarity),
      CharacterTagWeaponTypeGroup.getTag(obj.WeaponType),
      CharacterTagSchoolGroup.getTag(obj.School),
      CharacterTagStatLevelUpTypeGroup.getTag(obj.StatLevelUpType),
      CharacterTagEquipmentCategoryGroup.getTag(obj.EquipmentSlot[0]),
      CharacterTagEquipmentCategoryGroup.getTag(obj.EquipmentSlot[1]),
      CharacterTagEquipmentCategoryGroup.getTag(obj.EquipmentSlot[2]),
      CharacterTagProductionGroup.getTag(obj.ProductionStep),
    ].filter(isDefined);
    this.initTags();
  }

  get search() {
    return computed(() =>
      this.name.value.map((name) => [toHiragana(name), toKatakana(name)]),
    );
  }

  sortValue(key: globalThis.Ref<string>) {
    return computed(() => {
      switch (key.value) {
        case "name":
          return this.name.value?.unwrapOr(undefined);
        case "id":
          return this.id;
      }
    });
  }

  // store

  get statNow() {
    return dataStudentNow.use(this.id);
  }
  get statGoal() {
    return dataStudentGoal.use(this.id);
  }

  // others

  get stat() {
    return computed(() =>
      useExcelCharacterStat().value.andThen((map) => map.getResult(this.id)),
    );
  }
  get gear() {
    return computed(() =>
      useExcelCharacterGear().value.map((map) => map.get(this.id)),
    );
  }
  get starMin() {
    return this.obj.DefaultStarGrade;
  }
  get bulletType() {
    return BulletType[this.obj.BulletType];
  }
  get armorType() {
    return ArmorType[this.obj.ArmorType];
  }

  get level() {
    return computed(() => this.statNow.lv);
  }
  get star() {
    return computed(() => this.statNow.star);
  }

  get skillGroups() {
    return asResult(
      computed(() => {
        const gear = this.statNow.gear0 > 1 ? 2 : 0;
        const wpn = this.star.value >= 7 ? 2 : 0;
        return useSkillList(this.id, wpn, gear).value.andThen((o) =>
          Result.all([
            findFirst(o.ExSkillGroupId, (v) => v !== "EmptySkill"),
            findFirst(o.PublicSkillGroupId, (v) => v !== "EmptySkill"),
            findFirst(o.PassiveSkillGroupId, (v) => v !== "EmptySkill"),
            findFirst(o.ExtraPassiveSkillGroupId, (v) => v !== "EmptySkill"),
          ]),
        );
      }).value,
    );
  }

  getSkill(i: 0 | 1 | 2 | 3, lv?: number) {
    return asResult(
      this.skillGroups.andThen(
        (arr) => useSkill(arr[i], lv ?? this.statNow[`skill${i}`]).value,
      ),
    );
  }

  starBonus = useTranscendenceBonusRate;
  starRecipe = useTranscendenceRecipeIngredient;
  potentialBonus = usePotentialStatBonusRate;

  usePotentialRecipe = usePotentialStatRecipeIngredient;
  usePotentialRecipes(
    type: Exclude<PotentialStatBonusRateType, PotentialStatBonusRateType.None>,
    currentLevel?: number,
    targetLevel?: number,
  ) {
    const i = type as 1 | 2 | 3;
    currentLevel ??= this.statNow[`break${i}`];
    targetLevel ??= this.statGoal[`break${i}`];
    return Result.all(
      [...range(currentLevel, targetLevel)].map((lv) =>
        this.usePotentialRecipe(type, lv),
      ),
    );
  }

  baseStats = useBaseStats;
}

export const useCharacter = cache((id: number) =>
  computed(() => {
    const chara = useExcelCharacter().value;
    const costume = useExcelCostume().value;
    const charaX = chara.andThen((chara) => chara.getResult(id));
    const costumeX = Result.all([charaX, costume]).andThen(([excel, costume]) =>
      costume.getResult(excel.CostumeGroupId),
    );
    return Result.all([charaX, costumeX]).map(
      ([charaX, costumeX]) => new CCharacter(charaX, costumeX),
    );
  }),
);

export function useCharacterIds() {
  const table = useExcelCharacter();
  return computed(() => table.value?.map((map) => Array.from(map.keys())));
}
