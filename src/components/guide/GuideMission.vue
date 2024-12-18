<template>
  <div class="flex flex-col w-min">
    <div class="w-full h-16">
      <p :class="descSize">{{ desc?.unwrapOrElse(errHandle) }}</p>
    </div>
    <div class="flex flex-row w-36">
      <Parcel
        v-for="(t, i) in ts"
        :key="i"
        :pid="is[i]"
        :type="t"
        :amount="as[i]"
        :scaling="{ r: 0.27 }"
        route
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLocalize } from "@/utils/i18n/localize";
import { ReadonlyDeep } from "type-fest";
import {
  MissionCompleteConditionType,
  type GuideMissionExcel,
} from "~game/types/flatDataExcel";
import { ERR_HANDLE } from "../warn/error";

const props = defineProps({
  mission: {
    type: Object as PropType<ReadonlyDeep<GuideMissionExcel>>,
    required: true,
  },
});
const errHandle = inject(ERR_HANDLE)!;

const m = props.mission;
const p = m.CompleteConditionParameter[0];
const c = m.CompleteConditionCount;

function format(str: string, ...args: any[]) {
  args.forEach((v, i) => (str = str.replace(`{${i}}`, String(v))));
  return str;
}

const descRaw = computed(() => useLocalize(m.Description));
const desc = computed(() => {
  switch (m.CompleteConditionType) {
    case MissionCompleteConditionType.Reset_ClearSpecificChaserDungeonCount:
    case MissionCompleteConditionType.Reset_ClearSchoolDungeonTimeLimitFromSecond:
    case MissionCompleteConditionType.Reset_ClearSpecificSchoolDungeonCount:
    case MissionCompleteConditionType.Reset_ClearSpecificFindGiftAndBloodDungeonCount:
    case MissionCompleteConditionType.Reset_ClearFindGiftAndBloodDungeonTimeLimitFromSecond:
    case MissionCompleteConditionType.Reset_ClearChaserDungeonTimeLimitFromSecond:
      return descRaw.value?.map((desc) => format(desc, p, c)); // TODO: id to stage name

    case MissionCompleteConditionType.Reset_GetSpecificItemCount:
      return descRaw.value?.map((desc) => format(desc, p, c)); // TODO: id to item

    case MissionCompleteConditionType.Reset_ClearCampaignStageTimeLimitFromSecond:
      // TODO: id(?) to stage number
      return descRaw.value?.map((desc) =>
        format(
          desc,
          String(p).slice(1, 3),
          String(p).slice(6),
          { "1": "Normal", "2": "Hard" }[String(p).slice(3, 4)],
          c,
        ),
      );

    case MissionCompleteConditionType.Reset_ClearSpecificCampaignStageCount:
      // TODO: id(?) to stage number
      return descRaw.value?.map((desc) =>
        format(
          desc,
          String(p).slice(1, 3),
          String(p).slice(6),
          { "1": "Normal", "2": "Hard" }[String(p).slice(3, 4)],
        ),
      );

    case MissionCompleteConditionType.Reset_ClearSpecificScenario:
      // TODO: id(?) to scenario number
      return descRaw.value?.map((desc) =>
        format(desc, String(p).slice(1, 2), String(p).slice(2, 4)),
      );

    case MissionCompleteConditionType.Reset_CharacterAtSpecificLevelCount:
      return descRaw.value?.map((desc) => format(desc, p, c));

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
      return descRaw.value?.map((desc) => format(desc, c));

    default:
      console.error(
        desc,
        m.CompleteConditionType,
        c,
        m.CompleteConditionParameter,
        m,
      );
  }
});

const descSize = computed(() => {
  const str = desc.value?.unwrapOrElse(errHandle);
  if (str == null) return undefined;
  return str.length > 36
    ? "small"
    : str.length > 30
      ? "median"
      : str.length > 18
        ? "big"
        : "extra";
});

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
