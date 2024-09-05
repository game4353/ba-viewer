<template>
  <div>{{ tidyGeneralTimeline(tl) }}</div>
</template>

<script setup lang="ts">
import { tidyGeneralTimeline } from "./timeline";
defineProps({
  tl: {
    type: Object,
    required: true,
  },
});
</script>
