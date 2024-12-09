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
const props = defineProps({
  scale: Number,
  scaledW: Number,
  scaledH: Number,
  scaleType: String as PropType<"min" | "max">,
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
});

const scaleVal = computed(() => {
  const arr = [];
  if (props.scaledW != null) arr.push(props.scaledW / props.width);
  if (props.scaledH != null) arr.push(props.scaledH / props.height);
  if (props.scale != null) arr.push(props.scale);
  if (arr.length === 0) return 1;
  if (props.scaleType === "max") return Math.max(...arr);
  return Math.min(...arr);
});

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
