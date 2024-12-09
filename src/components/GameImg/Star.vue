<template>
  <Scaled
    v-if="scaled"
    :width="96"
    :height="96"
    :scale
    :scale-type
    :scaled-h
    :scaled-w
  >
    <v-img
      class="star"
      width="96"
      height="96"
      :src="star > 5 ? Icon.Star2 : Icon.Star"
    >
      {{ star > 5 ? star - 5 : star }}
    </v-img>
  </Scaled>
  <v-img
    class="star"
    v-else
    width="96"
    height="96"
    :src="star > 5 ? Icon.Star2 : Icon.Star"
  >
    {{ star > 5 ? star - 5 : star }}
  </v-img>
</template>

<script setup lang="ts">
import { Icon } from "./icon";

const props = defineProps({
  star: {
    type: Number,
    required: true,
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
.star {
  @apply text-black text-center;
  font-size: 56px;
  line-height: 100px;
}
</style>
