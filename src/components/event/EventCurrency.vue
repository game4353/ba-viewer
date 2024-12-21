<template>
  <Parcel
    v-if="item"
    :type="ParcelType.Item"
    :pid="item.ItemUniqueId"
    layout="icon"
  />
</template>

<script setup lang="ts">
import { ReadonlyDeep } from "type-fest";
import {
  EventContentCurrencyItemExcel,
  ParcelType,
  type EventContentItemType,
} from "~game/types/flatDataExcel";

const props = defineProps({
  currency: {
    type: Array as PropType<ReadonlyDeep<EventContentCurrencyItemExcel>[]>,
    required: true,
  },
  eit: {
    type: Number as PropType<EventContentItemType>,
    required: true,
  },
});

const item = computed(() =>
  props.currency.find((v) => v.EventContentItemType === props.eit),
);
</script>
