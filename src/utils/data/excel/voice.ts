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
} from "~game/types/flatDataExcelDb";
import { useExcelDbMapMany, useExcelDbMapSingle } from ".";

export const useExcelDbCharacterVoice = cache(() =>
  useExcelDbMapMany<CharacterVoiceExcel, "CharacterVoiceGroupId">(
    "CharacterVoice",
    "CharacterVoiceGroupId",
  ),
);

export const useExcelDbCharacterVoiceSubtitle = cache(() =>
  useExcelDbMapMany<CharacterVoiceSubtitleExcel, "CharacterVoiceGroupId">(
    "CharacterVoiceSubtitle",
    "CharacterVoiceGroupId",
  ),
);

export const useExcelDbVoice = cache(() =>
  useExcelDbMapSingle<VoiceExcel, "Id">("Voice", "Id"),
);

export const useExcelDbVoiceCommon = cache(() =>
  useExcelDbMapSingle<VoiceCommonExcel, "VoiceEvent">(
    "VoiceCommon",
    "VoiceEvent",
  ),
);

export const useExcelDbVoiceLogicEffect = cache(() =>
  useExcelDbMapSingle<VoiceLogicEffectExcel, "LogicEffectNameHash">(
    "VoiceLogicEffect",
    "LogicEffectNameHash",
  ),
);
export const useExcelDbVoiceRoomException = cache(() =>
  useExcelDbMapSingle<VoiceRoomExceptionExcel, "CostumeUniqueId">(
    "VoiceRoomException",
    "CostumeUniqueId",
  ),
);
export const useExcelDbVoiceSpine = cache(() =>
  useExcelDbMapSingle<VoiceSpineExcel, "Id">("VoiceSpine", "Id"),
);

export const useExcelDbCharacterDialog = cache(() =>
  useExcelDbMapMany<CharacterDialogExcel, "CharacterId">(
    "CharacterDialog",
    "CharacterId",
  ),
);

export const useExcelDbCharacterDialogEvent = cache(() =>
  useExcelDbMapMany<CharacterDialogEventExcel, "CostumeUniqueId">(
    "CharacterDialogEvent",
    "CostumeUniqueId",
  ),
);
export const useExcelDbCharacterDialogSubtitle = cache(() =>
  useExcelDbMapMany<CharacterDialogSubtitleExcel, "CharacterId">(
    "CharacterDialogSubtitle",
    "CharacterId",
  ),
);
