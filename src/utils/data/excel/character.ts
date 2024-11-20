import type {
  CharacterExcelTable,
  CharacterGearExcelTable,
  CharacterStatExcelTable,
  CharacterTranscendenceExcelTable,
  CostumeExcelTable,
} from "~game/types/flatDataExcel";
import { useExcelDbMapMany, useExcelMapMany, useExcelMapSingle } from ".";
import type {
  CharacterPotentialExcel,
  CharacterPotentialStatExcel,
} from "~game/types/flatDataExcelDb";

export const useExcelCharacter = () =>
  useExcelMapSingle<CharacterExcelTable, "Id">("CharacterExcelTable", "Id");

export const useExcelCostume = () =>
  useExcelMapSingle<CostumeExcelTable, "CostumeGroupId">(
    "CostumeExcelTable",
    "CostumeGroupId",
  );

export const useExcelCharacterStat = () =>
  useExcelMapSingle<CharacterStatExcelTable, "CharacterId">(
    "CharacterStatExcelTable",
    "CharacterId",
  );

export const useExcelCharacterTranscendence = () =>
  useExcelMapSingle<CharacterTranscendenceExcelTable, "CharacterId">(
    "CharacterTranscendenceExcelTable",
    "CharacterId",
  );

export const useExcelCharacterGear = () =>
  useExcelMapMany<CharacterGearExcelTable, "CharacterId">(
    "CharacterGearExcelTable",
    "CharacterId",
  );

export const useExcelDbCharacterPotential = () =>
  useExcelDbMapMany<CharacterPotentialExcel, "Id">("CharacterPotential", "Id");

export const useExcelDbCharacterPotentialStat = () =>
  useExcelDbMapMany<CharacterPotentialStatExcel, "PotentialStatGroupId">(
    "CharacterPotentialStat",
    "PotentialStatGroupId",
  );
