import path from "node:path";
import fs, { readFileSync, writeFileSync } from "node:fs";
import { ExcelDbFolder, ExcelFolder, JsonFolder } from "./path.js";

export class Excel {
  @cache
  static table(excelName: `${string}Excel`) {
    const fn = excelName.toLowerCase() + "table.json";
    const p = path.resolve(ExcelFolder, fn);
    const s = fs.readFileSync(p, "utf-8");
    return JSON.parse(s);
  }

  @cache
  static db(excelDBName: string) {
    const p = path.resolve(ExcelDbFolder, `${excelDBName}.json`);
    const s = fs.readFileSync(p, "utf-8");
    return JSON.parse(s);
  }
}

export function cache(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  const CACHED: any = {};
  const original = descriptor.value;

  descriptor.value = function (...args: any) {
    const key = JSON.stringify(args);
    if (key in CACHED) return CACHED[key];
    const result = original.call(this, ...args);
    CACHED[key] = result;
    return result;
  };
}

export function fatal(message: string): never {
  throw new Error(message);
}

export function writeJson(obj: any, fileName: string, indent: boolean) {
  const s = JSON.stringify(obj, undefined, indent ? 2 : undefined);
  writeFileSync(path.resolve(JsonFolder, `${fileName}.json`), s);
}

export function readJson(path: string) {
  const s = readFileSync(path, { encoding: "utf-8" });
  return JSON.parse(s);
}
