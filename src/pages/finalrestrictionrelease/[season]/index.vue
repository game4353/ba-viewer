<template>
  <Loading v-if="season == null" />
  <MRaidStage v-else :season />
</template>

<script setup lang="ts">
import { ERR_HANDLE } from "@/components/warn/error";
import { useExcelMultiFloorRaidSeasonManage } from "@/utils/data/excel/raid";
const errHandle = inject(ERR_HANDLE)!;

const route = useRoute<"/finalrestrictionrelease/[season]/">();
const seasonId = computed(() => Number(route.params.season));

const season = computed(() =>
  useExcelMultiFloorRaidSeasonManage()
    .value.andThen2((map) => map.getResult(seasonId.value))
    .unwrapOrElse(errHandle),
);
</script>
