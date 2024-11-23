import {
  ArmorType,
  BulletType,
  ParcelType,
  ProductionStep,
  type CharacterExcel,
} from "@/assets/game/types/flatDataExcel";
import {
  useExcelCharacter,
  useExcelCharacterGear,
  useExcelCharacterStat,
  useExcelCostume,
} from "@/utils/data/excel/character";
import { Local } from "@/utils/localize";
import { fail, toEnum } from "@/utils/misc";
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
import { CharacterTagProductionGroup } from "./tag";

export class CCharacter implements IFilterable, IParcel {
  type = ParcelType.Character as const;
  tags: CTag<Object>[];
  search: globalThis.ComputedRef<string[]>;
  hideCount: number = 0;

  constructor(public obj: ReadonlyDeep<CharacterExcel>) {
    this.search = computed(() => {
      const name = this.name.value?.unwrapOrElse(fail);
      if (name == null) return [];
      return [toHiragana(name), toKatakana(name)];
    });
    this.tags = [
      CharacterTagProductionGroup.getTag(
        toEnum(ProductionStep, this.obj.ProductionStep),
      ),
    ];
    this.tags.forEach((v) => v.add(this));
  }

  get costume() {
    const map = useExcelCostume();
    return computed(() =>
      map.value?.unwrapOrElse(fail)?.get(this.obj.CostumeGroupId),
    );
  }
  get stat() {
    const map = useExcelCharacterStat();
    return computed(() => map.value?.unwrapOrElse(fail)?.get(this.id));
  }
  get gear() {
    const map = useExcelCharacterGear();
    return computed(() => map.value?.unwrapOrElse(fail)?.get(this.id));
  }
  get desc() {
    return Local.useLocalizeEtc(this.obj.LocalizeEtcId, true);
  }
  get iconPath() {
    return this.costume.value?.TextureDir ?? "";
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

  starBonus = useTranscendenceBonusRate;
  starRecipe = useTranscendenceRecipeIngredient;
  potentialBonus = usePotentialStatBonusRate;
  potentialRecipe = usePotentialStatRecipeIngredient;
}

export function useCharacter(id: number) {
  const table = useExcelCharacter();
  return computed(() => {
    if (table.value == null) return undefined;
    return table.value
      .andThen((map) => map.getResult(id))
      .map((c) => new CCharacter(c));
  });
}

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
