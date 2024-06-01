<template>
  <div class="flex flex-col gap-8 w-min">
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
import { useRoute } from "vue-router";
import type {
  GuideMissionExcel,
  GuideMissionSeasonExcel,
} from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/GuideMissionExcelTable.json";
// @ts-ignore
import { DataList as d2 } from "~game/excel/GuideMissionSeasonExcelTable.json";

import { INJECT_ERR, INJECT_ERR_FILTER_UNIQUE } from "@/utils/error";
import GuideMission from "@/components/guide/GuideMission.vue";

const route = useRoute();
const id = route.params.id;

const setError = inject(INJECT_ERR)!;
if (Array.isArray(id)) setError(`Invalid id (${id}) from url.`);
const gid = Number(id);

const tabs: GuideMissionExcel[][] = [];
const filterUniqueOrError = inject(INJECT_ERR_FILTER_UNIQUE)!;

const guide = filterUniqueOrError(
  "GuideMissionSeason",
  d2 as GuideMissionSeasonExcel[],
  [["Id", gid]],
);

const missions = (DataList as GuideMissionExcel[]).filter(
  (v) => v.SeasonId === gid,
);
missions.forEach((v) => {
  const tab = v.TabNumber;
  if (tabs[tab] == null) tabs[tab] = [];
  tabs[tab].push(v);
});
</script>
