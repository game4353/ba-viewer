<template>
  <LogicEffectBase :data ref="base">
    <template #chips>
      <v-chip v-if="data.StackSameEffectApplied">
        <span
          >Stack: {{ data.StackSameEffectCount }} (old
          {{ data.ExpireOldIfStackCountOver ? "<" : ">" }} new)</span
        >
      </v-chip>
      <v-chip v-if="end">end: {{ end }}</v-chip>
      <v-chip v-if="remove">remove: {{ remove }}</v-chip>
      <slot name="chips"></slot>
    </template>
  </LogicEffectBase>
  <div>
    <p v-if="data.CasterCoefficientAmount">
      CasterCoefficientAmount:{{
        data.CasterCoefficientAmount
      }}
      CasterStatType:{{ data.CasterStatType }}
    </p>
    <p v-if="data.ChangeRateByCost !== '0'">
      ChangeRateByCost:{{ data.ChangeRateByCost }}
    </p>
    <div v-for="(eff, key) in effect" :key>{{ eff }}</div>
  </div>
</template>

<script setup lang="ts">
import { StatType } from "@/assets/game/excelType";
import { ZStatChangeEffect } from ".";
import { InfoBuilder, PRZ } from "../../misc";
import { endCondition } from "../../misc/rule/endCondition";
import LogicEffectBase from "../LogicEffectBase.vue";

const props = defineProps({
  data: {
    type: Object as PRZ<typeof ZStatChangeEffect>,
    required: true,
  },
});

const effect = computed(() => {
  const arr: string[] = [];
  const stat = StatType[props.data.StatType];
  const add = props.data.BaseAmount;
  const mul = props.data.TargetCoefficientAmount;
  if (add !== 0) {
    const sign = add > 0 ? "+" : "";
    arr.push(`${stat} ${sign}${add}`);
  }
  if (mul !== 0) {
    const sign = mul > 0 ? "+" : "";
    arr.push(`${stat} ${sign}${mul / 100}%`);
  }
  return arr;
});

const end = computed(() =>
  endCondition(
    props.data.EndCondition,
    props.data.EndConditionArgumentFirst,
    props.data.EndConditionArgumentSecond,
  ),
);
const remove = computed(() =>
  endCondition(
    props.data.RemoveCondition,
    props.data.RemoveConditionArgumentFirst,
    props.data.RemoveConditionArgumentSecond,
  ),
);

const base = ref<InstanceType<typeof LogicEffectBase>>();
const info = computed(() => {
  const arr = base.value?.info;
  if (arr == null) return arr;

  const builder = new InfoBuilder(props.data);
  builder.add("Dispellable", false);

  return [...arr, ...builder.arr];
});
defineExpose({ info });
</script>
