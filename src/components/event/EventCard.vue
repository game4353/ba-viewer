<template>
  <div class="flex flex-row gap-4 h">
    <v-tabs
      center-active
      v-model="tab"
      bg-color="secondary"
      direction="vertical"
    >
      <v-tab
        v-for="key in ObjectKeys(rolls)"
        :key
        :value="key"
        :text="`${key}枚目`"
      />
    </v-tabs>

    <v-tabs-window class="h" v-model="tab">
      <v-tabs-window-item
        v-for="key in ObjectKeys(rolls)"
        :key
        :value="key"
        class="flex flex-col gap-y-2 mt-2 h overflow-auto"
      >
        <div v-for="r in rolls[key]" :key="r.Id">
          <div class="flex flex-row">
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
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>

<script setup lang="ts">
import type {
  EventContentCardExcel,
  EventContentCardShopExcel,
} from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList as d1 } from "~game/excel/EventContentCardExcelTable.json";
// @ts-ignore
import { DataList as d2 } from "~game/excel/EventContentCardShopExcelTable.json";
import { ObjectKeys } from "@/types";

const props = defineProps({
  eid: {
    type: Number,
    required: true,
  },
});

const tab = ref(0);
const cards = Object.fromEntries(
  (d1 as EventContentCardExcel[])
    .filter((v) => v.EventContentId === props.eid)
    .map((v) => [v.CardGroupId, v]),
);
const rolls = Object.groupBy(
  (d2 as EventContentCardShopExcel[]).filter(
    (v) => v.EventContentId === props.eid,
  ),
  (v) => v.RefreshGroup,
);
</script>

<style scoped lang="scss">
.h {
  height: 800px;
}
</style>
