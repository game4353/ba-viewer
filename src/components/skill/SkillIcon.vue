<template>
  <div class="w-full" v-if="path">
    <div class="hexagon" :class="color">
      <GameImg :path />
    </div>
  </div>
</template>

<script setup lang="ts">
import { BulletType } from "@/assets/game/types/flatDataExcel";
import { PropMaybeResult } from "@/utils/result";
import { ERR_HANDLE } from "../warn/error";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  path: {
    type: [String, Object] as PropMaybeResult<string>,
    required: true,
  },
  type: Number as PropType<BulletType>,
});

const path = computed(() => {
  if (typeof props.path === "string") return props.path;
  return props.path.unwrapOrElse(errHandle);
});
const color = computed(() => BulletType[props.type ?? 0]);
</script>

<style scoped lang="scss">
.hexagon {
  position: relative;
  width: 100%;
  aspect-ratio: cos(30deg);
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
