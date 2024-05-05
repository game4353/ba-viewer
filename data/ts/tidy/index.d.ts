import type {
  TCharacter,
  TCharacterGear,
  TCharacterWeapon,
} from "./character/character";
import type { TidyParcelItem } from "./parcel";
import type { TidyEventShop } from "./ts/event/index";

type Dict<T> = Record<string, T>;

export namespace Tidy {
  export type ParcelItem = TidyParcelItem;
  export type EventShop = TidyEventShop;
  export type EventShops = Dict<Dict<TidyEventShop[]>>;
  export type Character = Dict<TCharacter>;
  export type CharacterGear = Dict<TCharacterGear>;
  export type CharacterWeapon = Dict<TCharacterWeapon>;
}
