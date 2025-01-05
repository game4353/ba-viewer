<template>
  <div class="flex flex-row flex-wrap">
    <TABanner class="m-4" v-for="season in seasons" :key="season.Id" :season />
  </div>
</template>

<script setup lang="ts">
import { ERR_HANDLE } from "@/components/warn/error";
import { useExcelTimeAttackDungeonSeasonManage } from "@/utils/data/excel/stage";

const errHandle = inject(ERR_HANDLE)!;

const seasons = computed(() =>
  useExcelTimeAttackDungeonSeasonManage()
    .value.map((map) => [...map.values()])
    .unwrapOrElse(errHandle),
);
</script>
