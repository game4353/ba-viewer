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
        <EventTreasureRound :round :scaling />
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>

<script setup lang="ts">
import { EventContentTreasureRoundExcel } from "@/assets/game/types/flatDataExcelDb";
import { ReadonlyDeep } from "type-fest";
import { ScaleOption } from "../misc/scale";

defineProps({
  rounds: {
    type: Array as PropType<ReadonlyDeep<EventContentTreasureRoundExcel>[]>,
    required: true,
  },
  scaling: Object as PropType<ScaleOption>,
});

const tab = ref(0);
</script>
