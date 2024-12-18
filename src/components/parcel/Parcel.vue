<template>
  <Character
    v-if="type === ParcelType.Character"
    :cid="pid"
    :layout
    :route
    :scale
    :scaled-w
    :scaled-h
    :scale-type
    :tag
  />
  <ParcelCommon
    v-else-if="
      [
        ParcelType.Currency,
        ParcelType.Equipment,
        ParcelType.Furniture,
        ParcelType.Item,
      ].includes(type) && parcel
    "
    :parcel
    :amount
    :amountMin
    :amountMax
    :layout
    :route
    :scale
    :scaled-w
    :scaled-h
    :scale-type
    :tag
  />
  <GachaGroup
    v-else-if="type === ParcelType.GachaGroup"
    :pid
    :amount
    :amountMin
    :amountMax
    :scale
    :scaled-w
    :scaled-h
    :scale-type
    :tag
  />
  <Recipe
    v-else-if="type === ParcelType.Recipe"
    :pid
    :amount
    :amountMin
    :amountMax
    :scale
    :scaled-w
    :scaled-h
    :scale-type
    :tag
  />
  <div v-else></div>
</template>

<script setup lang="ts">
import { ParcelType, RewardTag } from "@/assets/game/types/flatDataExcel";
import { PropType } from "vue";
import { ERR_501, ERR_HANDLE } from "../warn/error";
import Character from "./character/Character.vue";
import { getParcel } from "./parcel";
const errHandle = inject(ERR_HANDLE)!;
const error501 = inject(ERR_501)!;

const props = defineProps({
  type: {
    type: Number as PropType<ParcelType>,
    required: true,
  },
  pid: {
    type: Number,
    required: true,
  },
  amount: [Number, String],
  amountMin: Number,
  amountMax: Number,
  scale: Number,
  scaledW: Number,
  scaledH: Number,
  scaleType: String as PropType<"min" | "max">,
  route: Boolean,
  tag: {
    type: Number as PropType<RewardTag>,
  },
  layout: {
    type: String as PropType<"icon" | "random" | "pack" | "select" | "default">,
  },
  // TODO: hover to show name
  hover: String,
});

const done: ParcelType[] = [
  ParcelType.Currency,
  ParcelType.Equipment,
  ParcelType.Furniture,
  ParcelType.Item,
  ParcelType.GachaGroup,
  ParcelType.Recipe,
  ParcelType.Character,
];
watch(
  () => props.type,
  (newVal) => {
    if (!done.includes(newVal)) error501(`ParcelType '${newVal}'`);
  },
  { immediate: true },
);

const parcel = computed(() =>
  getParcel(props.type, Number(props.pid)).value?.unwrapOrElse(errHandle),
);
const amount = computed(() =>
  isNaN(Number(props.amount)) ? undefined : Number(props.amount),
);
</script>
