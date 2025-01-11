<template>
  <v-chip v-if="data.ManualSkillType !== ManualSkillTypes.None">{{
    ManualSkillTypes[data.ManualSkillType]
  }}</v-chip>
  <Abilities :abilities="data.Abilities" :lv />
</template>

<script setup lang="ts">
import { z } from "zod";
import { ManualSkillTypes } from "../../../misc/enum";
import { ZManualSkill } from "./ManualSkill";

defineProps({
  data: {
    type: Object as PropType<z.infer<typeof ZManualSkill>>,
    required: true,
  },
  lv: {
    type: Number,
    required: true,
  },
});
</script>
