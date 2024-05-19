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
import { useRoute } from "vue-router";
import { ref } from "vue";
import type {
  ShopCategoryType,
  EventContentShopExcel,
} from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/EventContentShopExcelTable.json";
import { INJECT_ERR } from "@/utils/error";
import ShopItem from "@/components/shop/ShopItem.vue";

const tab = ref(null);
const route = useRoute();
const id = route.params.id;

const setError = inject(INJECT_ERR)!;
if (Array.isArray(id)) setError(`Invalid id (${id}) from url.`);

const shops = (DataList as EventContentShopExcel[]).filter(
  (o) => o.EventContentId === Number(id),
);
const shopTypes = [...new Set(shops.map((o) => o.CategoryType))];
function getShop(t: keyof typeof ShopCategoryType) {
  const res = shops.filter((o) => o.CategoryType === t);
  if (res.length === 0) setError(`Empty shop category: ${t}`);
  return res;
}
</script>
