<template>
  <GameImg v-if="iconOnly" :path />
  <div v-else class="scale-wrapper" :style="cssVars">
    <div class="scale-content" :style="cssVars">
      <div class="box">
        <v-img class="absolute" :width="imgW" :height="imgH" :src="bg">
          <GameImg :path class="absolute top-0 left-0 p-1 w-auto" />
          <span v-if="amountStr != null" class="amount">{{ amountStr }}</span>
          <span v-if="tagStr != null" class="tag">{{ tagStr }}</span>
        </v-img>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { INJECT_ERR } from "@/utils/error";
import type { Rarity, RewardTag } from "~game/types/flatDataExcel";
import { Icon } from "../GameImg/icon";

const setError = inject(INJECT_ERR)!;

const props = defineProps({
  amount: Number,
  amountMin: Number,
  amountMax: Number,
  scale: Number,
  iconOnly: Boolean,
  iconPath: {
    type: String,
  },
  rarity: {
    type: String as PropType<keyof typeof Rarity>,
    required: true,
  },
  tag: {
    type: String as PropType<keyof typeof RewardTag>,
  },
  layout: {
    type: String as PropType<"icon" | "random" | "default">,
  },
});

const bg = computed(() => {
  switch (props.rarity) {
    case "N":
      return Icon.BgN;
    case "R":
      return Icon.BgR;
    case "SR":
      return Icon.BgSR;
    case "SSR":
      return Icon.BgSSR;
    default:
      setError(`Unknown rarity ${props.rarity}`);
  }
});

function convertNum(num: number) {
  if (num >= 10000 && num % 1000 === 0) return `${num / 1000}K`;
  return `${num}`;
}
const amountStr = computed(() => {
  if (props.amountMin !== props.amountMax) {
    return `x${props.amountMin}~${props.amountMax}`;
  }
  const num = props.amountMin ?? props.amount;
  if (num == null) return null;
  return `x${convertNum(num)}`;
});

const tagStr = computed(() => {
  if (props.layout === "random") return "ランダム";
  switch (props.tag) {
    case undefined:
    case "Default":
    case "Event":
      return null;
    case "FirstClear":
      return "初回";
    case "ThreeStar":
      return "★★★";
    case "Rare":
      return "レア";
    default:
      setError(`RewardTag ${props.tag} is not implemented yet.`);
  }
});

const path = computed(
  () =>
    props.iconPath ?? "UIs/01_Common/03_NonEquipment/Item_Icon_Secret_Reward",
);

const imgW = 256 * 0.35;
const imgH = 210 * 0.35;
const cssVars = computed(() => ({
  "--scale": props.scale ?? 1,
}));
</script>

<style scoped lang="scss">
.scale-wrapper {
  @apply relative overflow-hidden;
  width: calc(var(--scale) * 90px);
  height: calc(var(--scale) * 74px);
}
.scale-content {
  @apply relative top-0 left-0 origin-top-left;
  transform: scale(var(--scale));
}
.box {
  width: 90px;
  height: 74px;
}
.tag {
  @apply text-black bg-yellow-200 absolute text-sm px-1;
  left: 0px;
  top: 1px;
}
// https://stackoverflow.com/questions/2570972/css-font-border
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
