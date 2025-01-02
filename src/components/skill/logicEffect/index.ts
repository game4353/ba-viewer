import type { LogicEffectType } from "@/components/skill/logicEffect/schema";
import { useFetch } from "@/utils/data";
import { MapResult } from "@/utils/data/excel";
import { cache } from "@/utils/misc";
import { FetchDataErr, TimeoutErr } from "@/utils/result/error";
import { Err, filterSingle, Ok } from "@/utils/result/result";
import type { PartialDeep, ReadonlyDeep } from "type-fest";

function useLogicEffectData() {
  const name = "LogicEffectDataDBSchema";
  const url = `/data/DB/${name}/${name}.json`;
  const { data, error } = useFetch<{ Bytes: LogicEffectType }[]>(url);
  const state = computed(() => {
    if (data.value == null && error.value == null)
      return Err(TimeoutErr.from(name, 0));
    if (data.value != null)
      return Ok(data.value as { Bytes: LogicEffectType }[]);
    return Err(FetchDataErr.from(name, error.value));
  });
  return readonly(state);
}

const useLogicEffectMap = cache(() => {
  const state = useLogicEffectData();
  return computed(() =>
    state.value?.map(
      (arr): MapResult<string, ReadonlyDeep<LogicEffectType>[]> =>
        MapResult.groupBy(
          arr.map((o) => o.Bytes as any),
          (o) => o.GroupId,
        )
          .setTitle("LogicEffectDataDBSchema")
          .setKeyName("GroupId"),
    ),
  );
});

export function getLogicEffect(
  id: string,
  level = 1,
): PartialDeep<LogicEffectType> | undefined {
  console.log("ID:", id);
  return useLogicEffectMap()
    .value.andThen((map) => map.getResult(id))
    .andThen((arr) => filterSingle(arr, (o) => o.Level === level))
    .map((o) => {
      const obj = structuredClone(toRaw(o)) as PartialDeep<LogicEffectType>;
      delete obj.GroupId;
      delete obj.TemplateId;
      delete obj.Level;
      if (obj.ApplyRate === 10000) delete obj.ApplyRate;
      delete obj.$type;
      delete obj.CommonVisualId;
      delete obj.CommonVisualHash;
      return obj;
    })
    .unwrapOr(undefined);
}
