<template>
  <v-table fixed-header class="h-full">
    <thead>
      <tr>
        <td></td>
        <td v-for="(n, i) in tokens" :key="i">
          <EventCurrency :eid :eit="n" class="max-w-16" />
        </td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(r, i) in striker" :key="i">
        <td class="bg-striker-dark">
          <MyCharacter :cid="r[0]" :scale="0.3" />
        </td>
        <td v-for="(n, j) in r.slice(1)" :key="j">
          {{ n == null ? "" : `${n / 100}%` }}
        </td>
      </tr>
      <tr v-for="(r, i) in support" :key="i">
        <td class="bg-support-dark">
          <MyCharacter :cid="r[0]" :scale="0.3" />
        </td>
        <td v-for="(n, j) in r.slice(1)" :key="j">
          {{ n == null ? "" : `${n / 100}%` }}
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
import type { EventContentCharacterBonusExcel } from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/EventContentCharacterBonusExcelTable.json";
import EventCurrency from "./EventCurrency.vue";

const props = defineProps({
  eid: {
    type: Number,
    required: true,
  },
});

const bonus = (DataList as EventContentCharacterBonusExcel[]).filter(
  (v) => v.EventContentId === props.eid,
);
const tokenSet = new Set(bonus.map((v) => v.EventContentItemType).flat());
const tokens = Array.from(tokenSet).sort();
const rows = bonus.map((v) => [
  v.CharacterId,
  ...tokens.map((t) => v.BonusPercentage[v.EventContentItemType.indexOf(t)]),
]);
const striker = rows.filter((v) => v[0] < 20000);
const support = rows.filter((v) => v[0] >= 20000);
</script>
