<template>
  <WIP />
  <div v-for="obj in objs" :key="obj.Id">
    <div class="flex flex-row gap-2 grow-0">
      <div>{{ obj.Difficulty }}</div>
      <div>おすすめ Lv. {{ obj.RecommendLevel }}</div>
      <div>制限時間: {{ obj.BattleDuration / 1000 }}秒</div>
      <Ground :ground-id="obj.GroundId" />
    </div>
    {{ obj.RaidCharacterId }}
    {{ obj.BossCharacterId }}
    {{ obj.StatChangeId }}
    <StageReward type="floor" :rid="obj.RewardGroupId" />
  </div>
</template>

<script setup lang="ts">
import { MultiFloorRaidSeasonManageExcel } from "@/assets/game/excelType";
import { ERR_HANDLE } from "@/components/warn/error";
import { useExcelMultiFloorRaidStage } from "@/utils/data/excel/raid";
import { ReadonlyDeep } from "type-fest";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  season: {
    type: Object as PropType<ReadonlyDeep<MultiFloorRaidSeasonManageExcel>>,
    required: true,
  },
});

const objs = computed(() =>
  useExcelMultiFloorRaidStage()
    .value.map((map) => map.getResult(props.season.OpenRaidBossGroupId))
    .unwrapOrElse(errHandle),
);
</script>
