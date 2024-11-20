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
  useExcelMapSingle<CharacterExcelTable>("CharacterExcelTable", "Id");

export const useExcelCostume = () =>
  useExcelMapSingle<CostumeExcelTable>("CostumeExcelTable", "CostumeGroupId");

export const useExcelCharacterStat = () =>
  useExcelMapSingle<CharacterStatExcelTable>(
    "CharacterStatExcelTable",
    "CharacterId",
  );

export const useExcelCharacterTranscendence = () =>
  useExcelMapSingle<CharacterTranscendenceExcelTable>(
    "CharacterTranscendenceExcelTable",
    "CharacterId",
  );

export const useExcelCharacterGear = () =>
  useExcelMapMany<CharacterGearExcelTable>(
    "CharacterGearExcelTable",
    "CharacterId",
  );

export const useExcelDbCharacterPotential = () =>
  useExcelDbMapMany<CharacterPotentialExcel>("CharacterPotential", "Id");

export const useExcelDbCharacterPotentialStat = () =>
  useExcelDbMapMany<CharacterPotentialStatExcel>(
    "CharacterPotentialStat",
    "PotentialStatGroupId",
  );
