<template>
  <Character
    v-if="type === ParcelType.Character"
    :cid="pid"
    :layout
    :route
    :scale
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
    :tag
  />
  <GachaGroup
    v-else-if="type === ParcelType.GachaGroup"
    :pid
    :amount
    :amountMin
    :amountMax
    :scale
    :tag
  />
  <Recipe
    v-else-if="type === ParcelType.Recipe"
    :pid
    :amount
    :amountMin
    :amountMax
    :scale
    :tag
  />
  <div v-else></div>
</template>

<script setup lang="ts">
import { ParcelType, RewardTag } from "@/assets/game/types/flatDataExcel";
import { fail } from "@/utils/misc";
import { PropType } from "vue";
import { ASSERT_SOLE } from "../warn/error";
import Character from "./character/Character.vue";
import { getParcel } from "./parcel";

const assertSole = inject(ASSERT_SOLE)!;

const props = defineProps({
  type: {
    type: Number as PropType<ParcelType>,
    required: true,
  },
  pid: {
    type: Number,
    required: true,
  },
  amount: Number,
  amountMin: Number,
  amountMax: Number,
  scale: Number,
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
assertSole(
  done.filter((v) => v === props.type),
  501,
  `Type "${props.type}" is not yet implemented.`,
);
watch(
  () => props.type,
  (newVal) => {
    assertSole(
      done.filter((v) => v === newVal),
      501,
      `Type "${props.type}" is not yet implemented.`,
    );
  },
);

const parcel = computed(() =>
  getParcel(props.type, Number(props.pid)).value?.unwrapOrElse(fail),
);
</script>
