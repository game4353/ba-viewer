<template>
  <Item v-if="type === 'Item'" :pid :amount :iconOnly />
  <Currency v-else-if="type === 'Currency'" :pid :amount :iconOnly />
  <Equipment v-else-if="type === 'Equipment'" :pid :amount :iconOnly />
  <Furniture v-else-if="type === 'Furniture'" :pid :amount :iconOnly />
  <div v-else></div>
</template>

<script setup lang="ts">
import { ParcelType } from "@/assets/game/types/flatDataExcel";
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
  iconOnly: Boolean,
});

const done: (keyof typeof ParcelType)[] = [
  "Currency",
  "Equipment",
  "Furniture",
  "Item",
];
if (!done.includes(props.type)) {
  setError(`Type "${props.type}" is not yet implemented.`);
}
</script>
