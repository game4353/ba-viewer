<template>
  <NewSkillAction :data :lv ref="base" />
  <SkillPhaseData :data :phase="data.PhaseData" :frame="data.AnimationFrames" />
  <SkillEntityTimeline :timelines="data.ShotFrames" :lv />
</template>

<script setup lang="ts">
import { InfoBuilder } from "@/components/skill/misc";
import { z } from "zod";
import { SkillToTargetDistributeType, SpawnDirectionTypes } from "../../enum";
import NewSkillAction from "../NewSkillAction/NewSkillAction.vue";
import { ZNormalAttackSkillAction } from "./NormalAttackSkillAction";

const props = defineProps({
  data: {
    type: Object as PropType<z.infer<typeof ZNormalAttackSkillAction>>,
    required: true,
  },
  lv: {
    type: Number,
    required: true,
  },
});

const base = ref<InstanceType<typeof NewSkillAction>>();
const info = computed(() => {
  const arr = base.value?.info;
  if (arr == null) return arr;
  const builder = new InfoBuilder(props.data);
  builder.add("DistributeType", SkillToTargetDistributeType.None);
  builder.add("ExclusiveIngInvokerDirectionOverride", SpawnDirectionTypes.None);
  builder.add("ExclusiveIngInvokerDirectionOverrideWorldPosition", {
    x: 0,
    y: 0,
  });

  return [...arr, ...builder.arr];
});
defineExpose({ info });
</script>
