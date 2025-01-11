<template>
  <div v-for="(ab, key) in abilities" :key>
    <div class="flex flex-row gap-2">
      <p class="text-base">
        能力<span v-if="abilities.length > 1">{{ key + 1 }}</span
        >.
      </p>
      <v-chip v-if="ab.StartDelay > 0">Delay: {{ ab.StartDelay }}</v-chip>
      <template v-if="ab.$type === 'LevelDotAbility'">
        <v-chip>TotalCount: {{ ab.TotalCount }}</v-chip>
        <v-chip>Interval: {{ ab.Interval }}</v-chip>
      </template>
    </div>
    <div v-for="(modifier, key) in ab.Modifiers" :key>
      <SkillAbilityModifier :modifier />
    </div>
    <div>
      <LogicEffect
        v-for="(gid, idx) in ab.LogicEffectGroupIds"
        :gid
        :idx="ab.LogicEffectGroupIds.length > 1 ? idx : undefined"
        :lv
        :key="`${gid},${lv}`"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ReadonlyDeep } from "type-fest";
import { SkillAbilityType } from "./schema";

const props = defineProps({
  abilities: {
    type: Array as PropType<ReadonlyDeep<(SkillAbilityType | null)[]>>,
  },
  lv: {
    type: Number,
    required: true,
  },
});

const abilities = computed(() => {
  return props.abilities?.filter((v) => v != null) ?? [];
});
</script>
