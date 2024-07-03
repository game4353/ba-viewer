import type {
  CharacterExcel,
  CostumeExcel,
} from "@/assets/game/types/flatDataExcel";
// @ts-ignore
import { DataList as d1 } from "~game/excel/CharacterExcelTable.json";
// @ts-ignore
import { DataList as d2 } from "~game/excel/CostumeExcelTable.json";
import type { IParcel } from "./parcel";
import { unreachable } from "@/utils/misc";
import { Localize } from "@/utils/localize";

const characterArr = d1 as CharacterExcel[];
const costumeArr = d2 as CostumeExcel[];

export const costumeDict: Partial<Record<string, CostumeExcel>> =
  Object.fromEntries(costumeArr.map((v) => [v.CostumeGroupId, v]));

export class CCharacter implements IParcel {
  type = "Character" as const;
  obj: CharacterExcel;
  costume: CostumeExcel;
  constructor(obj: CharacterExcel) {
    this.obj = obj;
    this.costume =
      costumeDict[obj.CostumeGroupId] ??
      unreachable(
        `Can not find the CostumeGroupId from ${JSON.stringify(obj)}`,
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
}

export const characterDict: Partial<Record<string, CCharacter>> =
  Object.fromEntries(characterArr.map((v) => [v.Id, new CCharacter(v)]));
