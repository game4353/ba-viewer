<template>
  <div class="flex flex-col gap-4">
    <SkillEntityTimeline
      v-for="(tl, idx) in timelines"
      :tl
      :lv
      :idx
      :key="idx"
    />
  </div>
</template>

<script setup lang="ts">
import { ReadonlyDeep } from "type-fest";
import { TimelineTypes } from "./schema";

defineProps({
  timelines: {
    type: Array as PropType<ReadonlyDeep<TimelineTypes[]>>,
    required: true,
  },
  lv: {
    type: Number,
    required: true,
  },
});
</script>
