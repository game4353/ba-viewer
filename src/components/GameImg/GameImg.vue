<template>
  <img :src="uiPath(path)" />
</template>

<script setup lang="ts">
import { uiPath } from "./loader";

defineProps({
  path: {
    type: String,
    required: true,
  },
});
</script>
