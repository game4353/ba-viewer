<template>
  <div v-if="reward">
    <Parcels
      :ids="reward.RewardParcelId"
      :types="reward.RewardParcelType"
      :amounts="reward.RewardParcelAmount"
      :scaling
      route
    />
  </div>
</template>

<script setup lang="ts">
import { useExcelEventContentTreasureCellReward } from "@/utils/data/excel/event";
import { ScaleOption } from "../misc/scale";
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
  scaling: Object as PropType<ScaleOption>,
});

const reward = computed(() =>
  useExcelEventContentTreasureCellReward()
    .value.andThen((map) => map.getResult(props.rid))
    .unwrapOrElse(errHandle),
);
</script>
