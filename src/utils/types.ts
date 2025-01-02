import { z } from "zod";

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

/** bitwise enums */
export function zFlag<EnumObj extends Record<string, string | number>>(
  enumObj: EnumObj,
) {
  const enumValues = Object.values(enumObj).filter(
    (v): v is EnumObj[keyof EnumObj] & number => typeof v === "number",
  );

  const allValidBits = enumValues.reduce((acc, val) => acc | val, 0);

  return z
    .number()
    .int()
    .refine(
      (val): val is EnumObj[keyof EnumObj] & number =>
        (val & ~allValidBits) === 0 || val === -1,
      { message: "Invalid flags value" },
    );
}
