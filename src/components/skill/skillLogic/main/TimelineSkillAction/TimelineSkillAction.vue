<template>
  <SkillEntityTimeline :timelines="data.EntityTimeline" />
</template>

<script setup lang="ts">
import { z } from "zod";
import { ZTimelineSkillAction } from "./TimelineSkillAction";

defineProps({
  data: {
    type: Object as PropType<z.infer<typeof ZTimelineSkillAction>>,
    required: true,
  },
  lv: {
    type: Number,
    required: true,
  },
});
</script>
