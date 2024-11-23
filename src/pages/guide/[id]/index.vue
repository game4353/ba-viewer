<template>
  <WIP />
  <div class="flex flex-col gap-8 w-min" v-if="guide && tabs">
    <div class="flex flex-row">
      <GameImg :path="guide.LobbyBannerImage" class="h-40" />
      <div class="flex grow items-center">
        <GameImg :path="guide.TitleImage" class="w-full" />
      </div>
      <GuideMission v-for="(mission, j) in tabs[0]" :key="j" :mission />
    </div>

    <div class="flex flex-row gap-2" v-for="(tab, i) in tabs.slice(1)" :key="i">
      <GuideMission v-for="(mission, j) in tab" :key="j" :mission />
    </div>
  </div>
</template>

<script setup lang="ts">
import GuideMission from "@/components/guide/GuideMission.vue";
import {
  useExcelGuideMission,
  useExcelGuideMissionSeason,
} from "@/utils/data/excel/guide";
import { fail } from "@/utils/misc";

const route = useRoute<"/guide/[id]/">();
const gid = Number(route.params.id);

const guide = computed(() =>
  useExcelGuideMissionSeason()
    .value?.andThen((map) => map.getResult(gid))
    .unwrapOrElse(fail),
);

const tabs = computed(() => {
  const missions = useExcelGuideMission()
    .value?.andThen((map) => map.getResult(gid))
    .unwrapOrElse(fail);
  if (missions == null) return undefined;
  const map = Map.groupBy(missions, (m) => m.TabNumber);
  return Array.from({ length: map.size }, (_, i) => map.get(i));
});
</script>
