<template>
  <Loading v-if="sortedEvents == null" />
  <div v-else class="flex flex-row flex-wrap gap-4 p-1 w-full">
    <router-link
      :to="`/event/${v.OpenRaidBossGroup[0]}`"
      class="no-decoration"
      v-for="(v, i) of sortedEvents"
      :key="i"
    >
      <v-card>
        <div class="flex flex-col items-center">
          <div class="relative w-56 h-20">
            <GameImg
              :path="getBoss(v.OpenRaidBossGroup[0]).map((o) => o.BGPath)"
              class="w-56 absolute"
            />
            <GameImg
              :path="getBoss(v.OpenRaidBossGroup[0]).map((o) => o.PortraitPath)"
              class="w-56 absolute"
            />
          </div>
          <div>{{ v.SeasonStartData }}</div>
          <div>{{ v.SeasonEndData }}</div>
        </div>
      </v-card>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { ERR_HANDLE } from "@/components/warn/error";
import {
  useExcelRaidSeasonManage,
  useExcelRaidStage,
} from "@/utils/data/excel/raid";
const errHandle = inject(ERR_HANDLE)!;

const sortedEvents = computed(() => {
  const map = useExcelRaidSeasonManage().value.unwrapOrElse(errHandle);
  if (map == null) return map;
  return [...map.values()].sort(
    (a, b) =>
      new Date(a.SeasonStartData).getTime() -
      new Date(b.SeasonStartData).getTime(),
  );
});

function getBoss(boss: string) {
  return useExcelRaidStage().value.andThen((map) =>
    map.getResult(boss).map((arr) => arr[0]),
  );
}
</script>

<style scoped>
.v-card {
  transition: transform 0.2s ease-in-out;
}

.v-card:hover {
  transform: scale(1.05);
}
</style>
