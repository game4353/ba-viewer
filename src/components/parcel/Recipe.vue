<template>
  <RecipeSelection :scale :gid="item.RecipeSelectionGroupId" />
</template>

<script setup lang="ts">
import { ASSERT_SOME } from "../warn/error";
import { recipeDict } from "./recipe";

const props = defineProps({
  pid: {
    type: [Number, String],
    required: true,
  },
  amount: Number,
  scale: Number,
});
const assertSome = inject(ASSERT_SOME)!;
const item = computed(() => recipeDict[props.pid]!);
assertSome(item.value, 500, `Unable to find recipe id (${props.pid}).`);
assertSome(
  ["SelectionItem", "SelectRecruit"].find((v) => v === item.value.RecipeType),
  501,
  `RecipeType ${item.value.RecipeType} is not implemented`,
);
</script>
