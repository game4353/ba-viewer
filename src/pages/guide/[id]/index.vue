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
import type {
  GuideMissionExcel,
  GuideMissionSeasonExcel,
} from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/GuideMissionExcelTable.json";
// @ts-ignore
import { DataList as d2 } from "~game/excel/GuideMissionSeasonExcelTable.json";

import { ASSERT_UNIQUE_FILTER } from "@/components/warn/error";
import GuideMission from "@/components/guide/GuideMission.vue";

const route = useRoute<"/guide/[id]/">();
const gid = Number(route.params.id);

const tabs: GuideMissionExcel[][] = [];
const assertUniqueFilter = inject(ASSERT_UNIQUE_FILTER)!;

const guide = assertUniqueFilter(
  d2 as GuideMissionSeasonExcel[],
  [["Id", gid]],
  404,
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
