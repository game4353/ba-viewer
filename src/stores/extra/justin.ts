import { Err, err2 } from "@/utils/result/result";
import { importAll } from "../all";

function parseJustin(json: string) {
  function dict2char(d: any) {
    return {
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
    };
  }
  const now: any = {};
  const goal: any = {};

  try {
    const obj = JSON.parse(json);
    if (obj.exportVersion === 2) {
      obj.characters.forEach((o: any) => {
        now[o.id] = dict2char(o.current);
        goal[o.id] = dict2char(o.target);
      });
    }
    return Err("TODO");
  } catch (e) {
    return err2(e);
  }
}

export function importJustin(json: string) {
  return parseJustin(json).andThen(importAll);
}
