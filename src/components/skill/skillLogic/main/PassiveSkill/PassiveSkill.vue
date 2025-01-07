<template>
  <div class="flex flex-row gap-1">
    <v-tooltip v-if="data.TriggerCondition" location="top">
      <template v-slot:activator="{ props }">
        <v-chip class="w-fit" v-bind="props">Trigger</v-chip>
      </template>
      <div>
        {{ data.TriggerCondition }}
        <!-- TODO -->
      </div>
    </v-tooltip>
    <TargetFindRule
      :rule="data.TriggerSourceFindRule.EssentialCandidate"
      :sort="data.TriggerSourceFindRule.Sort"
      :optional="data.TriggerSourceFindRule.OptionalCandidate"
    />
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
</script>
