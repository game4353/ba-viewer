<template>
  <component :is="route ? 'router-link' : 'div'" :to="`/item/${pid}`">
    <Item
      v-if="type === 'Item'"
      :pid
      :amount
      :amountMin
      :amountMax
      :iconOnly
      :scale
    />
    <Character
      v-else-if="type === 'Character'"
      :pid
      :amount
      :amountMin
      :amountMax
      :iconOnly
      :scale
    />
    <Currency
      v-else-if="type === 'Currency'"
      :pid
      :amount
      :amountMin
      :amountMax
      :iconOnly
      :scale
    />
    <Equipment
      v-else-if="type === 'Equipment'"
      :pid
      :amount
      :amountMin
      :amountMax
      :iconOnly
      :scale
    />
    <Furniture
      v-else-if="type === 'Furniture'"
      :pid
      :amount
      :amountMin
      :amountMax
      :iconOnly
      :scale
    />
    <GachaGroup
      v-else-if="type === 'GachaGroup'"
      :pid
      :amount
      :amountMin
      :amountMax
      :iconOnly
      :scale
    />
    <Recipe
      v-else-if="type === 'Recipe'"
      :pid
      :amount
      :amountMin
      :amountMax
      :iconOnly
      :scale
    />
    <div v-else></div>
  </component>
</template>

<script setup lang="ts">
import type { ParcelType } from "@/assets/game/types/flatDataExcel";
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
  iconOnly: Boolean,
  route: Boolean,
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
