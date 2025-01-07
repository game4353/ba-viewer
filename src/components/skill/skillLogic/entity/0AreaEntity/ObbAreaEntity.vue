<template>
  <AreaEntity :entity :lv ref="base">
    <template #chips>
      <v-chip v-if="entity.Width">Width: {{ entity.Width }}</v-chip>
      <v-chip v-if="entity.Height">Height: {{ entity.Height }}</v-chip>
      <v-chip v-if="entity.AngleOffset > -1"
        >AngleOffset: {{ entity.AngleOffset }}</v-chip
      >
    </template>
  </AreaEntity>
</template>

<script setup lang="ts">
import { ZObbAreaEntity } from ".";
import { PRZ } from "../../../misc";
import AreaEntity from "./AreaEntity.vue";

defineProps({
  entity: {
    type: Object as PRZ<typeof ZObbAreaEntity>,
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
