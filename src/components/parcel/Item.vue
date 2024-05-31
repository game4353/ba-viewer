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
  amount: {
    type: Number,
  },
  iconOnly: Boolean,
});

const setError = inject(INJECT_ERR)!;

const item = (DataList as ItemExcel[]).find((o) => o.Id === props.pid)!;
if (item == null) setError(`Unable to find item id (${props.pid}).`);
</script>
