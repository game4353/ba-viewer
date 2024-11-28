<template>
  <v-dialog max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <ParcelBox v-bind="activatorProps" layout="select" :scale />
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
import { ERR_HANDLE } from "@/components/warn/error";
import { useExcelRecipeSelectionGroup } from "@/utils/data/excel/recipe";

const props = defineProps({
  gid: {
    type: Number,
    required: true,
  },
  amount: Number,
  scale: Number,
});
const errHandle = inject(ERR_HANDLE)!;

const items = computed(() =>
  useExcelRecipeSelectionGroup()
    .value?.andThen((map) => map.getResult(props.gid))
    .unwrapOrElse(errHandle),
);
</script>
