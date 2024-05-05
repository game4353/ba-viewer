<template>
  <div class="w-[520px]">
    <v-row>
      <v-col v-for="(obj, index) in page" :key="index" cols="3">
        <ShopItem
          :name="obj.name"
          :gain="obj.goods[0].gain[0].obj"
          :gainAmount="obj.goods[0].gain[0].amount"
          :cost="obj.goods[0].cost[0].obj"
          :costAmount="obj.goods[0].cost[0].amount"
          :amount="obj.amount"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { Tidy } from "../../../data/ts/tidy";
import ShopItem from "./ShopItem.vue";
import { PropType } from "vue";

defineProps({
  page: {
    type: Object as PropType<Tidy.EventShop[]>,
    required: true,
  },
});
</script>
