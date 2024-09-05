// @ts-ignore
import type {
  LocalizeEtcExcel,
  LocalizeExcel,
  LocalizeSkillExcel,
} from "~game/types/flatDataExcelDb";
import { default as a0 } from "~game/db/ExcelDB/Localize.json";
import { default as a1 } from "~game/db/ExcelDB/LocalizeEtc.json";
import { default as a2 } from "~game/db/ExcelDB/LocalizeSkill.json";
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

const skillDict = Object.fromEntries(
  (a2 as DB<LocalizeSkillExcel>).map((o) => [o.Bytes.Key, o.Bytes]),
);

enum Lang {
  JP,
  KR,
}

const settings = {
  lang: Lang.JP,
};

export function setLang(lang: Lang) {
  settings.lang = lang;
}

function withDesc(
  dict: Record<string, LocalizeEtcExcel | LocalizeSkillExcel>,
  id: number,
  desc = false,
) {
  const o = dict[String(id)];
  if (o == null) {
    console.error(id);
    return "�";
  }
  switch (settings.lang) {
    case Lang.JP:
      return desc ? o.DescriptionJp : o.NameJp;
    case Lang.KR:
      return desc ? o.DescriptionKr : o.NameKr;
  }
}

export function etc(id: number, desc = false) {
  return withDesc(etcDict, id, desc);
}

export function skill(id: number, desc = false) {
  return withDesc(skillDict, id, desc);
}

export function localize(id: number) {
  const o = localizeDict[String(id)];
  if (o == null) {
    console.error(id);
    return "�";
  }
  switch (settings.lang) {
    case Lang.JP:
      return o.Jp;
    case Lang.KR:
      return o.Kr;
  }
}

export const Local = {
  etc,
  skill,
  localize,
};

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
