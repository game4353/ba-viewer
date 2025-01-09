<template>
  <SkillEntityBase :entity ref="base">
    <template #chips>
      <slot name="chips"></slot>
    </template>
  </SkillEntityBase>
  <SkillEntityTimelines :timelines="entity.EntityTimeline" :lv />
</template>

<script setup lang="ts">
import type { ZAreaSpawner } from ".";
import { InfoBuilder, type PRZ } from "../../../misc";
import SkillEntityBase from "../SkillEntityBase.vue";

const props = defineProps({
  entity: {
    type: Object as PRZ<typeof ZAreaSpawner>,
    required: true,
  },
  lv: {
    type: Number,
    required: true,
  },
});

const base = ref<InstanceType<typeof SkillEntityBase>>();
const info = computed(() => {
  const arr = base.value?.info;
  if (arr == null) return arr;

  const builder = new InfoBuilder(props.entity);
  builder.add("Duration", 0);

  return [...arr, ...builder.arr];
});
defineExpose({ info });
</script>
