<template>
  <div v-for="(ab, key) in abilities" :key>
    <div v-if="ab">
      <div>StartDelay: {{ ab.StartDelay }}</div>
      <div v-if="ab.$type === 'LevelDotAbility'">
        <div>TotalCount: {{ ab.TotalCount }}</div>
        <div>Interval: {{ ab.Interval }}</div>
      </div>
      <div v-if="ab.Modifiers">{{ ab.Modifiers }}</div>
      <div>
        <LogicEffect
          v-for="gid in ab.LogicEffectGroupIds"
          :gid
          :lv
          :key="`${gid},${lv}`"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ReadonlyDeep } from "type-fest";
import { SkillAbilityType } from "./schema";

defineProps({
  abilities: {
    type: Array as PropType<ReadonlyDeep<(SkillAbilityType | null)[]>>,
    required: true,
  },
  lv: {
    type: Number,
    required: true,
  },
});
</script>
