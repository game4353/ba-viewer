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
import { INJECT_ERR } from "@/utils/error";

const props = defineProps({
  pid: {
    type: Number,
    required: true,
  },
  amount: Number,
  scale: Number,
});
const setError = inject(INJECT_ERR)!;
const items = DataList as RecipeExcel[];
const dict = Object.fromEntries(items.map((v) => [v.Id, v]));

const item = computed(() => dict[props.pid]);
if (item == null) setError(`Unable to find item id (${props.pid}).`);
</script>
