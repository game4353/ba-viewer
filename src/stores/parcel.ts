import type { ParcelType } from "@/assets/game/types/flatDataExcel";
import { Err, Ok } from "@/utils/result";
import { z } from "zod";
import { IOData } from "./main";

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
