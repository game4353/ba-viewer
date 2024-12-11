<template>
  <Scaled v-if="scaling" :width="96" :height="96" :scaling>
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
import { ScaleOption } from "../misc/scale";
import { Icon } from "./icon";

defineProps({
  star: {
    type: Number,
    required: true,
  },
  scaling: Object as PropType<ScaleOption>,
});
</script>

<style scoped lang="scss">
.star {
  @apply text-black text-center;
  font-size: 56px;
  line-height: 100px;
}
</style>
