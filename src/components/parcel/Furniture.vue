<template>
  <ParcelCommon :amount :iconPath="item.Icon" :rarity="item.Rarity" :iconOnly />
</template>

<script setup lang="ts">
import type { FurnitureExcel } from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/FurnitureExcelTable.json";

const props = defineProps({
  pid: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
  },
  iconOnly: Boolean,
});
const item = (DataList as FurnitureExcel[]).find((o) => o.Id === props.pid)!;
</script>
