<template>
  <div>
    <div v-if="data.Dispellable">
      <v-chip class="w-fit">Dispellable ⭕</v-chip>
    </div>
    <div v-else>
      <v-chip class="w-fit">Dispellable ❌</v-chip>
    </div>
    <div v-if="data.StackSameEffectApplied">
      <v-chip class="w-fit"
        >Stack: {{ data.StackSameEffectCount }} (old
        {{ data.ExpireOldIfStackCountOver ? "<" : ">" }} new)</v-chip
      >
    </div>
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
    <p v-if="end">end:{{ end }}</p>
    <p v-if="remove">remove:{{ remove }}</p>
  </div>
</template>

<script setup lang="ts">
import { EndCondition, StatType } from "@/assets/game/excelType";
import { noDefault } from "@/utils/misc";
import { ReadonlyDeep } from "type-fest";
import { TZStatChangeEffect } from ".";

const props = defineProps({
  data: {
    type: Object as PropType<ReadonlyDeep<TZStatChangeEffect>>,
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

function stop(cond: EndCondition, arg1: string, arg2: string) {
  switch (cond) {
    case EndCondition.None:
      return undefined;
    case EndCondition.Duration:
      return arg1 === "-1" ? undefined : `${Number(arg1) / 1000}秒まで`;
    case EndCondition.ReloadCount:
      return `リロード${arg1}回まで`;
    case EndCondition.AmmoCount:
    case EndCondition.AmmoHit:
    case EndCondition.HitCount:
    case EndCondition.UseExSkillCount:
      return `${EndCondition[cond]} ${arg1} ${arg2}`;
    default:
      return noDefault(cond);
  }
}

const end = computed(() =>
  stop(
    props.data.EndCondition,
    props.data.EndConditionArgumentFirst,
    props.data.EndConditionArgumentSecond,
  ),
);
const remove = computed(() =>
  stop(
    props.data.RemoveCondition,
    props.data.RemoveConditionArgumentFirst,
    props.data.RemoveConditionArgumentSecond,
  ),
);
</script>
