<template>
  <div class="flex flex-row gap-2 h">
    <v-tabs v-model="tab" bg-color="secondary" direction="vertical">
      <v-tab v-for="(t, i) in manages" :key="i" :value="t.Round">
        <ShopItemCostIcon :goodsId="[t.GoodsId]" class="w-8" />
        Round {{ t.IsLoop ? "∞" : t.Round }}
      </v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item
        class="h m-2"
        v-for="[i, v] in Object.entries(shopsByRound)"
        :key="i"
        :value="Number(i)"
      >
        <Scroll class="pl-2">
          <div class="flex flex-row flex-wrap gap-3 w-[540px]">
            <ShopItem
              v-for="x in v"
              :key="x.GroupId"
              :goodsId="x.GoodsId"
              :amount="x.GroupElementAmount"
              class="w-8"
            />
          </div>
        </Scroll>
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type {
  EventContentBoxGachaManageExcel,
  EventContentBoxGachaShopExcel,
} from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList as d2 } from "~game/excel/EventContentBoxGachaManageExcelTable.json";
// @ts-ignore
import { DataList as d3 } from "~game/excel/EventContentBoxGachaShopExcelTable.json";

import ShopItem from "@/components/shop/ShopItem.vue";

const props = defineProps({
  eid: {
    type: Number,
    required: true,
  },
});

const tab = ref(null);
const manages = (d2 as EventContentBoxGachaManageExcel[]).filter(
  (o) => o.EventContentId === props.eid,
);
const shops = (d3 as EventContentBoxGachaShopExcel[]).filter(
  (o) => o.EventContentId === props.eid,
);
const shopsByRound = Object.groupBy(shops, ({ Round }) => Round.toString());
</script>

<style scoped lang="scss">
.h {
  height: 800px;
}
</style>
