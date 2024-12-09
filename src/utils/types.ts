export type NumberKeys<T> = {
  [K in keyof T]: T[K] extends number ? K : never;
}[keyof T];

export type KeyValuePairs<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export function ObjectKeys<T extends object>(object: T): (keyof T)[] {
  return Object.keys(object) as any;
}
export function ObjectValues<T extends object>(
  object: T,
): NonNullable<T[keyof T]>[] {
  return Object.values(object) as any;
}
export function ObjectEntries<T extends object>(object: T): KeyValuePairs<T> {
  return Object.entries(object) as any;
}
