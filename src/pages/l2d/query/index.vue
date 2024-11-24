<template>
  <div><SpineCharacter v-if="paths" :paths="paths" :bgm /></div>
</template>

<script setup lang="ts">
import SpineCharacter from "@/components/character/SpineCharacter.vue";

const route = useRoute<"/l2d/query/">();
// const path = route.params.path;
// TODO: 404
// const paths = [`/assets/${path}.skel`];
const paths = route.query["paths"]
  ?.toString()
  .split(",")
  .map((path) => `/assets/${path}.skel`);
const bgm = route.query["BGM"]?.toString();
console.log(paths, bgm);
</script>
