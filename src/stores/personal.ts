// Utilities
import { defineStore } from "pinia";
import { ref } from "vue";
import { useStorage } from "@vueuse/core";
import { cache } from "@/util";

type Party = {
  name: string;
  // use chara ID, minus means friend
  striker: number[];
  support: number[];
};

type Items = Partial<Record<number, number>>;

export const usePersonalStore = defineStore("personal", () => {
  const charas = ref({} as Partial<Record<number, Chara>>);
  const parties = ref({} as Partial<Record<number, Party>>);
  const items = ref({} as Items);
  const version = ref(0);

  return { charas, parties, items, version };
});

export const useCharaStore2 = defineStore("chara1", {
  state: () =>
    ({
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
    }) as Chara,
});

export function charaDefault(max = false) {
  return {
    lv: max ? 90 : 0,
    star: max ? 8 : 1,
    weapon: max ? 50 : 0,
    bond: max ? 100 : 1,
    skill0: max ? 5 : 1,
    skill1: max ? 10 : 1,
    skill2: max ? 10 : 1,
    skill3: max ? 10 : 1,
    gear1: max ? 9 : 0,
    gear1lv: max ? 65 : 1,
    gear2: max ? 9 : 0,
    gear2lv: max ? 65 : 1,
    gear3: max ? 9 : 0,
    gear3lv: max ? 65 : 1,
    gear0: max ? 2 : 0,
  };
}

export type Chara = ReturnType<typeof charaDefault>;

export const useCharaStore = cache((cid: number) => {
  const now = defineStore(`charaNow${cid}`, {
    state: () => useStorage(`charaNow${cid}`, charaDefault()),
  });
  const goal = defineStore(`charaGoal${cid}`, {
    state: () => useStorage(`charaGoal${cid}`, charaDefault(true)),
  });

  return { now: now, goal: goal };
});
