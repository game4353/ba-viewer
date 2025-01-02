<template>
  <div v-for="(o, i) in data.EntityTimeline" :key="i">
    <br />
    EntityTimeline{{ i + 1 }}:<br />
    <SkillEntity :tl="o" />
  </div>
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
