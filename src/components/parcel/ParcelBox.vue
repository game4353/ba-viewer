<template>
  <ParcelCommon class="cursor-pointer" :parcel :amount :scale :layout />
</template>

<script setup lang="ts">
import { Rarity } from "@/assets/game/types/flatDataExcel";
import type { IParcel } from "./parcel";

defineProps({
  layout: {
    type: String as PropType<"random" | "pack" | "select">,
  },
  amount: Number,
  scale: Number,
});

const parcel = {
  rarity: Rarity.N,
  iconPath: "UIs/01_Common/03_NonEquipment/Item_Icon_Secret_Reward",
  id: -1,
  desc: "",
  name: "",
  type: "None",
} satisfies IParcel;
</script>
