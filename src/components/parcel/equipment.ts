import type { EquipmentExcel } from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/EquipmentExcelTable.json";
import { Localize } from "@/utils/localize";

export const equipments = DataList as EquipmentExcel[];
export const equipmentDict: Partial<Record<string, EquipmentExcel>> =
  Object.fromEntries(equipments.map((v) => [v.Id, v]));

export function equipmentGetName(id: number) {
  const equipment = equipmentDict[id];
  if (equipment == null) return null;
  return Localize.etc(equipment.LocalizeEtcId, "name");
}
export function equipmentGetDesc(id: number) {
  const equipment = equipmentDict[id];
  if (equipment == null) return null;
  return Localize.etc(equipment.LocalizeEtcId, "desc");
}
