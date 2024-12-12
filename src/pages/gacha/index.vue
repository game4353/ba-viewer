<template>
  <div class="flex flex-row flex-wrap gap-4 p-1 w-full">
    <ShopRecruit v-for="(shop, key) in shops" :key :shop display="simple" />
  </div>
</template>

<script setup lang="ts">
import { ShopCategoryType } from "@/assets/game/types/flatDataExcel";
import { useExcelShopRecruit } from "@/utils/data/excel/shop";

const shops = computed(() =>
  useExcelShopRecruit().value.map((map) =>
    [...map.values()].filter(
      (o) =>
        o.CategoryType !== ShopCategoryType.TutoGacha &&
        o.CategoryType !== ShopCategoryType.BeforehandGacha &&
        o.CategoryType !== ShopCategoryType.TicketGacha &&
        o.CategoryType !== ShopCategoryType.DirectPayGacha &&
        o.CategoryType !== ShopCategoryType.NormalGacha,
    ),
  ),
);
</script>
