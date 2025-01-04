<template>
  <div v-for="obj in stages" :key="obj.StageId">
    <WeekStage :obj />
  </div>
</template>

<script setup lang="ts">
import { ERR_HANDLE } from "@/components/warn/error";
import { useExcelWeekDungeon } from "@/utils/data/excel/stage";

const errHandle = inject(ERR_HANDLE)!;

const stages = computed(() =>
  useExcelWeekDungeon()
    .value.map((map) => [...map.values()])
    .unwrapOrElse(errHandle),
);
</script>
