<template>
  <div class="flex flex-row">
    <div
      class="flex flex-col"
      :class="prob(reward) === 0 ? 'hidden' : ''"
      v-for="(reward, key) in rewards"
      :key
    >
      <Parcel
        :type="
          'RewardParcelType' in reward
            ? reward.RewardParcelType
            : reward.StageRewardParcelType
        "
        :pid="
          'RewardParcelId' in reward
            ? reward.RewardParcelId
            : reward.StageRewardId
        "
        :amount="
          'RewardParcelAmount' in reward
            ? reward.RewardParcelAmount
            : reward.StageRewardAmount
        "
        :tag="'RewardTag' in reward ? reward.RewardTag : undefined"
        :scaling="{ r: 0.3 }"
        route
      />
      <p class="text-center" v-if="prob(reward) !== 10000">
        {{ prob(reward) / 100 }}%
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {
  CampaignStageRewardExcel,
  GroundModuleRewardExcel,
  SchoolDungeonRewardExcel,
  WeekDungeonRewardExcel,
} from "@/assets/game/excelType";
import {
  useExcelCampaignStageReward,
  useExcelGroundModuleReward,
  useExcelSchoolDungeonReward,
  useExcelWeekDungeonReward,
} from "@/utils/data/excel/stage";
import { noDefault } from "@/utils/misc";
import type { ReadonlyDeep } from "type-fest";
import { ERR_HANDLE } from "../warn/error";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  rid: {
    type: Number,
    required: true,
  },
  type: {
    type: String as PropType<"week" | "school" | "campaign" | "module">,
    required: true,
  },
});

const map = computed(() => {
  switch (props.type) {
    case "week":
      return useExcelWeekDungeonReward().value;
    case "school":
      return useExcelSchoolDungeonReward().value;
    case "campaign":
      return useExcelCampaignStageReward().value;
    case "module":
      return useExcelGroundModuleReward().value;
    default:
      return noDefault(props.type);
  }
});

const rewards = computed(() => {
  return map.value
    .andThen2((map) => map.getResult(props.rid))
    .unwrapOrElse(errHandle);
});

function prob(
  reward:
    | ReadonlyDeep<WeekDungeonRewardExcel>
    | ReadonlyDeep<SchoolDungeonRewardExcel>
    | ReadonlyDeep<CampaignStageRewardExcel>
    | ReadonlyDeep<GroundModuleRewardExcel>,
) {
  if ("StageRewardProb" in reward) return reward.StageRewardProb;
  return reward.RewardParcelProbability;
}
</script>
