<template>
  <LogicEffectBase :data ref="base">
    <template #chips>
      <slot name="chips"></slot>
    </template>
  </LogicEffectBase>
  <div>
    <p>解除[{{ data.LogicEffectTemplateToDispel }}]×{{ data.DispelCount }}</p>
  </div>
</template>

<script setup lang="ts">
import { ZDispelLogicEffectTemplateEffect } from ".";
import { PRZ } from "../../misc";
import LogicEffectBase from "../LogicEffectBase.vue";

defineProps({
  data: {
    type: Object as PRZ<typeof ZDispelLogicEffectTemplateEffect>,
    required: true,
  },
});

const base = ref<InstanceType<typeof LogicEffectBase>>();
const info = computed(() => {
  return base.value?.info;
});
defineExpose({ info });
</script>
