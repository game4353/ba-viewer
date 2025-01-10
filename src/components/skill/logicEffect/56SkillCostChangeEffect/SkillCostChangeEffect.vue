<template>
  <LogicEffectBase :data ref="base">
    <template #chips>
      <v-chip v-if="end">end: {{ end }}</v-chip>
      <slot name="chips"></slot>
    </template>
  </LogicEffectBase>
  <div>
    Skill Cost
    <span v-if="data.BaseAmount !== 0">{{ data.BaseAmount }}</span>
    <span v-if="data.Coefficient !== 0">{{ data.Coefficient / 100 }}%</span>
  </div>
</template>

<script setup lang="ts">
import type { ZSkillCostChangeEffect } from ".";
import { InfoBuilder, type PRZ } from "../../misc";
import { endCondition } from "../../misc/rule/endCondition";
import LogicEffectBase from "../LogicEffectBase.vue";

const props = defineProps({
  data: {
    type: Object as PRZ<typeof ZSkillCostChangeEffect>,
    required: true,
  },
});

const end = computed(() =>
  endCondition(props.data.EndCondition, props.data.EndConditionArgument),
);

const base = ref<InstanceType<typeof LogicEffectBase>>();
const info = computed(() => {
  const arr = base.value?.info;
  if (arr == null) return arr;

  const builder = new InfoBuilder(props.data);
  builder.add("Dispellable", false);

  return [...arr, ...builder.arr];
});
defineExpose({ info });
</script>
