<template>
  <Item v-if="type === 'Item'" :pid :amount :iconOnly :scale />
  <Currency v-else-if="type === 'Currency'" :pid :amount :iconOnly :scale />
  <Equipment v-else-if="type === 'Equipment'" :pid :amount :iconOnly :scale />
  <Furniture v-else-if="type === 'Furniture'" :pid :amount :iconOnly :scale />
  <GachaGroup v-else-if="type === 'GachaGroup'" :pid :amount :iconOnly :scale />
  <div v-else-if="type === 'Character'">TODO</div>
  <div v-else></div>
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
  amount: {
    type: Number,
  },
  scale: Number,
  iconOnly: Boolean,
});

const done: (keyof typeof ParcelType)[] = [
  "Currency",
  "Equipment",
  "Furniture",
  "Item",
  "GachaGroup",
  // TODO
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
