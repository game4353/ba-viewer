<template>
  <Loading v-if="stage == null" />
  <div
    v-else
    class="flex flex-col"
    :class="stage.ContentType === ContentType.CampaignSubStage ? 'hidden' : ''"
  >
    {{ stage.Name }}
    <!-- <div>{{ stage.StageNumber }}</div> -->
    <div class="flex flex-row gap-2 grow-0">
      <div>おすすめ Lv. {{ stage.RecommandLevel }}</div>
      <div>制限時間: {{ stage.BattleDuration / 1000 }}秒</div>
      <div>EXP: {{ stage.TacticRewardExp }}</div>
      <div class="w-8 h-auto">
        <v-img
          :src="stageTopographyIcon(stage.StageTopography)"
          height="30px"
        />
      </div>
      <Parcels
        :types="[stage.StageEnterCostType]"
        :ids="[stage.StageEnterCostId]"
        :amounts="[stage.StageEnterCostAmount]"
        :scaling="{ w: 40 }"
      />
      <Ground :ground-id="stage.GroundId" />
    </div>
    <div class="mb-2">
      <div v-for="(line, key) in stars" :key>★ {{ line }}</div>
    </div>
    <div class="hidden flex flex-row gap-2 grow-0">
      <div>map: {{ stage.StrategyMap }}</div>
      <div>skip: {{ stage.StrategySkipGroundId }}</div>
      <div>content: {{ ContentType[stage.ContentType] }}</div>
    </div>
    <div class="hidden flex flex-row gap-2 grow-0">
      <div>派遣部隊: {{ stage.StageEnterEchelonCount }}</div>
      <div>party type: {{ stage.EchelonExtensionType }}</div>
      <div>Fixed party: {{ stage.FixedEchelonId }}</div>
    </div>
    <StageReward :rid="stage.CampaignStageRewardId" type="campaign" />
    <v-divider />
  </div>
</template>

<script setup lang="ts">
import { ContentType } from "@/assets/game/excelType";
import { stageTopographyIcon } from "@/components/GameImg/icon";
import { ERR_HANDLE } from "@/components/warn/error";
import { useExcelCampaignStage } from "@/utils/data/excel/stage";

const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  stageId: {
    type: Number,
    required: true,
  },
});
const stage = computed(() =>
  useExcelCampaignStage()
    .value.andThen((map) => map.getResult(props.stageId))
    .unwrapOrElse(errHandle),
);

const stars = computed(() => {
  return [
    "任務完了",
    `Sランクを${stage.value?.StarConditionTacticRankSCount}回獲得`,
    `${stage.value?.StarConditionTurnCount}ターン以内にステージクリア`,
  ];
});
</script>
