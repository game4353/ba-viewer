<template>
  <v-sheet border rounded :elevation="8">
    <div
      class="flex flex-row flex-wrap p-1 border-[1px] border-red-600"
      v-if="elements"
    >
      <div v-for="(item, key) in elements" :key>
        <Parcel
          :amountMin="item.ParcelAmountMin"
          :amountMax="item.ParcelAmountMax"
          :type="item.ParcelType"
          :pid="item.ParcelID"
          :scaling
          route
        />
        <p class="text-center">weight: {{ item.Prob }}</p>
      </div>
    </div>
    <div
      v-if="groups"
      class="flex flex-row flex-wrap border-[1px] border-green-500 p-2 gap-2"
    >
      <GachaGroupSub
        v-for="(group, key) in groups"
        :key
        :pid="group.ParcelID"
        :scaling
      />
    </div>
  </v-sheet>
</template>

<script setup lang="ts">
import { ScaleOption } from "@/components/misc/scale";
import {
  useExcelGachaElement,
  useExcelGachaElementRecursive,
  useExcelGachaGroup,
} from "@/utils/data/excel/gacha";
import { ERR_HANDLE } from "../../warn/error";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  pid: {
    type: Number,
    required: true,
  },
  scaling: Object as PropType<ScaleOption>,
});

const obj = computed(() =>
  useExcelGachaGroup().value.unwrapOrElse(errHandle)?.get(props.pid),
);
const groups = computed(() => {
  if (obj.value?.IsRecursive !== true) return undefined;
  return useExcelGachaElementRecursive()
    .value.andThen((map) => map.getResult(props.pid))
    .unwrapOrElse(errHandle);
});
const elements = computed(() => {
  if (obj.value?.IsRecursive !== false) return undefined;
  return useExcelGachaElement()
    .value.andThen((map) => map.getResult(props.pid))
    .unwrapOrElse(errHandle);
});
</script>
