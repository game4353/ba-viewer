<template>
  <div v-if="rewards" class="flex flex-row flex-wrap gap-4">
    <div
      v-for="(reward, key) in rewards"
      :key
      class="flex flex-row gap-1 align-center"
    >
      <EventReward :reward />
    </div>
  </div>
</template>

<script setup lang="ts">
import { EventContentStageTotalRewardExcel } from "@/assets/game/types/flatDataExcel";
import { ReadonlyDeep } from "type-fest";

defineProps({
  rewards: {
    type: Array as PropType<ReadonlyDeep<EventContentStageTotalRewardExcel>[]>,
    required: true,
  },
});
</script>
