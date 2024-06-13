<template>
  <RecipeSelection
    v-if="item.RecipeType === 'SelectionItem'"
    :scale
    :gid="item.RecipeSelectionGroupId"
  />
  <RecipeSelection
    v-else-if="item.RecipeType === 'SelectRecruit'"
    :scale
    :gid="item.RecipeSelectionGroupId"
  />
  <div v-else>{{ item }}</div>
</template>

<script setup lang="ts">
import type { RecipeExcel } from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/RecipeExcelTable.json";
import { ASSERT_SOME } from "../warn/error";

const props = defineProps({
  pid: {
    type: Number,
    required: true,
  },
  amount: Number,
  scale: Number,
});
const assertSome = inject(ASSERT_SOME)!;
const items = DataList as RecipeExcel[];
const dict = Object.fromEntries(items.map((v) => [v.Id, v]));

const item = computed(() => dict[props.pid]);
assertSome(item.value, 500, `Unable to find recipe id (${props.pid}).`);
</script>
