<template>
  <div v-if="reward">
    <Parcels
      :ids="reward.RewardParcelId"
      :types="reward.RewardParcelType"
      :amounts="reward.RewardParcelAmount"
      :scale
      :scaled-w
      :scaled-h
      :scale-type
      route
    />
  </div>
</template>

<script setup lang="ts">
import { useExcelDbEventContentTreasureCellReward } from "@/utils/data/excel/event";
import { ERR_HANDLE } from "../warn/error";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  rid: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  scale: Number,
  scaledW: Number,
  scaledH: Number,
  scaleType: String as PropType<"min" | "max">,
});

const reward = computed(() =>
  useExcelDbEventContentTreasureCellReward()
    .value.andThen((map) => map.getResult(props.rid))
    .unwrapOrElse(errHandle),
);
</script>
