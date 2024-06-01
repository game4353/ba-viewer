<template>
  <div class="scale-wrapper" :style="cssVars">
    <div class="scale-content" :style="cssVars">
      <Item v-if="type === 'Item'" :pid :amount :iconOnly />
      <Currency v-else-if="type === 'Currency'" :pid :amount :iconOnly />
      <Equipment v-else-if="type === 'Equipment'" :pid :amount :iconOnly />
      <Furniture v-else-if="type === 'Furniture'" :pid :amount :iconOnly />
      <div v-else></div>
    </div>
  </div>
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
  scale: Number,
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

const cssVars = computed(() => ({
  "--scale": props.scale ?? 1,
}));
</script>

<style lang="scss" scoped>
.scale-wrapper {
  @apply relative overflow-hidden;
  width: calc(var(--scale) * 90px);
  height: calc(var(--scale) * 74px);
}
.scale-content {
  @apply relative top-0 left-0 origin-top-left;
  transform: scale(var(--scale));
}
</style>
