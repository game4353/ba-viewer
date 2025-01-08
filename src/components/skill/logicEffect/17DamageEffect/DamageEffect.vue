<template>
  <LogicEffectBase :data ref="base">
    <template #chips>
      <v-chip v-if="data.CriticalCheck === DamageCriticalType.Always">
        <span>会心 ⭕</span>
      </v-chip>
      <v-chip v-else-if="data.CriticalCheck === DamageCriticalType.Never">
        <span>会心 ❌</span>
      </v-chip>
      <v-chip v-if="data.CanEvade === false">
        <span>回避 ❌</span>
      </v-chip>
      <v-chip v-if="data.ApplyBulletType === false">
        <span>BulletType ❌</span>
      </v-chip>
      <v-chip v-if="data.ApplyDefense === false">
        <span>Defense ❌</span>
      </v-chip>
      <v-chip v-if="data.ApplyDamageRatio === false">
        <span>DamageRatio ❌</span>
      </v-chip>
      <v-chip v-if="data.ApplyDamageRatio2 === false">
        <span>DamageRatio2 ❌</span>
      </v-chip>
      <v-chip v-if="data.IgnoreShield === true">
        <span>IgnoreShield ⭕</span>
      </v-chip>
      <v-chip v-if="data.ApplyStability === false">
        <span>安定 ❌</span>
      </v-chip>
      <v-chip v-if="data.ApplyTerrainAdaptationDamage === false">
        <span>TerrainAdaptationDamage ❌</span>
      </v-chip>
      <v-chip v-if="data.ApplyExDamagedRatio === false">
        <span>ExDamagedRatio ❌</span>
      </v-chip>
      <v-chip v-if="data.DefensePenetrationRate !== 10000">
        <span
          >防御無視: {{ (10000 - data.DefensePenetrationRate) / 100 }}%</span
        >
      </v-chip>
      <v-chip v-if="data.Amount > 0">
        <span>Amount: {{ data.Amount }}</span>
      </v-chip>
      <v-chip v-if="data.LifeRecover > 0">
        <span>LifeRecover: {{ data.LifeRecover }}</span>
      </v-chip>
      <slot name="chips"></slot>
    </template>
  </LogicEffectBase>
  <div>
    <div>{{ StatType[data.BonusSourceFirst] }}× {{ damageRates }}</div>
  </div>
</template>

<script setup lang="ts">
import { StatType } from "@/assets/game/excelType";
import { ZDamageEffect } from ".";
import { PRZ } from "../../misc";
import { DamageCriticalType } from "../enum";
import LogicEffectBase from "../LogicEffectBase.vue";

const props = defineProps({
  data: {
    type: Object as PRZ<typeof ZDamageEffect>,
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

const base = ref<InstanceType<typeof LogicEffectBase>>();
const info = computed(() => {
  return base.value?.info;
});
defineExpose({ info });
</script>
