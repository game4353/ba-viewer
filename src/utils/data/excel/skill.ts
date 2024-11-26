import { cache } from "@/utils/misc";
import type { SkillExcelTable } from "~game/types/flatDataExcel";
import { useExcelMapMany } from ".";

export const useExcelSkill = cache(() =>
  useExcelMapMany<SkillExcelTable, "GroupId">("SkillExcelTable", "GroupId"),
);
