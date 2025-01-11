import type { LogicEffectType } from "@/components/skill/logicEffect/schema";
import type { SkillLogicType } from "@/components/skill/skillLogic/schema";
import { TimeoutErr } from "@/utils/result/error";
import { asResult, Err } from "@/utils/result/result";
import { MapResult } from ".";
import { useFetchResult } from "../index";

const base = "https://table-2ef730.gitlab.io/";

const version = computed(() => {
  return useFetchResult<number[]>(base + "version.json").value;
});

export function useRemoteExcel<T>(name: string) {
  const suffix1 = `/raw/data/table/excel/${name}ExcelTable.json`;
  const suffix2 = `/DB/ExcelDB/${name}.json`;
  return computed(() =>
    asResult(
      version.value.andThen((vers) => {
        const url1 = base + vers[0] + suffix1;
        const url2 = base + vers[0] + suffix2;
        return useFetchResult<{ DataList: T[] }>(url1)
          .value.map((v) => v.DataList)
          .orElse2((e) =>
            asResult(
              e instanceof TimeoutErr
                ? Err(e)
                : useFetchResult<{ Bytes: T }[]>(url2).value.map((arr) =>
                    arr.map((o) => o.Bytes),
                  ),
            ),
          );
      }),
    ),
  );
}

export function useRemoteLevelSkillData(name: string) {
  const suffix = `/DB/LevelSkillDataDBSchema/${name}.json`;
  return readonly(
    computed(() =>
      asResult(
        version.value.andThen((vers) => {
          const url = base + vers[0] + suffix;
          return useFetchResult<{ Bytes: SkillLogicType }[]>(url).value.map(
            (arr) => arr.map((o) => o.Bytes),
          );
        }),
      ),
    ),
  );
}
export function useRemoteLogicEffectData() {
  const suffix = `/DB/LogicEffectDataDBSchema/LogicEffectDataDBSchema.json`;
  return readonly(
    computed(() =>
      asResult(
        version.value.andThen((vers) => {
          const url = base + vers[0] + suffix;
          return useFetchResult<{ Bytes: LogicEffectType }[]>(url).value.map(
            (arr) => arr.map((o) => o.Bytes),
          );
        }),
      ),
    ),
  );
}

export function useRemoteExcelMapSingle<T, K extends keyof T>(
  name: string,
  key: K,
) {
  const state = useRemoteExcel<T>(name);
  return computed(() =>
    state.value?.map(
      (table): MapResult<T[K], T> =>
        new MapResult(table.map((o) => [o[key], o]))
          .setTitle(name)
          .setKeyName(key.toString()),
    ),
  );
}

export function useRemoteExcelMapMany<T, K extends keyof T>(
  name: string,
  key: K,
) {
  const state = useRemoteExcel<T>(name);
  return computed(() =>
    state.value?.map(
      (table): MapResult<T[K], T[]> =>
        MapResult.groupBy(table, (o) => o[key])
          .setTitle(name)
          .setKeyName(key.toString()),
    ),
  );
}
