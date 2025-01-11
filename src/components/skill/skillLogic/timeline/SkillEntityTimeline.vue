<template>
  <div class="flex flex-row gap-2">
    <p class="text-lg" v-if="idx != null">{{ idx + 1 }}.</p>
    <p class="text-lg">Frame: {{ tl.Frame }}</p>
    <v-chip v-if="'Tag' in tl">{{ AbilityActivateTag[tl.Tag] }}</v-chip>
    <Info v-if="(info?.length ?? 0) > 0">
      <p v-for="(str, key) in info" :key>{{ str }}</p>
    </Info>
  </div>
  <div v-if="'DamageDistributeRate' in tl && tl.DamageDistributeRate !== 0">
    DamageRatio: {{ tl.DamageDistributeRate / 100 }}%
  </div>
  <Entity v-if="entity" :entity :lv ref="base" />
</template>

<script setup lang="ts">
import { ReadonlyDeep } from "type-fest";
import { formatVec2, InfoBuilder } from "../../misc";
import {
  AbilityActivateTag,
  EntitySpawnCondition,
  EntitySpawnConditionCheckTarget,
  SpawnDirectionTypes,
} from "../../misc/enum";
import Entity from "../entity/Entity.vue";
import { TZAreaTimeline } from "./AreaTimeline";
import {
  TimelineTypes,
  TZExSkillEntityTimeline,
  TZSkillEntitySpawnerTimeline,
} from "./schema";

const props = defineProps({
  tl: {
    type: Object as PropType<ReadonlyDeep<TimelineTypes>>,
    required: true,
  },
  lv: {
    type: Number,
    required: true,
  },
  idx: Number,
});

const entity = computed(() =>
  "AreaData" in props.tl ? props.tl.AreaData : props.tl.Entity,
);

const base = ref<InstanceType<typeof Entity>>();
const info = computed(() => {
  const arr = base.value?.info;
  if (arr == null) return arr;

  const builder = new InfoBuilder(props.tl);
  if ("SpawnCheckLogicEffetTemplateId" in props.tl) {
    (builder as InfoBuilder<ReadonlyDeep<TZAreaTimeline>>).add(
      "SpawnCheckLogicEffetTemplateId",
    );
  }
  if ("InvokerDirectionOverride" in props.tl) {
    (builder as InfoBuilder<ReadonlyDeep<TZExSkillEntityTimeline>>)
      .add(
        "InvokerDirectionOverride",
        SpawnDirectionTypes.None,
        (v) => SpawnDirectionTypes[v],
      )
      ?.add("InvokerDirectionOverrideWorldPosition", null, formatVec2);
  }
  if ("SpawnCondition" in props.tl) {
    (builder as InfoBuilder<ReadonlyDeep<TZSkillEntitySpawnerTimeline>>)
      .add(
        "SpawnCondition",
        EntitySpawnCondition.None,
        (v) => EntitySpawnCondition[v],
      )
      ?.add("SpawnConditionParameter", undefined)
      ?.add("SpawnConditionParameterForTag", undefined)
      ?.add(
        "SpawnConditionCheckTarget",
        null,
        (v) => EntitySpawnConditionCheckTarget[v],
      );
  }

  return [...arr, ...builder.arr];
});
</script>
