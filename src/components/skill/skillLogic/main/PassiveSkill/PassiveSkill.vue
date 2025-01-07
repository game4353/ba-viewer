<template>
  <div v-for="key in keys" :key>
    <div v-if="key in data">{{ key }} {{ data[key as keyof typeof data] }}</div>
  </div>
  <SkillEntityTimeline :timelines="data.EntityTimeline" :lv />
</template>

<script setup lang="ts">
import { InfoBuilder } from "@/components/skill/misc";
import { z } from "zod";
import { PassiveSkillTargetType } from "../../../misc/enum";
import { ZPassiveSkill } from "./PassiveSkill";

const props = defineProps({
  data: {
    type: Object as PropType<z.infer<typeof ZPassiveSkill>>,
    required: true,
  },
  lv: {
    type: Number,
    required: true,
  },
});

const info = computed(() => {
  const builder = new InfoBuilder(props.data);
  builder.add("Duration", -1);
  builder.add("MaxTriggerCount", 0);
  builder.add("CoolTimeNotTrigger", 0);
  builder.add("TryCount", 0);
  builder.add("ResetTryCountUseSkill", false);
  builder.add(
    "SkillTargetType",
    PassiveSkillTargetType.None,
    (v) => PassiveSkillTargetType[v],
  );

  return builder.arr;
});
defineExpose({ info });

const keys = ["TriggerCondition", "TriggerSourceFindRule"] as const;
</script>
