<template>
  <Scaled :width="90" :height="83">
    <v-img class="heart" width="90" height="83" :src="Icon.Heart">
      {{ level }}
    </v-img>
  </Scaled>
</template>

<script setup lang="ts">
import { Icon } from "../GameImg/icon";

defineProps({
  level: {
    type: Number,
  },
  scaled: Boolean,
});
</script>

<style scoped lang="scss">
.heart {
  @apply right-0 -top-1 text-black text-center;
  position: absolute !important;
  text-shadow:
    -3px 0 white,
    3px 0 white,
    0 -3px white,
    0 3px white,
    1px -1px white,
    -1px -1px white,
    1px 1px white,
    -1px 1px white;
  font-size: 20px;
  line-height: 80px;
}
</style>
