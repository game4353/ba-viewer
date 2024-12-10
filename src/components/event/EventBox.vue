<template>
  <div class="flex flex-row gap-2 h">
    <v-tabs v-model="tab" bg-color="secondary" direction="vertical">
      <v-tab v-for="(t, i) in manage" :key="i" :value="t.Round">
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
import {
  EventContentBoxGachaManageExcel,
  EventContentBoxGachaShopExcel,
} from "@/assets/game/types/flatDataExcel";
import { ReadonlyDeep } from "type-fest";

const props = defineProps({
  manage: {
    type: Array as PropType<ReadonlyDeep<EventContentBoxGachaManageExcel>[]>,
    required: true,
  },
  shop: {
    type: Array as PropType<ReadonlyDeep<EventContentBoxGachaShopExcel>[]>,
    required: true,
  },
});
const tab = ref(null);

const shopsByRound = computed(() => {
  return Object.groupBy(props.shop, ({ Round }) => Round.toString());
});
</script>

<style scoped lang="scss">
.h {
  height: 800px;
}
</style>
