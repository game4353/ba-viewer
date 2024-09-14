<template>
  <v-container class="flex flex-col justify-center items-center gap-10">
    <div class="h-1"></div>
    <v-img :width="300" :src="uiPath(path)"></v-img>
    <div class="text-3xl">{{ title }}</div>
    <slot></slot>
  </v-container>
</template>

<script setup lang="ts">
import { uiPath } from "../GameImg/loader";

defineProps({
  path: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>
