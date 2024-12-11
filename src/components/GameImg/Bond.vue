<template>
  <Scaled v-if="scaling" :width="90" :height="83" :scaling>
    <v-img class="heart !absolute" width="90" height="83" :src="Icon.Heart">
      {{ level }}
    </v-img>
  </Scaled>
  <v-img class="heart" v-else width="90" height="83" :src="Icon.Heart">
    {{ level }}
  </v-img>
</template>

<script setup lang="ts">
import { ScaleOption } from "../misc/scale";
import { Icon } from "./icon";

defineProps({
  level: {
    type: Number,
  },
  scaling: Object as PropType<ScaleOption>,
});
</script>

<style scoped lang="scss">
.heart {
  @apply text-black text-center;
  text-shadow:
    -3px 0 white,
    3px 0 white,
    0 -3px white,
    0 3px white,
    1px -1px white,
    -1px -1px white,
    1px 1px white,
    -1px 1px white;
  font-size: 30px;
  line-height: 80px;
}
</style>
