<template>
  <v-container v-if="rewards">
    <v-row>
      <v-col v-for="(reward, key) in rewards" :key>
        <EventReward :reward />
      </v-col>
    </v-row>
  </v-container>
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
