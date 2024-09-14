<template>
  <div v-for="(tab, i) in tabs" :key="i">
    <EventStage v-for="(stage, j) in tab" :key="j" :stage />
  </div>
</template>

<script setup lang="ts">
import type {
  EventContentStageExcel,
  StageDifficulty,
} from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/EventContentStageExcelTable.json";

const route = useRoute<"/event/[id]/stage">();
const eid = Number(route.params.id);
const stages = (DataList as EventContentStageExcel[]).filter(
  (v) => v.EventContentId === eid,
);

const diffs: (keyof typeof StageDifficulty)[] = [];
const tabs: EventContentStageExcel[][] = [];
stages.forEach((v) => {
  const diff = v.StageDifficulty;
  if (!diffs.includes(diff)) {
    diffs.push(diff);
    tabs.push([]);
  }
  const i = diffs.indexOf(diff);
  tabs[i].push(v);
});
</script>
