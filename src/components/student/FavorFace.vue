<template>
  <div class="w-full flex flex-col items-center" :class="fade">
    <img class="w-2/3" :src="face" />
    <p>{{ favor }}</p>
  </div>
</template>
<script setup lang="ts">
import { Icon } from "../GameImg/icon";
import { ERR_HANDLE } from "../warn/error";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  favor: {
    type: Number,
    required: true,
  },
});

const face = computed(() => {
  switch (props.favor) {
    case 20:
      return Icon.Gift1;
    case 40:
    case 120:
      return Icon.Gift2;
    case 60:
    case 180:
      return Icon.Gift3;
    case 240:
      return Icon.Gift4;
    case undefined:
      return "";
    default:
      errHandle(new Error(`Invalid favor exp '${props.favor}'.`));
      return "";
  }
});
const fade = computed(() => {
  switch (props.favor) {
    case 20:
    case 120:
      return "opacity-10";
    case 40:
    case 180:
      return "opacity-50";
    default:
      return "";
  }
});
</script>
