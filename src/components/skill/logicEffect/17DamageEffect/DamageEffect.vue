<template>
  <div>
    <div v-if="data.CriticalCheck === DamageCriticalType.Always">
      <v-chip class="w-fit">会心 ⭕</v-chip>
    </div>
    <div v-else-if="data.CriticalCheck === DamageCriticalType.Never">
      <v-chip class="w-fit">会心 ❌</v-chip>
    </div>
    <div v-if="data.CanEvade === false">
      <v-chip class="w-fit">回避 ❌</v-chip>
    </div>
    <div v-if="data.ApplyBulletType === false">
      <v-chip class="w-fit">BulletType ❌</v-chip>
    </div>
    <div v-if="data.ApplyDefense === false">
      <v-chip class="w-fit">Defense ❌</v-chip>
    </div>
    <div v-if="data.ApplyDamageRatio === false">
      <v-chip class="w-fit">DamageRatio ❌</v-chip>
    </div>
    <div v-if="data.ApplyDamageRatio2 === false">
      <v-chip class="w-fit">DamageRatio2 ❌</v-chip>
    </div>
    <div v-if="data.IgnoreShield === true">
      <v-chip class="w-fit">IgnoreShield ⭕</v-chip>
    </div>
    <div v-if="data.ApplyStability === false">
      <v-chip class="w-fit">安定 ❌</v-chip>
    </div>
    <div v-if="data.ApplyTerrainAdaptationDamage === false">
      <v-chip class="w-fit">TerrainAdaptationDamage ❌</v-chip>
    </div>
    <div v-if="data.ApplyExDamagedRatio === false">
      <v-chip class="w-fit">ExDamagedRatio ❌</v-chip>
    </div>
    <div v-if="data.DefensePenetrationRate !== 10000">
      <v-chip class="w-fit"
        >防御無視: {{ (10000 - data.DefensePenetrationRate) / 100 }}%</v-chip
      >
    </div>
    <div v-if="data.Amount > 0">
      <v-chip class="w-fit">Amount: {{ data.Amount }}</v-chip>
    </div>
    <div v-if="data.LifeRecover > 0">
      <v-chip class="w-fit">LifeRecover: {{ data.LifeRecover }}</v-chip>
    </div>
    <div>{{ StatType[data.BonusSourceFirst] }}× {{ damageRates }}</div>
  </div>
</template>

<script setup lang="ts">
import { StatType } from "@/assets/game/excelType";
import { ReadonlyDeep } from "type-fest";
import { DamageCriticalType } from "../enum";
import { ZDamageEffectType } from "./DamageEffect";

const props = defineProps({
  data: {
    type: Object as PropType<ReadonlyDeep<ZDamageEffectType>>,
    required: true,
  },
});

const damageRates = computed(() => {
  const base = props.data.BonusRateFirst;
  const changes = props.data.ChangeRateByCost.split(",").map(Number);
  return changes
    .map((change) => {
      const rate = base + change;
      return `${rate / 100}%`;
    })
    .join(" → ");
});
</script>
