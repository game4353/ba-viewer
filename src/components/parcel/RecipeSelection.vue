<template>
  <v-dialog max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <ParcelCommon
        v-bind="activatorProps"
        class="cursor-pointer"
        layout="select"
        rarity="N"
        :scale
      />
    </template>

    <template v-slot:default="{}">
      <v-sheet border rounded :elevation="8" class="p-2">
        <div class="flex flex-row flex-wrap gap-y-2">
          <Parcel
            v-for="(item, key) in items"
            :key
            :amountMin="item.ResultAmountMin"
            :amountMax="item.ResultAmountMax"
            :type="item.ParcelType"
            :pid="item.ParcelId"
            :scale="0.3"
            route
          />
        </div>
      </v-sheet>
    </template>
  </v-dialog>
</template>

<script setup lang="ts">
import type { RecipeSelectionGroupExcel } from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/RecipeSelectionGroupExcelTable.json";
import { ASSERT_SOME } from "../warn/error";

const props = defineProps({
  gid: {
    type: Number,
    required: true,
  },
  amount: Number,
  scale: Number,
});
const assertSome = inject(ASSERT_SOME)!;
const arr = DataList as RecipeSelectionGroupExcel[];
const dict = Object.groupBy(
  arr,
  ({ RecipeSelectionGroupId }) => RecipeSelectionGroupId,
);

const items = computed(() => dict[props.gid]);
assertSome(
  items.value,
  500,
  `Unable to find recipe selection group id (${props.gid}).`,
);
</script>
