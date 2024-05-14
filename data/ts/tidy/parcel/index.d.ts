import { Rarity } from "../type.js";

export type TidyParcelItem = {
  Rarity: keyof typeof Rarity;
  Localize: string;
  Icon: string;
};
