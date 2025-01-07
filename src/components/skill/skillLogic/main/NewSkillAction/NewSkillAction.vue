<template>
  <div class="flex flex-row gap-1">
    <v-chip v-if="data.Range !== 0">Range: {{ data.Range }}</v-chip>
    <v-chip v-if="data.Angle !== 0">Angle: {{ data.Angle }}</v-chip>
    <v-chip v-if="data.MinRange !== 0">MinRange: {{ data.MinRange }}</v-chip>
    <v-chip v-if="data.Duration !== 0">Duration: {{ data.Duration }}</v-chip>
    <TargetFindRule
      :rule="data.EssentialCandidateRule"
      :sort="data.TargetSortRule"
      :optional="data.OptionalCandidateRule"
    />
    <AutoUseRule :rule="data.AutoUseRule" />
    <v-tooltip v-if="data.RootMotionMoveData" location="top">
      <template v-slot:activator="{ props }">
        <v-chip class="w-fit" v-bind="props">RootMotion</v-chip>
      </template>
      <div>
        {{ data.RootMotionMoveData }}
        <!-- TODO -->
      </div>
    </v-tooltip>
  </div>

  <div v-if="data.MainEntityData">
    <p>Main Entity:</p>
    <Entity :entity="data.MainEntityData" :lv />
  </div>
</template>

<script setup lang="ts">
import { InfoBuilder } from "@/components/skill/misc";
import { z } from "zod";
import { SpawnDirectionTypes } from "../../../misc/enum";
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
</script>
