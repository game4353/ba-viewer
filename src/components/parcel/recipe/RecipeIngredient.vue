<template>
  <v-sheet class="p-2" v-if="item" border rounded :elevation="8">
    <div class="flex flex-row flex-wrap gap-y-2">
      <Parcel
        v-for="(iid, i) in item.IngredientId"
        :key="i"
        :amount="item.IngredientAmount[i]"
        :type="item.IngredientParcelType[i]"
        :pid="iid"
        :scale="0.3"
        route
      />
    </div>
  </v-sheet>
</template>

<script setup lang="ts">
import { useExcelRecipeIngredient } from "@/utils/data/excel/recipe";
import { ASSERT_SOME, ERR_HANDLE } from "../../warn/error";

const props = defineProps({
  gid: {
    type: Number,
    required: true,
  },
  amount: Number,
  scale: Number,
});
const errHandle = inject(ERR_HANDLE)!;

const assertSome = inject(ASSERT_SOME)!;

const ingredientMap = useExcelRecipeIngredient();
const item = computed(() => {
  const map = ingredientMap.value?.unwrapOrElse(errHandle);
  if (map == null) return undefined;
  const item = assertSome(
    map.get(Number(props.gid)),
    500,
    `Unable to find recipe ingredient id (${props.gid}).`,
  );

  return item;
});
</script>
