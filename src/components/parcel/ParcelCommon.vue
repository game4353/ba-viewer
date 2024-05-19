<template>
  <GameImg v-if="iconOnly" :path="iconPath" />
  <div v-else class="box">
    <v-img
      class="absolute"
      :width="imgW"
      :height="imgH"
      :src="{ N, R, SR, SSR }[rarity]"
    >
      <GameImg :path="iconPath" class="absolute top-0 left-0 p-1 w-auto" />
      <span v-if="(amount ?? 0) > 0" class="amount">x{{ amount }}</span>
    </v-img>
  </div>
</template>

<script setup lang="ts">
import N from "~assets/Atlas/Common/Card_Item_Bg_N.png";
import R from "~assets/Atlas/Common/Card_Item_Bg_R.png";
import SR from "~assets/Atlas/Common/Card_Item_Bg_SR.png";
import SSR from "~assets/Atlas/Common/Card_Item_Bg_SSR.png";

import type { Rarity } from "~game/types/flatDataExcel";

const imgW = 256 * 0.35;
const imgH = 210 * 0.35;
defineProps({
  amount: {
    type: Number,
  },
  iconPath: {
    type: String,
    required: true,
  },
  rarity: {
    type: String as PropType<keyof typeof Rarity>,
    required: true,
  },
  iconOnly: Boolean,
});
</script>

<style scoped lang="scss">
// https://stackoverflow.com/questions/2570972/css-font-border
.box {
  width: 90px;
  height: 74px;
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
