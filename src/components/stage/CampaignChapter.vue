<template>
  <Loading v-if="obj == null" />
  <div v-else class="flex flex-col">
    <div v-for="sid in obj.NormalCampaignStageId" :key="sid">
      <CampaignStage :stage-id="sid" />
    </div>
    <v-divider />
    <div v-for="sid in obj.HardCampaignStageId" :key="sid">
      <CampaignStage :stage-id="sid" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { CampaignChapterExcel } from "@/assets/game/excelType";
import { ReadonlyDeep } from "type-fest";

defineProps({
  obj: {
    type: Object as PropType<ReadonlyDeep<CampaignChapterExcel>>,
    required: true,
  },
});

// name 794489241
</script>
