<template>
  <v-tooltip
    v-if="rule.ConditionType !== AutoUseConditionType.None"
    location="top"
  >
    <template v-slot:activator="{ props }">
      <v-chip class="w-fit" v-bind="props">AUTO</v-chip>
    </template>
    <div>
      {{ rule }}
      <!-- TODO -->
    </div>
  </v-tooltip>
</template>

<script setup lang="ts">
import { ReadonlyDeep } from "type-fest";
import { TZAutoUseRule } from "../../skillLogic/ability/schema";
import { AutoUseConditionType } from "../enum";

defineProps({
  rule: {
    type: Object as PropType<ReadonlyDeep<TZAutoUseRule>>,
    required: true,
  },
});
</script>
