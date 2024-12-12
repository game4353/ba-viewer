<template>
  <v-img v-if="v" :src="uiPath(path)"></v-img>
  <img v-else :src="uiPath(path)" />
</template>

<script setup lang="ts">
import { uiPath } from "./loader";

defineProps({
  path: {
    type: String,
    required: true,
  },
  v: Boolean,
});
</script>
