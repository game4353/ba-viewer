import { Err, ErrImpl, Ok, OkImpl, Result } from "ts-results-es";

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

declare module "ts-results-es" {
  interface ErrImpl<E> {
    orElse2<T2, E2>(fn: (err: E) => Result<T2, E2>): Result<T2, E2>;
    /**
     * Returns the contained `Ok` value or a provided default.
     *
     * (This is the `unwrap_or_else` in rust)
     */
    unwrapOrElse<T2>(fn: (err: E) => T2): T2;
  }
  interface OkImpl<T> {
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

export function undefinedIsError<T>(anything: T) {
  if (anything === undefined) return Err(new Error("Something is undefined."));
  return Ok(anything);
}
