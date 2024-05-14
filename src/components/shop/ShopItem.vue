<template>
  <div
    class="bg flex flex-col items-center pt-2 w-[120px] h-44 border rounded border-white"
  >
    <div class="text-center text-black h-8 mx-1" :class="name_size">
      {{ name }}
    </div>
    <div class="bg-gray-400 h-[1px] w-[80%] mb-2"></div>
    <Item :parcel="gain" :amount="gainAmount" />
    <div class="bg-blue-950 text-white h-4 text-xs text-center w-full">
      あと{{ amount }}回購入可能
    </div>
    <div class="flex flex-row justify-center items-center m-1">
      <Icon :parcel="cost" class="w-8" />
      <span class="bg-blue-900 h-4 w-16 text-center text-xs">{{
        costAmount
      }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Tidy } from "../../../data/ts/tidy";
import Icon from "../parcel/Icon.vue";
import Item from "../parcel/Item.vue";
import { PropType } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  gain: {
    type: Object as PropType<Tidy.ParcelItem>,
    required: true,
  },
  gainAmount: {
    type: Number,
    required: true,
  },
  cost: {
    type: Object as PropType<Tidy.ParcelItem>,
    required: true,
  },
  costAmount: {
    type: Number,
    required: true,
  },
});
const name_size =
  props.name!.length > 16 ? "small" : props.name!.length > 7 ? "median" : "big";
</script>

<style scoped lang="scss">
.bg {
  background-color: rgb(240 240 240);
  background-image: url("@/assets/Atlas/Common/Common_Shop_Deco.png");
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
}
.small {
  font-size: 12px;
  line-height: 14px;
}
.median {
  font-size: 13px;
  line-height: 14px;
}
.big {
  font-size: 14px;
  line-height: 28px;
}
</style>
