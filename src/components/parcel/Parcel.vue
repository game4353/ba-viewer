<template>
  <ParcelCommon
    v-if="
      ['Character', 'Currency', 'Equipment', 'Furniture', 'Item'].includes(type)
    "
    :parcel="assert(getParcel(type, pid), `Unable to find ${type} ${pid}`)"
    :amount
    :amountMin
    :amountMax
    :layout
    :route
    :scale
    :tag
  />
  <GachaGroup
    v-else-if="type === 'GachaGroup'"
    :pid
    :amount
    :amountMin
    :amountMax
    :scale
    :tag
  />
  <Recipe
    v-else-if="type === 'Recipe'"
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
import type { ParcelType, RewardTag } from "@/assets/game/types/flatDataExcel";
import { ASSERT_SOLE } from "../warn/error";
import { PropType } from "vue";
import { getParcel } from "./parcel";
import { assert } from "@/utils/misc";

const assertSole = inject(ASSERT_SOLE)!;

const props = defineProps({
  type: {
    type: String as PropType<keyof typeof ParcelType>,
    required: true,
  },
  pid: {
    type: [String, Number],
    required: true,
  },
  amount: Number,
  amountMin: Number,
  amountMax: Number,
  scale: Number,
  route: Boolean,
  tag: {
    type: String as PropType<keyof typeof RewardTag>,
  },
  layout: {
    type: String as PropType<"icon" | "random" | "pack" | "select" | "default">,
  },
  // TODO: hover to show name
  hover: String,
});

const done: (keyof typeof ParcelType)[] = [
  "Currency",
  "Equipment",
  "Furniture",
  "Item",
  "GachaGroup",
  "Recipe",
  "Character",
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
</script>
