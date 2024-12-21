<template>
  <div class="flex flex-row gap-2 h-full">
    <v-tabs v-model="tab" bg-color="secondary" direction="vertical">
      <v-tab v-for="(t, i) in shopTypes" :key="i" :value="t">
        <ShopItemCostIcon :goodsId="getShop(t)[0].GoodsId" class="w-8" />
        アイテム
      </v-tab>
    </v-tabs>

    <v-tabs-window class="h-full" v-model="tab">
      <v-tabs-window-item
        class="h-full"
        v-for="(t, i) in shopTypes"
        :key="i"
        :value="t"
      >
        <Scroll class="pl-2"><ShopPage :shops="getShop(t)" /></Scroll>
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>

<script setup lang="ts">
import { ERR_HANDLE } from "@/components/warn/error";
import { KeyNotFoundErr } from "@/utils/result/error";
import { ReadonlyDeep } from "type-fest";
import type {
  EventContentShopExcel,
  ShopCategoryType,
} from "~game/types/flatDataExcel";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  shops: {
    type: Array as PropType<ReadonlyDeep<EventContentShopExcel>[]>,
    required: true,
  },
});

const tab = ref(0);

const shopTypes = computed(() => [
  ...new Set(props.shops.map((o) => o.CategoryType)),
]);
function getShop(t: ShopCategoryType) {
  const shop = props.shops.filter((o) => o.CategoryType === t);
  if (shop.length < 1)
    errHandle(KeyNotFoundErr.from(t, "CategoryType", `EventContentShop ()`));
  return shop;
}
</script>
