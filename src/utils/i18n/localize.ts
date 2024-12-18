import type {
  LocalizeCharProfileExcel,
  LocalizeCharProfileExcelTable,
} from "@/assets/game/types/flatDataExcel";
import { cache, noDefault } from "@/utils/misc";
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
export function useLocalize(id: number) {
  return asResult(
    useLocalizeMap()
      .value.andThen((map) => map.getResult(id))
      .map((o) => {
        switch (settings.lang) {
          case Lang.JP:
            return o.Jp;
          case Lang.KR:
            return o.Kr;
          default:
            return noDefault(settings.lang);
        }
      }),
  );
}

const useLocalizeEtcMap = cache(() =>
  useExcelDbMapSingle<LocalizeEtcExcel, "Key">("LocalizeEtc", "Key"),
);
export function useLocalizeEtc(id: number, desc = false) {
  return asResult(
    useLocalizeEtcMap()
      .value.andThen((map) => map.getResult(id))
      .map((o) => {
        switch (settings.lang) {
          case Lang.JP:
            return desc ? o.DescriptionJp : o.NameJp;
          case Lang.KR:
            return desc ? o.DescriptionKr : o.NameKr;
          default:
            return noDefault(settings.lang);
        }
      }),
  );
}

const useLocalizeSkillMap = cache(() =>
  useExcelDbMapSingle<LocalizeSkillExcel, "Key">("LocalizeSkill", "Key"),
);
export function useLocalizeSkill(id: number, desc = false) {
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
export function useLocalizeCharProfile(id: number, key: keyof A) {
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
