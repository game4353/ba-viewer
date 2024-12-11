<template>
  <div class="flex flex-col h-full">
    <v-slider
      class="shrink-0"
      v-model="slider"
      show-ticks="always"
      step="1"
      :min="1"
      :max="15"
    >
      <template v-slot:prepend> {{ slider }}回目 </template>
    </v-slider>
    <div class="flex-auto overflow-y-auto">
      <div class="h-full">
        <Scroll>
          <div class="flex flex-col gap-2 p-2">
            <div
              class="flex flex-row"
              v-for="r in props.shop.toReversed()"
              :key="r.Id"
            >
              <div class="w-16">
                <EventFortuneCard :gid="r.FortuneGachaGroupId" />
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
                    :scaling="{ r: 0.3 }"
                  />
                </div>
              </div>
            </div>
          </div>
        </Scroll>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ReadonlyDeep } from "type-fest";
import type {
  EventContentFortuneGachaModifyExcel,
  EventContentFortuneGachaShopExcel,
} from "~game/types/flatDataExcel";

const props = defineProps({
  modify: {
    type: Object as PropType<ReadonlyDeep<EventContentFortuneGachaModifyExcel>>,
    required: true,
  },
  shop: {
    type: Array as PropType<ReadonlyDeep<EventContentFortuneGachaShopExcel>[]>,
    required: true,
  },
});

const slider = ref(1);

function calcProb(r: ReadonlyDeep<EventContentFortuneGachaShopExcel>) {
  const step = Math.max(0, slider.value - props.modify.ProbModifyStartCount);
  const prob = r.Prob + step * r.ProbModifyValue;
  if (r.ProbModifyValue > 0) return Math.min(prob, r.ProbModifyLimit);
  else return Math.max(prob, r.ProbModifyLimit);
}
</script>
