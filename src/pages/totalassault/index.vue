<template>
  <v-tabs
    class="mb-2"
    v-model="tab"
    align-tabs="center"
    color="deep-purple-accent-4"
  >
    <v-tab v-for="(v, i) of tabs" :key="i" :value="i">{{ v }}</v-tab>
  </v-tabs>

  <v-tabs-window v-model="tab">
    <v-tabs-window-item :value="0">
      <RaidList :events="raid" />
    </v-tabs-window-item>
    <v-tabs-window-item :value="1">
      <RaidRank />
    </v-tabs-window-item>
  </v-tabs-window>
</template>

<script setup lang="ts">
import type { RaidSeasonManageExcel } from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/RaidSeasonManageExcelTable.json";

const tab = ref(0);
const raid = DataList as RaidSeasonManageExcel[];
const tabs = ["シーズン", "ランキング"];
</script>
