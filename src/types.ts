type NotArray<T> = T extends any[] ? never : T;
export type Recursive<T> = T | Recursive<T>[];
export function isLastArray<T>(
  arr: Recursive<NotArray<T>[]>,
): arr is NotArray<T>[] {
  return !Array.isArray(arr[0]);
}

type KeyValuePairs<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export function ObjectKeys<T extends object>(object: T): (keyof T)[] {
  return Object.keys(object) as any;
}

export function ObjectEntries<T extends object>(object: T): KeyValuePairs<T> {
  return Object.entries(object) as any;
}
