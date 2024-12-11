<template>
  <div class="flex flex-row">
    <div class="flex flex-col" v-for="(reward, key) in rewards" :key>
      <Parcel
        :type="reward.RewardParcelType"
        :pid="reward.RewardId"
        :amount="reward.RewardAmount"
        :tag="reward.RewardTag"
        :scaling="{ r: 0.3 }"
        route
      />
      <p class="text-center" v-if="reward.RewardProb !== 10000">
        {{ reward.RewardProb / 100 }}%
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useExcelEventContentStageReward } from "@/utils/data/excel/event";
import { ERR_HANDLE } from "../warn/error";

const props = defineProps({
  rid: {
    type: Number,
    required: true,
  },
});
const errHandle = inject(ERR_HANDLE)!;

const table = useExcelEventContentStageReward();
const rewards = computed(
  () => table.value?.unwrapOrElse(errHandle)?.get(props.rid) ?? [],
);
</script>
