import { Err, Ok, ErrImpl, OkImpl, Result } from "ts-results-es";

ErrImpl.prototype.unwrapOrElse = function (fn: any) {
  return fn(this.error);
};
OkImpl.prototype.unwrapOrElse = function () {
  return this.value;
};

declare module "ts-results-es" {
  interface ErrImpl<E> {
    /**
     * Returns the contained `Ok` value or a provided default.
     *
     * (This is the `unwrap_or_else` in rust)
     */
    unwrapOrElse<T2>(fn: (err: E) => T2): T2;
  }
  interface OkImpl<T> {
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
