import type { ParcelType } from "@/assets/game/types/flatDataExcel";
import { cache } from "@/utils/misc";
import { Err, Ok } from "@/utils/result";
import { useLocalStorage } from "@vueuse/core";
import { z } from "zod";
import { IOData } from "./main";

const parcelSchema = z.number().int();
const parcelObjSchema = z.record(z.string(), parcelSchema);

export const useParcelAmount = cache((type: ParcelType, id: number) => {
  const key = `parcel_${type},${id}`;
  return useLocalStorage(key, 0);
});

function getAllKey() {
  const arr = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith("parcel_")) arr.push(key);
  }
  return arr;
}

export function exportParcelV0() {
  const obj: Partial<Record<string, number>> = {};
  getAllKey().forEach((k) => {
    const i = k.slice(7);
    const v = localStorage.getItem(k);
    const n = parseInt(v ?? "");
    if (n > 0) obj[i] = n;
  });
  return obj;
}

export function checkImportParcelV0(obj: Partial<Record<string, number>>) {
  return parcelObjSchema.parse(obj);
}

export function importParcelV0(obj: Partial<Record<string, number>>) {
  Object.entries(obj).forEach(([i, v]) => {
    const k = "parcel_" + i;
    if (v != null) localStorage.setItem(k, String(v));
  });
}

const schema = z.object({
  amount: z.number().int(),
});

class ParcelData extends IOData<typeof schema> {
  title = "parcel";
  schema = schema;
  defaultObj = { amount: 0 };

  use(type: ParcelType, id: number) {
    const key = `${type},${id}`;
    const store = this.useWithKey(key);
    return store();
  }

  private export1() {
    const map = this.readAll();
    const obj = Object.fromEntries(map);
    const json = JSON.stringify(obj);
    const data = json;
    return Ok(data);
  }
  private check1(data: string) {
    const json = data;
    try {
      const o = JSON.parse(json);
      const obj = z.record(z.string(), this.schema.partial()).parse(o);
      return Ok(obj);
    } catch (e) {
      if (e instanceof Error) return Err(e);
      else return Err(new Error(`${e}`));
    }
  }

  export(version: number) {
    switch (version) {
      case 1:
        return this.export1();
      default:
        return this.invalidVersion(version);
    }
  }
  check(version: number, data: string) {
    switch (version) {
      case 1:
        return this.check1(data);
      default:
        return this.invalidVersion(version);
    }
  }
}

export const dataParcel = new ParcelData();
