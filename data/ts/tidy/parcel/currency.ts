import type { CurrencyExcel } from "../type.js";
import { Excel, cache } from "../../util.js";
import { Localize } from "../localize/main.js";
import type { TidyParcelItem } from ".";

export class Currency {
  static table(): CurrencyExcel[] {
    return Excel.table("CurrencyExcel");
  }

  @cache
  static tidy(): Record<string, TidyParcelItem> {
    return Object.fromEntries(
      this.table().map((o) => [
        o.ID,
        {
          Rarity: o.Rarity,
          Localize: Localize.transEtc(o.LocalizeEtcId).NameJp,
          Icon: o.Icon,
        },
      ]),
    );
  }

  static getTidy(id: number) {
    return this.tidy()[String(id)];
  }
}
