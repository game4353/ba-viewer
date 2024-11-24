<template>
  <div class="flex flex-row flex-wrap gap-4 p-1 w-full">
    <router-link
      :to="`/event/${v.EventContentId}`"
      class="no-decoration"
      v-for="(v, i) of events"
      :key="i"
      :style="`order: ${new Date(v.EventContentOpenTime).getTime() / 10000};`"
    >
      <v-card>
        <div class="flex flex-column items-center">
          <GameImg :path="v.MainBannerImagePath" class="w-56" />
          <div>{{ v.EventContentOpenTime }}</div>
          <div>
            {{
              v.EventContentCloseTime.startsWith("2099")
                ? "∞"
                : v.EventContentCloseTime
            }}
          </div>
        </div>
      </v-card>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { ReadonlyDeep } from "type-fest";
import type { EventContentSeasonExcel } from "~game/types/flatDataExcel";

defineProps({
  events: {
    type: Object as PropType<ReadonlyDeep<EventContentSeasonExcel>[]>,
    required: true,
  },
});
</script>

<style scoped>
.v-card {
  transition: transform 0.2s ease-in-out;
}

.v-card:hover {
  transform: scale(1.05);
}
</style>
