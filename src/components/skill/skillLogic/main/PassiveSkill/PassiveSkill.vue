<template>
  <div v-for="(o, i) in data.EntityTimeline" :key="i">
    <br />
    EntityTimeline{{ i + 1 }}:<br />
    <SkillEntity :tl="o" />
  </div>
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
