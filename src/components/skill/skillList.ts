import { useExcel } from "@/utils/data/excel";
import { useExcelCharacterSkillList } from "@/utils/data/excel/skill";
import { asResult, filterSingle } from "@/utils/result";
import type {
  CharacterSkillListExcel,
  CharacterSkillListExcelTable,
} from "~game/types/flatDataExcel";

interface Data {
  CharacterSkillListGroupId: number;
  MinimumGradeCharacterWeapon: number;
  MinimumTierCharacterGear: number;
  TSAInteractionId: number;
  FormIndex: number;
}

function cmp(a: Data, b: Data) {
  let val = a.TSAInteractionId - b.TSAInteractionId;
  if (val !== 0) return val;
  val = a.CharacterSkillListGroupId - b.CharacterSkillListGroupId;
  if (val !== 0) return val;
  val = a.MinimumGradeCharacterWeapon - b.MinimumGradeCharacterWeapon;
  if (val !== 0) return val;
  val = a.MinimumTierCharacterGear - b.MinimumTierCharacterGear;
  if (val !== 0) return val;
  val = a.FormIndex - b.FormIndex;
  return val;
}

const table = useExcel<CharacterSkillListExcelTable>(
  "CharacterSkillListExcelTable",
);
const arr = computed(() =>
  table.value?.unwrapOr(undefined)?.DataList.slice().sort(cmp),
);

function search(target: Data) {
  if (arr.value == null) return undefined;
  return computed(() => {
    let left = 0;
    let right = arr.value!.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      const res = cmp(arr.value![mid], target);
      if (res < 0) left = mid + 1;
      else if (res > 0) right = mid - 1;
      else return mid;
    }
    return null;
  });
}

export function useSkillList(
  sid: number,
  weapon: 0 | 2,
  gear: 0 | 2,
  tsa: number = 0,
  form: number = 0,
) {
  return computed(() =>
    asResult(
      useExcelCharacterSkillList()
        .value.andThen((map) => map.getResult(sid))
        .andThen((arr) =>
          filterSingle(
            arr,
            (o) =>
              o.MinimumGradeCharacterWeapon === weapon &&
              o.MinimumTierCharacterGear === gear &&
              o.TSAInteractionId === tsa &&
              o.FormIndex === form,
          ),
        ),
    ),
  );
}

/** `output[tsa][weapon][gear][form]` */
export function useSkillListFull(sid: number) {
  return computed(() => {
    const out: Record<
      number,
      Record<number, Record<number, CharacterSkillListExcel[]>>
    > = {};
    const i = search({
      CharacterSkillListGroupId: sid,
      MinimumGradeCharacterWeapon: 0,
      MinimumTierCharacterGear: 0,
      TSAInteractionId: 0,
      FormIndex: 0,
    });
    if (i?.value == null) return null;
    for (let x = i.value; ; x++) {
      const d = arr.value![x];
      if (d.CharacterSkillListGroupId !== sid) return out;
      out[d.TSAInteractionId] ??= {};
      out[d.TSAInteractionId][d.MinimumGradeCharacterWeapon] ??= {};
      out[d.TSAInteractionId][d.MinimumGradeCharacterWeapon][
        d.MinimumTierCharacterGear
      ] ??= [];
      out[d.TSAInteractionId][d.MinimumGradeCharacterWeapon][
        d.MinimumTierCharacterGear
      ][d.FormIndex] = d;
    }
  });
}
