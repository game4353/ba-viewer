<template>
  <Info>
    <p v-for="(str, key) in base?.info" :key>{{ str }}</p>
  </Info>
  <!-- 0 -->
  <template v-if="modifier.$type === 'ArmorConditionModifier'">
    <template v-if="modifier.IncludeType !== IncludeType.None">
      {{ ModifierCheckTarget[modifier.CheckTarget] }}
      {{ modifier.IncludeType === IncludeType.Include ? "=" : "≠" }}
      {{ ArmorType[modifier.ArmorType] }}
    </template>
  </template>
  <!-- 11 -->
  <template v-else-if="modifier.$type === 'CountLogicEffectTemplateModifier'">
    <template v-if="modifier.IncludeType !== IncludeType.None">
      {{ ModifierCheckTarget[modifier.CheckTarget] }}
      {{ modifier.IncludeType === IncludeType.Include ? "has" : "not has" }}
      {{ modifier.CountMin }}~{{ modifier.CountMax }}
      {{ modifier.TemplateId }}
    </template>
  </template>

  <template v-else>
    <div>"{{ modifier.$type }}" is not done yet.</div>
  </template>
</template>

<script setup lang="ts">
import { ArmorType } from "@/assets/game/excelType";
import { ReadonlyDeep } from "type-fest";
import { TZSkillAbilityModifier } from ".";
import { IncludeType, ModifierCheckTarget } from "../../../misc/enum";

defineProps({
  modifier: {
    type: Object as PropType<ReadonlyDeep<TZSkillAbilityModifier>>,
    required: true,
  },
});

const base = ref();
</script>
