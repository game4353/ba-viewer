<template>
  <Info v-if="base?.info">
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
  <!-- 16 -->
  <template v-else-if="modifier.$type === 'HpRateDamageModifier'">
    <p>
      {{ ModifierCheckTarget[modifier.CheckTarget] }}
      HP: {{ modifier.MinHpRate / 100 }}%~{{ modifier.MaxHpRate / 100 }}% →
      Damage: {{ modifier.MinDamageMultiplier / 100 }}%~{{
        modifier.MaxDamageMultiplier / 100
      }}%
    </p>
  </template>
  <!-- 19 -->
  <template v-else-if="modifier.$type === 'LogicEffectTemplateModifier'">
    <template v-if="modifier.IncludeType !== IncludeType.None">
      {{ ModifierCheckTarget[modifier.CheckTarget] }}
      {{ IncludeType[modifier.IncludeType] }}
      {{ modifier.TemplateId }}
    </template>
  </template>
  <!-- 27 -->
  <template v-else-if="modifier.$type === 'TagConditionalModifier'">
    <template v-if="modifier.IncludeType !== IncludeType.None">
      {{ ModifierCheckTarget[modifier.CheckTarget] }}
      {{ modifier.IncludeType === IncludeType.Include ? "" : "not" }}
      has tags {{ modifier.TagConstraintsInt }}
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
