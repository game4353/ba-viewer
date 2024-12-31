import { cache } from "@/utils/misc";
import type {
  CharacterAcademyTagsExcelTable,
  CharacterExcelTable,
  CharacterGearExcel,
  CharacterLevelExcelTable,
  CharacterPotentialExcel,
  CharacterPotentialStatExcel,
  CharacterStatExcelTable,
  CharacterTranscendenceExcelTable,
  CostumeExcelTable,
} from "~game/excelType";
import { useExcelDbMapMany, useExcelMapSingle } from ".";

export const useExcelCharacter = cache(() =>
  useExcelMapSingle<CharacterExcelTable, "Id">("CharacterExcelTable", "Id"),
);

export const useExcelCostume = cache(() =>
  useExcelMapSingle<CostumeExcelTable, "CostumeGroupId">(
    "CostumeExcelTable",
    "CostumeGroupId",
  ),
);

export const useExcelCharacterLevel = cache(() =>
  useExcelMapSingle<CharacterLevelExcelTable, "Level">(
    "CharacterLevelExcelTable",
    "Level",
  ),
);

export const useExcelCharacterStat = cache(() =>
  useExcelMapSingle<CharacterStatExcelTable, "CharacterId">(
    "CharacterStatExcelTable",
    "CharacterId",
  ),
);

export const useExcelCharacterTranscendence = cache(() =>
  useExcelMapSingle<CharacterTranscendenceExcelTable, "CharacterId">(
    "CharacterTranscendenceExcelTable",
    "CharacterId",
  ),
);

export const useExcelCharacterGear = cache(() =>
  useExcelDbMapMany<CharacterGearExcel, "CharacterId">(
    "CharacterGear",
    "CharacterId",
  ),
);

export const useExcelCharacterPotential = cache(() =>
  useExcelDbMapMany<CharacterPotentialExcel, "Id">("CharacterPotential", "Id"),
);

export const useExcelCharacterPotentialStat = cache(() =>
  useExcelDbMapMany<CharacterPotentialStatExcel, "PotentialStatGroupId">(
    "CharacterPotentialStat",
    "PotentialStatGroupId",
  ),
);

export const useExcelCharacterAcademyTags = cache(() =>
  useExcelMapSingle<CharacterAcademyTagsExcelTable, "Id">(
    "CharacterAcademyTagsExcelTable",
    "Id",
  ),
);
