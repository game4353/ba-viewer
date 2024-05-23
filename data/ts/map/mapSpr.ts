import { readdirSync } from "fs";
import path from "path";
import type {
  CharacterExcel,
  CostumeExcel,
} from "../../../src/assets/game/types/flatDataExcel.js";
// @ts-ignore
import { DataList as d1 } from "../../../src/assets/game/excel/CharacterExcelTable.json";
// @ts-ignore
import { DataList as d2 } from "../../../src/assets/game/excel/CostumeExcelTable.json";
import { writeJson } from "../util.js";
import { AssetFolder, SpineFolder } from "../path.js";

const playableIds = (d1 as CharacterExcel[])
  .filter(
    (v) => v.IsPlayableCharacter && !v.IsNPC && v.ProductionStep == "Release",
  )
  .map((v) => v.Id);

export function mapSpr() {
  const p2 = path.join(SpineFolder, "SpineCharacters");
  const sprs = new Set(readdirSync(p2).map((name) => name));
  const output: Record<string, string> = {};

  const id2costume = (d2 as CostumeExcel[]).reduce(
    (acc: Record<string, CostumeExcel>, o) => {
      acc[o.CostumeGroupId] = o;
      return acc;
    },
    {},
  );

  for (const id of playableIds) {
    const item = id2costume[id];
    const dn = item.DevName.replace(/_default$/, "");
    const srn =
      item.SpineResourceNameDiorama.split("/")
        .at(-1)
        ?.replace(/^CharacterSpine_/, "") ?? "";
    const fn = [dn, dn.toLowerCase(), srn, srn.toLowerCase()]
      .map((n) => `${n}_spr`)
      .find((n) => sprs.has(n));
    if (fn == null) throw new Error(`can't find id ${id}`);

    sprs.delete(fn);
    const folder = path.join(p2, fn);
    const file = readdirSync(folder).find((o) => o.endsWith(".skel"));
    if (file == null) throw new Error(`can't find skel in ${folder}`);
    output[id] = `${fn}/${file}`;
  }
  writeJson(path.join(AssetFolder, "SpineCharacters.json"), output, true);
}
