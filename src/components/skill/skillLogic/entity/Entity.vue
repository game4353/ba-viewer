<template>
  <div class="flex flex-row flex-wrap gap-2 m-2">
    <div v-for="chip in chips" :key="chip.key">
      <v-chip class="w-fit" v-if="entity[chip.key] !== chip.value">
        <span v-if="chip.display">{{ chip.display }}:&nbsp;</span>
        <span>{{
          //@ts-ignore
          chip.toDisplay(entity[chip.key])
        }}</span>
      </v-chip>
    </div>
  </div>

  <TargetProjectileEntity
    v-if="entity.$type === 'TargetProjectileEntity'"
    :data="entity"
    :lv
  />
  <div v-else>
    <div class="flex flex-row flex-wrap gap-2 m-2">
      <div v-for="key in keys.filter((k) => k in entity)" :key>
        {{ key }}: {{ entity[key as keyof typeof entity] }}
      </div>
      <div v-if="'Speed' in entity">
        <v-chip class="w-fit">Speed: {{ entity.Speed }}</v-chip>
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
