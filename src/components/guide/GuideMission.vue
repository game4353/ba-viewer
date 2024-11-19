<template>
  <div class="flex flex-column w-min">
    <div class="w-full h-16">
      <p :class="descSize">{{ desc }}</p>
    </div>
    <div class="flex flex-row w-36">
      <Parcel
        v-for="(t, i) in ts"
        :key="i"
        :pid="is[i]"
        :type="t"
        :amount="as[i]"
        :scale="0.27"
        route
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Localize } from "@/utils/localize";
import {
  MissionCompleteConditionType,
  type GuideMissionExcel,
} from "~game/types/flatDataExcel";

function format(str: string, ...args: any[]) {
  args.forEach((v, i) => (str = str.replace(`{${i}}`, String(v))));
  return str;
}

const props = defineProps({
  mission: {
    type: Object as PropType<GuideMissionExcel>,
    required: true,
  },
});
const m = props.mission;
let desc = Localize.localize(m.Description);
const p = m.CompleteConditionParameter[0];
const c = m.CompleteConditionCount;
switch (m.CompleteConditionType) {
  case MissionCompleteConditionType.Reset_ClearSpecificChaserDungeonCount:
  case MissionCompleteConditionType.Reset_ClearSchoolDungeonTimeLimitFromSecond:
  case MissionCompleteConditionType.Reset_ClearSpecificSchoolDungeonCount:
  case MissionCompleteConditionType.Reset_ClearSpecificFindGiftAndBloodDungeonCount:
  case MissionCompleteConditionType.Reset_ClearFindGiftAndBloodDungeonTimeLimitFromSecond:
  case MissionCompleteConditionType.Reset_ClearChaserDungeonTimeLimitFromSecond:
    desc = format(desc, p, c); // TODO: id to stage name
    break;
  case MissionCompleteConditionType.Reset_GetSpecificItemCount:
    desc = format(desc, p, c); // TODO: id to item
    break;
  case MissionCompleteConditionType.Reset_ClearCampaignStageTimeLimitFromSecond:
    // TODO: id(?) to stage number
    desc = format(
      desc,
      String(p).slice(1, 3),
      String(p).slice(6),
      { "1": "Normal", "2": "Hard" }[String(p).slice(3, 4)],
      c,
    );
    break;
  case MissionCompleteConditionType.Reset_ClearSpecificCampaignStageCount:
    // TODO: id(?) to stage number
    desc = format(
      desc,
      String(p).slice(1, 3),
      String(p).slice(6),
      { "1": "Normal", "2": "Hard" }[String(p).slice(3, 4)],
    );
    break;
  case MissionCompleteConditionType.Reset_ClearSpecificScenario:
    // TODO: id(?) to scenario number
    desc = format(desc, String(p).slice(1, 2), String(p).slice(2, 4));
    break;
  case MissionCompleteConditionType.Reset_CharacterAtSpecificLevelCount:
    desc = format(desc, p, c);
    break;
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
    desc = format(desc, c);
    break;
  default:
    console.error(
      desc,
      m.CompleteConditionType,
      c,
      m.CompleteConditionParameter,
      m,
    );
}
const descSize =
  desc.length > 36
    ? "small"
    : desc.length > 30
      ? "median"
      : desc.length > 18
        ? "big"
        : "extra";

const ts = m.MissionRewardParcelType;
const is = m.MissionRewardParcelId;
const as = m.MissionRewardAmount;
</script>

<style lang="scss" scoped>
.small {
  font-size: 12px;
  line-height: 15px;
}
.median {
  font-size: 13px;
  line-height: 18px;
}
.big {
  @apply text-sm;
}
.extra {
  @apply text-base;
}
</style>
