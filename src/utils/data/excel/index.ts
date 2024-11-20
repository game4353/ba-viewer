import { useFetch } from "../index";
import { Err, Ok } from "~/utils/result";

export function useExcel<T>(name: string) {
  const url = computed(() => `/data/Excel/${name}.json`);
  const { data, error } = useFetch<T>(url);
  const state = computed(() => {
    if (data.value == null && error.value == null) return null;
    if (data.value != null) return Ok(data.value as T);
    return Err(error.value as Error);
  });
  return readonly(state);
}

export function useExcelDb<T>(name: string) {
  const url = computed(() => `/data/DB/ExcelDB/${name}.json`);
  const { data, error } = useFetch<{ Bytes: T }[]>(url);
  const state = computed(() => {
    if (data.value == null && error.value == null) return null;
    if (data.value != null) return Ok(data.value as { Bytes: T }[]);
    return Err(error.value as Error);
  });
  return readonly(state);
}

export function useExcelMapSingle<
  T extends {
    DataList: unknown[];
  },
>(name: string, key: keyof T["DataList"][number]) {
  const state = useExcel<T>(name);
  return computed(() =>
    state.value?.map(
      (table) =>
        new MapResult(
          table.DataList.map((o: T["DataList"][number]) => [o[key], o]),
        ),
    ),
  );
}

export function useExcelMapMany<
  T extends {
    DataList: unknown[];
  },
>(name: string, key: keyof T["DataList"][number]) {
  const state = useExcel<T>(name);
  return computed(() =>
    state.value?.map((table) =>
      MapResult.groupBy(
        table.DataList as Array<T["DataList"][number]>,
        (o) => o[key],
      ),
    ),
  );
}

export function useExcelDbMapSingle<T>(name: string, key: keyof T) {
  const state = useExcelDb<T>(name);
  return computed(() =>
    state.value?.map(
      (arr) => new MapResult(arr.map((o) => [o.Bytes[key], o.Bytes])),
    ),
  );
}

export function useExcelDbMapMany<T>(name: string, key: keyof T) {
  const state = useExcelDb<T>(name);
  return computed(() =>
    state.value?.map((arr) =>
      MapResult.groupBy(
        arr.map((o) => o.Bytes),
        (o) => o[key],
      ),
    ),
  );
}

export class MapResult<T, U> extends Map<T, U> {
  getResult(key: T) {
    if (this.has(key)) return Ok(this.get(key) as U);
    return Err(new Error(`Invalid key '${key}'.`));
  }

  static groupBy<K, T>(
    items: T[],
    keySelector: (item: T, index: number) => K,
  ): MapResult<K, T[]> {
    const result = new MapResult<K, T[]>();
    items.forEach((v, i) => {
      const key = keySelector(v, i);
      if (!result.has(key)) {
        result.set(key, []);
      }
      result.get(key)!.push(v);
    });
    return result;
  }
}
