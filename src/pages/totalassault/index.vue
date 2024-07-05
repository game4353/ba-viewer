<template>
  <v-infinite-scroll :height="800" :items="items" :onLoad="load">
    <template v-for="item in items" :key="item">
      <div>
        <div class="bg-slate-800 mt-3 mb-1">
          Rank {{ item.Rank }} Score {{ item.BestRankingPoint }}
          {{ item.Nickname[0] + "○".repeat(item.Nickname.length - 1) }}
        </div>
        <div class="flex flex-row">
          <MyCharacter
            v-for="(c, i) in [
              ...item.RaidTeamSettingDB.MainCharacterDBs,
              ...item.RaidTeamSettingDB.SupportCharacterDBs,
            ]"
            :key="i"
            :cid="c.UniqueId"
            :scale="0.4"
            :level="c.Level"
            :star="c.StarGrade + c.WeaponStarGrade"
          />
        </div>
      </div>
    </template>
  </v-infinite-scroll>

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
      <RaidList :events="v" />
    </v-tabs-window-item>
  </v-tabs-window>
</template>

<script setup lang="ts">
import type {
  RaidSeasonManageExcel,
  EliminateRaidSeasonManageExcel,
} from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList as d1 } from "~game/excel/RaidSeasonManageExcelTable.json";
// @ts-ignore
import { DataList as d2 } from "~game/excel/EliminateRaidSeasonManageExcelTable.json";

const tab = ref(0);
const raid = d1 as RaidSeasonManageExcel[];
const eRaid = d2 as EliminateRaidSeasonManageExcel[];
console.log(eRaid[0]);
const tabs = {
  初回: raid,
  // 復刻: eRaid,
};

const items = ref<any[]>([]);

async function getRank(rank: number) {
  const start = rank.toString().padStart(8, "0");
  const end = (rank + 29).toString().padStart(8, "0");
  const fn = `rank_${start}_${end}`;
  return await import(`../../../data/json/Rank/${fn}.json`);
}

async function load({ done }: { done: any }) {
  // Perform API call
  const res = await getRank(items.value.length + 1);
  items.value.push(...res.OpponentUserDBs);
  done("ok");
}
</script>
