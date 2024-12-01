<template>
  <Scaled
    v-if="scaled"
    :width="90"
    :height="83"
    :scale
    :scale-type
    :scaled-h
    :scaled-w
  >
    <v-img class="heart !absolute" width="90" height="83" :src="Icon.Heart">
      {{ level }}
    </v-img>
  </Scaled>
  <v-img class="heart" v-else width="90" height="83" :src="Icon.Heart">
    {{ level }}
  </v-img>
</template>

<script setup lang="ts">
import { Icon } from "../GameImg/icon";

const props = defineProps({
  level: {
    type: Number,
  },
  scale: Number,
  scaledW: Number,
  scaledH: Number,
  scaleType: String as PropType<"min" | "max">,
});

const scaled = computed(
  () =>
    (props.scale ?? props.scaledW ?? props.scaledH ?? props.scaleType) != null,
);
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
