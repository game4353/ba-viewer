<template>
  <div class="flex flex-row gap-1">
    <v-chip v-if="data.Range !== 0">Range: {{ data.Range }}</v-chip>
    <v-chip v-if="data.Angle !== 0">Angle: {{ data.Angle }}</v-chip>
    <v-chip v-if="data.MinRange !== 0">MinRange: {{ data.MinRange }}</v-chip>
    <v-chip v-if="data.Duration !== 0">Duration: {{ data.Duration }}</v-chip>
  </div>
  <div v-for="key in keys" :key>
    <div v-if="key in data">{{ key }} {{ data[key as keyof typeof data] }}</div>
  </div>
  <div v-if="data.MainEntityData">
    <p>Main Entity:</p>
    <Entity :entity="data.MainEntityData" :lv />
  </div>
  <SkillTarget :sort="data.TargetSortRule" />
</template>

<script setup lang="ts">
import { InfoBuilder } from "@/components/skill/misc";
import { z } from "zod";
import { SpawnDirectionTypes } from "../../enum";
import { ZNewSkillAction } from "./NewSkillAction";

const props = defineProps({
  data: {
    type: Object as PropType<z.infer<typeof ZNewSkillAction>>,
    required: true,
  },
  lv: {
    type: Number,
    required: true,
  },
});

const info = computed(() => {
  const builder = new InfoBuilder(props.data);
  builder.add("CheckCanUseSkillPoint", false);
  builder.add(
    "IsWeaponMountAfterSkill",
    false,
    () => "",
    () => "mount",
  );
  builder.add("InvokerDirection", 0, (v) => SpawnDirectionTypes[v]);
  builder.add("InvokerDirectionWorldPosition", { x: 0, y: 0 });
  builder.add("SkipAttackEnterAfterRootMotion", false);

  return builder.arr;
});
defineExpose({ info });

const keys = [
  "RootMotionMoveData",
  "EssentialCandidateRule",
  "OptionalCandidateRule",
  "AutoUseRule",
] as const;
</script>
