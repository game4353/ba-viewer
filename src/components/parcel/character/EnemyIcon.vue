<template>
  <component
    :is="route ? 'router-link' : 'div'"
    :to="`/parcel/character/${cid}`"
  >
    <Scaled :scale :scaledW :scaledH :scaleType :width="imgW" :height="imgH">
      <div class="absolute bg-slate-400 h-full" :style="`width:${imgW}px`">
        <v-img
          class="!absolute right-4 top-4"
          :width="454"
          :height="452"
          :src
        />
      </div> </Scaled
  ></component>
</template>

<script setup lang="ts">
import { uiPath } from "@/components/GameImg/loader";
import { characterDict } from "../character";
import { ASSERT_SOME } from "@/components/warn/error";

const assertSome = inject(ASSERT_SOME)!;
const props = defineProps({
  cid: {
    type: [Number, String],
    required: true,
  },
  layout: {
    type: String as PropType<"icon" | "random" | "pack" | "select" | "default">,
  },
  route: Boolean,
  scale: Number,
  scaledW: Number,
  scaledH: Number,
  scaleType: String as PropType<"min" | "max">,
});

const imgW = 500;
const imgH = 500;
const chara = computed(() => assertSome(characterDict[props.cid]));
const costume = computed(() => chara.value.costume);
const src = computed(() => {
  const path = costume.value.InformationPacel || costume.value.TextureBoss;
  return uiPath(path);
});
</script>
