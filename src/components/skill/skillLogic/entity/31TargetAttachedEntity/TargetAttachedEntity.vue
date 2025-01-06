<template>
  <SkillEntityBase :entity ref="base" />
  <Abilities :abilities="entity.Abilities" :lv />
</template>

<script setup lang="ts">
import { ReadonlyDeep } from "type-fest";
import { TZTargetAttachedEntity } from ".";
import SkillEntityBase from "../SkillEntityBase.vue";

defineProps({
  entity: {
    type: Object as PropType<ReadonlyDeep<TZTargetAttachedEntity>>,
    required: true,
  },
  lv: {
    type: Number,
    required: true,
  },
});
const base = ref<InstanceType<typeof SkillEntityBase>>();
const info = computed(() => {
  return base.value?.info;
});
defineExpose({ info });
</script>
