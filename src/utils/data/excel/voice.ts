import { cache } from "@/utils/misc";
import type {
  CharacterDialogEventExcel,
  CharacterDialogExcel,
  CharacterDialogSubtitleExcel,
  CharacterVoiceExcel,
  CharacterVoiceSubtitleExcel,
  VoiceCommonExcel,
  VoiceExcel,
  VoiceLogicEffectExcel,
  VoiceRoomExceptionExcel,
  VoiceSpineExcel,
} from "~game/excelType";
import { useExcelDbMapMany, useExcelDbMapSingle } from ".";

export const useExcelCharacterVoice = cache(() =>
  useExcelDbMapMany<CharacterVoiceExcel, "CharacterVoiceGroupId">(
    "CharacterVoice",
    "CharacterVoiceGroupId",
  ),
);

export const useExcelCharacterVoiceSubtitle = cache(() =>
  useExcelDbMapMany<CharacterVoiceSubtitleExcel, "CharacterVoiceGroupId">(
    "CharacterVoiceSubtitle",
    "CharacterVoiceGroupId",
  ),
);

export const useExcelVoice = cache(() =>
  useExcelDbMapSingle<VoiceExcel, "Id">("Voice", "Id"),
);

export const useExcelVoiceCommon = cache(() =>
  useExcelDbMapSingle<VoiceCommonExcel, "VoiceEvent">(
    "VoiceCommon",
    "VoiceEvent",
  ),
);

export const useExcelVoiceLogicEffect = cache(() =>
  useExcelDbMapSingle<VoiceLogicEffectExcel, "LogicEffectNameHash">(
    "VoiceLogicEffect",
    "LogicEffectNameHash",
  ),
);
export const useExcelVoiceRoomException = cache(() =>
  useExcelDbMapSingle<VoiceRoomExceptionExcel, "CostumeUniqueId">(
    "VoiceRoomException",
    "CostumeUniqueId",
  ),
);
export const useExcelVoiceSpine = cache(() =>
  useExcelDbMapSingle<VoiceSpineExcel, "Id">("VoiceSpine", "Id"),
);

export const useExcelCharacterDialog = cache(() =>
  useExcelDbMapMany<CharacterDialogExcel, "CharacterId">(
    "CharacterDialog",
    "CharacterId",
  ),
);

export const useExcelCharacterDialogEvent = cache(() =>
  useExcelDbMapMany<CharacterDialogEventExcel, "CostumeUniqueId">(
    "CharacterDialogEvent",
    "CostumeUniqueId",
  ),
);
export const useExcelCharacterDialogSubtitle = cache(() =>
  useExcelDbMapMany<CharacterDialogSubtitleExcel, "CharacterId">(
    "CharacterDialogSubtitle",
    "CharacterId",
  ),
);
