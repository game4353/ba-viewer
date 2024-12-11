<template>
  <v-card class="m-1" v-if="reward">
    <div class="flex flex-row align-middle">
      <GameImg class="max-w-32" :path="reward.TreasureSmallImagePath" />
      <div class="flex flex-col justify-evenly">
        <GameImg :path="reward.TreasureSizeIconPath" />
        x{{ amount }}
      </div>
    </div>
    <Parcels
      :ids="reward.RewardParcelId"
      :types="reward.RewardParcelType"
      :amounts="reward.RewardParcelAmount"
      :scaling
      route
    />
  </v-card>
</template>

<script setup lang="ts">
import { useExcelDbEventContentTreasureReward } from "@/utils/data/excel/event";
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
  useExcelDbEventContentTreasureReward()
    .value.andThen((map) => map.getResult(props.rid))
    .unwrapOrElse(errHandle),
);
</script>
