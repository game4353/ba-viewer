<template>
  <div class="flex flex-row gap-2 h-full">
    <v-tabs v-model="tab" bg-color="secondary" direction="vertical">
      <v-tab
        v-for="key in ObjectKeys(rolls)"
        :key
        :value="key"
        :text="`${key}枚目`"
      />
    </v-tabs>

    <v-tabs-window class="h-full" v-model="tab">
      <v-tabs-window-item
        class="h-full"
        v-for="key in ObjectKeys(rolls)"
        :key
        :value="key"
      >
        <Scroll>
          <div class="flex flex-col gap-y-4">
            <div class="flex flex-row mx-2" v-for="r in rolls[key]" :key="r.Id">
              <div class="w-16">
                <GameImg :path="cards[r.CardGroupId].IconPath" />
              </div>
              <div class="flex flex-col">
                <div class="px-3 text-lg">{{ r.Prob / 100 }}%</div>
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
          </div>
        </Scroll>
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>

<script setup lang="ts">
import {
  EventContentCardExcel,
  EventContentCardShopExcel,
} from "@/assets/game/types/flatDataExcel";
import { ObjectKeys } from "@/utils/types";
import { ReadonlyDeep } from "type-fest";

const props = defineProps({
  card: {
    type: Array as PropType<ReadonlyDeep<EventContentCardExcel>[]>,
    required: true,
  },
  shop: {
    type: Array as PropType<ReadonlyDeep<EventContentCardShopExcel>[]>,
    required: true,
  },
});

const tab = ref(0);

const cards = computed(() => {
  return Object.fromEntries(props.card.map((v) => [v.CardGroupId, v]));
});

const rolls = computed(() => {
  return Object.groupBy(props.shop, (v) => v.RefreshGroup);
});
</script>
