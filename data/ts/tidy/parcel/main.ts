import { ParcelType } from "../type.js";
import { fatal } from "../../util.js";
import { Currency } from "./currency.js";
import { Equipment } from "./equipment.js";
import { Furniture } from "./furniture.js";
import { Item } from "./item.js";

export class Parcel {
  static convert(t: keyof typeof ParcelType, id: number) {
    switch (ParcelType[t]) {
      case ParcelType.Item:
        return Item.getTidy(id);
      case ParcelType.Equipment:
        return Equipment.getTidy(id);
      case ParcelType.Currency:
        return Currency.getTidy(id);
      case ParcelType.Furniture:
        return Furniture.getTidy(id);
      default:
        fatal(`Unknown parcel type: ${t}`);
    }
  }
}
