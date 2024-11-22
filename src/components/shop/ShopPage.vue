<template>
  <div class="flex flex-row flex-wrap gap-3 max-w-[540px]">
    <div v-for="(shop, index) in shops" :key="index">
      <ShopItem
        :name="localize.etc(shop.LocalizeEtcId)"
        :goodsId="shop.GoodsId"
        :amount="shop.PurchaseCountLimit"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import * as localize from "@/utils/localize";
import { ReadonlyDeep } from "type-fest";
import type { EventContentShopExcel } from "~game/types/flatDataExcel";
import ShopItem from "./ShopItem.vue";

defineProps({
  shops: {
    type: Object as PropType<
      EventContentShopExcel[] | ReadonlyDeep<EventContentShopExcel[]>
    >,
    required: true,
  },
});
</script>
