import { ParcelType, Rarity } from "@/assets/game/types/flatDataExcel";
import { Err, type Result } from "@/utils/result";
import { useCharacter, type CCharacter } from "./character/character";
import { useCurrency, type CCurrency } from "./currency/currency";
import { useEquipment, type CEquipment } from "./equipment/equipment";
import { useFurniture, type CFurniture } from "./furniture/furniture";
import { useItem, type CItem } from "./item/item";

export interface IParcel {
  desc: globalThis.ComputedRef<Result<string, Error> | undefined>;
  iconPath: string;
  id: number;
  name: globalThis.ComputedRef<Result<string, Error> | undefined>;
  rarity: Rarity;
  type: ParcelType;
}

// iconPath "UIs/01_Common/03_NonEquipment/Item_Icon_Secret_Reward"

export function getParcel(
  type: ParcelType.Character,
  id: number,
): globalThis.ComputedRef<Result<CCharacter, Error> | undefined>;
export function getParcel(
  type: ParcelType.Currency,
  id: number,
): globalThis.ComputedRef<Result<CCurrency, Error> | undefined>;
export function getParcel(
  type: ParcelType.Equipment,
  id: number,
): globalThis.ComputedRef<Result<CEquipment, Error> | undefined>;
export function getParcel(
  type: ParcelType.Furniture,
  id: number,
): globalThis.ComputedRef<Result<CFurniture, Error> | undefined>;
export function getParcel(
  type: ParcelType.Item,
  id: number,
): globalThis.ComputedRef<Result<CItem, Error> | undefined>;
export function getParcel(
  type: ParcelType,
  id: number,
): globalThis.ComputedRef<Result<IParcel, Error> | undefined>;
export function getParcel(
  type: ParcelType,
  id: number,
): globalThis.ComputedRef<Result<IParcel, Error> | undefined> {
  switch (type) {
    case ParcelType.Character:
      return useCharacter(id);
    case ParcelType.Currency:
      return useCurrency(id);
    case ParcelType.Equipment:
      return computed(() => useEquipment(id));
    case ParcelType.Furniture:
      return useFurniture(id);
    case ParcelType.Item:
      return useItem(id);
    default:
      return computed(() =>
        Err(new Error(`Parcel type ${type} is not implemented.`)),
      );
  }
}
