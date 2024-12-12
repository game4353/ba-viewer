<template>
  <p class="h-fit">
    {{ reward.RequiredEventItemAmount }}
  </p>
  <Parcel
    v-for="(_, i) in reward.RewardParcelId"
    :key="i"
    :pid="reward.RewardParcelId[i]"
    :type="reward.RewardParcelType[i]"
    :amount="reward.RewardParcelAmount[i]"
    :scaling="{ r: 0.3 }"
    route
  />
</template>

<script setup lang="ts">
import { ReadonlyDeep } from "type-fest";
import type { EventContentStageTotalRewardExcel } from "~game/types/flatDataExcel";

defineProps({
  reward: {
    type: Object as PropType<ReadonlyDeep<EventContentStageTotalRewardExcel>>,
    required: true,
  },
});
</script>
