<template>
  <div>
    <p v-for="(type, i) in types" :key="`${type}-${amounts[i]}`">
      ★ {{ star(type, amounts[i]) }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { StarGoalType } from "@/assets/game/excelType";
import { noDefault } from "@/utils/misc";
import { ReadonlyDeep } from "type-fest";
import { ERR_501 } from "../warn/error";
const error501 = inject(ERR_501)!;

defineProps({
  types: {
    type: Array as PropType<ReadonlyDeep<StarGoalType[]>>,
    required: true,
  },
  amounts: {
    type: Array as PropType<readonly number[]>,
    required: true,
  },
});

function star(type: StarGoalType, amount: number) {
  switch (type) {
    case StarGoalType.None:
      error501("StarGoalType.None");
      return ``;
    case StarGoalType.AllAlive:
      return `誰も退却させられていない`;
    case StarGoalType.Clear:
      return `クリア`;
    case StarGoalType.GetBoxes:
      return `報酬を${amount}個獲得`;
    case StarGoalType.ClearTimeInSec:
      return `${amount}秒以内にクリア`;
    case StarGoalType.AllyBaseDamage:
      error501("StarGoalType.AllyBaseDamage");
      return ``;
    default:
      return noDefault(type);
  }
}
</script>
