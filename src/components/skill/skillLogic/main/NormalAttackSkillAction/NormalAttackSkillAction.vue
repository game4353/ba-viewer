<template>
  <SkillPhaseData :data :phase="data.PhaseData" :frame="data.AnimationFrames" />
  <div v-if="data.DistributeType > 0">
    {{ SkillToTargetDistributeType[data.DistributeType] }}
  </div>
  <div v-if="data.ExclusiveIngInvokerDirectionOverride > 0">
    {{ SpawnDirectionTypes[data.ExclusiveIngInvokerDirectionOverride] }}
    {{ data.ExclusiveIngInvokerDirectionOverrideWorldPosition }}
  </div>
  <SkillEntityTimeline :timelines="data.ShotFrames" :lv />
</template>

<script setup lang="ts">
import { z } from "zod";
import { SkillToTargetDistributeType, SpawnDirectionTypes } from "../../enum";
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
