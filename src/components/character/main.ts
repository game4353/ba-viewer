import { CharacterExcel, ProductionStep } from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/CharacterExcelTable.json";

export const playable = (DataList as CharacterExcel[]).filter(
  (v) =>
    v.IsPlayableCharacter &&
    !v.IsNPC &&
    v.ProductionStep === ProductionStep.Release,
);
