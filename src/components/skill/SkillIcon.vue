<template>
  <div class="w-full" ref="icon">
    <div class="hexagon" :class="color" :style="cssVars">
      <GameImg :path />
    </div>
  </div>
</template>

<script setup lang="ts">
import { BulletType } from "@/assets/game/types/flatDataExcel";

const props = defineProps({
  path: {
    type: String,
    required: true,
  },
  type: String as PropType<keyof typeof BulletType>,
});

const color = props.type ?? "None";
const icon = ref<HTMLDivElement>();
const clientWidth = ref<number>();
let resizeObserver: ResizeObserver | null = null;

const updateWidth = (entries: ResizeObserverEntry[]) => {
  if (entries[0].contentRect) {
    clientWidth.value = entries[0].contentRect.width;
  }
};
onMounted(() => {
  if (icon.value) {
    resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(icon.value);
  }
});
onBeforeUnmount(() => {
  if (resizeObserver && icon.value) {
    resizeObserver.unobserve(icon.value);
  }
});
const cssVars = computed(() => ({
  "--width": Number(clientWidth.value),
  "--height": (Number(clientWidth.value) * 2) / Math.sqrt(3),
}));
</script>

<style scoped lang="scss">
@use "@/styles/variables" as var;
.Explosion,
.LightArmor {
  background-color: var.$color-explosion;
}
.Pierce,
.HeavyArmor {
  background-color: var.$color-pierce;
}
.Mystic,
.Unarmed {
  background-color: var.$color-mystic;
}
.Sonic,
.ElasticArmor {
  background-color: var.$color-sonic;
}
.hexagon {
  position: relative;
  width: calc(var(--width) * 1px);
  height: calc(var(--height) * 1px);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 95%;
    height: 95%;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    object-fit: cover;
  }
}
</style>
