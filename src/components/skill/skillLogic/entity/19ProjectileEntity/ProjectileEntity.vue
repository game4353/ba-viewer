<template>
  <div>
    <div v-if="entity.Abilities">
      <Abilities :abilities="entity.Abilities" :lv />
    </div>
    <div v-if="entity.SplashAreaEntityData">
      <div class="flex flex-row gap-1">
        <p>SplashAreaEntity</p>
        <Info>
          <p v-for="(str, key) in r1?.info" :key>{{ str }}</p>
        </Info>
      </div>
      <Entity :entity="entity.SplashAreaEntityData" :lv ref="r1" />
    </div>
    <div v-if="entity.AreaSpawnerData">
      <div class="flex flex-row gap-1">
        <p>AreaSpawner</p>
        <Info>
          <p v-for="(str, key) in r2?.info" :key>{{ str }}</p>
        </Info>
      </div>
      <AreaSpawner :entity="entity.AreaSpawnerData" :lv ref="r2" />
    </div>
    <div v-if="entity.SkillEntitySpawnerData">
      <div class="flex flex-row gap-1">
        <p>SkillEntitySpawner</p>
        <Info>
          <p v-for="(str, key) in r3?.info" :key>{{ str }}</p>
        </Info>
      </div>
      <SkillEntitySpawner
        :entity="entity.SkillEntitySpawnerData"
        :lv
        ref="r3"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ReadonlyDeep } from "type-fest";
import { TZTargetProjectileEntity } from ".";
import { InfoBuilder } from "../../../misc";
import {
  ShapeType,
  SpawnDirectionTypes,
  SpawnPositionTypes,
} from "../../../misc/enum";
import AreaSpawner from "../45AreaSpawner/AreaSpawner.vue";
import SkillEntitySpawner from "../46SkillEntitySpawner/SkillEntitySpawner.vue";
import Entity from "../Entity.vue";

const r1 = ref<InstanceType<typeof Entity>>();
const r2 = ref<InstanceType<typeof AreaSpawner>>();
const r3 = ref<InstanceType<typeof SkillEntitySpawner>>();

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

const info = computed(() => {
  const builder = new InfoBuilder(props.entity);
  builder.add("Width", 0);
  builder.add("Height", 0);
  builder.add("Speed", 0);
  builder.add(
    "ShapeType",
    ShapeType.None,
    (v) => ShapeType[v],
    () => "Shape: ",
  );
  builder.add("FireDelayFrame", 0);
  builder.add("SplashDelayFrame", 0);
  builder.add(
    "DestinationType",
    SpawnPositionTypes.None,
    (t) => SpawnPositionTypes[t],
  );
  builder.add("DestinationPositionRandomOffsetRange", 0);
  builder.add(
    "DestinationOffsetDirectionType",
    SpawnDirectionTypes.None,
    (t) => SpawnDirectionTypes[t],
  );
  builder.add("ReduceDamageRatePerHit", 0);
  builder.add("MaxReducedDamageRate", 0);
  builder.add(
    "IsStickToTargetAfterHit",
    false,
    () => "Stick",
    () => "",
  );

  return builder.arr;
});
defineExpose({ info });
</script>
