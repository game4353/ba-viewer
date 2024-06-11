<template>
  <Item
    v-if="type === 'Item'"
    :pid
    :amount
    :amountMin
    :amountMax
    :layout
    :route
    :scale
    :tag
  />
  <Character
    v-else-if="type === 'Character'"
    :pid
    :amount
    :amountMin
    :amountMax
    :layout
    :scale
    :tag
  />
  <Currency
    v-else-if="type === 'Currency'"
    :pid
    :amount
    :amountMin
    :amountMax
    :layout
    :scale
    :tag
  />
  <Equipment
    v-else-if="type === 'Equipment'"
    :pid
    :amount
    :amountMin
    :amountMax
    :layout
    :scale
    :tag
  />
  <Furniture
    v-else-if="type === 'Furniture'"
    :pid
    :amount
    :amountMin
    :amountMax
    :layout
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
import { INJECT_ERR } from "@/utils/error";
import { PropType } from "vue";

const setError = inject(INJECT_ERR)!;

const props = defineProps({
  type: {
    type: String as PropType<keyof typeof ParcelType>,
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
watch(
  () => props.type,
  (newVal) => {
    if (!done.includes(newVal))
      setError(`Type "${props.type}" is not yet implemented.`);
  },
);
</script>
