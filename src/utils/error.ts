export const err = reactive({
  error: false,
  message: "",
});

export function setError(message: string) {
  err.error = true;
  err.message = message;
  console.error(message, new Error().stack);
}

/**
 * Usage:
 *
 * `const setError = inject(INJECT_ERR)!;`
 *
 * ```setError(`${something} is missing.`)```
 *
 */
export const INJECT_ERR: InjectionKey<typeof setError> = Symbol("INJECT_ERR");

type KeyValuePairs<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export function filterUniqueOrError<T>(
  listName: string,
  list: T[],
  kvs: KeyValuePairs<T>,
): T {
  let res = list;
  for (const [k, v] of kvs) res = res.filter((obj) => obj[k] === v);
  if (res.length === 1) return res[0];

  const conds = kvs.map(([k, v]) => `${String(k)}=${v}`).join(", ");
  const message = `There are ${res.length} results of ${listName} (${conds}).`;
  setError(message);
  return null as any;
}

/**
 * Usage:
 *
 * `const filterUniqueOrError = inject(INJECT_ERR_FILTER_UNIQUE)!;`
 *
 * `const item = filterUniqueOrError("List", list, [[key1, val1], [key2, val2]]);`
 *
 */
export const INJECT_ERR_FILTER_UNIQUE: InjectionKey<
  typeof filterUniqueOrError
> = Symbol("INJECT_ERR_FILTER_UNIQUE");

export function equalOrError<T>(real: T, expect: T) {
  if (real !== expect)
    setError(`Assertion failed.\nExpected: ${expect}. Real: ${real}.`);
}

/**
 * Usage:
 *
 * `const equalOrError = inject(INJECT_ERR_EQUAL)!;`
 *
 * `equalOrError(one, 1);`
 *
 */
export const INJECT_ERR_EQUAL: InjectionKey<typeof equalOrError> =
  Symbol("INJECT_ERR_EQUAL");
