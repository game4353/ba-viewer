<template>
  <div v-if="target">TARGET: {{ target }}</div>
</template>

<script lang="ts" setup>
import type { TargetSortRule } from "./target";

const props = defineProps({
  data: Object,
  sort: Object as PropType<TargetSortRule>,
});

// data.TargetSortRule
// data.EssentialCandidateRule
// data.OptionalCandidateRule

const target = computed(() => {
  if (props.sort == null) return null;
  const sortRule = props.sort;
  if (sortRule.SortStat === 0)
    return `${sortRule.OrderBy} ${sortRule.SortCriteria}`;
  return sortRule;
});
</script>
