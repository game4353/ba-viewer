<template>
  <div ref="target">
    <slot v-if="isVisible"></slot>
  </div>
</template>

<script lang="ts" setup>
import { useIntersectionObserver } from "@vueuse/core";

const props = defineProps({
  /** default: "0px" */
  rootMargin: String,
  /** default: 0 */
  threshold: Number,
});

const isVisible = ref(false);
const target = ref(null);

const { stop } = useIntersectionObserver(
  target,
  ([entry]) => {
    isVisible.value = entry.isIntersecting;
    if (isVisible.value) {
      stop();
    }
  },
  { rootMargin: props.rootMargin, threshold: props.threshold },
);

onUnmounted(() => {
  stop();
});
</script>
