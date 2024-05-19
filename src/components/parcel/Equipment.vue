<template>
  <ParcelCommon :amount :iconPath="item.Icon" :rarity="item.Rarity" :iconOnly />
</template>

<script setup lang="ts">
import type { EquipmentExcel } from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/EquipmentExcelTable.json";

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
const item = (DataList as EquipmentExcel[]).find((o) => o.Id === props.pid)!;
</script>
