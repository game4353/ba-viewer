<template>
  <template v-if="item">
    <RecipeSelection
      v-if="item.RecipeSelectionGroupId !== 0"
      :scaling
      :gid="item.RecipeSelectionGroupId"
    />
    <RecipeIngredient
      v-else-if="item.RecipeIngredientId !== 0"
      :scaling
      :gid="item.RecipeIngredientId"
    />
  </template>
</template>

<script setup lang="ts">
import { RewardTag } from "@/assets/game/types/flatDataExcel";
import { ScaleOption } from "@/components/misc/scale";
import { useExcelRecipe } from "@/utils/data/excel/recipe";
import { ERR_HANDLE } from "../../warn/error";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  pid: {
    type: Number,
    required: true,
  },
  amount: Number,
  amountMin: Number,
  amountMax: Number,
  scaling: Object as PropType<ScaleOption>,
  tag: {
    type: Number as PropType<RewardTag>,
  },
});

const item = computed(() =>
  useExcelRecipe()
    .value.andThen((map) => map.getResult(props.pid))
    .unwrapOrElse(errHandle),
);
</script>
