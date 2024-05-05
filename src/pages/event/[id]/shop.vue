<template>
  <v-card>
    <div class="d-flex flex-row">
      <v-tabs v-model="tab" bg-color="primary" direction="vertical">
        <v-tab v-for="(k, i) in Object.keys(shop)" :key="i" :value="k">
          <Icon :parcel="shop[k][0].goods[0].cost[0].obj" class="w-9" />
          アイテム
        </v-tab>
      </v-tabs>

      <v-card-text>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item
            v-for="(k, i) in Object.keys(shop)"
            :key="i"
            :value="k"
          >
            <ShopPage :page="shop[k]" />
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
import Icon from "../../../components/parcel/Icon.vue";
import { Tidy } from "../../../../data/ts/tidy";
import { default as eventShop } from "@/assets/data/eventShop.json";

const tab = ref(null);
const route = useRoute();
const id = route.params.id;
if (Array.isArray(id)) throw new Error();
const shops: Tidy.EventShops = eventShop;
const shop = shops[id];
</script>
