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
import { isLastArray, type Recursive } from "@/utils/types";
import { PropType } from "vue";
import type { GachaElementExcel } from "~game/types/flatDataExcel";
import { ASSERT_SOME } from "../../warn/error";

const props = defineProps({
  group: {
    type: Object as PropType<Recursive<GachaElementExcel[]>>,
    required: true,
  },
  scale: Number,
});
const assertSome = inject(ASSERT_SOME)!;
const first = computed(() => props.group.at(0));
assertSome(first.value, 500, "GachaGroupSub is empty.");
</script>
