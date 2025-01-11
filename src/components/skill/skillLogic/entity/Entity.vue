<template>
  <!-- 0 -->
  <AreaEntity v-if="entity.$type === 'AreaEntity'" :entity :lv ref="base" />
  <!-- 1 -->
  <CircleAreaEntity
    v-else-if="entity.$type === 'CircleAreaEntity'"
    :entity
    :lv
    ref="base"
  />
  <!-- 2 -->
  <ObbAreaEntity
    v-else-if="entity.$type === 'ObbAreaEntity'"
    :entity
    :lv
    ref="base"
  />
  <!-- 3 -->
  <FanAreaEntity
    v-else-if="entity.$type === 'FanAreaEntity'"
    :entity
    :lv
    ref="base"
  />
  <!-- 4 -->
  <DonutAreaEntity
    v-else-if="entity.$type === 'DonutAreaEntity'"
    :entity
    :lv
    ref="base"
  />
  <!-- 10 -->
  <AuraEntity
    v-else-if="entity.$type === 'AuraEntity'"
    :entity
    :lv
    ref="base"
  />
  <!-- 11 -->
  <CircleAuraEntity
    v-else-if="entity.$type === 'CircleAuraEntity'"
    :entity
    :lv
    ref="base"
  />
  <!-- 12 -->
  <ObbAuraEntity
    v-else-if="entity.$type === 'ObbAuraEntity'"
    :entity
    :lv
    ref="base"
  />
  <!-- 19 -->
  <ProjectileEntity
    v-else-if="entity.$type === 'ProjectileEntity'"
    :entity
    :lv
    ref="base"
  />
  <!-- 20 -->
  <TargetProjectileEntity
    v-else-if="entity.$type === 'TargetProjectileEntity'"
    :entity
    :lv
    ref="base"
  />
  <!-- 31 -->
  <TargetAttachedEntity
    v-else-if="entity.$type === 'TargetAttachedEntity'"
    :entity
    :lv
    ref="base"
  />
  <!-- 33 -->
  <NormalAttackBulletEntity
    v-else-if="entity.$type === 'NormalAttackBulletEntity'"
    :entity
    :lv
    ref="base"
  />
  <!-- 34 -->
  <TargetSkillEntity
    v-else-if="entity.$type === 'TargetSkillEntity'"
    :entity
    :lv
    ref="base"
  />
  <!-- 45 -->
  <AreaSpawner
    v-else-if="entity.$type === 'AreaSpawner'"
    :entity
    :lv
    ref="base"
  />
  <!-- 46 -->
  <SkillEntitySpawner
    v-else-if="entity.$type === 'SkillEntitySpawner'"
    :entity
    :lv
    ref="base"
  />

  <div v-else>
    <div>"{{ entity.$type }}" is not done yet.</div>
  </div>
</template>

<script setup lang="ts">
import { ReadonlyDeep } from "type-fest";
import { SkillEntityType } from "./schema";

defineProps({
  entity: {
    type: Object as PropType<ReadonlyDeep<SkillEntityType>>,
    required: true,
  },
  lv: {
    type: Number,
    required: true,
  },
});

const base = ref();
const info = computed(() => {
  return base.value?.info as string[] | undefined;
});
defineExpose({ info });
</script>
