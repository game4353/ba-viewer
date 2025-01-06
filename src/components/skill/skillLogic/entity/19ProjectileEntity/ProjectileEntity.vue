<template>
  <div>
    <div v-if="entity.Abilities">
      <Abilities :abilities="entity.Abilities" :lv />
    </div>
    <div v-if="entity.SplashAreaEntityData">
      {{ entity.SplashAreaEntityData }}
    </div>
    <div v-if="entity.AreaSpawnerData">
      {{ entity.AreaSpawnerData }}
    </div>
    <div v-if="entity.SkillEntitySpawnerData">
      {{ entity.SkillEntitySpawnerData }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ReadonlyDeep } from "type-fest";
import { TZTargetProjectileEntity } from ".";
import { ShapeType, SpawnDirectionTypes, SpawnPositionTypes } from "../../enum";

const props = defineProps({
  entity: {
    type: Object as PropType<ReadonlyDeep<TZTargetProjectileEntity>>,
    required: true,
  },
  lv: {
    type: Number,
    required: true,
  },
});

const base = ref();
const info = computed(() => {
  const arr = [...base.value.info];

  function add<T extends keyof TZTargetProjectileEntity>(
    key: T,
    dft: TZTargetProjectileEntity[T],
    toVal = (val: ReadonlyDeep<TZTargetProjectileEntity>[T]) => String(val),
    toKey = (key: T) => String(key),
  ) {
    const val = props.entity[key];
    if (val !== dft) arr.push(`${toKey(key)}: ${toVal(val)}`);
  }

  add("Width", 0);
  add("Height", 0);
  add("Speed", 0);
  add(
    "ShapeType",
    ShapeType.None,
    (t) => ShapeType[t],
    () => "Shape",
  );
  add("FireDelayFrame", 0);
  add("SplashDelayFrame", 0);
  add("DestinationType", SpawnPositionTypes.None, (t) => SpawnPositionTypes[t]);
  add("DestinationPositionRandomOffsetRange", 0);
  add(
    "DestinationOffsetDirectionType",
    SpawnDirectionTypes.None,
    (t) => SpawnDirectionTypes[t],
  );
  add("ReduceDamageRatePerHit", 0);
  add("MaxReducedDamageRate", 0);
  add(
    "IsStickToTargetAfterHit",
    false,
    () => "Stick",
    () => "",
  );
});
defineExpose({ info });
</script>
