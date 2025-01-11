<template>
  <TargetSkillEntity :entity :lv ref="base" />
</template>

<script setup lang="ts">
import { ReadonlyDeep } from "type-fest";
import { TZNormalAttackBulletEntity } from ".";
import TargetSkillEntity from "../34TargetSkillEntity/TargetSkillEntity.vue";

const props = defineProps({
  entity: {
    type: Object as PropType<ReadonlyDeep<TZNormalAttackBulletEntity>>,
    required: true,
  },
  lv: {
    type: Number,
    required: true,
  },
});

const base = ref<InstanceType<typeof TargetSkillEntity>>();
const info = computed(() => {
  if (base.value?.info == null) return base.value?.info;
  return [...base.value.info, `Speed: ${props.entity.Speed}`];
});
defineExpose({ info });
</script>
