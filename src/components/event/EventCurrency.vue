<template>
  <Parcel type="Item" :pid layout="icon" />
</template>

<script setup lang="ts">
import type {
  EventContentCurrencyItemExcel,
  EventContentItemType,
} from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/EventContentCurrencyItemExcelTable.json";
import { ASSERT_UNIQUE_FILTER } from "../warn/error";

const props = defineProps({
  eid: {
    type: Number,
    required: true,
  },
  eit: {
    type: String as PropType<keyof typeof EventContentItemType>,
    required: true,
  },
});

const assertUniqueFilter = inject(ASSERT_UNIQUE_FILTER)!;
const item = assertUniqueFilter(DataList as EventContentCurrencyItemExcel[], [
  ["EventContentId", props.eid],
  ["EventContentItemType", props.eit],
]);
const pid = item.ItemUniqueId;
</script>
