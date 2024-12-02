import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { z } from "zod";

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
