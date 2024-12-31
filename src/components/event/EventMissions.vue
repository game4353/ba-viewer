<template>
  <div v-if="missions" class="flex flex-col flex-wrap gap-4">
    <div
      v-for="(mission, key) in missions"
      :key
      class="flex flex-col gap-1 items-center"
    >
      <EventMission :mission />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { EventContentMissionExcel } from "~game/excelType";
import type { ReadonlyDeep } from "type-fest";

defineProps({
  missions: {
    type: Array as PropType<ReadonlyDeep<EventContentMissionExcel>[]>,
    required: true,
  },
});
</script>
