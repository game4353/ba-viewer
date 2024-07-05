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
