import type { KeyValuePairs, NotNullable } from "@/utils/types";

export const err = reactive({
  error: false,
  code: 0,
  display: "",
});

export function setError(code: number, display?: string) {
  err.error = true;
  err.code = code;
  err.display = display ?? "";
  console.error(new Error().stack);
}

function injectAssertUnreachable(errorMessage?: string) {
  console.error("Reach an unreachable code.");
  setError(500, errorMessage);
}
/**`const assertUnreachable = inject(ASSERT_UNREACHABLE)!;` */
export const ASSERT_UNREACHABLE: InjectionKey<typeof injectAssertUnreachable> =
  Symbol("ASSERT_UNREACHABLE");
export function provideAssertUnreachable() {
  provide(ASSERT_UNREACHABLE, injectAssertUnreachable);
}

function injectAssertSome<T>(
  option: T,
  errorCode: number = 500,
  errorMessage?: string,
): NotNullable<T> {
  if (option == null) {
    console.error("Assertion failed.");
    console.error(`Expect a non-null content.`);
    setError(errorCode, errorMessage);
  }
  return option as any;
}
/**`const assertSome = inject(ASSERT_SOME)!;` */
export const ASSERT_SOME: InjectionKey<typeof injectAssertSome> =
  Symbol("ASSERT_SOME");
export function provideAssertSome() {
  provide(ASSERT_SOME, injectAssertSome);
}

function injectAssertSole<T>(
  arr: T[],
  errorCode: number = 500,
  errorMessage?: string,
): T {
  if (arr.length !== 1) {
    console.error("Assertion failed.");
    console.error(`Expect an array of a single element.`);
    console.error("Real:", arr);
    setError(errorCode, errorMessage);
  }
  return arr[0];
}
/**`const assertSole = inject(ASSERT_SOLE)!;` */
export const ASSERT_SOLE: InjectionKey<typeof injectAssertSole> =
  Symbol("ASSERT_SOLE");
export function provideAssertSole() {
  provide(ASSERT_SOLE, injectAssertSole);
}

function injectAssertEqual<T>(
  lhs: T,
  rhs: T,
  errorCode: number = 500,
  errorMessage?: string,
): T {
  if (lhs !== rhs) {
    console.error("Assertion failed.");
    console.error("Expected:", rhs);
    console.error("Real:", lhs);
    setError(errorCode, errorMessage);
  }
  return lhs;
}
/**`const assertEqual = inject(ASSERT_EQUAL)!;` */
export const ASSERT_EQUAL: InjectionKey<typeof injectAssertEqual> =
  Symbol("ASSERT_EQUAL");
export function provideAssertEqual() {
  provide(ASSERT_EQUAL, injectAssertEqual);
}

export function injectAssertUniqueFilter<T>(
  list: T[],
  kvs: KeyValuePairs<T>,
  errorCode: number = 500,
  errorMessage?: string,
): T {
  let res = list;
  for (const [k, v] of kvs) res = res.filter((obj) => obj[k] === v);
  if (res.length !== 1) {
    const conds = kvs.map(([k, v]) => `${String(k)}=${v}`).join(", ");
    console.error("Assertion failed.");
    console.error(`Expect 1 result of the filter (${conds}).`);
    console.error("Real:", res);
    setError(errorCode, errorMessage);
  }
  return res[0];
}
/**`const assertUniqueFilter = inject(ASSERT_UNIQUE_FILTER)!;` */
export const ASSERT_UNIQUE_FILTER: InjectionKey<
  typeof injectAssertUniqueFilter
> = Symbol("ASSERT_UNIQUE_FILTER");
export function provideAssertUniqueFilter() {
  provide(ASSERT_UNIQUE_FILTER, injectAssertUniqueFilter);
}

export function injectAssertSomeFilter<T>(
  list: T[],
  kvs: KeyValuePairs<T>,
  errorCode: number = 500,
  errorMessage?: string,
): T[] {
  let res = list;
  for (const [k, v] of kvs) res = res.filter((obj) => obj[k] === v);
  if (res.length === 0) {
    const conds = kvs.map(([k, v]) => `${String(k)}=${v}`).join(", ");
    console.error("Assertion failed.");
    console.error(`Expect 1+ results of the filter (${conds}).`);
    setError(errorCode, errorMessage);
  }
  return res;
}
/**`const assertSomeFilter = inject(ASSERT_SOME_FILTER)!;` */
export const ASSERT_SOME_FILTER: InjectionKey<typeof injectAssertSomeFilter> =
  Symbol("ASSERT_SOME_FILTER");
export function provideAssertSomeFilter() {
  provide(ASSERT_SOME_FILTER, injectAssertSomeFilter);
}
