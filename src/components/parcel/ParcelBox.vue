<template>
  <ParcelCommon class="cursor-pointer" :parcel :amount :scaling :layout />
</template>

<script setup lang="ts">
import { ParcelType, Rarity } from "@/assets/game/types/flatDataExcel";
import { Ok } from "@/utils/result/result";
import { ScaleOption } from "../misc/scale";
import type { IParcel } from "./parcel";

defineProps({
  layout: {
    type: String as PropType<"random" | "pack" | "select">,
  },
  amount: Number,
  scaling: Object as PropType<ScaleOption>,
});

const empty = computed(() => Ok(""));

const parcel = {
  rarity: Rarity.N,
  iconPath: "UIs/01_Common/03_NonEquipment/Item_Icon_Secret_Reward",
  id: -1,
  desc: empty,
  name: empty,
  type: ParcelType.None,
} satisfies IParcel;
</script>
