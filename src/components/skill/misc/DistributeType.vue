<template>
  <v-tooltip v-if="chip.short" :text="chip.full">
    <template v-slot:activator="{ props }">
      <v-chip class="w-fit" v-bind="props">{{ chip.short }}</v-chip>
    </template>
  </v-tooltip>
</template>

<script setup lang="ts">
import { noDefault } from "@/utils/misc";
import { SkillToTargetDistributeType } from "../skillLogic/enum";

const props = defineProps({
  val: {
    type: Number as PropType<SkillToTargetDistributeType>,
    required: true,
  },
});

const chip = computed(() => {
  const t = props.val;
  const full = "SkillToTargetDistributeType: " + SkillToTargetDistributeType[t];
  let short = "";
  switch (t) {
    case SkillToTargetDistributeType.None:
      short = "";
      break;
    case SkillToTargetDistributeType.EachToEachTarget:
      short = "E2E";
      break;
    case SkillToTargetDistributeType.AllToOneTarget:
      short = "A2O";
      break;
    case SkillToTargetDistributeType.OneToAllTarget:
      short = "O2A";
      break;
    default:
      return noDefault(t);
  }
  return { short, full };
});
</script>
