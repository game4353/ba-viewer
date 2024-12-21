<template>
  <div class="scale-wrapper" :style="cssVars">
    <div class="scale-content" :style="cssVars">
      <div class="content" :style="cssVars">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ScaleOption, calcScale } from "./scale";

const props = defineProps({
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  scaling: Object as PropType<ScaleOption>,
});

const scaleVal = computed(() =>
  calcScale(props.width, props.height, props.scaling),
);

const cssVars = computed(() => ({
  "--scale": scaleVal.value,
  "--width": props.width,
  "--height": props.height,
}));
</script>

<style scoped lang="scss">
.scale-wrapper {
  @apply relative overflow-hidden;
  width: calc(var(--scale) * var(--width) * 1px);
  height: calc(var(--scale) * var(--height) * 1px);
}
.scale-content {
  @apply relative top-0 left-0 origin-top-left;
  width: calc(var(--width) * 1px);
  height: calc(var(--height) * 1px);
  transform: scale(var(--scale));
}
.content {
  width: calc(var(--width) * 1px);
  height: calc(var(--height) * 1px);
}
</style>
