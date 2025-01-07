<template>
  <v-tooltip v-if="rule.MaxTargetCount > 0" location="top">
    <template v-slot:activator="{ props }">
      <v-chip class="w-fit" v-bind="props"
        >Target ×{{ rule.MaxTargetCount }}</v-chip
      >
    </template>
    <div>
      <p>{{ OX(rule.TargetSide & TargetSideId.Self) }} Self</p>
      <p>{{ OX(rule.TargetSide & TargetSideId.Ally_Except_Self) }} Ally</p>
      <p>{{ OX(rule.TargetSide & TargetSideId.Enemy) }} Enemy</p>
      <p>{{ OX(rule.TargetSide & TargetSideId.Neutral) }} Neutral</p>
      <v-divider></v-divider>
      <p>
        {{ OX(rule.ApplyEntityType & TargetEntityType.Character_Except_TSS) }}
        Character
      </p>
      <p>{{ OX(rule.ApplyEntityType & TargetEntityType.TSS) }} TSS</p>
      <p>
        {{ OX(rule.ApplyEntityType & TargetEntityType.Supporter) }} Supporter
      </p>
      <p>{{ OX(rule.ApplyEntityType & TargetEntityType.Obstacle) }} Obstacle</p>

      <v-divider></v-divider>
      <p v-if="optional.AliveState !== AliveState.None">
        AliveState = {{ AliveState[optional.AliveState] }}
      </p>
      <!-- TODO -->

      <template v-if="sort.SortCriteria !== TargetSortCriteria.None">
        <v-divider></v-divider>
        <p>
          sort by {{ TargetSortCriteria[sort.SortCriteria] }}
          <span v-if="sort.SortStat !== StatType.None"
            >({{ StatType[sort.SortStat] }})</span
          >
          <span v-if="sort.SortParameter">({{ sort.SortParameter }})</span>
        </p>
        <p>from {{ TargetSortOrder[sort.OrderBy] }}</p>
      </template>
    </div>
  </v-tooltip>
</template>

<script setup lang="ts">
import { StatType } from "@/assets/game/excelType";
import { ReadonlyDeep } from "type-fest";
import {
  TZEssentialCandidateRule,
  TZOptionalCandidateRule,
  TZTargetSortRule,
} from ".";
import {
  AliveState,
  TargetEntityType,
  TargetSideId,
  TargetSortCriteria,
  TargetSortOrder,
} from "../enum";

defineProps({
  rule: {
    type: Object as PropType<ReadonlyDeep<TZEssentialCandidateRule>>,
    required: true,
  },
  sort: {
    type: Object as PropType<ReadonlyDeep<TZTargetSortRule>>,
    required: true,
  },
  optional: {
    type: Object as PropType<ReadonlyDeep<TZOptionalCandidateRule>>,
    required: true,
  },
});

function OX(n: number) {
  return n === 0 ? "❌" : "⭕";
}
</script>
