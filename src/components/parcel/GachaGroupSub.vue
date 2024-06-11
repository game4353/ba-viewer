<template>
  <v-sheet border rounded :elevation="8">
    <div
      v-if="isLastArray(group)"
      class="flex flex-row flex-wrap border border-red"
    >
      <div v-for="(item, key) in group" :key>
        <Parcel
          :amountMin="item.ParcelAmountMin"
          :amountMax="item.ParcelAmountMax"
          :type="item.ParcelType"
          :pid="item.ParcelID"
          :scale
          route
        />
        <p class="text-center">weight: {{ item.Prob }}</p>
      </div>
    </div>
    <div
      v-else
      class="flex flex-row flex-wrap border border-green-500 p-4 gap-2"
    >
      <GachaGroupSub
        v-for="(subGroup, key) in group"
        :key
        :group="subGroup"
        :scale
      />
    </div>
  </v-sheet>
</template>

<script setup lang="ts">
import type { GachaElementExcel } from "~game/types/flatDataExcel";
import { INJECT_ERR } from "@/utils/error";
import { PropType } from "vue";
import { type Recursive, isLastArray } from "@/types";

const props = defineProps({
  group: {
    type: Object as PropType<Recursive<GachaElementExcel[]>>,
    required: true,
  },
  scale: Number,
});

const setError = inject(INJECT_ERR)!;
watch(
  () => props.group.at(0),
  (newVal) => {
    if (newVal == null) setError("GachaGroupSub is empty.");
  },
);
</script>
