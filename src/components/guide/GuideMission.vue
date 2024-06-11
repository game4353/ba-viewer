<template>
  <WIP />
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
        :scale="0.3"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Localize } from "@/utils/localize";
import type { GuideMissionExcel } from "~game/types/flatDataExcel";

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
  case "Reset_ClearSpecificChaserDungeonCount":
  case "Reset_ClearSchoolDungeonTimeLimitFromSecond":
  case "Reset_ClearSpecificSchoolDungeonCount":
  case "Reset_ClearSpecificFindGiftAndBloodDungeonCount":
  case "Reset_ClearFindGiftAndBloodDungeonTimeLimitFromSecond":
  case "Reset_ClearChaserDungeonTimeLimitFromSecond":
    desc = format(desc, p, c); // TODO: id to stage name
    break;
  case "Reset_GetSpecificItemCount":
    desc = format(desc, p, c); // TODO: id to item
    break;
  case "Reset_ClearCampaignStageTimeLimitFromSecond":
    // TODO: id(?) to stage number
    desc = format(
      desc,
      String(p).slice(1, 3),
      String(p).slice(6),
      { "1": "Normal", "2": "Hard" }[String(p).slice(3, 4)],
      c,
    );
    break;
  case "Reset_ClearSpecificCampaignStageCount":
    // TODO: id(?) to stage number
    desc = format(
      desc,
      String(p).slice(1, 3),
      String(p).slice(6),
      { "1": "Normal", "2": "Hard" }[String(p).slice(3, 4)],
    );
    break;
  case "Reset_ClearSpecificScenario":
    // TODO: id(?) to scenario number
    desc = format(desc, String(p).slice(1, 2), String(p).slice(2, 4));
    break;
  case "Reset_CharacterAtSpecificLevelCount":
    desc = format(desc, p, c);
    break;
  case "Reset_GetEquipmentWithTagCount":
  case "Reset_KillEnemyWithTagCount":
  case "Reset_CraftCount":
  case "Reset_ClearBattleWithTagCount":
  case "Reset_CompleteScheduleWithTagCount":
  case "Reset_CompleteScheduleGroupCount":
  case "Reset_ShopBuyActionPointCount":
  case "Reset_UseActionPoint":
  case "Reset_AccountLevelUp":
  case "Achieve_TotalLoginCount":
  case "Reset_ClearCampaignStageDifficultyNormal":
  case "Reset_ClearCampaignStageDifficultyHard":
  case "Reset_GetItemWithTagCount":
  case "Achieve_EquipmentLevelUpCount":
  case "Achieve_TotalGetClearStarCount":
  case "Achieve_ClearFindGiftAndBloodDungeonCount":
  case "Reset_UseGem":
  case "Reset_GetFurnitureWithTagCount":
  case "Achieve_CharacterLevelUpCount":
  case "Reset_KillSpecificEnemyCount":
  case "Achieve_JoinArenaCount":
  case "Achieve_UseGold":
  case "Reset_GetCharacterCount":
  case "Reset_GetCharacterWithTagCount":
  case "Reset_AcademyLocationAtSpecificRank":
  case "Reset_GetCafeRank":
  case "Reset_CompleteScheduleCount":
  case "Reset_CharacterTranscendenceCount":
  case "Achieve_ClearSchoolDungeonCount":
  case "Achieve_EquipmentTierUpCount":
  case "Achieve_GetComfortPoint":
  case "Achieve_CharacterSkillLevelUpCount":
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
