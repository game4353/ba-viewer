<template>
  <div class="flex flex-col">
    <div class="flex flex-row gap-2 grow-0">
      <div>{{ stage.StageNumber }}</div>
      <div>Lv. {{ stage.RecommandLevel }}</div>
      <div class="w-8 h-auto">
        <v-img :src="Icon[stage.StageTopography]" height="30px" />
      </div>
      <div class="flex flex-row flex-wrap">
        <Parcel
          :type="stage.StageEnterCostType"
          :pid="stage.StageEnterCostId"
          icon-only
          class="h-8"
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
import { Icon } from "../GameImg/icon";

defineProps({
  stage: {
    type: Object as PropType<EventContentStageExcel>,
    required: true,
  },
});
</script>
