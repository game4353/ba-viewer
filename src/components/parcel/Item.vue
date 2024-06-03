<template>
  <ParcelCommon :amount :iconPath="item.Icon" :rarity="item.Rarity" :iconOnly />
</template>

<script setup lang="ts">
import type { ItemExcel } from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/ItemExcelTable.json";
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
const items = DataList as ItemExcel[];
const dict = Object.fromEntries(items.map((v) => [v.Id, v]));

const item = computed(() => dict[props.pid]);
if (item == null) setError(`Unable to find item id (${props.pid}).`);
</script>
