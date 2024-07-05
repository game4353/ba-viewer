<template>
  <div class="flex flex-row flex-wrap gap-4 p-1 w-full">
    <router-link
      :to="`/event/${v.OpenRaidBossGroup[0]}`"
      class="no-decoration"
      v-for="(v, i) of sortedEvents"
      :key="i"
    >
      <v-card>
        <div class="flex flex-column items-center">
          <div class="relative w-56 h-20">
            <GameImg
              :path="getBoss(v.OpenRaidBossGroup[0])!.BGPath"
              class="w-56 absolute"
            />
            <GameImg
              :path="getBoss(v.OpenRaidBossGroup[0])!.PortraitPath"
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
import type {
  RaidSeasonManageExcel,
  RaidStageExcel,
} from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/RaidStageExcelTable.json";

const raids = DataList as RaidStageExcel[];

const props = defineProps({
  events: {
    type: Object as PropType<RaidSeasonManageExcel[]>,
    required: true,
  },
});

const sortedEvents = props.events.map((v) => v);
sortedEvents.sort(
  (a, b) =>
    new Date(a.SeasonStartData).getTime() -
    new Date(b.SeasonStartData).getTime(),
);

function getBoss(boss: string) {
  return raids.find((v) => v.RaidBossGroup === boss);
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
