<template>
  <div v-for="key in keys" :key>
    <div v-if="key in data">{{ key }} {{ data[key as keyof typeof data] }}</div>
  </div>
  <SkillEntityTimeline :timelines="data.EntityTimeline" :lv />
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
const keys = [
  "DistributeType",
  "RotateTurretOnly",
  "RotateTurretDirectionTargetTracking",
  "RotatingTurretFrameMin",
  "RotatingTurretFrameMax",
  "RotateInvokerDirectionEveryFrame",
] as const;
</script>
