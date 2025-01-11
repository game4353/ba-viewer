import { MapResult } from "@/utils/data/excel";
import { useRemoteLogicEffectData } from "@/utils/data/excel/remote";
import { cache } from "@/utils/misc";
import type { ReadonlyDeep } from "type-fest";
import type { LogicEffectType } from "./schema";

const useLogicEffectMap = cache(() => {
  const state = useRemoteLogicEffectData();
  return readonly(
    computed(() =>
      state.value?.map(
        (arr): MapResult<string, ReadonlyDeep<LogicEffectType>> =>
          new MapResult(arr.map((o) => [`${o.GroupId}-${o.Level}`, o]))
            .setTitle("LogicEffectDataDBSchema")
            .setKeyName("GroupId-Level"),
      ),
    ),
  );
});

export function useLogicEffect(id: string, level = 1) {
  return useLogicEffectMap().value.andThen((map) =>
    map.getResult(`${id}-${level}`),
  );
}
