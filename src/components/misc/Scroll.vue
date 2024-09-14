<template>
  <div class="relative h-full">
    <div class="overflow-y-auto h-full" @scroll="handleScroll" ref="container">
      <slot></slot>
    </div>
    <div v-if="!isTop" class="blur-top"></div>
    <div v-if="!isEnd" class="blur-bottom"></div>
  </div>
</template>

<script setup lang="ts">
import { isScrollEnd, isScrollTop } from "./scroll";

const isTop = ref(true);
const isEnd = ref(true);
const container = ref<HTMLDivElement | undefined>(undefined);

const handleScroll = () => {
  const el = container.value;
  if (el) {
    isTop.value = isScrollTop(el);
    isEnd.value = isScrollEnd(el);
  }
};

watchEffect(() => {
  if (container.value?.clientHeight ?? 0 > 0) handleScroll();
});
</script>

<style scoped lang="scss">
@mixin blur {
  position: absolute;
  left: 0;
  right: 0;
  height: 70px;
  @apply from-white/70;
}
.blur-top {
  @include blur;
  @apply bg-gradient-to-b;
  top: 0;
}
.blur-bottom {
  @include blur;
  @apply bg-gradient-to-t;
  bottom: 0;
}
</style>
