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

function numberOr<T>(input: any, default_: T) {
  const n = parseInt(input);
  if (isNaN(n)) {
    console.error(`Parse an invalid number: ${input}`);
    return default_;
  }
  return n;
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
  ) {
    this.lv = lv;
    this.star = star;
    this.weapon = weapon;
    this.bond = bond;
    this.skill0 = skill0;
    this.skill1 = skill1;
    this.skill2 = skill2;
    this.skill3 = skill3;
    this.gear1 = gear1;
    this.gear1lv = gear1lv;
    this.gear2 = gear2;
    this.gear2lv = gear2lv;
    this.gear3 = gear3;
    this.gear3lv = gear3lv;
    this.gear0 = gear0;
    this.break1 = break1;
    this.break2 = break2;
    this.break3 = break3;
  }

  toObj(): Record<CharaProp, number> {
    return Object.fromEntries(Object.entries(this)) as any;
  }
  toString() {
    return JSON.stringify(this.toObj());
  }
  static fromObj(obj: Record<string, any>) {
    const min = CharaData.defaultMin();
    return new CharaData(
      numberOr(obj.lv, min.lv),
      numberOr(obj.star, min.star),
      numberOr(obj.weapon, min.weapon),
      numberOr(obj.bond, min.bond),
      numberOr(obj.skill0, min.skill0),
      numberOr(obj.skill1, min.skill1),
      numberOr(obj.skill2, min.skill2),
      numberOr(obj.skill3, min.skill3),
      numberOr(obj.gear1, min.gear1),
      numberOr(obj.gear1lv, min.gear1lv),
      numberOr(obj.gear2, min.gear2),
      numberOr(obj.gear2lv, min.gear2lv),
      numberOr(obj.gear3, min.gear3),
      numberOr(obj.gear3lv, min.gear3lv),
      numberOr(obj.gear0, min.gear0),
      numberOr(obj.break1, min.break1),
      numberOr(obj.break2, min.break2),
      numberOr(obj.break3, min.break3),
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
