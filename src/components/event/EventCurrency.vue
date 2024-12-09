<template>
  <Parcel
    v-if="item"
    :type="ParcelType.Item"
    :pid="item.ItemUniqueId"
    layout="icon"
  />
</template>

<script setup lang="ts">
import { useExcelEventContentCurrencyItem } from "@/utils/data/excel/event";
import {
  ParcelType,
  type EventContentItemType,
} from "~game/types/flatDataExcel";
import { ERR_HANDLE } from "../warn/error";

const props = defineProps({
  eid: {
    type: Number,
    required: true,
  },
  eit: {
    type: Number as PropType<EventContentItemType>,
    required: true,
  },
});
const errHandle = inject(ERR_HANDLE)!;

const table = useExcelEventContentCurrencyItem();
const item = computed(() =>
  table.value
    ?.unwrapOrElse(errHandle)
    ?.get(props.eid)
    ?.find((v) => v.EventContentItemType === props.eit),
);
</script>
