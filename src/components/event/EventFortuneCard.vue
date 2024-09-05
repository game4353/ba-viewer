<template>
  <div class="flex flex-row gap-2">
    <GameImg :path="card.IconPath" />
  </div>
</template>

<script setup lang="ts">
import type { EventContentFortuneGachaExcel } from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/EventContentFortuneGachaExcelTable.json";

const props = defineProps({
  eid: {
    type: Number,
    required: true,
  },
});

const cards = Object.fromEntries(
  (DataList as EventContentFortuneGachaExcel[]).map((v) => [
    v.FortuneGachaGroupId,
    v,
  ]),
);
const card = cards[props.eid];
</script>
