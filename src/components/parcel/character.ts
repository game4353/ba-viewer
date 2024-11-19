import {
  ProductionStep,
  type CharacterExcel,
  type CharacterGearExcel,
  type CharacterStatExcel,
  type CostumeExcel,
} from "@/assets/game/types/flatDataExcel";
// @ts-ignore
import { DataList as d1 } from "~game/excel/CharacterExcelTable.json";
// @ts-ignore
import { DataList as d2 } from "~game/excel/CostumeExcelTable.json";
// @ts-ignore
import { DataList as d3 } from "~game/excel/CharacterGearExcelTable.json";
import type { IParcel } from "./parcel";
import { toEnum, unreachable } from "@/utils/misc";
import { Localize } from "@/utils/localize";
import { ObjectValues } from "@/types";
import {
  potentialStatRecipeIngredient,
  potentialStatBonusRate,
} from "../character/potential";
import {
  transcendenceBonusRate,
  transcendenceRecipeIngredient,
} from "../character/star";
import type { CTag, IFilterable } from "./tag";
import { toHiragana, toKatakana } from "wanakana";
import { CharacterTagProductionGroup } from "./character/tag";
import { statDict } from "../character/stat";

const characterArr = d1 as CharacterExcel[];
const costumeArr = d2 as CostumeExcel[];
const gearArr = d3 as CharacterGearExcel[];

export const costumeDict: Partial<Record<string, CostumeExcel>> =
  Object.fromEntries(costumeArr.map((v) => [v.CostumeGroupId, v]));

const gearDict = Object.groupBy(gearArr, (o) => o.CharacterId);

export class CCharacter implements IFilterable, IParcel {
  type = "Character" as const;
  obj: CharacterExcel;
  gear?: CharacterGearExcel[];
  costume: CostumeExcel;
  stat: CharacterStatExcel;
  tags: CTag<Object>[];
  search: string[];
  hideCount: number = 0;
  constructor(obj: CharacterExcel) {
    this.obj = obj;
    this.costume =
      costumeDict[obj.CostumeGroupId] ??
      unreachable(
        `Unable to find the CostumeGroupId from ${JSON.stringify(obj)}`,
      );
    this.gear = gearDict[this.id];
    this.stat =
      statDict[obj.Id] ??
      unreachable(
        `Unable to find the CharacterId ${obj.Id} in CharacterStatExcelTable.`,
      );
    this.search = [toHiragana(this.name), toKatakana(this.name)];
    this.tags = [
      CharacterTagProductionGroup.getTag(
        toEnum(ProductionStep, this.obj.ProductionStep),
      ),
    ];
    this.tags.forEach((v) => v.add(this));
  }
  get desc() {
    return Localize.etc(this.obj.LocalizeEtcId, "desc");
  }
  get iconPath() {
    return this.costume.TextureDir;
  }
  get id() {
    return this.obj.Id;
  }
  get name() {
    return Localize.etc(this.obj.LocalizeEtcId, "name");
  }
  get rarity() {
    return this.obj.Rarity;
  }
  static playable() {
    return ObjectValues(characterDict).filter(
      (v) =>
        v.obj.IsPlayableCharacter &&
        !v.obj.IsNPC &&
        v.obj.ProductionStep === ProductionStep.Release,
    );
  }
  get starMin() {
    return this.obj.DefaultStarGrade;
  }

  starBonus = transcendenceBonusRate;
  starRecipe = transcendenceRecipeIngredient;
  potentialBonus = potentialStatBonusRate;
  potentialRecipe = potentialStatRecipeIngredient;
}

export const characterDict: Partial<Record<string, CCharacter>> =
  Object.fromEntries(characterArr.map((v) => [v.Id, new CCharacter(v)]));
