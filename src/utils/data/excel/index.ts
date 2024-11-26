import type { ReadonlyDeep } from "type-fest";
import { Err, Ok } from "~/utils/result";
import { useFetch } from "../index";

export function useExcel<T>(name: string) {
  const url = computed(() => `/data/Excel/${name}.json`);
  const { data, error } = useFetch<T>(url);
  const state = computed(() => {
    if (data.value == null && error.value == null) return null;
    if (data.value != null) return Ok(data.value as T);
    return Err(FetchDataError.from(name, error.value));
  });
  return readonly(state);
}

export function useExcelDb<T>(name: string) {
  const url = computed(() => `/data/DB/ExcelDB/${name}.json`);
  const { data, error } = useFetch<{ Bytes: T }[]>(url);
  const state = computed(() => {
    if (data.value == null && error.value == null) return null;
    if (data.value != null) return Ok(data.value as { Bytes: T }[]);
    return Err(FetchDataError.from(name, error.value));
  });
  return readonly(state);
}

export function useExcelMapSingle<
  T extends {
    DataList: any[];
  },
  K extends keyof T["DataList"][number],
>(name: string, key: K) {
  const state = useExcel<T>(name);
  return computed(() =>
    state.value?.map(
      (
        table,
      ): MapResult<
        T["DataList"][number][K],
        ReadonlyDeep<T["DataList"][number]>
      > =>
        new MapResult(table.DataList.map((o) => [o[key], o]))
          .setTitle(name)
          .setKeyName(key.toString()),
    ),
  );
}

export function useExcelMapMany<
  T extends {
    DataList: any[];
  },
  K extends keyof T["DataList"][number],
>(name: string, key: K) {
  const state = useExcel<T>(name);
  return computed(() =>
    state.value?.map(
      (
        table,
      ): MapResult<
        T["DataList"][number][K],
        ReadonlyDeep<T["DataList"][number]>[]
      > =>
        MapResult.groupBy(table.DataList, (o) => o[key])
          .setTitle(name)
          .setKeyName(key.toString()),
    ),
  );
}

export function useExcelDbMapSingle<T, K extends keyof T>(
  name: string,
  key: K,
) {
  const state = useExcelDb<T>(name);
  return computed(() =>
    state.value?.map(
      (arr): MapResult<T[K], ReadonlyDeep<T>> =>
        new MapResult(arr.map((o) => [o.Bytes[key], o.Bytes as any]))
          .setTitle(name)
          .setKeyName(key.toString()),
    ),
  );
}

export function useExcelDbMapMany<T, K extends keyof T>(name: string, key: K) {
  const state = useExcelDb<T>(name);
  return computed(() =>
    state.value?.map(
      (arr): MapResult<T[K], ReadonlyDeep<T>[]> =>
        MapResult.groupBy(
          arr.map((o) => o.Bytes as any),
          (o) => o[key],
        )
          .setTitle(name)
          .setKeyName(key.toString()),
    ),
  );
}

export class MapResult<T, U> extends Map<T, U> {
  private title?: string;
  private keyName?: string;

  getResult(key: T) {
    if (this.has(key)) return Ok(this.get(key) as U);
    return Err(KeyNotFoundError.from(key, this.keyName, this.title));
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
  setTitle(title: string) {
    this.title = title;
    return this;
  }
  setKeyName(keyName: string) {
    this.keyName = keyName;
    return this;
  }
}

export class FetchDataError extends Error {
  constructor(...args: any) {
    super(...args);
    this.name = "FetchDataError";
  }
  static from(title: string, error: unknown) {
    let cause: Error;
    if (error instanceof Error) cause = error;
    else cause = new Error(`${error}`);
    return new FetchDataError(`Failed to fetch '${title}'.`, { cause });
  }
}

export class KeyNotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "KeyNotFoundError";
  }
  static from(key: any, keyName = "key", mapName = "map") {
    return new KeyNotFoundError(
      `Unable to find ${keyName} '${key}' in ${mapName}.`,
    );
  }
}
