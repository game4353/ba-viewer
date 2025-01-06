<template>
  <AuraEntity :entity :lv ref="base" />
</template>

<script setup lang="ts">
import { ReadonlyDeep } from "type-fest";
import { TZCircleAuraEntity } from ".";
import { InfoBuilder } from "../../misc";
import AuraEntity from "./AuraEntity.vue";

const props = defineProps({
  entity: {
    type: Object as PropType<ReadonlyDeep<TZCircleAuraEntity>>,
    required: true,
  },
  lv: {
    type: Number,
    required: true,
  },
});

const base = ref<InstanceType<typeof AuraEntity>>();
const info = computed(() => {
  if (base.value?.info == null) return base.value?.info;
  const builder = new InfoBuilder(props.entity);
  builder.add("Radius", 0);
  return [...base.value.info, ...builder.arr];
});
defineExpose({ info });
</script>
