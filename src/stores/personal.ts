import {
  CharaData,
  getAllCharaDataV0,
  setAllCharaDataV0,
  setCharaDataV0,
} from "./character";
import { unreachable } from "@/utils/misc";

/*
class PartyData {
  name?: string;
  // use chara ID, minus means friend
  striker?: number[];
  support?: number[];
  constructor(name?: string, striker?: number[], support?: number[]) {
    this.name = name;
    this.striker = striker;
    this.support = support;
  }
}
type Items = Partial<Record<number, number>>;
*/

export function importJustin(json: string) {
  const obj = JSON.parse(json);
  if (obj.exportVersion === 2) {
    obj.characters.forEach((o: any) => {
      const c = o.current;
      setCharaDataV0(
        o.id,
        "now",
        new CharaData(
          c.level,
          c.star + c.ue,
          c.ue_level,
          c.bond,
          c.ex,
          c.basic,
          c.passive,
          c.sub,
          c.gear1,
          undefined,
          c.gear2,
          undefined,
          c.gear3,
        ),
      );
      const t = o.target;
      setCharaDataV0(
        o.id,
        "goal",
        new CharaData(
          t.level,
          c.star + c.ue,
          c.ue_level,
          t.bond,
          t.ex,
          t.basic,
          t.passive,
          t.sub,
          t.gear1,
          undefined,
          t.gear2,
          undefined,
          t.gear3,
        ),
      );
    });
  } else {
    unreachable();
  }
}

export function importVx(json: string) {
  const obj = JSON.parse(json);
  if (obj.version === 0) return importV0(obj);
  unreachable();
}

function importV0(obj: any) {
  setAllCharaDataV0(obj.characters);
}

export function exportV0() {
  const data = {
    version: 0,
    characters: getAllCharaDataV0(),
  };
  return JSON.stringify(data);
}
