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
import { useExcelEventContentStageTotalReward } from "@/utils/data/excel/event";
import { fail } from "@/utils/misc";

const props = defineProps({
  eid: {
    type: Number,
    required: true,
  },
});

const rewards = computed(() =>
  useExcelEventContentStageTotalReward()
    .value?.andThen((map) => map.getResult(props.eid))
    .unwrapOrElse(fail),
);
</script>
