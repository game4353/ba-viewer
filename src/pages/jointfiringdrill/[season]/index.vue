<template>
  <Loading v-if="season == null" />
  <TAStage v-else :season />
</template>

<script setup lang="ts">
import { ERR_HANDLE } from "@/components/warn/error";
import { useExcelTimeAttackDungeonSeasonManage } from "@/utils/data/excel/stage";
const errHandle = inject(ERR_HANDLE)!;

const route = useRoute<"/jointfiringdrill/[season]/">();
const seasonId = computed(() => Number(route.params.season));

const season = computed(() =>
  useExcelTimeAttackDungeonSeasonManage()
    .value.andThen2((map) => map.getResult(seasonId.value))
    .unwrapOrElse(errHandle),
);
</script>
