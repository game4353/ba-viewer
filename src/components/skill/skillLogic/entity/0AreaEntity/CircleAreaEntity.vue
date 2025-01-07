<template>
  <AreaEntity :entity :lv ref="base">
    <template #chips>
      <v-chip v-if="entity.Radius">Radius: {{ entity.Radius }}</v-chip>
    </template>
  </AreaEntity>
</template>

<script setup lang="ts">
import { ZCircleAreaEntity } from ".";
import { PRZ } from "../../../misc";
import AreaEntity from "./AreaEntity.vue";

defineProps({
  entity: {
    type: Object as PRZ<typeof ZCircleAreaEntity>,
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
