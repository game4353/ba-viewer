<template>
  <img :src="src" />
</template>

<script setup lang="ts">
import { Tidy } from "../../../data/ts/tidy";
import { PropType } from "vue";
const props = defineProps({
  parcel: {
    type: Object as PropType<Tidy.ParcelItem>,
    required: true,
  },
  amount: Number,
});
const glob = import.meta.glob("@/assets/UIs/01_Common/**/*.png", {
  eager: true,
});
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [
    key.match(/(UIs.+)\.png/)[1],
    value.default,
  ]),
);
const src = images[props.parcel.Icon];
</script>
