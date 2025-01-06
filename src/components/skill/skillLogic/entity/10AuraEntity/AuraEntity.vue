<template>
  <div v-if="entity.AreaAbilities">
    <Abilities :abilities="entity.AreaAbilities" :lv />
  </div>
</template>

<script setup lang="ts">
import { ReadonlyDeep } from "type-fest";
import { TZAuraEntity } from ".";
import { InfoBuilder } from "../../misc";

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

const info = computed(() => {
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

  return builder.arr;
});
defineExpose({ info });
</script>
