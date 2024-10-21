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
  function dict2char(d: any) {
    return CharaData.fromObj({
      lv: d.level,
      star: d.star + d.ue,
      weapon: d.ue_level,
      bond: d.bond,
      skill0: d.ex,
      skill1: d.basic,
      skill2: d.passive,
      skill3: d.sub,
      gear1: d.gear1,
      gear2: d.gear2,
      gear3: d.gear3,
    });
  }

  const obj = JSON.parse(json);
  if (obj.exportVersion === 2) {
    obj.characters.forEach((o: any) => {
      setCharaDataV0(o.id, "now", dict2char(o.current));
      setCharaDataV0(o.id, "goal", dict2char(o.target));
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
