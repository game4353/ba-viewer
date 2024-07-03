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
