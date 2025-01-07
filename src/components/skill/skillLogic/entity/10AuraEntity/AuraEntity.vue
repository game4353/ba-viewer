<template>
  <SkillEntityBase :entity ref="base" />
  <Abilities :abilities="entity.AreaAbilities" :lv />
</template>

<script setup lang="ts">
import { ReadonlyDeep } from "type-fest";
import { TZAuraEntity } from ".";
import { InfoBuilder } from "../../../misc";
import SkillEntityBase from "../SkillEntityBase.vue";

const props = defineProps({
  entity: {
    type: Object as PropType<ReadonlyDeep<TZAuraEntity>>,
    required: true,
  },
  lv: {
    type: Number,
    required: true,
  },
});

const base = ref<InstanceType<typeof SkillEntityBase>>();
const info = computed(() => {
  if (base.value?.info == null) return base.value?.info;
  const builder = new InfoBuilder(props.entity);
  builder.add("AttachSpawnTarget", true);
  builder.add("RotateEntityDirectionEveryFrame", false);
  builder.add("ApplyOffsetRotateEntityDirection", false);
  builder.add("RemoveEntityIfAttachSpawnTargetDie", true);
  builder.add("Duration", 0);
  builder.add("Interval", 0);
  builder.add("RemoveEntityIfSameEntitySpawn", 0);
  builder.add("RemoveEntityIfSkillCancel", true);
  builder.add("MovingAreaOption", 0);

  return [...base.value.info, ...builder.arr];
});
defineExpose({ info });
</script>
