<template>
  <div class="relative h-full">
    <div class="overflow-y-auto h-full" ref="root">
      <div class="h-[1px]" v-intersection-observer="[checkTop, { root }]"></div>
      <slot></slot>
      <div class="h-[1px]" v-intersection-observer="[checkPot, { root }]"></div>
    </div>
    <transition name="blur" mode="out-in">
      <div v-show="!seeTop" class="blur-top"></div>
    </transition>
    <transition name="blur" mode="out-in">
      <div v-show="!seePot" class="blur-bottom"></div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { vIntersectionObserver } from "@vueuse/components";

const root = ref();

const seeTop = ref(false);
function checkTop([entry]: IntersectionObserverEntry[]) {
  seeTop.value = entry?.isIntersecting ?? false;
}

const seePot = ref(false);
function checkPot([entry]: IntersectionObserverEntry[]) {
  seePot.value = entry?.isIntersecting ?? false;
}
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
.blur-enter-active,
.blur-leave-active {
  transition: height 0.1s ease-out;
}
.blur-enter-from,
.blur-leave-to {
  height: 0;
}
</style>
