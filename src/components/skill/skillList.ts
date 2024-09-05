import type { CharacterSkillListExcel } from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/CharacterSkillListExcelTable.json";

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

const arr = DataList as CharacterSkillListExcel[];
arr.sort(cmp);

function search(target: Data): number | null {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    const res = cmp(arr[mid], target);
    if (res < 0) left = mid + 1;
    else if (res > 0) right = mid - 1;
    else return mid;
  }
  return null;
}

export function getSkillList(
  sid: number,
  weapon: 0 | 2,
  gear: 0 | 2,
  tsa: number = 0,
  form: number = 0,
): CharacterSkillListExcel | null {
  const i = search({
    CharacterSkillListGroupId: sid,
    MinimumGradeCharacterWeapon: weapon,
    MinimumTierCharacterGear: gear,
    TSAInteractionId: tsa,
    FormIndex: form,
  });
  return i == null ? null : arr[i];
}

/** `output[tsa][weapon][gear][form]` */
export function getSkillListFull(sid: number) {
  const out: Record<
    number,
    Record<number, Record<number, CharacterSkillListExcel[]>>
  > = {};
  let i = search({
    CharacterSkillListGroupId: sid,
    MinimumGradeCharacterWeapon: 0,
    MinimumTierCharacterGear: 0,
    TSAInteractionId: 0,
    FormIndex: 0,
  });
  if (i == null) return null;
  for (; ; i++) {
    const d = arr[i];
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
}
