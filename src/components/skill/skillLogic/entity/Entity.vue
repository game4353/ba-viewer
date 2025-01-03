<template>
  <div>
    <div>
      <div v-for="key in keys" :key>
        <div v-if="key in entity">
          {{ key }} {{ entity[key as keyof typeof entity] }}
        </div>
      </div>
    </div>
    <div v-if="'Abilities' in entity && entity.Abilities">
      <Abilities :abilities="entity.Abilities" :lv />
    </div>
    <div v-if="'AreaAbilities' in entity && entity.AreaAbilities">
      <Abilities :abilities="entity.AreaAbilities" :lv />
    </div>
    <div>
      <div v-if="'BounceEntity' in entity">{{ entity["BounceEntity"] }}</div>
    </div>
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
