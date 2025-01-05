<template>
  <div class="flex flex-row flex-wrap">
    <MRaidBanner
      class="m-4"
      v-for="season in seasons"
      :key="season.SeasonId"
      :season
    />
  </div>
</template>

<script setup lang="ts">
import { ERR_HANDLE } from "@/components/warn/error";
import { useExcelMultiFloorRaidSeasonManage } from "@/utils/data/excel/raid";
const errHandle = inject(ERR_HANDLE)!;

const seasons = computed(() =>
  useExcelMultiFloorRaidSeasonManage()
    .value.map((map) => [...map.values()])
    .unwrapOrElse(errHandle),
);
</script>
