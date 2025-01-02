<template>
  <SkillEntityTimeline :timelines="data.EntityTimeline" />
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
</script>
