<template>
  <SkillPhaseData :data :phase="data.PhaseData" :frame="data.AnimationFrames" />
  <SkillEntityTimeline :timelines="data.ShotFrames" />
</template>

<script setup lang="ts">
import { z } from "zod";
import { ZNormalAttackSkillAction } from "./NormalAttackSkillAction";

defineProps({
  data: {
    type: Object as PropType<z.infer<typeof ZNormalAttackSkillAction>>,
    required: true,
  },
  lv: {
    type: Number,
    required: true,
  },
});
</script>
