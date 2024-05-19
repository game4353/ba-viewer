<template>
  <div class="w-[520px]">
    <v-row>
      <v-col v-for="(shop, index) in shops" :key="index" cols="3">
        <ShopItem
          :name="localize.etc(shop.LocalizeEtcId)"
          :goodsId="shop.GoodsId"
          :amount="shop.PurchaseCountLimit"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import * as localize from "@/utils/localize";
import ShopItem from "./ShopItem.vue";
import { PropType } from "vue";
import type { EventContentShopExcel } from "~game/types/flatDataExcel";

defineProps({
  shops: {
    type: Object as PropType<EventContentShopExcel[]>,
    required: true,
  },
});
</script>
