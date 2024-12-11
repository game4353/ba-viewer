<template>
  <div class="flex flex-row gap-2 h-fit">
    <v-tabs v-model="tab" bg-color="secondary" direction="vertical">
      <v-tab v-for="(r, key) in rounds" :key :value="key">
        {{ r.TreasureRound }}
      </v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item
        class="m-2"
        v-for="(round, key) in rounds"
        :key
        :value="key"
      >
        <EventTreasureRound :round :scale :scaled-w :scaled-h :scale-type />
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>

<script setup lang="ts">
import { EventContentTreasureRoundExcel } from "@/assets/game/types/flatDataExcelDb";
import { ReadonlyDeep } from "type-fest";

defineProps({
  rounds: {
    type: Array as PropType<ReadonlyDeep<EventContentTreasureRoundExcel>[]>,
    required: true,
  },
  scale: Number,
  scaledW: Number,
  scaledH: Number,
  scaleType: String as PropType<"min" | "max">,
});

const tab = ref(0);
</script>

<style scoped lang="scss">
.h {
  height: 800px;
}
</style>
