import { Rarity, type ParcelType } from "@/assets/game/types/flatDataExcel";
import { Local } from "@/utils/localize";
import type { IParcel } from "./parcel";

export abstract class AParcel<
  T extends {
    Id: number;
    LocalizeEtcId: number;
    Icon?: string;
    Rarity?: Rarity;
  },
> implements IParcel
{
  abstract type: ParcelType;
  constructor(public obj: T) {}

  get id() {
    return this.obj.Id;
  }
  get desc() {
    return Local.useLocalizeEtc(this.obj.LocalizeEtcId, true);
  }
  get name() {
    return Local.useLocalizeEtc(this.obj.LocalizeEtcId);
  }
  get iconPath() {
    return this.obj.Icon ?? "";
  }
  get rarity() {
    return this.obj.Rarity ?? Rarity.N;
  }
}
