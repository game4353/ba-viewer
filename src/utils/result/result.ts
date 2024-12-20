import { Err, ErrImpl, Ok, OkImpl, Result } from "ts-results-es";
import { ManyResultErr, NoResultErr } from "./error";

type OkContent<T> = T extends OkImpl<infer U> ? U : never;
type ErrContent<T> = T extends ErrImpl<infer U> ? U : never;

ErrImpl.prototype.unwrapOrElse = function (fn: any) {
  return fn(this.error);
};
OkImpl.prototype.unwrapOrElse = function () {
  return this.value;
};
ErrImpl.prototype.orElse2 = function (fn: any) {
  return fn(this.error);
};
OkImpl.prototype.orElse2 = function () {
  return this;
};
ErrImpl.prototype.andThen2 = function () {
  return this;
};
OkImpl.prototype.andThen2 = function (fn: any) {
  return fn(this.value);
};

declare module "ts-results-es" {
  interface ErrImpl<E> {
    andThen2(fn: unknown): ErrImpl<E>;
    orElse2<T2, E2>(fn: (err: E) => Result<T2, E2>): Result<T2, E2>;
    /**
     * Returns the contained `Ok` value or a provided default.
     *
     * (This is the `unwrap_or_else` in rust)
     */
    unwrapOrElse<T2>(fn: (err: E) => T2): T2;
  }
  interface OkImpl<T> {
    andThen2<R extends Result<OkContent<R>, ErrContent<R>>>(
      fn: (val: T) => R,
    ): R;
    orElse2(fn: unknown): OkImpl<T>;
    /**
     * Returns the contained `Ok` value or a provided default.
     *
     * (This is the `unwrap_or_else` in rust)
     */
    unwrapOrElse(fn: unknown): T;
  }
}

export { Err, Ok, Result };
export type ComputedResult<T, E> = globalThis.ComputedRef<Result<T, E>>;
export type PropMaybeResult<T> = globalThis.PropType<T | Result<T, Error>>;

export function undefinedIsError<T>(anything: T) {
  if (anything === undefined) return Err(new Error("Something is undefined."));
  return Ok(anything);
}

export function findFirst<T>(
  arr: T[] | readonly T[],
  predicate: (value: T, index: number, array: readonly T[]) => boolean,
): Result<T, NoResultErr | ManyResultErr> {
  const res = arr.filter(predicate);
  if (res.length === 0)
    return Err(new NoResultErr(`Found 0 result of the predicate ${predicate}`));
  return Ok(res[0]);
}

export function filterSingle<T>(
  arr: T[] | readonly T[],
  predicate: (value: T, index: number, array: readonly T[]) => boolean,
): Result<T, NoResultErr | ManyResultErr> {
  const res = arr.filter(predicate);
  if (res.length === 0)
    return Err(new NoResultErr(`Found 0 result of the predicate ${predicate}`));
  if (res.length > 1)
    return Err(
      new ManyResultErr(
        `Found ${res.length} results of the predicate ${predicate}`,
      ),
    );
  return Ok(res[0]);
}

/** @param message The error message shown if the Ok value is null or undefined. */
export const assertSome = (message: string) =>
  function <T>(value: T): Result<NonNullable<T>, NoResultErr> {
    if (value == null) return Err(new NoResultErr(message));
    return Ok(value);
  };

/** This does nothing in JS. This just helps TS to know a Result is a Result. */
export function asResult<T extends Result<OkContent<T>, ErrContent<T>>>(
  res: T,
): Result<OkContent<T>, ErrContent<T>> {
  return res;
}

export function err2(error: unknown) {
  if (error instanceof Error) return Err(error);
  return Err(new Error(`${error}`));
}
