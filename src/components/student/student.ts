import {
  ProductionStep,
  type CharacterExcel,
} from "@/assets/game/types/flatDataExcel";
import { useExcelCharacter } from "@/utils/data/excel/character";
import { KeyNotFoundErr } from "@/utils/error";
import { cache } from "@/utils/misc";
import { asResult, Err, Ok } from "@/utils/result";
import type { ReadonlyDeep } from "type-fest";
import { CCharacter, useCharacter } from "../parcel/character/character";
import { useEquipmentCache } from "../parcel/equipment/equipment";
import { useCharacterGear } from "../parcel/gear/gear";

export class CStudent extends CCharacter {
  constructor(...args: ConstructorParameters<typeof CCharacter>) {
    super(...args);
  }

  /** This will return tier 1 when unequipped */
  useEquipment(i: 1 | 2 | 3) {
    return asResult(
      useEquipmentCache(
        this.obj.EquipmentSlot[i - 1],
        this.statNow[`gear${i}`] || 1,
      ).value.map((equipment) => {
        equipment.level = this.statNow[`gear${i}lv`];
        return equipment;
      }),
    );
  }

  /** This will return null if gear does not exist
   * and return tier 1 when gear is not equipped.
   */
  useGear() {
    return asResult(
      useCharacterGear(this.id, this.statNow.gear0 || 1).value.orElse2((e) =>
        e instanceof KeyNotFoundErr ? Ok(null) : Err(e),
      ),
    );
  }
}

export const useStudent = cache((characterId: number) =>
  computed(() =>
    asResult(
      useCharacter(characterId).value.map(
        (c) => new CStudent(c.obj, c.costume),
      ),
    ),
  ),
);

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
