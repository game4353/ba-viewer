<template>
  <v-card>
    <div class="flex flex-col items-center w-52">
      <div class="flex flex-row">
        <MyCharacter
          :cid
          v-for="(cid, key) in shop.InfoCharacterId"
          :key
          :scaling="{ w: 100 }"
          route
        />
      </div>
      <p>{{ shop.SalePeriodFrom }}</p>
      <p>{{ shop.SalePeriodTo }}</p>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { ShopRecruitExcel } from "@/assets/game/types/flatDataExcel";
import { ReadonlyDeep } from "type-fest";

defineProps({
  shop: {
    type: Object as PropType<ReadonlyDeep<ShopRecruitExcel>>,
    required: true,
  },
  display: {
    type: String as PropType<"simple" | "detailed">,
    required: true,
  },
});
</script>
