<template>
  <div class="flex flex-row flex-wrap gap-4 p-1 w-full">
    <router-link
      :to="`/event/${v.EventContentId}`"
      class="no-decoration"
      v-for="(v, i) of sortedEvents"
      :key="i"
    >
      <v-card>
        <div class="flex flex-column items-center">
          <GameImg :path="v.MainBannerImagePath + '_jp'" class="w-56" />
          <div>{{ v.EventContentOpenTime }}</div>
          <div>{{ v.EventContentCloseTime }}</div>
        </div>
      </v-card>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import type { EventContentSeasonExcel } from "~game/types/flatDataExcel";

const props = defineProps({
  events: {
    type: Object as PropType<EventContentSeasonExcel[]>,
    required: true,
  },
});

const sortedEvents = props.events.map((v) => v);
sortedEvents.sort(
  (a, b) =>
    new Date(a.EventContentOpenTime).getTime() -
    new Date(b.EventContentOpenTime).getTime(),
);
</script>

<style scoped>
.v-card {
  transition: transform 0.2s ease-in-out;
}

.v-card:hover {
  transform: scale(1.05);
}
</style>
