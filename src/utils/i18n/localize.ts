import type {
  LocalizeCharProfileExcel,
  LocalizeCharProfileExcelTable,
} from "@/assets/game/types/flatDataExcel";
import { cache } from "@/utils/misc";
import { Err, Ok, asResult } from "@/utils/result/result";
import type {
  LocalizeEtcExcel,
  LocalizeExcel,
  LocalizeSkillExcel,
} from "~game/types/flatDataExcelDb";
import { useExcelDbMapSingle, useExcelMapSingle } from "../data/excel";

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

const useLocalizeSkillMap = cache(() =>
  useExcelDbMapSingle<LocalizeSkillExcel, "Key">("LocalizeSkill", "Key"),
);
function useLocalizeSkill(id: number, desc = false) {
  return asResult(
    useLocalizeSkillMap()
      .value.andThen((map) => map.getResult(id))
      .map((o) => {
        switch (settings.lang) {
          case Lang.JP:
            return desc ? o.DescriptionJp : o.NameJp;
          case Lang.KR:
            return desc ? o.DescriptionKr : o.NameKr;
        }
      }),
  );
}

export const useLocalizeCharProfileMap = cache(() =>
  useExcelMapSingle<LocalizeCharProfileExcelTable, "CharacterId">(
    "LocalizeCharProfileExcelTable",
    "CharacterId",
  ),
);
type A = {
  [K in keyof LocalizeCharProfileExcel as K extends `${infer Key}Jp`
    ? Key
    : K extends `${infer Key2}Kr`
      ? Key2
      : never]: LocalizeCharProfileExcel[K];
};
function useLocalizeCharProfile(id: number, key: keyof A) {
  const lang =
    settings.lang === Lang.JP
      ? "Jp"
      : settings.lang === Lang.KR
        ? "Kr"
        : undefined;
  if (lang == null) return Err(new Error());

  return useLocalizeCharProfileMap()
    .value.andThen((map) => map.getResult(id))
    .andThen((o) => {
      const k = `${key}${lang}`;
      if (k in o) return Ok(o[`${key}${lang}`]);
      return Err(new Error(`Invalid key '${k}' in LocalizeCharProfile.`));
    });
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
  Lang,
  setLang,
  useLocalizeEtc,
  useLocalizeSkill,
  useLocalize,
  custom,
  useLocalizeCharProfile,
};
