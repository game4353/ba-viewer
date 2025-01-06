<template>
  <TargetSkillEntity :entity :lv ref="base" />
</template>

<script setup lang="ts">
import { ReadonlyDeep } from "type-fest";
import { TZNormalAttackBulletEntity } from ".";

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

const base = ref();
const info = computed(() => {
  return [...base.value.info, `Speed: ${props.entity.Speed}`];
});
defineExpose({ info });
</script>
