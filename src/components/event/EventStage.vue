<template>
  <div class="flex flex-col">
    <div class="flex flex-row gap-2 grow-0">
      <div>{{ stage.StageNumber }}</div>
      <div>Lv. {{ stage.RecommandLevel }}</div>
      <div class="w-8 h-auto">
        <v-img
          :src="stageTopographyIcon(stage.StageTopography)"
          height="30px"
        />
      </div>
      <div class="flex flex-row flex-wrap">
        <Parcel
          :type="stage.StageEnterCostType"
          :pid="stage.StageEnterCostId"
          layout="icon"
          class="w-9"
        />
        {{ stage.StageEnterCostAmount }}
      </div>
    </div>
    <EventStageReward :rid="stage.EventContentStageRewardId" />
  </div>
  <v-divider />
</template>

<script setup lang="ts">
import type { EventContentStageExcel } from "~game/types/flatDataExcel";
import { stageTopographyIcon } from "../GameImg/icon";
import { ReadonlyDeep } from "type-fest";

defineProps({
  stage: {
    type: Object as PropType<ReadonlyDeep<EventContentStageExcel>>,
    required: true,
  },
});
</script>
