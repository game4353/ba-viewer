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
  amount: {
    type: Number,
  },
  amountMin: Number,
  amountMax: Number,
  iconPath: {
    type: String,
  },
  rarity: {
    type: String as PropType<keyof typeof Rarity>,
    required: true,
  },
  scale: Number,
  iconOnly: Boolean,
  tag: {
    type: String as PropType<keyof typeof RewardTag>,
  },
  layout: {
    type: String as PropType<"icon" | "random" | "default">,
  },
});

const bg =
  props.rarity === "N"
    ? Icon.BgN
    : props.rarity === "R"
      ? Icon.BgR
      : props.rarity === "SR"
        ? Icon.BgSR
        : props.rarity === "SSR"
          ? Icon.BgSSR
          : setError(`Unknown rarity ${props.rarity}`);

function convertNum(num: number) {
  if (num >= 10000 && num % 1000 === 0) return `${num / 1000}K`;
  return `${num}`;
}
let amountStr: string | null = null;
if (props.amountMin !== props.amountMax) {
  amountStr = `x${props.amountMin}~${props.amountMax}`;
} else if (props.amountMin != null) {
  amountStr = `x${convertNum(props.amountMin)}`;
} else if (props.amount != null) {
  amountStr = `x${convertNum(props.amount)}`;
}

const tags: Record<keyof typeof RewardTag, string | null> = {
  Default: null,
  FirstClear: "初回",
  StrategyObject: "??",
  Event: null,
  ThreeStar: "★★★",
  ProductMonthly: "??",
  Rare: "レア",
  EventBonus: "??",
  TimeWeight: "??",
  ProductWeekly: "??",
  ProductBiweekly: "??",
  EventPermanentReward: "??",
  ConquestManageEvent: "??",
  ConquestManageDefault: "??",
  ConquestCalculateDefault: "??",
  ConquestCalculateLevel2: "??",
  ConquestCalculateLevel3: "??",
  ConquestFootholdUpgrade2: "??",
  ConquestFootholdUpgrade3: "??",
  ConquestErosionPenalty: "??",
  GemBonus: "??",
  GemPaid: "??",
  ConquestTileConquer: "??",
};
const tagStr =
  props.layout === "random"
    ? "ランダム"
    : props.tag == null
      ? null
      : tags[props.tag];
if (tagStr === "??") setError(`RewardTag ${props.tag} is not implemented yet.`);

const path =
  props.iconPath ?? "UIs/01_Common/03_NonEquipment/Item_Icon_Secret_Reward";

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
