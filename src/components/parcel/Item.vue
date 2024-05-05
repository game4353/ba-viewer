<template>
  <div class="box">
    <v-img class="absolute" :width="imgW" :height="imgH" :src="src">
      <Icon :parcel="parcel" class="item" />
      <span v-if="amount > 0" class="amount">x{{ amount }}</span>
    </v-img>
  </div>
</template>

<script setup lang="ts">
import { Tidy } from "../../../data/ts/tidy";
import { PropType } from "vue";
import Icon from "./Icon.vue";
const imgW = 256 * 0.35;
const imgH = 210 * 0.35;
const props = defineProps({
  parcel: {
    type: Object as PropType<Tidy.ParcelItem>,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});
const glob = import.meta.glob("@/assets/Atlas/Common/Card_Item_Bg_*.png", {
  eager: true,
});
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [
    key.match(/\/Card_Item_Bg_(.+)\.png/)[1],
    value.default,
  ]),
);
const src = images[props.parcel.Rarity];
</script>

<style scoped lang="scss">
// https://stackoverflow.com/questions/2570972/css-font-border
.box {
  width: 90px;
  height: 74px;
}
.item {
  @apply absolute top-0 left-0 p-1 w-auto;
}
.amount {
  @apply text-black absolute text-sm;
  right: 15px;
  bottom: 4px;
  text-shadow:
    -2px 0 white,
    2px 0 white,
    0 -2px white,
    0 2px white;
}
</style>
