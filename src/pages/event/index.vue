<template>
  <v-tabs
    class="mb-2"
    v-model="tab"
    align-tabs="center"
    color="deep-purple-accent-4"
  >
    <v-tab v-for="(v, i) of Object.keys(tabs)" :key="i" :value="i">{{
      v
    }}</v-tab>
  </v-tabs>

  <v-tabs-window v-model="tab">
    <v-tabs-window-item
      v-for="(v, i) of Object.values(tabs)"
      :key="i"
      :value="i"
    >
      <EventList :events="v" />
    </v-tabs-window-item>
  </v-tabs-window>
</template>

<script setup lang="ts">
import type { EventContentSeasonExcel } from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/EventContentSeasonExcelTable.json";

const tab = ref(0);
const events = DataList as EventContentSeasonExcel[];

const normal: EventContentSeasonExcel[] = [];
const rerun: EventContentSeasonExcel[] = [];
const forever: EventContentSeasonExcel[] = [];
const mini: EventContentSeasonExcel[] = [];
const all: EventContentSeasonExcel[] = [];

const tabs = {
  初回: normal,
  復刻: rerun,
  常設: forever,
  総決算: mini,
  全部: all,
};

events.forEach((v) => {
  const type = v.EventContentType;
  if (!["Stage", "MiniEvent"].includes(type)) return;
  if (type === "MiniEvent") mini.push(v);
  else if (v.EventContentCloseTime.startsWith("2099")) forever.push(v);
  else if (!v.IsReturn) normal.push(v);
  else rerun.push(v);
  all.push(v);
});
</script>
