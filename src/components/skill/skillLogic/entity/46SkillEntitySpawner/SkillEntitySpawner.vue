<template>
  <SkillEntityBase :entity ref="base">
    <template #chips>
      <slot name="chips"></slot>
    </template>
  </SkillEntityBase>
  <SkillEntityTimelines :timelines="entity.EntityTimeline" :lv />
</template>

<script setup lang="ts">
import {
  EntitySpawnRule,
  SkillToTargetDistributeType,
} from "@/components/skill/misc/enum";
import type { ZSkillEntitySpawner } from ".";
import { InfoBuilder, type PRZ } from "../../../misc";
import SkillEntityBase from "../SkillEntityBase.vue";

const props = defineProps({
  entity: {
    type: Object as PRZ<typeof ZSkillEntitySpawner>,
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
  builder.add("SpawnRule", undefined, (v) => EntitySpawnRule[v]);
  builder.add("RemoveEntityIfSkillCancel");
  builder.add("OverrideSkillStartTimingWithSpawnerSpawn");
  builder.add(
    "DistributeType",
    SkillToTargetDistributeType.None,
    (v) => SkillToTargetDistributeType[v],
  );
  builder.add("FireToNextTargetWhenEachToEach");

  return [...arr, ...builder.arr];
});
defineExpose({ info });
</script>
