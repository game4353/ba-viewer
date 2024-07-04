<template>
  <v-card>
    <div class="d-flex flex-row">
      <v-tabs v-model="tab" bg-color="primary" direction="vertical">
        <v-tab v-for="(t, i) in manages" :key="i" :value="t.Round">
          <ShopItemCostIcon :goodsId="[t.GoodsId]" class="w-8" />
          Round {{ t.IsLoop ? "∞" : t.Round }}
        </v-tab>
      </v-tabs>

      <v-card-text>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item
            v-for="[i, v] in Object.entries(shopsByRound)"
            :key="i"
            :value="Number(i)"
          >
            <div class="flex flex-row flex-wrap gap-3 row">
              <ShopItem
                v-for="x in v"
                :key="x.GroupId"
                :goodsId="x.GoodsId"
                :amount="x.GroupElementAmount"
                class="w-8"
              />
            </div>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </div>
  </v-card>
</template>

<script setup lang="ts">
// import ShopPage from "../../../components/shop/ShopPage.vue";
import { ref } from "vue";
import type {
  // ShopCategoryType,
  EventContentBoxGachaManageExcel,
  // EventContentBoxGachaElementExcel,
  EventContentBoxGachaShopExcel,
} from "~game/types/flatDataExcel";
// @ts-ignore
// import { DataList as d1 } from "~game/excel/EventContentBoxGachaElementExcelTable.json";
// @ts-ignore
import { DataList as d2 } from "~game/excel/EventContentBoxGachaManageExcelTable.json";
// @ts-ignore
import { DataList as d3 } from "~game/excel/EventContentBoxGachaShopExcelTable.json";
// import { ASSERT_SOME_FILTER } from "@/components/warn/error";
import ShopItem from "@/components/shop/ShopItem.vue";

// const assertSomeFilter = inject(ASSERT_SOME_FILTER)!;

const tab = ref(null);
const route = useRoute<"/event/[id]/box">();
const eid = Number(route.params.id);
// const elements = (d1 as EventContentBoxGachaElementExcel[]).filter(
//   (o) => o.EventContentId === eid,
// );
const manages = (d2 as EventContentBoxGachaManageExcel[]).filter(
  (o) => o.EventContentId === eid,
);
const shops = (d3 as EventContentBoxGachaShopExcel[]).filter(
  (o) => o.EventContentId === eid,
);
const shopsByRound = Object.groupBy(shops, ({ Round }) => Round.toString());

// const shopTypes = [...new Set(shops.map((o) => o.CategoryType))];
// function getShop(t: keyof typeof ShopCategoryType) {
//   const res = assertSomeFilter(
//     shops,
//     [["CategoryType", t]],
//     500,
//     `Empty shop category: ${t}`,
//   );
//   return res;
// }
</script>
