<template>
  <div class="flex flex-col gap-4">
    <div v-for="(tl, key) in timelines" :key>
      <div class="flex flex-row gap-2">
        <p class="text-lg">{{ key + 1 }}.</p>
        <p class="text-lg">Frame: {{ tl.Frame }}</p>
        <v-chip v-if="'Tag' in tl">{{ AbilityActivateTag[tl.Tag] }}</v-chip>
      </div>
      <div v-if="tl.DamageDistributeRate !== 0">
        DamageRatio: {{ tl.DamageDistributeRate / 100 }}%
      </div>
      <Entity v-if="tl.Entity" :entity="tl.Entity" :lv />
      <div
        v-if="
          'InvokerDirectionOverride' in tl && tl.InvokerDirectionOverride > 0
        "
      >
        <div>{{ SpawnDirectionTypes[tl.InvokerDirectionOverride] }}</div>
        <div>{{ tl.InvokerDirectionOverrideWorldPosition }}</div>
      </div>
      <div v-if="'SpawnCondition' in tl && tl.SpawnCondition > 0">
        <div>{{ EntitySpawnCondition[tl.SpawnCondition] }}</div>
        <div>{{ tl.SpawnConditionParameter }}</div>
        <div>{{ tl.SpawnConditionParameterForTag }}</div>
        <div>
          {{ EntitySpawnConditionCheckTarget[tl.SpawnConditionCheckTarget] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ReadonlyDeep } from "type-fest";
import {
  AbilityActivateTag,
  EntitySpawnCondition,
  EntitySpawnConditionCheckTarget,
  SpawnDirectionTypes,
} from "../../misc/enum";
import { TimelineTypes } from "./schema";

defineProps({
  timelines: {
    type: Array as PropType<ReadonlyDeep<TimelineTypes[]>>,
    required: true,
  },
  lv: {
    type: Number,
    required: true,
  },
});
</script>
