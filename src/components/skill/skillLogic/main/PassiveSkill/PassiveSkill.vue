<template>
  <div v-for="key in keys" :key>
    <div v-if="key in data">{{ key }} {{ data[key as keyof typeof data] }}</div>
  </div>
  <SkillEntityTimeline :timelines="data.EntityTimeline" :lv />
</template>

<script setup lang="ts">
import { z } from "zod";
import { ZPassiveSkill } from "./PassiveSkill";

defineProps({
  data: {
    type: Object as PropType<z.infer<typeof ZPassiveSkill>>,
    required: true,
  },
  lv: {
    type: Number,
    required: true,
  },
});

const keys = [
  "Duration",
  "MaxTriggerCount",
  "CoolTimeNotTrigger",
  "TryCount",
  "ResetTryCountUseSkill",
  "TriggerCondition",
  "TriggerSourceFindRule",
  "SkillTargetType",
] as const;
</script>
