<template>
  <LogicEffectBase :data ref="base">
    <template #chips>
      <slot name="chips"></slot>
    </template>
  </LogicEffectBase>
  <div>
    <p v-if="data.ChangeRateByCost !== '0'">
      ChangeRateByCost:{{ data.ChangeRateByCost }}
    </p>
    {{ effect }}
  </div>
</template>

<script setup lang="ts">
import { StatType } from "@/assets/game/excelType";
import { ZHealEffect } from ".";
import { InfoBuilder, PRZ } from "../../misc";
import LogicEffectBase from "../LogicEffectBase.vue";
import { ExtraStatType } from "../enum";

const props = defineProps({
  data: {
    type: Object as PRZ<typeof ZHealEffect>,
    required: true,
  },
});

const effect = computed(() => {
  const rate = `${StatType[props.data.BonusSource]}×${props.data.BonusRate}`;
  const extra = `+${ExtraStatType[props.data.ExtraStatSource]}×${props.data.ExtraStatRate}`;
  return rate + (props.data.ExtraStatRate !== 0 ? extra : "");
});

const base = ref<InstanceType<typeof LogicEffectBase>>();
const info = computed(() => {
  const arr = base.value?.info;
  if (arr == null) return arr;

  const builder = new InfoBuilder(props.data);
  builder.add("ApplyHealRate");
  builder.add("ApplyHealRateByArmorType");
  builder.add("ApplyHealRateByBulletType");

  return [...arr, ...builder.arr];
});
defineExpose({ info });
</script>
