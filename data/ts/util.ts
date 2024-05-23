import path from "path";
import { readFileSync, writeFileSync } from "fs";
import { ExcelDbFolder, ExcelFolder } from "./path.js";

export class Excel {
  @cache
  static table(excelName: `${string}Excel`) {
    const fn = excelName.toLowerCase() + "table.json";
    const p = path.resolve(ExcelFolder, fn);
    const s = readFileSync(p, "utf-8");
    return JSON.parse(s);
  }

  @cache
  static db(excelDBName: string) {
    const p = path.resolve(ExcelDbFolder, `${excelDBName}.json`);
    const s = readFileSync(p, "utf-8");
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

export function writeJson(filePath: string, data: any, indent: boolean) {
  const jsonData = JSON.stringify(data, null, indent ? 2 : undefined);
  writeFileSync(filePath, jsonData, "utf-8");
}

export function readJson(filePath: string) {
  const data = readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}
