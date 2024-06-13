<template>
  <ParcelCommon
    :amount
    :iconPath="item.Icon"
    :layout
    :rarity="item.Rarity"
    :scale
    :tag
  />
</template>

<script setup lang="ts">
import type { CurrencyExcel, RewardTag } from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/CurrencyExcelTable.json";
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
  scale: Number,
  tag: {
    type: String as PropType<keyof typeof RewardTag>,
  },
});
const assertSome = inject(ASSERT_SOME)!;
const items = DataList as CurrencyExcel[];
const dict = Object.fromEntries(items.map((v) => [v.ID, v]));

const item = computed(() => dict[props.pid]);
assertSome(item.value, 500, `Unable to find currency id (${props.pid}).`);
</script>
