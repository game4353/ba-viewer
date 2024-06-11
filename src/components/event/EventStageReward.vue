<template>
  <div class="flex flex-row">
    <div class="flex flex-col" v-for="(reward, key) in rewards" :key>
      <Parcel
        :type="reward.RewardParcelType"
        :pid="reward.RewardId"
        :amount="reward.RewardAmount"
        :tag="reward.RewardTag"
        :scale="0.3"
      />
      <p class="text-center" v-if="reward.RewardProb !== 10000">
        {{ reward.RewardProb / 100 }}%
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { EventContentStageRewardExcel } from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/EventContentStageRewardExcelTable.json";

const props = defineProps({
  rid: {
    type: Number,
    required: true,
  },
});

const rewards = (DataList as EventContentStageRewardExcel[]).filter(
  (v) => v.GroupId === props.rid,
);
</script>
