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
      <EventList :events="v.value" />
    </v-tabs-window-item>
  </v-tabs-window>
</template>

<script setup lang="ts">
import {
  EventContentType,
  type EventContentSeasonExcel,
} from "~game/types/flatDataExcel";
import { ReadonlyDeep } from "type-fest";
import { useExcelEventContentSeason } from "@/utils/data/excel/event";
import { fail } from "@/utils/misc";

const tab = ref(0);

const table = useExcelEventContentSeason();

type Data = ReadonlyDeep<EventContentSeasonExcel>;
const normal = ref<Data[]>([]);
const rerun = ref<Data[]>([]);
const forever = ref<Data[]>([]);
const mini = ref<Data[]>([]);
const all = ref<Data[]>([]);
const tabs = {
  初回: normal,
  復刻: rerun,
  常設: forever,
  総決算: mini,
  全部: all,
};

watchEffect(() => {
  const data = table.value?.unwrapOrElse(fail);
  if (data == null) return;

  for (const arr of data.values()) {
    for (const v of arr) {
      const type = v.EventContentType;
      if (![EventContentType.Stage, EventContentType.MiniEvent].includes(type))
        continue;
      if (type === EventContentType.MiniEvent) mini.value.push(v);
      else if (v.EventContentCloseTime.startsWith("2099"))
        forever.value.push(v);
      else if (!v.IsReturn) normal.value.push(v);
      else rerun.value.push(v);
      all.value.push(v);
    }
  }
});
</script>
