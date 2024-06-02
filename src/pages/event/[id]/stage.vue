<template>
  <div v-for="(tab, i) in tabs" :key="i">
    <EventStage v-for="(stage, j) in tab" :key="j" :stage />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import type {
  EventContentStageExcel,
  StageDifficulty,
} from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/EventContentStageExcelTable.json";
import { INJECT_ERR } from "@/utils/error";

const route = useRoute();
const id = route.params.id;

const setError = inject(INJECT_ERR)!;
if (Array.isArray(id)) setError(`Invalid id (${id}) from url.`);
const eid = Number(id);

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
