<template>
  <ParcelCommon :amount :iconPath="item.Icon" :rarity="item.Rarity" />
</template>

<script setup lang="ts">
import type { CurrencyExcel } from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/CurrencyExcelTable.json";
import { INJECT_ERR } from "@/utils/error";

const props = defineProps({
  pid: {
    type: Number,
    required: true,
  },
  amount: Number,
  scale: Number,
  iconOnly: Boolean,
});
const setError = inject(INJECT_ERR)!;
const items = DataList as CurrencyExcel[];
const dict = Object.fromEntries(items.map((v) => [v.ID, v]));

const item = computed(() => dict[props.pid]);
if (item == null) setError(`Unable to find item id (${props.pid}).`);
</script>
