<template>
  <div v-for="obj in stages" :key="obj.StageId">
    <SchoolStage :obj />
  </div>
</template>

<script setup lang="ts">
import { ERR_HANDLE } from "@/components/warn/error";
import { useExcelSchoolDungeonStage } from "@/utils/data/excel/stage";
const errHandle = inject(ERR_HANDLE)!;

const stages = computed(() =>
  useExcelSchoolDungeonStage()
    .value.map((map) => [...map.values()])
    .unwrapOrElse(errHandle),
);
</script>
