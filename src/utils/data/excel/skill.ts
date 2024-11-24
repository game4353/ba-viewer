import { cache } from "@/util";
import type { SkillExcelTable } from "~game/types/flatDataExcel";
import { useExcelMapMany } from ".";

export const useExcelSkill = cache(() =>
  useExcelMapMany<SkillExcelTable, "GroupId">("SkillExcelTable", "GroupId"),
);
