import { cache, Excel } from "../../util.js";
import type { CostumeExcel } from "../type.js";
import type { TCostume } from ".";

export class Costume {
  @cache
  static getCostume(): Partial<Record<string, TCostume>> {
    return Object.fromEntries(
      (Excel.table("CostumeExcel") as CostumeExcel[])
        .filter((v) => v.ProductionStep == "Release")
        .map((v) => [
          v.CostumeGroupId,
          {
            SpineResourceName: v.SpineResourceName,
            SpineResourceNameDiorama: v.SpineResourceNameDiorama,
            TextureDir: v.TextureDir,
            CollectionTexturePath: v.CollectionTexturePath,
            CollectionBGTexturePath: v.CollectionBGTexturePath,
          },
        ]),
    );
  }
}
