<template>
  <v-card>
    <div class="d-flex flex-row">
      <v-tabs v-model="tab" bg-color="primary" direction="vertical">
        <v-tab v-for="(t, i) in shopTypes" :key="i" :value="t">
          <ShopItem :goodsId="getShop(t)[0].GoodsId" onlyCostIcon class="w-8" />
          アイテム
        </v-tab>
      </v-tabs>

      <v-card-text>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item v-for="(t, i) in shopTypes" :key="i" :value="t">
            <ShopPage :shops="getShop(t)" />
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import ShopPage from "../../../components/shop/ShopPage.vue";
import { ref } from "vue";
import type {
  ShopCategoryType,
  EventContentShopExcel,
} from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/EventContentShopExcelTable.json";
import { INJECT_ERR } from "@/utils/error";
import ShopItem from "@/components/shop/ShopItem.vue";

const setError = inject(INJECT_ERR)!;

const tab = ref(null);
const route = useRoute<"/event/[id]/shop">();
const eid = Number(route.params.id);
const shops = (DataList as EventContentShopExcel[]).filter(
  (o) => o.EventContentId === eid,
);

const shopTypes = [...new Set(shops.map((o) => o.CategoryType))];
function getShop(t: keyof typeof ShopCategoryType) {
  const res = shops.filter((o) => o.CategoryType === t);
  if (res.length === 0) setError(`Empty shop category: ${t}`);
  return res;
}
</script>
