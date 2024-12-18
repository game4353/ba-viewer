<template>
  <Loading v-if="favor == null" />
  <div v-else class="w-full flex flex-col items-center" :class="fade">
    <img class="w-2/3" :src="face" />
    <p>{{ favor }}</p>
  </div>
</template>
<script setup lang="ts">
import { PropMaybeResult } from "@/utils/result/result";
import { Icon } from "../GameImg/icon";
import { ERR_HANDLE } from "../warn/error";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  favor: {
    type: [Number, Object] as PropMaybeResult<number>,
    required: true,
  },
});

const favor = computed(() => {
  if (typeof props.favor === "number") return props.favor;
  return props.favor.unwrapOrElse(errHandle);
});

const face = computed(() => {
  switch (favor.value) {
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
  switch (favor.value) {
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
