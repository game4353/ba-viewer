export function compare(a?: number | string, b?: number | string) {
  if (a === b) return 0;
  if (b == null) return -1;
  if (a == null) return 1;
  if (typeof a === "string") return a.localeCompare(String(b));
  return a - Number(b);
}
