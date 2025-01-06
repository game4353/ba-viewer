<template>
  <Info>
    <p v-for="(str, key) in base?.info" :key>{{ str }}</p>
  </Info>

  <!-- <TargetProjectileEntity
    v-if="entity.$type === 'TargetProjectileEntity'"
    :data="entity"
    :lv
  /> -->
  <div v-if="entity.$type === 'NormalAttackBulletEntity'">
    <NormalAttackBulletEntity :entity :lv ref="base" />
  </div>
  <div v-else-if="entity.$type === 'TargetSkillEntity'">
    <TargetSkillEntity :entity :lv ref="base" />
  </div>
  <div v-else>
    <div>"{{ entity.$type }}" is not done yet.</div>
  </div>
</template>

<script setup lang="ts">
import { ReadonlyDeep } from "type-fest";
import { SkillApplyType, SpawnPositionTypes } from "../enum";
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

class Chip<T extends keyof SkillEntityType> {
  display: string;
  constructor(
    public key: T,
    public value: SkillEntityType[T],
    public toDisplay = (x: SkillEntityType[T]) => String(x),
    display?: string,
  ) {
    if (display == null) this.display = key as string;
    else this.display = display;
  }
}
const chips = [
  new Chip("SpawnDelay", 0),
  new Chip("SpawnRate", 10000, (v) => `${v / 100}%`),
  new Chip("ApplyType", SkillApplyType.None, (t) => SkillApplyType[t]),
  new Chip(
    "SpawnPositionType",
    SpawnPositionTypes.None,
    (t) => SpawnPositionTypes[t],
  ),
];
const keys = [
  "Radius",
  "Degree",
  "AttachSpawnTarget",
  "RemoveEntityIfAttachSpawnTargetDie",
  "Duration",
  "Interval",
  "RemoveEntityIfSameEntitySpawn",
  "RemoveEntityIfSkillCancel",
  "AngleOffset",
  "ExpireDistance",
  "Piercing",
  "BounceCondition",
  "DestinationType",
  "ReduceDamageRatePerHit",
  "MaxReducedDamageRate",
  "ProjectileType",
  "ShapeType",
  "Width",
  "Height",
  "FireDelayFrame",
  "ExcludeRadius",
  "AttachTarget",
  "AllowDuplicateHit",
  "HitFrames",
  "CheckBlockHit",
] as const;
</script>
