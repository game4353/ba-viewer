<template>
  <LogicEffectBase :data ref="base">
    <template #chips>
      <slot name="chips"></slot>
    </template>
  </LogicEffectBase>
  <div>
    <p>
      KnockbackDirection:
      {{ KnockbackDirection[data.KnockbackDirection] }}
    </p>
    <p>MoveDuration:{{ data.MoveDuration }}</p>
    <p>MoveDistance:{{ data.MoveDistance }}</p>
  </div>
</template>

<script setup lang="ts">
import { KnockbackDirection } from "@/assets/game/excelType";
import type { ZKnockbackEffect } from ".";
import { type PRZ } from "../../misc";
import LogicEffectBase from "../LogicEffectBase.vue";

defineProps({
  data: {
    type: Object as PRZ<typeof ZKnockbackEffect>,
    required: true,
  },
});

const base = ref<InstanceType<typeof LogicEffectBase>>();
const info = computed(() => {
  return base.value?.info;
});
defineExpose({ info });
</script>
