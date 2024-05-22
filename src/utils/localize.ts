// @ts-ignore
import type { LocalizeEtcExcel } from "~game/types/flatDataExcelDb";
import { default as a1 } from "~game/db/ExcelDB/LocalizeEtc.json";
import { unreachable } from "./misc";

type DB<T> = {
  Bytes: T;
}[];

const etcDict = Object.fromEntries(
  (a1 as DB<LocalizeEtcExcel>).map((o) => [o.Bytes.Key, o.Bytes]),
);

export function etc(id: number, desc = false, lang: "JP" | "KR" = "JP") {
  const o = etcDict[String(id)];
  if (o == null) {
    console.error(id);
    return "�";
  }
  if (lang == "JP") return desc ? o.DescriptionJp : o.NameJp;
  if (lang == "KR") return desc ? o.DescriptionKr : o.NameKr;
  unreachable();
}
