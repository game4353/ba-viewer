<template>
  <Loading v-if="obj == null" />
  <div v-else class="flex flex-col">
    <div class="flex flex-row gap-2 grow-0">
      <div>{{ obj.WeekDungeonType }}-{{ obj.Difficulty }}</div>
      <div>おすすめ Lv. {{ obj.RecommandLevel }}</div>
      <div>制限時間: {{ obj.BattleDuration / 1000 }}秒</div>
      <Ground :ground-id="obj.GroundId" />
      <div class="w-8 h-auto">
        <v-img :src="stageTopographyIcon(obj.StageTopography)" height="30px" />
      </div>
      <Parcels
        :types="obj.StageEnterCostType"
        :ids="obj.StageEnterCostId"
        :amounts="obj.StageEnterCostAmount"
        :scaling="{ w: 40 }"
      />
    </div>
    <StarGoal
      class="my-2"
      :types="obj.StarGoal"
      :amounts="obj.StarGoalAmount"
    />
    <StageReward
      v-if="obj.StageRewardId > 0"
      :rid="obj.StageRewardId"
      type="week"
    />
    <ModuleReward v-else :stage-id="obj.StageId" />
    <v-divider />
  </div>
</template>

<script setup lang="ts">
import { WeekDungeonExcel } from "@/assets/game/excelType";
import { stageTopographyIcon } from "@/components/GameImg/icon";
import { ReadonlyDeep } from "type-fest";

defineProps({
  obj: {
    type: Object as PropType<ReadonlyDeep<WeekDungeonExcel>>,
    required: true,
  },
});
</script>
