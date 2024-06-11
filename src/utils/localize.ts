// @ts-ignore
import type {
  LocalizeEtcExcel,
  LocalizeExcel,
} from "~game/types/flatDataExcelDb";
import { default as a0 } from "~game/db/ExcelDB/Localize.json";
import { default as a1 } from "~game/db/ExcelDB/LocalizeEtc.json";
import { unreachable } from "./misc";

type DB<T> = {
  Bytes: T;
}[];

const localizeDict = Object.fromEntries(
  (a0 as DB<LocalizeExcel>).map((o) => [o.Bytes.Key, o.Bytes]),
);

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

export class Localize {
  static lang: "JP" | "KR" = "JP";

  static setLang(lang: "JP" | "KR") {
    Localize.lang = lang;
  }

  static localize(id: number) {
    const o = localizeDict[String(id)];
    if (o == null) {
      console.error(id);
      return "�";
    }
    if (Localize.lang === "JP") return o.Jp;
    if (Localize.lang === "KR") return o.Kr;
    unreachable();
  }
  static etc(id: number, type: "name" | "desc") {
    const o = etcDict[String(id)];
    if (o == null) {
      console.error(id);
      return "�";
    }
    if (Localize.lang === "JP") {
      if (type === "name") return o.NameJp;
      if (type === "desc") return o.DescriptionJp;
    }
    if (Localize.lang === "KR") {
      if (type === "name") return o.NameKr;
      if (type === "desc") return o.DescriptionKr;
    }
    unreachable();
  }
}
