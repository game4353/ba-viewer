<template>
  <div class="w-full flex flex-col items-center" :class="fade">
    <v-img class="w-2/3" :src="face"></v-img>
    <p>{{ favor }}</p>
  </div>
</template>
<script setup lang="ts">
import { Icon } from "../GameImg/icon";
import { ScaleOption } from "../misc/scale";
import { ERR_HANDLE } from "../warn/error";
import { useStudentGiftFavor } from "./gift";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  sid: {
    type: Number,
    required: true,
  },
  gid: {
    type: Number,
    required: true,
  },
  scaling: Object as PropType<ScaleOption>,
});

const favor = computed(() =>
  useStudentGiftFavor(props.sid, props.gid).value.unwrapOrElse(errHandle),
);

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
      errHandle(new Error(`Invalid favor exp '${favor}'.`));
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
