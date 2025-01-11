<template>
  <AreaEntity :entity :lv ref="base">
    <template #chips>
      <v-chip v-if="entity.Radius">Radius: {{ entity.Radius }}</v-chip>
      <v-chip v-if="entity.Degree">Degree: {{ entity.Degree }}</v-chip>
      <v-chip v-if="entity.AngleOffset > -1"
        >AngleOffset: {{ entity.AngleOffset }}</v-chip
      >
      <slot name="chips"></slot>
    </template>
  </AreaEntity>
</template>

<script setup lang="ts">
import { ZFanAreaEntity } from ".";
import { PRZ } from "../../../misc";
import AreaEntity from "./AreaEntity.vue";

defineProps({
  entity: {
    type: Object as PRZ<typeof ZFanAreaEntity>,
    required: true,
  },
  lv: {
    type: Number,
    required: true,
  },
});

const base = ref<InstanceType<typeof AreaEntity>>();
const info = computed(() => {
  return base.value?.info;
});
defineExpose({ info });
</script>
