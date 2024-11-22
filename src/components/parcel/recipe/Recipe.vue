<template>
  <template v-if="item">
    <RecipeSelection
      v-if="
        [RecipeType.SelectionItem, RecipeType.SelectRecruit].includes(
          item.RecipeType,
        )
      "
      :scale
      :gid="item.RecipeSelectionGroupId"
    />
    <RecipeSelection v-else :scale :gid="item.RecipeIngredientId" />
  </template>
</template>

<script setup lang="ts">
import { RecipeType, RewardTag } from "@/assets/game/types/flatDataExcel";
import { useExcelRecipe } from "@/utils/data/excel/recipe";
import { fail } from "@/utils/misc";
import { ASSERT_SOME } from "../../warn/error";

const props = defineProps({
  pid: {
    type: [Number, String],
    required: true,
  },
  amount: Number,
  amountMin: Number,
  amountMax: Number,
  scale: Number,
  tag: {
    type: Number as PropType<RewardTag>,
  },
});

const recipeMap = useExcelRecipe();

const assertSome = inject(ASSERT_SOME)!;
const item = computed(() => {
  const map = recipeMap.value?.unwrapOrElse(fail);
  if (map == null) return undefined;
  const item = assertSome(
    map.get(Number(props.pid)),
    500,
    `Unable to find recipe id (${props.pid}).`,
  );

  assertSome(
    [RecipeType.SelectionItem, RecipeType.SelectRecruit].find(
      (v) => v === item.RecipeType,
    ),
    501,
    `RecipeType ${item.RecipeType} is not implemented`,
  );
  return item;
});
</script>
