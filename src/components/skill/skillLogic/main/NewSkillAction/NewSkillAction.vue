<template>
  <div v-for="key in keys" :key>
    <div v-if="key in data">{{ key }} {{ data[key as keyof typeof data] }}</div>
  </div>
  <div>
    <p>Main Entity:</p>
    {{ data.MainEntityData }}
  </div>
  <SkillTarget :sort="data.TargetSortRule" />
</template>

<script setup lang="ts">
import { z } from "zod";
import { ZNewSkillAction } from "./NewSkillAction";

defineProps({
  data: {
    type: Object as PropType<z.infer<typeof ZNewSkillAction>>,
    required: true,
  },
  lv: {
    type: Number,
    required: true,
  },
});
const keys = [
  "Range",
  "Angle",
  "MinRange",
  "CheckCanUseSkillPoint",
  "IsWeaponMountAfterSkill",
  "InvokerDirection",
  "InvokerDirectionWorldPosition",
  "RootMotionMoveData",
  "SkipAttackEnterAfterRootMotion",
  "EssentialCandidateRule",
  "OptionalCandidateRule",
  "AutoUseRule",
  "Duration",
] as const;
</script>
