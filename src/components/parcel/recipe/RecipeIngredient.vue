<template>
  <v-sheet class="p-2" v-if="item" border rounded :elevation="8">
    <div class="flex flex-row flex-wrap gap-y-2">
      <Parcel
        v-for="(iid, i) in item.IngredientId"
        :key="i"
        :amount="item.IngredientAmount[i]"
        :type="item.IngredientParcelType[i]"
        :pid="iid"
        :scaling="{ r: 0.3 }"
        route
      />
      <Parcel
        v-for="(cid, i) in item.CostId"
        :key="i"
        :amount="item.CostAmount[i]"
        :type="item.CostParcelType[i]"
        :pid="cid"
        :scaling="{ r: 0.3 }"
        route
      />
    </div>
  </v-sheet>
</template>

<script setup lang="ts">
import { ScaleOption } from "@/components/misc/scale";
import { useExcelRecipeIngredient } from "@/utils/data/excel/recipe";
import { ERR_HANDLE } from "../../warn/error";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  gid: {
    type: Number,
    required: true,
  },
  amount: Number,
  scaling: Object as PropType<ScaleOption>,
});

const item = computed(() =>
  useExcelRecipeIngredient()
    .value.andThen((map) => map.getResult(props.gid))
    .unwrapOrElse(errHandle),
);
</script>
