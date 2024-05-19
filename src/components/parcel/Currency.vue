<template>
  <ParcelCommon :amount :iconPath="item.Icon" :rarity="item.Rarity" :iconOnly />
</template>

<script setup lang="ts">
import type { CurrencyExcel } from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/CurrencyExcelTable.json";

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
const item = (DataList as CurrencyExcel[]).find((o) => o.ID === props.pid)!;
</script>
