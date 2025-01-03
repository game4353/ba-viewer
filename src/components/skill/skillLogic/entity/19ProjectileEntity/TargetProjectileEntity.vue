<template>
  <div>
    <div class="flex flex-row flex-wrap gap-2 m-2">
      <div v-for="chip in chips" :key="chip.key">
        <v-chip class="w-fit" v-if="data[chip.key] !== chip.value">
          <span v-if="chip.display">{{ chip.display }}:&nbsp;</span>
          <span>{{
            //@ts-ignore
            chip.toDisplay(data[chip.key])
          }}</span>
        </v-chip>
      </div>
    </div>

    <div v-if="data.Abilities">
      <Abilities :abilities="data.Abilities" :lv />
    </div>
    <div v-if="data.SplashAreaEntityData">
      {{ data.SplashAreaEntityData }}
    </div>
    <div v-if="data.AreaSpawnerData">
      {{ data.AreaSpawnerData }}
    </div>
    <div v-if="data.SkillEntitySpawnerData">
      {{ data.SkillEntitySpawnerData }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ReadonlyDeep } from "type-fest";
import { ShapeType, SpawnDirectionTypes, SpawnPositionTypes } from "../../enum";
import { TZTargetProjectileEntity } from "../19ProjectileEntity";

defineProps({
  data: {
    type: Object as PropType<ReadonlyDeep<TZTargetProjectileEntity>>,
    required: true,
  },
  lv: {
    type: Number,
    required: true,
  },
});

class Chip<T extends keyof TZTargetProjectileEntity> {
  display: string;
  constructor(
    public key: T,
    public value: TZTargetProjectileEntity[T],
    public toDisplay = (x: TZTargetProjectileEntity[T]) => String(x),
    display?: string,
  ) {
    if (display == null) this.display = key as string;
    else this.display = display;
  }
}

const chips = [
  new Chip("Width", 0),
  new Chip("Height", 0),
  new Chip("Speed", 0),
  new Chip("ShapeType", ShapeType.None, (t) => ShapeType[t], "Shape"),
  new Chip("FireDelayFrame", 0),
  new Chip("SplashDelayFrame", 0),
  new Chip(
    "DestinationType",
    SpawnPositionTypes.None,
    (t) => SpawnPositionTypes[t],
  ),
  new Chip("DestinationPositionRandomOffsetRange", 0),
  new Chip(
    "DestinationOffsetDirectionType",
    SpawnDirectionTypes.None,
    (t) => SpawnDirectionTypes[t],
  ),
  new Chip("ReduceDamageRatePerHit", 0),
  new Chip("MaxReducedDamageRate", 0),
  new Chip("IsStickToTargetAfterHit", false, () => "Stick", ""),
];
</script>
