<template>
  <div v-if="shot">{{ shot }}</div>
</template>

<script lang="ts" setup>
import { tidyShot } from "../entity/timeline";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const shot = computed(() => {
  if (props.data.ShotFrames == null) return null;
  return tidyShot(props.data.ShotFrames);
});
</script>
