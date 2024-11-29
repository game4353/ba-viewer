import {
  ArmorType,
  BulletType,
  ParcelType,
  ProductionStep,
  type CharacterExcel,
} from "@/assets/game/types/flatDataExcel";
import { useCharaStore } from "@/stores/character";
import {
  useExcelCharacter,
  useExcelCharacterGear,
  useExcelCharacterStat,
  useExcelCostume,
} from "@/utils/data/excel/character";
import { Local } from "@/utils/localize";
import { cache, isDefined } from "@/utils/misc";
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
import type { IParcel } from "../parcel";
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

export class CCharacter implements IFilterable, IParcel {
  type = ParcelType.Character as const;
  tags: CTag<Object>[];
  hideCount: number = 0;

  constructor(public obj: ReadonlyDeep<CharacterExcel>) {
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

  get costume() {
    return computed(() =>
      useExcelCostume().value.andThen((map) =>
        map.getResult(this.obj.CostumeGroupId),
      ),
    );
  }
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
  get desc() {
    return Local.useLocalizeEtc(this.obj.LocalizeEtcId, true);
  }
  get iconPath() {
    // TODO: not unwrap
    return this.costume.value.unwrapOr(undefined)?.TextureDir ?? "";
  }
  get id() {
    return this.obj.Id;
  }
  get name() {
    return Local.useLocalizeEtc(this.obj.LocalizeEtcId);
  }
  get rarity() {
    return this.obj.Rarity;
  }
  get playable() {
    return (
      this.obj.IsPlayableCharacter &&
      !this.obj.IsNPC &&
      this.obj.ProductionStep === ProductionStep.Release
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

  starBonus = useTranscendenceBonusRate;
  starRecipe = useTranscendenceRecipeIngredient;
  potentialBonus = usePotentialStatBonusRate;
  potentialRecipe = usePotentialStatRecipeIngredient;
}

export const useCharacter = cache((id: number) => {
  const table = useExcelCharacter();
  return computed(() =>
    table.value
      .andThen((map) => map.getResult(id))
      .map((c) => new CCharacter(c)),
  );
});

function isPlayable(excel: ReadonlyDeep<CharacterExcel>) {
  return (
    excel.IsPlayableCharacter &&
    !excel.IsNPC &&
    excel.ProductionStep === ProductionStep.Release
  );
}

export function useCharacterIds() {
  const table = useExcelCharacter();
  return computed(() => table.value?.map((map) => Array.from(map.keys())));
}

export function usePlayableIds() {
  const table = useExcelCharacter();
  return computed(() =>
    table.value?.map((map) =>
      Array.from(map.keys()).filter((k) => isPlayable(map.get(k)!)),
    ),
  );
}
