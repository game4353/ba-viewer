<template>
  <div class="flex flex-row gap-2 h">
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
        <Scroll class="pl-2"><ShopPage :shops="getShop(t)" /></Scroll>
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>

<script setup lang="ts">
import { ERR_HANDLE } from "@/components/warn/error";
import { useExcelEventContentShop } from "@/utils/data/excel/event";
import { KeyNotFoundErr } from "@/utils/error";
import type { ShopCategoryType } from "~game/types/flatDataExcel";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  eid: {
    type: Number,
    required: true,
  },
});

const tab = ref(0);

const table = useExcelEventContentShop();
const shops = computed(
  () => table.value?.unwrapOrElse(errHandle)?.get(props.eid) ?? [],
);

const shopTypes = computed(() => [
  ...new Set(shops.value.map((o) => o.CategoryType)),
]);
function getShop(t: ShopCategoryType) {
  const shop = shops.value.filter((o) => o.CategoryType === t);
  if (shop.length < 1)
    errHandle(
      KeyNotFoundErr.from(
        t,
        "CategoryType",
        `EventContentShop (id = ${props.eid})`,
      ),
    );
  return shop;
}
</script>

<style scoped lang="scss">
.h {
  height: 800px;
}
</style>
