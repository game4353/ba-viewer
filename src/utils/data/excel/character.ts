import { cache } from "@/utils/misc";
import type {
  CharacterAcademyTagsExcelTable,
  CharacterExcelTable,
  CharacterGearExcelTable,
  CharacterLevelExcelTable,
  CharacterStatExcelTable,
  CharacterTranscendenceExcelTable,
  CostumeExcelTable,
} from "~game/types/flatDataExcel";
import type {
  CharacterPotentialExcel,
  CharacterPotentialStatExcel,
} from "~game/types/flatDataExcelDb";
import { useExcelDbMapMany, useExcelMapMany, useExcelMapSingle } from ".";

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
  useExcelMapMany<CharacterGearExcelTable, "CharacterId">(
    "CharacterGearExcelTable",
    "CharacterId",
  ),
);

export const useExcelDbCharacterPotential = cache(() =>
  useExcelDbMapMany<CharacterPotentialExcel, "Id">("CharacterPotential", "Id"),
);

export const useExcelDbCharacterPotentialStat = cache(() =>
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
