import { cache } from "@/utils/misc";
import type {
  CharacterSkillListExcelTable,
  SkillExcelTable,
} from "~game/types/flatDataExcel";
import { useExcelMapMany } from ".";

export const useExcelSkill = cache(() =>
  useExcelMapMany<SkillExcelTable, "GroupId">("SkillExcelTable", "GroupId"),
);

export const useExcelCharacterSkillList = cache(() =>
  useExcelMapMany<CharacterSkillListExcelTable, "CharacterSkillListGroupId">(
    "CharacterSkillListExcelTable",
    "CharacterSkillListGroupId",
  ),
);
