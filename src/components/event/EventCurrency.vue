<template>
  <Parcel
    v-if="item"
    :type="ParcelType.Item"
    :pid="item.ItemUniqueId"
    layout="icon"
  />
</template>

<script setup lang="ts">
import {
  ParcelType,
  type EventContentItemType,
} from "~game/types/flatDataExcel";
import { useExcelEventContentCurrencyItem } from "@/utils/data/excel/event";
import { fail } from "@/utils/misc";

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

const table = useExcelEventContentCurrencyItem();
const item = computed(() =>
  table.value
    ?.unwrapOrElse(fail)
    ?.get(props.eid)
    ?.find((v) => v.EventContentItemType === props.eit),
);
</script>
