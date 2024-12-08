import {
  ArmorType,
  BulletType,
  ParcelType,
  PotentialStatBonusRateType,
  type CharacterExcel,
  type CostumeExcel,
} from "@/assets/game/types/flatDataExcel";
import { useBaseStats } from "@/components/character/stat/stat";
import { CSkill } from "@/components/skill/skill";
import { useSkillList } from "@/components/skill/skillList";
import { useCharaStore } from "@/stores/character";
import {
  useExcelCharacter,
  useExcelCharacterGear,
  useExcelCharacterStat,
  useExcelCostume,
} from "@/utils/data/excel/character";
import { cache, isDefined, range } from "@/utils/misc";
import { Result, asResult, findFirst } from "@/utils/result";
import type { ReadonlyDeep } from "type-fest";
import { toHiragana, toKatakana } from "wanakana";
import {
  usePotentialStatBonusRate,
  usePotentialStatRecipeIngredient,
} from "../../character/potential";
import {
  useTranscendenceBonusRate,
  useTranscendenceRecipeIngredient,
} from "../../character/star";
import { AParcel } from "../class";
import { useEquipmentFromEnum } from "../equipment/equipment";
import type { CTag, IFilterable } from "../tag";
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
  StudentTagRarityGroup,
} from "./tag";

export class CCharacter
  extends AParcel<ReadonlyDeep<CharacterExcel>>
  implements IFilterable
{
  // IParcel

  type = ParcelType.Character as const;
  get iconPath() {
    return this.costume.TextureDir;
  }

  // IFilterable

  tags: CTag<Object>[];
  hideCount: number = 0;
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
    this.tags.forEach((v) => v.add(this));
  }

  useTags = cache(() =>
    computed(() => {
      const stat = useCharaStore(this.id).now();
      const tags = this.tags.map((v) => v);
      const star = StudentTagRarityGroup.getTag(stat.star);
      if (star != null) tags.push(star);
      return tags;
    }),
  );

  useHidden() {
    return computed(() => this.useTags().value.some((tsg) => tsg.isHide));
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
    return useCharaStore(this.id).now();
  }
  get statGoal() {
    return useCharaStore(this.id).goal();
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
    return computed(() => useCharaStore(this.id).now().lv);
  }
  get star() {
    return computed(() => useCharaStore(this.id).now().star);
  }

  get skillGroups() {
    return asResult(
      computed(() => {
        const gear = 0; // TODO
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

  getSkill(i: 0 | 1 | 2 | 3) {
    return asResult(
      computed(() =>
        this.skillGroups.map((arr) => {
          const c = new CSkill(arr[i]);
          c.level = this.statNow[`skill${i}`];
          return c;
        }),
      ).value,
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

  // equipment

  private data = {
    equipment1: undefined,
    equipment2: undefined,
    equipment3: undefined,
  } as {
    equipment1?: ReturnType<typeof useEquipmentFromEnum>;
    equipment2?: ReturnType<typeof useEquipmentFromEnum>;
    equipment3?: ReturnType<typeof useEquipmentFromEnum>;
  };

  get equipment1() {
    if (this.statNow.gear1 === 0) {
      this.data.equipment1 = undefined;
      return undefined;
    }
    if (
      this.data.equipment1?.unwrapOr(undefined)?.tier !== this.statNow.gear1
    ) {
      this.data.equipment1 = useEquipmentFromEnum(
        this.obj.EquipmentSlot[0],
        this.statNow.gear1,
      );
    }
    return asResult(
      this.data.equipment1.map((equipment) => {
        equipment.level = this.statNow.gear1lv;
        return equipment;
      }),
    );
  }
  get equipment2() {
    if (this.statNow.gear2 === 0) {
      this.data.equipment2 = undefined;
      return undefined;
    }
    if (
      this.data.equipment2?.unwrapOr(undefined)?.tier !== this.statNow.gear2
    ) {
      this.data.equipment2 = useEquipmentFromEnum(
        this.obj.EquipmentSlot[1],
        this.statNow.gear2,
      );
    }
    return asResult(
      this.data.equipment2.map((equipment) => {
        equipment.level = this.statNow.gear2lv;
        return equipment;
      }),
    );
  }
  get equipment3() {
    if (this.statNow.gear3 === 0) {
      this.data.equipment3 = undefined;
      return undefined;
    }
    if (
      this.data.equipment3?.unwrapOr(undefined)?.tier !== this.statNow.gear3
    ) {
      this.data.equipment3 = useEquipmentFromEnum(
        this.obj.EquipmentSlot[2],
        this.statNow.gear3,
      );
    }
    return asResult(
      this.data.equipment3.map((equipment) => {
        equipment.level = this.statNow.gear3lv;
        return equipment;
      }),
    );
  }
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
