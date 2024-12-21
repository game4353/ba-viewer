<template>
  <Loading v-if="sortedEvents == null" />
  <div v-else class="flex flex-row flex-wrap gap-4 p-1 w-full">
    <router-link
      :to="`/grandassault/${data.SeasonId}`"
      class="no-decoration"
      v-for="(data, i) of sortedEvents"
      :key="i"
    >
      <ERaidBanner :data />
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { ERR_HANDLE } from "@/components/warn/error";
import { useExcelEliminateRaidSeasonManage } from "@/utils/data/excel/raid";
const errHandle = inject(ERR_HANDLE)!;

const sortedEvents = computed(() => {
  const map = useExcelEliminateRaidSeasonManage().value.unwrapOrElse(errHandle);
  if (map == null) return map;
  return [...map.values()].sort(
    (a, b) =>
      new Date(a.SeasonStartData).getTime() -
      new Date(b.SeasonStartData).getTime(),
  );
});
</script>
