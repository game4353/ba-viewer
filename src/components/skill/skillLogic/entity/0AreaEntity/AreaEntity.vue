<template>
  <SkillEntityBase :entity ref="base">
    <template #chips>
      <v-chip v-if="entity.HitFrames">
        <span>Hit: {{ entity.HitFrames.map((n) => `${n}f`).join(", ") }}</span>
      </v-chip>
      <slot name="chips"></slot>
    </template>
  </SkillEntityBase>
  <Abilities
    v-if="entity.AreaAbilities"
    :abilities="entity.AreaAbilities"
    :lv
  />
</template>

<script setup lang="ts">
import { ZAreaEntity } from ".";
import { InfoBuilder, PRZ } from "../../../misc";
import SkillEntityBase from "../SkillEntityBase.vue";

const props = defineProps({
  entity: {
    type: Object as PRZ<typeof ZAreaEntity>,
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
  builder.add("AttachTarget", false);
  builder.add("AllowDuplicateHit", false);
  builder.add("RemoveEntityIfSkillCancel", false);
  builder.add("Duration", 0);
  builder.add("RotateEntityDirectionEveryFrame", false);
  builder.add("ApplyOffsetRotateEntityDirection", false);
  builder.add("CheckBlockHit", false);
  builder.add("HitCheckCouplingKey", undefined);
  // TODO
  // MovingAreaOption
  // CollisionProperty

  return [...arr, ...builder.arr];
});
defineExpose({ info });
</script>
