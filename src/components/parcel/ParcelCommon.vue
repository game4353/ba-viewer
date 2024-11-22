<template>
  <component
    v-if="parcel"
    :is="route ? 'router-link' : 'div'"
    :to="`/parcel/${ParcelType[parcel.type].toLowerCase()}/${parcel.id}`"
  >
    <GameImg v-if="layout == 'icon'" :path="parcel.iconPath" />
    <Scaled
      v-else
      :scale
      :scaledW
      :scaledH
      :scaleType
      :width="imgW"
      :height="imgH"
    >
      <v-img class="absolute" :width="imgW" :height="imgH" :src="bg">
        <GameImg
          :path="parcel.iconPath"
          class="absolute top-0 left-0 p-1 w-auto"
        />
        <span
          v-if="amountStr != null"
          class="amount"
          :class="amountStr.length > 5 ? 'smallText' : ''"
        >
          {{ amountStr }}
        </span>
        <span v-if="tagStr != null" class="tag">{{ tagStr }}</span>
        <v-img
          class="!absolute right-4 top-4"
          v-if="interactive"
          :width="64"
          :height="56"
          :src="Icon.Interaction"
        ></v-img>
      </v-img>
    </Scaled>
  </component>
</template>

<script setup lang="ts">
import { ParcelType, RewardTag } from "~game/types/flatDataExcel";
import { Icon, rarityBgIcon } from "../GameImg/icon";
import Scaled from "../misc/Scaled.vue";
import { ASSERT_UNREACHABLE } from "../warn/error";
import { CFurniture } from "./furniture/furniture";
import { IParcel } from "./parcel";

const assertUnreachable = inject(ASSERT_UNREACHABLE)!;

const imgW = 256;
const imgH = 210;

const props = defineProps({
  parcel: {
    type: Object as PropType<IParcel>,
  },
  amount: Number,
  amountMin: Number,
  amountMax: Number,
  layout: {
    type: String as PropType<"icon" | "random" | "pack" | "select" | "default">,
  },
  route: Boolean,
  scale: Number,
  scaledW: Number,
  scaledH: Number,
  scaleType: String as PropType<"min" | "max">,
  tag: {
    type: Number as PropType<RewardTag>,
  },
});

// background
const bg = computed(() =>
  props.parcel ? rarityBgIcon(props.parcel.rarity) : "",
);

// amount
function convertNum(num: number) {
  if (num >= 10000 && num % 1000 === 0) return `${num / 1000}K`;
  return `${num}`;
}
const amountStr = computed(() => {
  if (props.amountMin !== props.amountMax) {
    return `x${props.amountMin}–${props.amountMax}`;
  }
  const num = props.amountMin ?? props.amount;
  if (num == null) return null;
  return `x${convertNum(num)}`;
});

// tag
const tagStr = computed(() => {
  if (props.layout === "random") return "ランダム";
  if (props.layout === "pack") return "パック";
  if (props.layout === "select") return "セレクト";
  switch (props.tag) {
    case undefined:
    case RewardTag.Default:
    case RewardTag.Event:
      return null;
    case RewardTag.FirstClear:
      return "初回";
    case RewardTag.ThreeStar:
      return "★★★";
    case RewardTag.Rare:
      return "レア";
    default:
      assertUnreachable(`RewardTag ${props.tag} is not implemented yet.`);
  }
});

const interactive = computed(() => {
  const p = props.parcel;
  if (p instanceof CFurniture) return p.isInteractive;
  return false;
});
</script>

<style scoped lang="scss">
.tag {
  @apply text-black bg-yellow-200 absolute px-3 left-1 top-0;
  font-size: 42px;
}
// https://stackoverflow.com/questions/2570972/css-font-border
.amount {
  @apply text-black absolute right-11 bottom-4 text-5xl;
  text-shadow:
    -5px 0 white,
    5px 0 white,
    0 -5px white,
    0 5px white,
    3px -3px white,
    -3px -3px white,
    3px 3px white,
    -3px 3px white;
}
.smallText {
  font-size: 36px !important;
  line-height: 48px !important;
}
</style>
