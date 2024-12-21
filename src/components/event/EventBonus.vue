<template>
  <v-table fixed-header fixed-footer class="h-full">
    <thead>
      <tr class="blur-top">
        <td></td>
        <td v-for="(n, i) in tokens" :key="i">
          <EventCurrency :currency :eit="n" class="max-w-16" />
        </td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(r, i) in striker" :key="i">
        <td class="bg-striker-dark">
          <MyCharacter :cid="r[0]" :scaling="{ r: 0.3 }" route />
        </td>
        <td v-for="(n, j) in r.slice(1)" :key="j">
          {{ (n ?? 0) === 0 ? "-" : `${n / 100}%` }}
        </td>
      </tr>
      <tr v-for="(r, i) in support" :key="i">
        <td class="bg-support-dark">
          <MyCharacter :cid="r[0]" :scaling="{ r: 0.3 }" route />
        </td>
        <td v-for="(n, j) in r.slice(1)" :key="j">
          {{ (n ?? 0) === 0 ? "-" : `${n / 100}%` }}
        </td>
      </tr>
      <tr class="h-[70px]"></tr>
    </tbody>

    <template v-slot:bottom>
      <div class="absolute w-full blur-bottom"></div>
    </template>
  </v-table>
</template>

<script setup lang="ts">
import {
  EventContentCharacterBonusExcel,
  EventContentCurrencyItemExcel,
} from "@/assets/game/types/flatDataExcel";
import { ReadonlyDeep } from "type-fest";
import EventCurrency from "./EventCurrency.vue";

const props = defineProps({
  bonus: {
    type: Array as PropType<ReadonlyDeep<EventContentCharacterBonusExcel>[]>,
    required: true,
  },
  currency: {
    type: Array as PropType<ReadonlyDeep<EventContentCurrencyItemExcel>[]>,
    required: true,
  },
});

const tokenSet = computed(() => {
  return new Set(props.bonus.map((v) => v.EventContentItemType).flat());
});

const tokens = computed(() => {
  if (tokenSet.value == null) return null;
  return Array.from(tokenSet.value).sort();
});

const rows = computed(() => {
  return props.bonus.map((v) => [
    v.CharacterId,
    ...tokens.value!.map(
      (t) => v.BonusPercentage[v.EventContentItemType.indexOf(t)] || 0,
    ),
  ]);
});

const striker = computed(() => {
  return rows.value?.filter((v) => v[0] < 20000);
});

const support = computed(() => {
  return rows.value?.filter((v) => v[0] >= 20000);
});
</script>

<style scoped lang="scss">
@mixin blur {
  height: 70px;
  @apply from-white/70;
}
.blur-top {
  @include blur;
  @apply bg-gradient-to-b;
  top: 0;
}
.blur-bottom {
  @include blur;
  @apply bg-gradient-to-t;
  bottom: 0;
}
</style>
