<template>
  <v-chip v-if="entity.SpawnRate !== 10000">
    <span>SpawnRate: {{ entity.SpawnRate / 100 }}%</span>
  </v-chip>
</template>

<script setup lang="ts">
import { ReadonlyDeep } from "type-fest";
import { formatVec2 } from "../../misc";
import { SkillApplyType, TransformDecideTiming } from "../enum";
import { TZSkillEntity } from "./_base";

const props = defineProps({
  entity: {
    type: Object as PropType<ReadonlyDeep<TZSkillEntity>>,
    required: true,
  },
});

const info = computed(() => {
  const arr = [
    `EntityName: ${props.entity.EntityName}`,
    `ApplyType: ${SkillApplyType[props.entity.ApplyType]}`,
    `DecideTiming: ${TransformDecideTiming[props.entity.DecideTiming]}`,
    `EntitySpawnIncludeOutOfRangeInputTarget: ${props.entity.EntitySpawnIncludeOutOfRangeInputTarget}`,
    `SpawnPositionType: ${props.entity.SpawnPositionType}`,
    `SpawnWorldPosition: ${formatVec2(props.entity.SpawnWorldPosition)}`,
    `PositionOffset: ${formatVec2(props.entity.PositionOffset)}`,
    `PositionRandomOffsetRange: ${props.entity.PositionRandomOffsetRange}`,
    `OffsetDirectionType: ${props.entity.OffsetDirectionType}`,
    `SpawnDirectionType: ${props.entity.SpawnDirectionType}`,
    `OverrideTargetingRule: ${props.entity.OverrideTargetingRule}`,
    `TargetSortRule: ${props.entity.TargetSortRule}`,
    `EssentialCandidateRule: ${props.entity.EssentialCandidateRule}`,
    `OptionalCandidateRule: ${props.entity.OptionalCandidateRule}`,
    `HighlightOption: ${props.entity.HighlightOption}`,
    `CheckSpawnPositionMovable: ${props.entity.CheckSpawnPositionMovable}`,
  ];
  if (props.entity.SpawnDelay !== 0)
    arr.push(`SpawnDelay: ${props.entity.SpawnDelay}`);
  return arr;
});

defineExpose({ info });
</script>
