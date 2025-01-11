<template>
  <ProjectileEntity :entity :lv ref="base" />
</template>

<script setup lang="ts">
import { ReadonlyDeep } from "type-fest";
import { TZTargetProjectileEntity } from ".";
import ProjectileEntity from "./ProjectileEntity.vue";

defineProps({
  entity: {
    type: Object as PropType<ReadonlyDeep<TZTargetProjectileEntity>>,
    required: true,
  },
  lv: {
    type: Number,
    required: true,
  },
});

const base = ref<InstanceType<typeof ProjectileEntity>>();
const info = computed(() => {
  return base.value?.info;
});
defineExpose({ info });
</script>
