<template>
  <SkillPhaseData :data :phase="data.PhaseData" :frame="data.AnimationFrames" />
  <DistributeType :val="data.DistributeType" />
  <div v-if="data.ExclusiveIngInvokerDirectionOverride > 0">
    {{ SpawnDirectionTypes[data.ExclusiveIngInvokerDirectionOverride] }}
    {{ data.ExclusiveIngInvokerDirectionOverrideWorldPosition }}
  </div>
  <SkillEntityTimeline :timelines="data.ShotFrames" :lv />
</template>

<script setup lang="ts">
import { z } from "zod";
import { SpawnDirectionTypes } from "../../enum";
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
