<template>
  <audio controls :preload>
    <source :src type="audio/ogg" />
    Your browser does not support the audio element.
  </audio>
</template>

<script lang="ts" setup>
import { PropType } from "vue";

const props = defineProps({
  filename: {
    type: String,
  },
  path: {
    type: String,
  },
  preload: {
    type: String as PropType<"auto" | "metadata" | "none">,
  },
});
const src = computed(() =>
  props.filename
    ? "/assets/Audio/BGM/" + props.filename + ".ogg"
    : "/assets/" + props.path + ".ogg",
);
const preload = computed(() => props.preload ?? "none");
</script>
