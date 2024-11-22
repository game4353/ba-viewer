import { cache } from "@/util";
import { default as a0 } from "~game/db/ExcelDB/Localize.json";
import { default as a1 } from "~game/db/ExcelDB/LocalizeEtc.json";
import { default as a2 } from "~game/db/ExcelDB/LocalizeSkill.json";
import type {
  LocalizeEtcExcel,
  LocalizeExcel,
  LocalizeSkillExcel,
} from "~game/types/flatDataExcelDb";
import { useExcelDbMapSingle } from "./data/excel";
import { unreachable } from "./misc";
import { Err, Ok } from "./result";

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

const useLocalizeMap = cache(() =>
  useExcelDbMapSingle<LocalizeExcel, "Key">("Localize", "Key"),
);
function useLocalize(id: number) {
  const table = useLocalizeMap();
  return computed(() =>
    table.value?.andThen((map) => {
      const o = map.get(id);
      if (o == null)
        return Err(new Error(`Unable to find '${id}' in Localize.`));
      switch (settings.lang) {
        case Lang.JP:
          return Ok(o.Jp);
        case Lang.KR:
          return Ok(o.Kr);
      }
    }),
  );
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

const useLocalizeEtcMap = cache(() =>
  useExcelDbMapSingle<LocalizeEtcExcel, "Key">("LocalizeEtc", "Key"),
);
function useLocalizeEtc(id: number, desc = false) {
  const table = useLocalizeEtcMap();
  return computed(() =>
    table.value?.andThen((map) => {
      const o = map.get(id);
      if (o == null)
        return Err(new Error(`Unable to find '${id}' in LocalizeEtc.`));
      switch (settings.lang) {
        case Lang.JP:
          return desc ? Ok(o.DescriptionJp) : Ok(o.NameJp);
        case Lang.KR:
          return desc ? Ok(o.DescriptionKr) : Ok(o.NameKr);
      }
    }),
  );
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

const useLocalizeSkillMap = cache(() =>
  useExcelDbMapSingle<LocalizeSkillExcel, "Key">("LocalizeSkill", "Key"),
);
function useLocalizeSkill(id: number, desc = false) {
  const table = useLocalizeSkillMap();
  return computed(() =>
    table.value?.andThen((map) => {
      const o = map.get(id);
      if (o == null)
        return Err(new Error(`Unable to find '${id}' in LocalizeSkill.`));
      switch (settings.lang) {
        case Lang.JP:
          return desc ? Ok(o.DescriptionJp) : Ok(o.NameJp);
        case Lang.KR:
          return desc ? Ok(o.DescriptionKr) : Ok(o.NameKr);
      }
    }),
  );
}

function custom(key?: string): string {
  if (key?.slice(-2, -1) === "_")
    return custom(key.slice(0, -2)) + key.slice(-1);
  switch (key) {
    case "CVGroup_Formation_Select":
      return "編成選択";
    case "CVGroup_Tactic_Defeat":
      return "戦略撤退";
    case "CVGroup_Tactic_Victory":
      return "戦略勝利";
    case "CVGroup_Growup":
      return "生徒強化";
    case "CVGroup_Formation_In":
      return "編成";
    case "CVGroup_Tactic_In":
      return "戦略入場";
    case "CVGroup_Battle_In":
      return "戦術入場";
    case "CVGroup_Battle_Victory":
      return "戦術勝利";
    case "CVGroup_Relationship_Up":
      return "絆ランク増加";
    case "CVGroup_Battle_Defense":
      return "回避";
    case "CVGroup_Battle_Covered":
      return "遮蔽";
    case "CVGroup_Battle_TacticalAction":
      return "戦術移動";
    case "CVGroup_Battle_Move":
      return "セクション移動";
    case "CVGroup_ExSkill":
      return "EXスキル";
    case "CVGroup_ExSkill_Level":
      return "EXスキル（フィールド）";
    case "CVGroup_CommonSkill":
      return "ノーマルスキル";
    case "CVGroup_Battle_Retire":
      return "戦術撤退";
    case "CVGroup_Battle_Buffed":
      return "バフ";
    case "CVGroup_Battle_Recovery":
      return "回復";
    case "CVGroup_Battle_BuffSelf":
      return "自己バフ";
    case "CVGroup_Battle_Shout":
      return "攻撃";
    case "CVGroup_Battle_Damage":
      return "負傷";
    default:
      return key ?? "";
  }
}
export const Local = {
  etc,
  skill,
  localize,
  Lang,
  setLang,
  useLocalizeEtc,
  useLocalizeSkill,
  useLocalize,
  custom,
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
