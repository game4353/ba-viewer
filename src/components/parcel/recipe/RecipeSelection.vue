<template>
  <v-dialog max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <ParcelBox v-bind="activatorProps" layout="select" :scaling />
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
            :scaling="{ r: 0.3 }"
            route
          />
        </div>
      </v-sheet>
    </template>
  </v-dialog>
</template>

<script setup lang="ts">
import { ScaleOption } from "@/components/misc/scale";
import { ERR_HANDLE } from "@/components/warn/error";
import { useExcelRecipeSelectionGroup } from "@/utils/data/excel/recipe";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  gid: {
    type: Number,
    required: true,
  },
  amount: Number,
  scaling: Object as PropType<ScaleOption>,
});

const items = computed(() =>
  useExcelRecipeSelectionGroup()
    .value.andThen((map) => map.getResult(props.gid))
    .unwrapOrElse(errHandle),
);
</script>
