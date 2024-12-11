<template>
  <v-card class="m-1">
    <p class="m-2">
      {{ round.TreasureRoundSize[0] }} x {{ round.TreasureRoundSize[1] }}
    </p>
    <div class="flex flex-row">
      <Parcels
        v-if="goods"
        :ids="goods.ConsumeParcelId"
        :types="goods.ConsumeParcelType"
        :amounts="goods.ConsumeParcelAmount"
        :scale
        :scaled-w
        :scaled-h
        :scale-type
      />
      <p class="mx-2 text-lg my-auto">→</p>
      <EventTreasureCellReward
        :rid="round.CellRewardId"
        :amount="1"
        :scale
        :scaled-w
        :scaled-h
        :scale-type
      />
    </div>
  </v-card>
  <div class="flex flex-col h-full w-min">
    <EventTreasureReward
      v-for="(rid, i) in round.RewardID"
      :key="i"
      :rid="rid"
      :amount="round.RewardAmount[i]"
      :scale
      :scaled-w
      :scaled-h
      :scale-type
    />
  </div>
</template>

<script setup lang="ts">
import { EventContentTreasureRoundExcel } from "@/assets/game/types/flatDataExcelDb";
import { useExcelGoods } from "@/utils/data/excel/shop";
import { ReadonlyDeep } from "type-fest";
import { ERR_HANDLE } from "../warn/error";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  round: {
    type: Object as PropType<ReadonlyDeep<EventContentTreasureRoundExcel>>,
    required: true,
  },
  scale: Number,
  scaledW: Number,
  scaledH: Number,
  scaleType: String as PropType<"min" | "max">,
});

const goods = computed(() =>
  useExcelGoods()
    .value.andThen((map) => map.getResult(props.round.CellCheckGoodsId))
    .unwrapOrElse(errHandle),
);
</script>
