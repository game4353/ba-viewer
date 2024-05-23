export function unreachable(
  message: string = "This code path should be unreachable",
): never {
  console.error(message);
  throw new Error(message);
}
