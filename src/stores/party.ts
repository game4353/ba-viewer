import { Err, Ok } from "@/utils/result";
import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { z } from "zod";
import { IOData } from "./main";

const partySchema = z.object({
  name: z.string(),
  student: z.number().array(),
  enemy: z.number().array(),
  parties: z.number().array().array(),
});

function parseParty(json: string) {
  try {
    const obj = JSON.parse(json);
    return partySchema.array().parse(obj); // Throws if validation fails
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export const usePartyStore = defineStore("party", {
  state: () =>
    useStorage(`party`, { party: [] as ReturnType<typeof parseParty> }),
  getters: {
    amount: (state) => state.party.length,
  },
  actions: {
    newParty() {
      this.party.push({
        name: "new party",
        student: [],
        enemy: [],
        parties: [],
      });
    },
    updateParty(
      idx: number,
      obj: Partial<ReturnType<typeof parseParty>[number]>,
    ) {
      if (this.party.length <= idx) return console.error(this.party, idx);
      if (obj.name != null) this.party[idx].name = obj.name;
      if (obj.student != null) this.party[idx].student = obj.student;
      if (obj.enemy != null) this.party[idx].enemy = obj.enemy;
      if (obj.parties != null) this.party[idx].parties = obj.parties;
    },
  },
});

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

  useNames() {
    if (this.count.value === 0) {
      this.count.value = this.getAllFullKey().length;
    }
    return computed(() => {
      const arr = [];
      for (let i = 0; i < this.count.value; i++) {
        arr.push(this.use(i).name);
      }
      return arr;
    });
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
