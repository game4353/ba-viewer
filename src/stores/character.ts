import { cache } from "@/utils/misc";
import { clamp, useStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { dataStudentGoal, dataStudentNow } from "./student";

export type CharaProp = Exclude<
  {
    [K in keyof CharaData]: CharaData[K] extends number | undefined ? K : never;
  }[keyof CharaData],
  undefined
>;

function parseBetween(input: any, min: number, max: number) {
  if (input == null) return min;
  const n = parseInt(input);
  if (isNaN(n)) {
    console.error(`Parse an invalid number: ${input}`);
    return min;
  }
  return clamp(n, min, max);
}

export class CharaData {
  constructor(
    public lv: number,
    public star: number,
    public weapon: number,
    public bond: number,
    public skill0: number,
    public skill1: number,
    public skill2: number,
    public skill3: number,
    public gear1: number,
    public gear1lv: number,
    public gear2: number,
    public gear2lv: number,
    public gear3: number,
    public gear3lv: number,
    public gear0: number,
    public break1: number,
    public break2: number,
    public break3: number,
  ) {}

  toObj(): Record<CharaProp, number> {
    return Object.fromEntries(Object.entries(this)) as any;
  }
  toString() {
    return JSON.stringify(this.toObj());
  }
  static fromObj(obj: Record<string, any>) {
    const min = CharaData.defaultMin();
    const max = CharaData.defaultMax();
    return new CharaData(
      parseBetween(obj.lv, min.lv, max.lv),
      parseBetween(obj.star, min.star, max.star),
      parseBetween(obj.weapon, min.weapon, max.weapon),
      parseBetween(obj.bond, min.bond, max.bond),
      parseBetween(obj.skill0, min.skill0, max.skill0),
      parseBetween(obj.skill1, min.skill1, max.skill1),
      parseBetween(obj.skill2, min.skill2, max.skill2),
      parseBetween(obj.skill3, min.skill3, max.skill3),
      parseBetween(obj.gear1, min.gear1, max.gear1),
      parseBetween(obj.gear1lv, min.gear1lv, max.gear1lv),
      parseBetween(obj.gear2, min.gear2, max.gear2),
      parseBetween(obj.gear2lv, min.gear2lv, max.gear2lv),
      parseBetween(obj.gear3, min.gear3, max.gear3),
      parseBetween(obj.gear3lv, min.gear3lv, max.gear3lv),
      parseBetween(obj.gear0, min.gear0, max.gear0),
      parseBetween(obj.break1, min.break1, max.break1),
      parseBetween(obj.break2, min.break2, max.break2),
      parseBetween(obj.break3, min.break3, max.break3),
    );
  }
  static fromString(json: string) {
    try {
      const obj = JSON.parse(json);
      if (typeof obj !== "object") return undefined;
      return CharaData.fromObj(obj);
    } catch {
      return undefined;
    }
  }
  static defaultMin() {
    return new CharaData(0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0);
  }
  static defaultMax() {
    return new CharaData(
      90,
      8,
      50,
      100,
      5,
      10,
      10,
      10,
      9,
      65,
      9,
      65,
      9,
      65,
      2,
      25,
      25,
      25,
    );
  }
}

export function useCharaStore(cid: number) {
  return {
    now: () => dataStudentNow.use(cid),
    goal: () => dataStudentGoal.use(cid),
  };
}

export const useCharaStore2 = cache((cid: number) => {
  const now = defineStore(`charaNow${cid}`, {
    state: () =>
      useStorage(`charaNow${cid}`, CharaData.defaultMin().toObj(), undefined, {
        mergeDefaults: true,
      }),
    actions: {
      update(data: CharaData) {
        this.$state = data.toObj();
      },
    },
  });
  const goal = defineStore(`charaGoal${cid}`, {
    state: () =>
      useStorage(`charaGoal${cid}`, CharaData.defaultMax().toObj(), undefined, {
        mergeDefaults: true,
      }),
    actions: {
      update(data: CharaData) {
        this.$state = data.toObj();
      },
    },
  });

  return { now, goal };
});

export type CharaDataV0 = Record<
  number,
  {
    now?: CharaData | string;
    goal?: CharaData | string;
  }
>;

export function getCharaDataV0(id: number, type: "now" | "goal") {
  const key = type === "now" ? `charaNow${id}` : `charaGoal${id}`;
  const data = localStorage.getItem(key);
  return CharaData.fromString(data ?? "");
}

export function getAllCharaDataV0() {
  const characters: CharaDataV0 = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith("charaNow")) {
      characters[Number(key.slice(8))] ??= {};
      characters[Number(key.slice(8))].now = CharaData.fromString(
        localStorage.getItem(key)!,
      );
    }
    if (key?.startsWith("charaGoal")) {
      characters[Number(key.slice(9))] ??= {};
      characters[Number(key.slice(9))].goal = CharaData.fromString(
        localStorage.getItem(key)!,
      );
    }
  }
  return characters;
}

export function setCharaDataV0(
  id: number | string,
  type: "now" | "goal",
  data: CharaData,
) {
  const store = useCharaStore(Number(id))[type]();
  store.update(data);
}
