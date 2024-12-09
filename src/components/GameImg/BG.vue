<template>
  <div :style="bgImg">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { uiPath } from "./loader";

const props = defineProps({
  path: {
    type: String,
    required: true,
  },
});
const bgImg = computed(() => `background-image: url('${uiPath(props.path)}');`);
</script>

<style lang="scss" scoped>
div {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100%;
}
</style>
