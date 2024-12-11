<template>
  <div class="flex flex-col gap-2 h-full">
    <v-tabs class="shrink-0" v-model="tab" bg-color="primary">
      <v-tab
        v-for="v in tabs"
        :key="v"
        :value="v"
        :disabled="!tabShows[v]"
        @click="$router.replace(`/event/${eid}/${v}`)"
      >
        {{ tabNames[v] }}
      </v-tab>
    </v-tabs>

    <v-tabs-window class="flex flex-grow" v-model="tab">
      <v-tabs-window-item v-if="bonus && currency" value="bonus">
        <EventBonus :bonus :currency />
      </v-tabs-window-item>
      <v-tabs-window-item v-if="boxManage && boxShop" value="box">
        <EventBox :eid :manage="boxManage" :shop="boxShop" />
      </v-tabs-window-item>
      <v-tabs-window-item v-if="card && cardShop" value="card">
        <EventCard :card :shop="cardShop" />
      </v-tabs-window-item>
      <v-tabs-window-item v-if="fortuneModify && fortuneShop" value="fortune">
        <EventFortune :modify="fortuneModify" :shop="fortuneShop" />
      </v-tabs-window-item>
      <v-tabs-window-item v-if="totalReward" value="reward">
        <Scroll class="p-1"><EventRewards :rewards="totalReward" /></Scroll>
      </v-tabs-window-item>
      <v-tabs-window-item v-if="shops" value="shop">
        <EventShop :shops />
      </v-tabs-window-item>
      <v-tabs-window-item v-if="stages" value="stage">
        <EventStages :stages />
      </v-tabs-window-item>
      <v-tabs-window-item v-if="missions" value="mission">
        <Scroll class="p-1"><EventMissions :missions /></Scroll>
      </v-tabs-window-item>
      <v-tabs-window-item v-if="treasure" value="treasure">
        <EventTreasure :rounds="treasure" :scaling="{ w: 72 }" />
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>

<script setup lang="ts">
import { CEvent } from "@/components/event/event";
import { ERR_HANDLE } from "~/components/warn/error";
const errHandle = inject(ERR_HANDLE)!;

const route = useRoute<"/event/[id]/[[tab]]">();
const eid = Number(route.params.id);
const tab = computed(() => {
  return route.params.tab ?? "bonus";
});

const event = new CEvent(eid);
const bonus = computed(() => event.bonus.unwrapOrElse(errHandle));
const boxManage = computed(() => event.boxManage.unwrapOrElse(errHandle));
const boxShop = computed(() => event.boxShop.unwrapOrElse(errHandle));
const card = computed(() => event.card.unwrapOrElse(errHandle));
const cardShop = computed(() => event.cardShop.unwrapOrElse(errHandle));
const currency = computed(() => event.currency.unwrapOrElse(errHandle));
const fortuneModify = computed(() =>
  event.fortuneModify.unwrapOrElse(errHandle),
);
const fortuneShop = computed(() => event.fortuneShop.unwrapOrElse(errHandle));
const missions = computed(() => event.missions.unwrapOrElse(errHandle));
const shops = computed(() => event.shops.unwrapOrElse(errHandle));
const stages = computed(() => event.stages.unwrapOrElse(errHandle));
const totalReward = computed(() => event.totalReward.unwrapOrElse(errHandle));
const treasure = computed(() => event.treasureRound.unwrapOrElse(errHandle));

const tabs = [
  "bonus",
  "box",
  "card",
  "fortune",
  "reward",
  "shop",
  "stage",
  "mission",
  "treasure",
] as const;
const tabNames = {
  bonus: "ボーナス生徒",
  box: "報酬交換",
  card: "カード",
  fortune: "fortune",
  reward: "reward",
  shop: "shop",
  stage: "stage",
  mission: "mission",
  treasure: "treasure",
};
const tabShows = computed(() => ({
  bonus: bonus.value && currency.value,
  box: boxManage.value && boxShop.value,
  card: card.value && cardShop.value,
  fortune: fortuneModify.value && fortuneShop.value,
  reward: totalReward.value,
  shop: shops.value,
  stage: stages.value,
  mission: missions.value,
  treasure: treasure.value,
}));
</script>

<style lang="scss" scoped>
.v-window-item {
  @apply relative h-full;
}
</style>
