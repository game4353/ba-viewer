<template>
  <div>Frame: {{ tl.Frame }}</div>
  <div>{{ AbilityActivateTag[tl.Tag] }}</div>
  <div v-if="tl.DamageDistributeRate > 0">
    Damage: {{ tl.DamageDistributeRate / 100 }}%
  </div>
  <Entity v-if="tl.Entity" :entity="tl.Entity" />
  <div v-if="tl.InvokerDirectionOverride > 0">
    <div>{{ SpawnDirectionTypes[tl.InvokerDirectionOverride] }}</div>
    <div>{{ tl.InvokerDirectionOverrideWorldPosition }}</div>
  </div>
</template>

<script setup lang="ts">
import { ReadonlyDeep } from "type-fest";
import { AbilityActivateTag, SpawnDirectionTypes } from "../skillLogic/enum";
import { ExSkillEntityTimelineType } from "../skillLogic/timeline/schema";

defineProps({
  tl: {
    type: Object as PropType<ReadonlyDeep<ExSkillEntityTimelineType>>,
    required: true,
  },
});
</script>
