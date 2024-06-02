<template>
  <Item :pid icon-only />
</template>

<script setup lang="ts">
import type {
  EventContentCurrencyItemExcel,
  EventContentItemType,
} from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/EventContentCurrencyItemExcelTable.json";
import { INJECT_ERR_FILTER_UNIQUE } from "@/utils/error";

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

const filterUniqueOrError = inject(INJECT_ERR_FILTER_UNIQUE)!;
const item = filterUniqueOrError(
  "EventContentCurrencyItem",
  DataList as EventContentCurrencyItemExcel[],
  [
    ["EventContentId", props.eid],
    ["EventContentItemType", props.eit],
  ],
);
const pid = item.ItemUniqueId;
</script>
