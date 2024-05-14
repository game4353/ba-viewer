<template>
  <div class="box" :style="bgImg">
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
const bgImg = `background-image: url('${uiPath(props.path)}');`;
</script>

<style lang="scss" scoped>
.box {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
</style>
