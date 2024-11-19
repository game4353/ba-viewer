import { ParcelType, Rarity } from "@/assets/game/types/flatDataExcel";
import { characterDict, type CCharacter } from "./character";
import { equipmentDict } from "./equipment";
import { furnitureDict } from "./furniture/furniture";
import { currencyDict } from "./currency";
import { itemDict } from "./item";

export interface IParcel {
  desc: string;
  iconPath: string;
  id: number;
  name: string;
  rarity: Rarity;
  type: keyof typeof ParcelType;
}

// iconPath "UIs/01_Common/03_NonEquipment/Item_Icon_Secret_Reward"

export function getParcel(
  type: ParcelType.Character,
  id: number | string,
): CCharacter;
export function getParcel(
  type: ParcelType,
  id: number | string,
): IParcel | undefined | null;
export function getParcel(
  type: ParcelType,
  id: number | string,
): IParcel | undefined | null {
  switch (type) {
    case ParcelType.Character:
      return characterDict[id];
    case ParcelType.Currency:
      return currencyDict[id];
    case ParcelType.Equipment:
      return equipmentDict[id];
    case ParcelType.Furniture:
      return furnitureDict[id];
    case ParcelType.Item:
      return itemDict[id];
    default:
      return null;
  }
}
