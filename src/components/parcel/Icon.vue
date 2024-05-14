<template>
  <GameImg :path="parcel.Icon" />
</template>

<script setup lang="ts">
import { Tidy } from "../../../data/ts/tidy";
import { PropType } from "vue";
import GameImg from "../GameImg/GameImg.vue";
defineProps({
  parcel: {
    type: Object as PropType<Tidy.ParcelItem>,
    required: true,
  },
  amount: Number,
});
</script>
