<template>
  <div>
    <div v-for="key in keys" :key>
      <div v-if="key in entity">
        {{ key }} {{ entity[key as keyof typeof entity] }}
      </div>
    </div>
    <div>
      <div v-if="'Abilities' in entity">{{ entity["Abilities"] }}</div>
    </div>
    <div>
      <div v-if="'AreaAbilities' in entity">{{ entity["AreaAbilities"] }}</div>
    </div>
    <div>
      <div v-if="'BounceEntity' in entity">{{ entity["BounceEntity"] }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ReadonlyDeep } from "type-fest";
import { SkillEntityType } from "../skillLogic/entity/schema";

defineProps({
  entity: {
    type: Object as PropType<ReadonlyDeep<SkillEntityType>>,
    required: true,
  },
});

const keys = [
  "Radius",
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
  "Speed",
  "FireDelayFrame",
  "ExcludeRadius",
  "AttachTarget",
  "AllowDuplicateHit",
  "HitFrames",
  "CheckBlockHit",
  "ApplyType",
  "SpawnRate",
  "SpawnDelay",
  "StartDelay",
] as const;
</script>
