import type {
  CharacterExcel,
  CharacterStatExcel,
  CostumeExcel,
} from "@/assets/game/types/flatDataExcel";
// @ts-ignore
import { DataList as d1 } from "~game/excel/CharacterExcelTable.json";
// @ts-ignore
import { DataList as d2 } from "~game/excel/CostumeExcelTable.json";
// @ts-ignore
import { DataList as d4 } from "~game/excel/CharacterStatExcelTable.json";
import type { IParcel } from "./parcel";
import { unreachable } from "@/utils/misc";
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

const characterArr = d1 as CharacterExcel[];
const costumeArr = d2 as CostumeExcel[];
const statArr = d4 as CharacterStatExcel[];

export const costumeDict: Partial<Record<string, CostumeExcel>> =
  Object.fromEntries(costumeArr.map((v) => [v.CostumeGroupId, v]));
const statDict: Partial<Record<string, CharacterStatExcel>> =
  Object.fromEntries(statArr.map((v) => [v.CharacterId, v]));

export class CCharacter implements IParcel {
  type = "Character" as const;
  obj: CharacterExcel;
  costume: CostumeExcel;
  stat: CharacterStatExcel;
  constructor(obj: CharacterExcel) {
    this.obj = obj;
    this.costume =
      costumeDict[obj.CostumeGroupId] ??
      unreachable(
        `Unable to find the CostumeGroupId from ${JSON.stringify(obj)}`,
      );
    this.stat =
      statDict[obj.Id] ??
      unreachable(
        `Unable to find the CharacterId ${obj.Id} in CharacterStatExcelTable.`,
      );
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
        v.obj.ProductionStep == "Release",
    );
  }

  starBonus = transcendenceBonusRate;
  starRecipe = transcendenceRecipeIngredient;
  potentialBonus = potentialStatBonusRate;
  potentialRecipe = potentialStatRecipeIngredient;
}

export const characterDict: Partial<Record<string, CCharacter>> =
  Object.fromEntries(characterArr.map((v) => [v.Id, new CCharacter(v)]));
