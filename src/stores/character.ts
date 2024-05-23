import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import { cache } from "@/util";
import { unreachable } from "@/utils/misc";
import { playable } from "@/components/character/main";

export type CharaProp = Exclude<
  {
    [K in keyof CharaData]: CharaData[K] extends number | undefined ? K : never;
  }[keyof CharaData],
  undefined
>;

export class CharaData {
  lv?: number;
  star?: number;
  weapon?: number;
  bond?: number;
  skill0?: number;
  skill1?: number;
  skill2?: number;
  skill3?: number;
  gear1?: number;
  gear1lv?: number;
  gear2?: number;
  gear2lv?: number;
  gear3?: number;
  gear3lv?: number;
  gear0?: number;
  break1?: number;
  break2?: number;
  break3?: number;
  constructor(
    lv?: number,
    star?: number,
    weapon?: number,
    bond?: number,
    skill0?: number,
    skill1?: number,
    skill2?: number,
    skill3?: number,
    gear1?: number,
    gear1lv?: number,
    gear2?: number,
    gear2lv?: number,
    gear3?: number,
    gear3lv?: number,
    gear0?: number,
    break1?: number,
    break2?: number,
    break3?: number,
  ) {
    this.lv = CharaData.numOrNone(lv);
    this.star = CharaData.numOrNone(star);
    this.weapon = CharaData.numOrNone(weapon);
    this.bond = CharaData.numOrNone(bond);
    this.skill0 = CharaData.numOrNone(skill0);
    this.skill1 = CharaData.numOrNone(skill1);
    this.skill2 = CharaData.numOrNone(skill2);
    this.skill3 = CharaData.numOrNone(skill3);
    this.gear1 = CharaData.numOrNone(gear1);
    this.gear1lv = CharaData.numOrNone(gear1lv);
    this.gear2 = CharaData.numOrNone(gear2);
    this.gear2lv = CharaData.numOrNone(gear2lv);
    this.gear3 = CharaData.numOrNone(gear3);
    this.gear3lv = CharaData.numOrNone(gear3lv);
    this.gear0 = CharaData.numOrNone(gear0);
    this.break1 = CharaData.numOrNone(break1);
    this.break2 = CharaData.numOrNone(break2);
    this.break3 = CharaData.numOrNone(break3);
  }

  private static numOrNone(num: any) {
    const n = Number(num);
    if (isNaN(n)) return undefined;
    return n;
  }

  toObj() {
    return Object.fromEntries(Object.entries(this));
  }
  toString() {
    return JSON.stringify(this.toObj());
  }
  static fromObj(obj: Record<string, any>) {
    return new CharaData(
      obj.lv,
      obj.star,
      obj.weapon,
      obj.bond,
      obj.skill0,
      obj.skill1,
      obj.skill2,
      obj.skill3,
      obj.gear1,
      obj.gear1lv,
      obj.gear2,
      obj.gear2lv,
      obj.gear3,
      obj.gear3lv,
      obj.gear0,
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

export const useCharaStore = cache((cid: number) => {
  const now = defineStore(`charaNow${cid}`, {
    state: () => useStorage(`charaNow${cid}`, CharaData.defaultMin().toObj()),
  });
  const goal = defineStore(`charaGoal${cid}`, {
    state: () => useStorage(`charaGoal${cid}`, CharaData.defaultMax().toObj()),
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
  const key =
    type === "now"
      ? `charaNow${id}`
      : type === "goal"
        ? `charaGoal${id}`
        : unreachable();
  const data = localStorage.getItem(key);
  return CharaData.fromString(data ?? "");
}

export function getAllCharaDataV0() {
  const characters: CharaDataV0 = {};
  playable.forEach((o) => {
    const now = getCharaDataV0(o.Id, "now");
    const goal = getCharaDataV0(o.Id, "goal");
    if ((now ?? goal) != null) {
      characters[o.Id] = { now, goal };
    }
  });
  return characters;
}

export function setCharaDataV0(
  id: number | string,
  type: "now" | "goal",
  data: CharaData | string,
) {
  const key =
    type === "now"
      ? `charaNow${id}`
      : type === "goal"
        ? `charaGoal${id}`
        : unreachable();
  return localStorage.setItem(key, data.toString());
}

export function setAllCharaDataV0(data: CharaDataV0) {
  Object.entries(data).forEach(([id, v]) => {
    if (v.now != null) setCharaDataV0(id, "now", JSON.stringify(v.now));
    if (v.goal != null) setCharaDataV0(id, "goal", JSON.stringify(v.goal));
  });
}
