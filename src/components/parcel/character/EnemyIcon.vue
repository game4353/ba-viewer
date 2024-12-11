<template>
  <component
    :is="route ? 'router-link' : 'div'"
    :to="`/parcel/character/${cid}`"
  >
    <Scaled :scaling :width="imgW" :height="imgH">
      <div class="absolute bg-slate-400 h-full" :style="`width:${imgW}px`">
        <v-img
          class="!absolute right-4 top-4"
          :width="454"
          :height="452"
          :src
        />
      </div>
    </Scaled>
  </component>
</template>

<script setup lang="ts">
import { uiPath } from "@/components/GameImg/loader";
import { ScaleOption } from "@/components/misc/scale";
import { ERR_HANDLE } from "@/components/warn/error";
import { useCharacter } from "./character";

const props = defineProps({
  cid: {
    type: Number,
    required: true,
  },
  layout: {
    type: String as PropType<"icon" | "random" | "pack" | "select" | "default">,
  },
  route: Boolean,
  scaling: Object as PropType<ScaleOption>,
});
const errHandle = inject(ERR_HANDLE)!;

const imgW = 500;
const imgH = 500;
const chara = computed(() =>
  useCharacter(props.cid).value.unwrapOrElse(errHandle),
);
const costume = computed(() => chara.value?.costume);
const src = computed(() => {
  const path = costume.value?.InformationPacel || costume.value?.TextureBoss;
  return path == null ? undefined : uiPath(path);
});
</script>
