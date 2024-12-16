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
      <v-btn
        :icon="mute ? 'mdi-volume-off' : 'mdi-volume-high'"
        size="small"
        @click="mute = !mute"
      ></v-btn>
      <v-text-field
        class="w-24"
        label="width"
        type="number"
        v-model="width"
      ></v-text-field>
      <v-text-field
        class="w-24"
        label="height"
        type="number"
        v-model="height"
      ></v-text-field>
      <MusicPlayer v-if="bgm" :filename="bgm" />
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
  bgm: {
    type: String,
  },
});
const path = props.paths[0];
const l2d = new Live2DViewer();
const box = ref();
const animations = ref([] as string[]);
const scale = ref(0);
const mute = ref(true);
const width = ref(
  {
    SpineLobbies: 1108,
  }[path.split("/")[2]] ?? 600,
);
const height = ref(
  {
    SpineLobbies: 831,
  }[path.split("/")[2]] ?? 800,
);
const offsetX =
  {
    SpineLobbies: 551,
  }[path.split("/")[2]] ?? 290;

const offsetY =
  {
    SpineLobbies: 831,
  }[path.split("/")[2]] ?? 700;

onMounted(() => {
  l2d
    .loadModel(...props.paths)
    .then(() => {
      l2d
        .scaleAssets(0.43)
        .move(offsetX, offsetY)
        .resizeCanvas(width.value, height.value)
        .appendTo(box.value);
      animations.value = l2d.getAnimations();
    })
    .catch((e) => console.error(e));
});

watch([width, height], () => {
  l2d.resizeCanvas(width.value, height.value);
});
watch([mute], () => {
  if (mute.value) l2d.mute();
  else l2d.unmute();
});

function nextAnimation(prev = false) {
  if (animations.value.length === 0) return;
  if (prev) animations.value.unshift(animations.value.pop()!);
  else animations.value.push(animations.value.shift()!);
  l2d.playAnimation(animations.value[0]);
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
