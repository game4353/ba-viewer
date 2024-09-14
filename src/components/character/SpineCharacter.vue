<template>
  <div>
    <div class="box" ref="box" @wheel.stop="onWheel"></div>
    <div class="flex flex-row items-center w-fit gap-2">
      <v-btn
        icon="mdi-menu-left"
        size="small"
        @click="nextAnimation(true)"
      ></v-btn>
      <p class="w-[10em] text-lg border-b text-center">{{ animations[0] }}</p>
      <v-btn
        icon="mdi-menu-right"
        size="small"
        @click="nextAnimation()"
      ></v-btn>
      <v-btn icon="mdi-magnify-plus" size="small" @click="zoom()"></v-btn>
      <v-btn icon="mdi-magnify-minus" size="small" @click="zoom(true)"></v-btn>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Live2DViewer } from "@/utils/l2d";
import { clamp } from "@vueuse/core";

const props = defineProps({
  paths: {
    type: Array as PropType<Array<string>>,
    required: true,
  },
});

const l2d = new Live2DViewer();
const box = ref();
const animations = ref([] as string[]);
const scale = ref(0);

onMounted(() => {
  l2d.loadModel(props.paths[0]).then(() => {
    l2d
      .scaleAssets(0.43)
      .move(290, 700)
      .resizeCanvas(600, 800)
      .appendTo(box.value);
    animations.value = l2d.getAnimations();
  });
});

function nextAnimation(prev = false) {
  if (animations.value.length === 0) return;
  if (prev) animations.value.unshift(animations.value.pop()!);
  else animations.value.push(animations.value.shift()!);
  const state = l2d.char?.state;
  state?.setAnimation(1, animations.value[0], false);
}

function zoom(out = false) {
  scale.value = clamp(scale.value + (out ? -1 : 1), -15, 15);
  const s = Math.round(43 * Math.pow(0.9, -scale.value));
  l2d.scaleAssets(s / 100);
}

function onWheel(e: WheelEvent) {
  e.preventDefault();
  zoom(e.deltaY > 0);
}
</script>

<style lang="scss" scoped>
.box {
  @apply w-fit h-fit border border-red-500 cursor-grab;
}
.box:active {
  cursor: grabbing;
}
</style>
