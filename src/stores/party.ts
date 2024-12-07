import { Err, Ok } from "@/utils/result";
import { z } from "zod";
import { IOData } from "./main";

const schema = z.object({
  name: z.string(),
  student: z.number().array(),
  enemy: z.number().array(),
  parties: z.number().array().array(),
});

class PartyData extends IOData<typeof schema> {
  title = "party";
  schema = schema;
  defaultObj = {
    name: "new party",
    student: [],
    enemy: [],
    parties: [],
  };

  count = ref(0);

  useAmount() {
    if (this.count.value === 0) {
      this.count.value = this.getAllFullKey().length;
    }
    return this.count;
  }

  use(id: number) {
    this.count.value = Math.max(this.count.value, id + 1);
    const key = `${id}`;
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

export const dataParty = new PartyData();
