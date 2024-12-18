import { cache } from "@/utils/misc";
import { Err, Ok } from "@/utils/result/result";
import type { CafeInteractionExcelTable } from "~game/types/flatDataExcel";
import { MapResult, useExcel } from ".";

export const useFurnitureInteractMap = cache(() => {
  const table = useExcel<CafeInteractionExcelTable>(
    "CafeInteractionExcelTable",
  );
  return computed(() =>
    table.value.andThen((t) => {
      const map = new MapResult<string, number>()
        .setKeyName("CafeCharacterState")
        .setTitle("CafeInteractionExcelTable");
      for (const o of t.DataList) {
        for (const k of o.CafeCharacterState) {
          if (map.has(k))
            return Err(
              new Error(`CafeInteraction '${k}' maps to multiple ids.`),
            );
          map.set(k, o.CharacterId);
        }
      }
      return Ok(map);
    }),
  );
});
