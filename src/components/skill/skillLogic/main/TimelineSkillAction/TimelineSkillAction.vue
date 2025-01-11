<template>
  <NewSkillAction :data :lv ref="base" />
  <SkillEntityTimelines :timelines="data.EntityTimeline" :lv />
</template>

<script setup lang="ts">
import { InfoBuilder } from "@/components/skill/misc";
import { z } from "zod";
import { SkillToTargetDistributeType } from "../../../misc/enum";
import NewSkillAction from "../NewSkillAction/NewSkillAction.vue";
import { ZTimelineSkillAction } from "./TimelineSkillAction";

const props = defineProps({
  data: {
    type: Object as PropType<z.infer<typeof ZTimelineSkillAction>>,
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

  return [...arr, ...builder.arr];
});
defineExpose({ info });
</script>
