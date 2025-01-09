<template>
  <div class="flex flex-row gap-1">
    <v-chip v-if="data.ApplyRate !== 10000">
      <span>発動率: {{ data.ApplyRate / 100 }}%</span>
    </v-chip>
    <slot name="chips"></slot>
  </div>
</template>

<script setup lang="ts">
import { LogicEffectCategory } from "@/assets/game/excelType";
import { PRZ } from "../misc";
import { ZLogicEffect } from "./_base";

const props = defineProps({
  data: {
    type: Object as PRZ<typeof ZLogicEffect>,
    required: true,
  },
});

const info = computed(() => {
  const arr = [
    `TemplateId: ${props.data.TemplateId}`,
    `Category: ${LogicEffectCategory[props.data.Category]}`,
    `Channel: ${props.data.Channel}`,
  ];
  return arr;
});

defineExpose({ info });
</script>
