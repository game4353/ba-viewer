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
import {
  useExcelEventContentFortuneGachaModify,
  useExcelEventContentFortuneGachaShop,
} from "@/utils/data/excel/event";
import { ReadonlyDeep } from "type-fest";
import type { EventContentFortuneGachaShopExcel } from "~game/types/flatDataExcel";
import { ERR_HANDLE } from "../warn/error";

const props = defineProps({
  eid: {
    type: Number,
    required: true,
  },
});
const errHandle = inject(ERR_HANDLE)!;

const slider = ref(1);

const modifyTable = useExcelEventContentFortuneGachaModify();
const modify = computed(
  () =>
    modifyTable.value?.unwrapOrElse(errHandle)?.get(props.eid)
      ?.ProbModifyStartCount ?? 0,
);

const shopTable = useExcelEventContentFortuneGachaShop();
const rolls = computed(() => {
  return (
    shopTable.value?.unwrapOrElse(errHandle)?.get(props.eid)?.reverse() || []
  );
});

function calcProb(r: ReadonlyDeep<EventContentFortuneGachaShopExcel>) {
  const step = Math.max(0, slider.value - modify.value);
  const prob = r.Prob + step * r.ProbModifyValue;
  if (r.ProbModifyValue > 0) return Math.min(prob, r.ProbModifyLimit);
  else return Math.max(prob, r.ProbModifyLimit);
}
</script>
