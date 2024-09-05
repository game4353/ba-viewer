<template>
  <div class="flex flex-col h-full w-min">
    <v-slider
      class="flex-grow-0"
      v-model="slider"
      show-ticks="always"
      step="1"
      :min="1"
      :max="15"
    >
      <template v-slot:prepend> {{ slider }}回目 </template>
    </v-slider>
    <div class="flex-grow overflow-y-hidden">
      <Scroll>
        <div class="flex flex-row mx-2" v-for="r in rolls" :key="r.Id">
          <div class="w-16">
            <EventFortuneCard :eid="r.FortuneGachaGroupId" />
          </div>
          <div class="flex flex-col">
            <div class="px-3 text-lg">{{ calcProb(r) / 100 }}%</div>
            <div class="flex flex-row">
              <Parcel
                v-for="(p, i) in r.RewardParcelType"
                :key="i"
                :type="p"
                :pid="r.RewardParcelId[i]"
                :amount="r.RewardParcelAmount[i]"
                :scale="0.3"
              />
            </div>
          </div>
        </div>
      </Scroll>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {
  EventContentFortuneGachaModifyExcel,
  EventContentFortuneGachaShopExcel,
} from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList as d2 } from "~game/excel/EventContentFortuneGachaModifyExcelTable.json";
// @ts-ignore
import { DataList as d3 } from "~game/excel/EventContentFortuneGachaShopExcelTable.json";

const props = defineProps({
  eid: {
    type: Number,
    required: true,
  },
});

const slider = ref(1);
const modify =
  (d2 as EventContentFortuneGachaModifyExcel[]).find(
    (v) => v.EventContentId === props.eid,
  )?.ProbModifyStartCount ?? 0;
const rolls = (d3 as EventContentFortuneGachaShopExcel[])
  .filter((v) => v.EventContentId === props.eid)
  .reverse();

function calcProb(r: EventContentFortuneGachaShopExcel) {
  const step = Math.max(0, slider.value - modify);
  const prob = r.Prob + step * r.ProbModifyValue;
  if (r.ProbModifyValue > 0) return Math.min(prob, r.ProbModifyLimit);
  else return Math.max(prob, r.ProbModifyLimit);
}
</script>
