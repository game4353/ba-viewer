import type { ReadonlyDeep } from "type-fest";
import { z } from "zod";

export const bool = () => z.boolean();
export const float = () => z.number();
export const int = () => z.number().int();
export const long = () => z.number().int();

export const Vector2 = z.object({
  x: z.number(),
  y: z.number(),
});
export function formatVec2(vec: z.infer<typeof Vector2>) {
  return `(${vec.x}, ${vec.y})`;
}

export class InfoBuilder<T> {
  arr: string[] = [];
  constructor(private data: T) {}

  add<K extends keyof T>(
    key: K,
    dft: T[K] | null = null,
    toVal = (val: T[K]) => String(val),
    toKey = (key: K) => String(key) + ": ",
  ) {
    const val = this.data[key];
    if (val !== dft) this.arr.push(toKey(key) + toVal(val));
  }
}

export type PRZ<Z extends z.ZodType<any, any, any>> = PropType<
  ReadonlyDeep<z.infer<Z>>
>;
