type NotArray<T> = T extends any[] ? never : T;
export type Recursive<T> = T | Recursive<T>[];
export function isLastArray<T>(
  arr: Recursive<NotArray<T>[]>,
): arr is NotArray<T>[] {
  return !Array.isArray(arr[0]);
}
