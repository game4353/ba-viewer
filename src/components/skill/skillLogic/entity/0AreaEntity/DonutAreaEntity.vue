<template>
  <FanAreaEntity :entity :lv ref="base">
    <template #chips>
      <v-chip v-if="entity.ExcludeRadius"
        >ExcludeRadius: {{ entity.ExcludeRadius }}</v-chip
      >
    </template>
  </FanAreaEntity>
</template>

<script setup lang="ts">
import { ZDonutAreaEntity } from ".";
import { PRZ } from "../../../misc";
import FanAreaEntity from "./FanAreaEntity.vue";

defineProps({
  entity: {
    type: Object as PRZ<typeof ZDonutAreaEntity>,
    required: true,
  },
  lv: {
    type: Number,
    required: true,
  },
});

const base = ref<InstanceType<typeof FanAreaEntity>>();
const info = computed(() => {
  return base.value?.info;
});
defineExpose({ info });
</script>
