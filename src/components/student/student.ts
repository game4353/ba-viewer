import {
  ProductionStep,
  type CharacterExcel,
} from "@/assets/game/types/flatDataExcel";
import { StudentTagRarityGroup } from "@/components/student/tag";
import {
  useExcelCharacter,
  useExcelCharacterLevel,
} from "@/utils/data/excel/character";
import clubLocalizeKey from "@/utils/i18n/custom/keyClub";
import schoolFullLocalizeKey from "@/utils/i18n/custom/keySchoolFull";
import {
  useLocalize,
  useLocalizeCharProfile,
  useLocalizeCharProfileMap,
} from "@/utils/i18n/localize";
import { cache, sum } from "@/utils/misc";
import { KeyNotFoundErr } from "@/utils/result/error";
import { Err, Ok, Result, asResult } from "@/utils/result/result";
import type { ReadonlyDeep } from "type-fest";
import { CCharacter, useCharacter } from "../parcel/character/character";
import {
  equipmentExp,
  useEquipmentFromEnum,
} from "../parcel/equipment/equipment";
import { useCharacterGear } from "../parcel/gear/gear";

export class CStudent extends CCharacter {
  constructor(...args: ConstructorParameters<typeof CCharacter>) {
    super(...args);
    this.addDynamicTag(
      () => this.statNow.star,
      StudentTagRarityGroup.getTag.bind(StudentTagRarityGroup),
    );
  }

  useBirthday() {
    return asResult(
      useLocalizeCharProfileMap()
        .value.andThen((map) => map.getResult(this.id))
        .map((o) => o.BirthDay)
        .andThen((bd) => {
          if (bd === "-") return Ok(undefined);
          if (!/^\d\d?\/\d\d?/.test(bd))
            return Err(new Error(`Invalid birthday '${bd}'.`));
          const [month, day] = bd.split("/").map(Number);
          const year = new Date().getFullYear();
          return Ok(new Date(year, month - 1, day));
        }),
    );
  }

  useClub() {
    return useLocalize(clubLocalizeKey(this.obj.Club));
  }
  useSchool() {
    return useLocalize(schoolFullLocalizeKey(this.obj.School));
  }

  useProfile(key: Parameters<typeof useLocalizeCharProfile>["1"]) {
    return useLocalizeCharProfile(this.id, key);
  }

  useExp(unit: number) {
    if ((this.statNow.lv || 1) >= this.statGoal.lv) return Ok(0);
    return useExcelCharacterLevel().value.andThen((map) =>
      Result.all([
        map.getResult(this.statNow.lv || 1),
        map.getResult(this.statGoal.lv),
      ]).map(([n, g]) =>
        Math.ceil((g.TotalExp - n.TotalExp + n.Exp - g.Exp) / unit),
      ),
    );
  }

  /** This will return tier 1 when unequipped */
  useEquipment(i: 1 | 2 | 3) {
    return asResult(
      useEquipmentFromEnum(
        this.obj.EquipmentSlot[i - 1],
        this.statNow[`gear${i}`] || 1,
      ).map((equipment) => {
        equipment.level = this.statNow[`gear${i}lv`] || 1;
        return equipment;
      }),
    );
  }

  useEquipmentTotalExp(unit: number) {
    return Result.all(
      ([1, 2, 3] as const).map((i) =>
        this.useEquipment(i).andThen2((eq) =>
          equipmentExp(
            eq.obj.EquipmentCategory,
            this.statNow[`gear${i}`] || 1,
            this.statNow[`gear${i}lv`] || 1,
            this.statGoal[`gear${i}`],
            this.statGoal[`gear${i}lv`],
            unit,
          ),
        ),
      ),
    ).map(sum);
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

export const usePlayableIds = cache((ignoreType2: boolean = false) =>
  computed(() =>
    asResult(
      useExcelCharacter().value.map((map) =>
        Array.from(map.entries())
          .filter(([, v]) => isPlayable(v) && (!ignoreType2 || v.Id !== 10099))
          .map(([k]) => k),
      ),
    ),
  ),
);

export const useStudents = cache((ignoreType2 = false) =>
  computed(() =>
    asResult(
      usePlayableIds(ignoreType2).value.andThen((ids) =>
        Result.all(ids.map((id) => useStudent(id).value)),
      ),
    ),
  ),
);
