<template>
  <div class="flex flex-row gap-4 h">
    <v-tabs v-model="tab" bg-color="secondary" direction="vertical">
      <v-tab v-for="(t, i) in shopTypes" :key="i" :value="t">
        <ShopItemCostIcon :goodsId="getShop(t)[0].GoodsId" class="w-8" />
        アイテム
      </v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item
        class="h m-2"
        v-for="(t, i) in shopTypes"
        :key="i"
        :value="t"
      >
        <ShopPage :shops="getShop(t)" />
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>

<script setup lang="ts">
import type {
  ShopCategoryType,
  EventContentShopExcel,
} from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/EventContentShopExcelTable.json";

import { ASSERT_SOME_FILTER } from "@/components/warn/error";

const assertSomeFilter = inject(ASSERT_SOME_FILTER)!;

const props = defineProps({
  eid: {
    type: Number,
    required: true,
  },
});

const tab = ref(0);
const shops = (DataList as EventContentShopExcel[]).filter(
  (o) => o.EventContentId === props.eid,
);

const shopTypes = [...new Set(shops.map((o) => o.CategoryType))];
function getShop(t: keyof typeof ShopCategoryType) {
  const res = assertSomeFilter(
    shops,
    [["CategoryType", t]],
    500,
    `Empty shop category: ${t}`,
  );
  return res;
}
</script>

<style scoped lang="scss">
.h {
  height: 800px;
  overflow: auto;
}
</style>
