import {
  ProductionStep,
  type CharacterExcel,
} from "@/assets/game/types/flatDataExcel";
import { useExcelCharacter } from "@/utils/data/excel/character";
import { cache } from "@/utils/misc";
import { asResult } from "@/utils/result";
import type { ReadonlyDeep } from "type-fest";
function isPlayable(excel: ReadonlyDeep<CharacterExcel>) {
  return (
    excel.IsPlayableCharacter &&
    !excel.IsNPC &&
    excel.ProductionStep === ProductionStep.Release
  );
}

export const usePlayableIds = cache(() =>
  computed(() =>
    asResult(
      useExcelCharacter().value.map((map) =>
        Array.from(map.entries())
          .filter(([, v]) => isPlayable(v))
          .map(([k]) => k),
      ),
    ),
  ),
);
