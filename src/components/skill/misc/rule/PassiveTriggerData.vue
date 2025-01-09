<template>
  <v-tooltip v-if="data.Event !== PassiveTriggerEvent.None" location="top">
    <template v-slot:activator="{ props }">
      <v-chip class="w-fit" v-bind="props">Trigger</v-chip>
    </template>
    <div>
      <p>Event: {{ PassiveTriggerEvent[data.Event] }}</p>
      <p>Rate: {{ data.TriggerRate / 100 }}%</p>
      <p v-if="data.Parameters">Parameters: {{ data.Parameters }}</p>
      <p v-if="data.ConditionExpression">
        Condition: {{ data.ConditionExpression }}
      </p>

      <p v-if="data.EchelonConstraint">
        Constraint: {{ data.EchelonConstraint }}
      </p>
    </div>
  </v-tooltip>
</template>

<script setup lang="ts">
import { ZPassiveTriggerData } from ".";
import { PRZ } from "..";
import { PassiveTriggerEvent } from "../enum";

defineProps({
  data: {
    type: Object as PRZ<typeof ZPassiveTriggerData>,
    required: true,
  },
});
</script>
