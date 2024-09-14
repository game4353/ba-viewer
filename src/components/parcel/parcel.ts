import type { ParcelType, Rarity } from "@/assets/game/types/flatDataExcel";
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
  rarity: keyof typeof Rarity;
  type: keyof typeof ParcelType;
}

// iconPath "UIs/01_Common/03_NonEquipment/Item_Icon_Secret_Reward"

export function getParcel(type: "Character", id: number | string): CCharacter;
export function getParcel(
  type: keyof typeof ParcelType,
  id: number | string,
): IParcel | undefined | null;
export function getParcel(
  type: keyof typeof ParcelType,
  id: number | string,
): IParcel | undefined | null {
  switch (type) {
    case "Character":
      return characterDict[id];
    case "Currency":
      return currencyDict[id];
    case "Equipment":
      return equipmentDict[id];
    case "Furniture":
      return furnitureDict[id];
    case "Item":
      return itemDict[id];
    default:
      return null;
  }
}
