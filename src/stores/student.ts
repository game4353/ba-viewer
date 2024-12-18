import { Err, Ok } from "@/utils/result/result";
import { z } from "zod";
import { IOData } from "./main";

const schema = z.object({
  lv: z.number().int(),
  star: z.number().int(),
  weapon: z.number().int(),
  bond: z.number().int(),
  skill0: z.number().int(),
  skill1: z.number().int(),
  skill2: z.number().int(),
  skill3: z.number().int(),
  gear1: z.number().int(),
  gear1lv: z.number().int(),
  gear2: z.number().int(),
  gear2lv: z.number().int(),
  gear3: z.number().int(),
  gear3lv: z.number().int(),
  gear0: z.number().int(),
  break1: z.number().int(),
  break2: z.number().int(),
  break3: z.number().int(),
});

export type CharaProp = keyof z.infer<typeof schema>;

export const defaultMin: Record<CharaProp, number> = {
  lv: 0,
  star: 1,
  weapon: 0,
  bond: 1,
  skill0: 1,
  skill1: 1,
  skill2: 1,
  skill3: 1,
  gear1: 0,
  gear1lv: 1,
  gear2: 0,
  gear2lv: 1,
  gear3: 0,
  gear3lv: 1,
  gear0: 0,
  break1: 0,
  break2: 0,
  break3: 0,
};

export const defaultMax: Record<CharaProp, number> = {
  lv: 90,
  star: 8,
  weapon: 50,
  bond: 100,
  skill0: 5,
  skill1: 10,
  skill2: 10,
  skill3: 10,
  gear1: 9,
  gear1lv: 65,
  gear2: 9,
  gear2lv: 65,
  gear3: 9,
  gear3lv: 65,
  gear0: 2,
  break1: 25,
  break2: 25,
  break3: 25,
};

abstract class StudentData extends IOData<typeof schema> {
  schema = schema;

  use(id: number) {
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

class StudentNowData extends StudentData {
  title = "now";
  defaultObj = defaultMin;
}
class StudentGoalData extends StudentData {
  title = "goal";
  defaultObj = defaultMax;
}

export const dataStudentNow = new StudentNowData();
export const dataStudentGoal = new StudentGoalData();
