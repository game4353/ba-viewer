<template>
  <component :is="route ? 'router-link' : 'div'" :to="`/equipment/${pid}`">
    <ParcelCommon
      :amount
      :iconPath="item.Icon"
      :layout
      :rarity="item.Rarity"
      :scale
      :tag
  /></component>
</template>

<script setup lang="ts">
import type { EquipmentExcel, RewardTag } from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/EquipmentExcelTable.json";
import { ASSERT_SOME } from "../warn/error";

const props = defineProps({
  pid: {
    type: Number,
    required: true,
  },
  amount: Number,
  layout: {
    type: String as PropType<"icon" | "random" | "pack" | "select" | "default">,
  },
  route: Boolean,
  scale: Number,
  tag: {
    type: String as PropType<keyof typeof RewardTag>,
  },
});
const assertSome = inject(ASSERT_SOME)!;
const items = DataList as EquipmentExcel[];
const dict = Object.fromEntries(items.map((v) => [v.Id, v]));

const item = computed(() => dict[props.pid]);
assertSome(item.value, 500, `Unable to find equipment id (${props.pid}).`);
</script>
