import {
  MissionCompleteConditionType,
  type EventContentMissionExcel,
  type GuideMissionExcel,
} from "@/assets/game/types/flatDataExcel";
import { NotImplementErr } from "@/utils/error";
import { Local } from "@/utils/i18n/localize";
import { Err, Result } from "@/utils/result";
import type { ReadonlyDeep } from "type-fest";
import { useItem } from "../parcel/item/item";

function format(str: string, ...args: any[]) {
  args.forEach((v, i) => (str = str.replace(`{${i}}`, String(v))));
  return str;
}

export function missionDescription(
  m: ReadonlyDeep<GuideMissionExcel> | ReadonlyDeep<EventContentMissionExcel>,
) {
  const descRaw = Local.useLocalize(m.Description);
  const p0 = m.CompleteConditionParameter[0];
  const p1 = m.CompleteConditionParameter[1];
  const c = m.CompleteConditionCount;

  switch (m.CompleteConditionType) {
    case MissionCompleteConditionType.Reset_ClearSpecificChaserDungeonCount:
    case MissionCompleteConditionType.Reset_ClearSchoolDungeonTimeLimitFromSecond:
    case MissionCompleteConditionType.Reset_ClearSpecificSchoolDungeonCount:
    case MissionCompleteConditionType.Reset_ClearSpecificFindGiftAndBloodDungeonCount:
    case MissionCompleteConditionType.Reset_ClearFindGiftAndBloodDungeonTimeLimitFromSecond:
    case MissionCompleteConditionType.Reset_ClearChaserDungeonTimeLimitFromSecond:
      return descRaw.value?.map((desc) => format(desc, p0, c)); // TODO: id to stage name

    case MissionCompleteConditionType.Reset_GetSpecificItemCount:
      return Result.all([
        descRaw.value,
        useItem(p0).value.andThen((item) => item.name.value),
      ]).map(([desc, name]) => format(desc, name, c));

    case MissionCompleteConditionType.Reset_ClearCampaignStageTimeLimitFromSecond:
      // TODO: id(?) to stage number
      return descRaw.value?.map((desc) =>
        format(
          desc,
          String(p0).slice(1, 3),
          String(p0).slice(6),
          { "1": "Normal", "2": "Hard" }[String(p0).slice(3, 4)],
          c,
        ),
      );

    case MissionCompleteConditionType.Reset_ClearSpecificCampaignStageCount:
      // TODO: id(?) to stage number
      return descRaw.value?.map((desc) =>
        format(
          desc,
          String(p0).slice(1, 3),
          String(p0).slice(6),
          { "1": "Normal", "2": "Hard" }[String(p0).slice(3, 4)],
        ),
      );

    case MissionCompleteConditionType.Reset_ClearSpecificScenario:
      // TODO: id(?) to scenario number
      return descRaw.value?.map((desc) =>
        format(desc, String(p0).slice(1, 2), String(p0).slice(2, 4)),
      );

    case MissionCompleteConditionType.Reset_CharacterAtSpecificLevelCount:
      return descRaw.value?.map((desc) => format(desc, p0, c));

    case MissionCompleteConditionType.Reset_GetEquipmentWithTagCount:
    case MissionCompleteConditionType.Reset_KillEnemyWithTagCount:
    case MissionCompleteConditionType.Reset_CraftCount:
    case MissionCompleteConditionType.Reset_ClearBattleWithTagCount:
    case MissionCompleteConditionType.Reset_CompleteScheduleWithTagCount:
    case MissionCompleteConditionType.Reset_CompleteScheduleGroupCount:
    case MissionCompleteConditionType.Reset_ShopBuyActionPointCount:
    case MissionCompleteConditionType.Reset_UseActionPoint:
    case MissionCompleteConditionType.Reset_AccountLevelUp:
    case MissionCompleteConditionType.Achieve_TotalLoginCount:
    case MissionCompleteConditionType.Reset_ClearCampaignStageDifficultyNormal:
    case MissionCompleteConditionType.Reset_ClearCampaignStageDifficultyHard:
    case MissionCompleteConditionType.Reset_GetItemWithTagCount:
    case MissionCompleteConditionType.Achieve_EquipmentLevelUpCount:
    case MissionCompleteConditionType.Achieve_TotalGetClearStarCount:
    case MissionCompleteConditionType.Achieve_ClearFindGiftAndBloodDungeonCount:
    case MissionCompleteConditionType.Reset_UseGem:
    case MissionCompleteConditionType.Reset_GetFurnitureWithTagCount:
    case MissionCompleteConditionType.Achieve_CharacterLevelUpCount:
    case MissionCompleteConditionType.Reset_KillSpecificEnemyCount:
    case MissionCompleteConditionType.Achieve_JoinArenaCount:
    case MissionCompleteConditionType.Achieve_UseGold:
    case MissionCompleteConditionType.Reset_GetCharacterCount:
    case MissionCompleteConditionType.Reset_GetCharacterWithTagCount:
    case MissionCompleteConditionType.Reset_AcademyLocationAtSpecificRank:
    case MissionCompleteConditionType.Reset_GetCafeRank:
    case MissionCompleteConditionType.Reset_CompleteScheduleCount:
    case MissionCompleteConditionType.Reset_CharacterTranscendenceCount:
    case MissionCompleteConditionType.Achieve_ClearSchoolDungeonCount:
    case MissionCompleteConditionType.Achieve_EquipmentTierUpCount:
    case MissionCompleteConditionType.Achieve_GetComfortPoint:
    case MissionCompleteConditionType.Achieve_CharacterSkillLevelUpCount:
    case MissionCompleteConditionType.Reset_EventClearCampaignStageDifficultyHard:
    case MissionCompleteConditionType.Reset_EventClearSpecificCampaignStageCount:
    case MissionCompleteConditionType.Reset_CompleteStage:
    case MissionCompleteConditionType.Reset_SelectedMissionFulfill:
    case MissionCompleteConditionType.Reset_CompleteMission:
      return descRaw.value?.map((desc) => format(desc, c));

    case MissionCompleteConditionType.Reset_EventCompleteCampaignStageMinimumTurn:
    case MissionCompleteConditionType.Reset_ClearEventStageTimeLimitFromSecond:
      return descRaw.value.map((desc) =>
        format(
          desc,
          String(p1).slice(-2),
          { "2": "Quest", "3": "Challenge" }[String(p1).slice(-4, -3)],
          c,
        ),
      );

      console.error(
        m.CompleteConditionType,
        c,
        m.CompleteConditionParameter,
        m,
      );
      return descRaw.value;

    default:
      console.error(
        m.CompleteConditionType,
        c,
        m.CompleteConditionParameter,
        m,
      );
      return Err(
        NotImplementErr.from(
          "MissionCompleteConditionType." +
            MissionCompleteConditionType[m.CompleteConditionType],
        ),
      );
  }
}
