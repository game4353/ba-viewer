/** Input will go through `JSON.stringify` to generate the key for `Map`. */
export function cache<F extends (...args: any[]) => any>(
  fn: F,
): (...args: Parameters<F>) => ReturnType<F> {
  const cached = new Map<string, ReturnType<F>>();

  return function (...args: Parameters<F>) {
    const key = JSON.stringify(args);
    if (cached.has(key)) {
      return cached.get(key)!;
    }

    const result = fn(...args);
    cached.set(key, result);
    return result;
  };
}

export function isDefined<T>(obj: T): obj is NonNullable<T> {
  return obj != null;
}

export function assert<T>(
  obj: T,
  message: string = "Assertion failed.",
): NonNullable<T> {
  if (obj == null) {
    console.error(message);
    throw new Error(message);
  }
  return obj;
}

export function fail(error: any) {
  console.error(error);
  return undefined;
}

export function unreachable(
  message: string = "This code path should be unreachable",
): never {
  console.error(message);
  throw new Error(message);
}

export function* range(from: number, to: number, step: number = 1) {
  let count = 0;
  if (step > 0) for (; from < to; from += step, count++) yield from;
  else if (step < 0) for (; from > to; from += step, count++) yield from;
  return count;
}

/** TODO: temporary function to convert string/number to enum */
export function toEnum<T extends Object, U extends keyof T | number>(
  enumObj: T,
  key: U,
) {
  if (typeof key === "number") return key;
  return enumObj[key as keyof T];
}

export function interpolation(
  xMin: number,
  xMax: number,
  yMin: number,
  yMax: number,
  x: number,
) {
  const fx = xMax - xMin;
  const dx = x - xMin;
  const r = Math.round((dx / fx) * 1e4) / 1e4;
  const fy = yMax - yMin;
  const dy = Math.round(fy * r);
  return dy + yMin;
}
