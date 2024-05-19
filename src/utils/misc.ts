export function unreachable(
  message: string = "This code path should be unreachable",
): never {
  throw new Error(message);
}
