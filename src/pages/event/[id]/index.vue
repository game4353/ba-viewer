<template>
  <div class="flex flex-col gap-2 h">
    <v-tabs v-model="tab" bg-color="primary">
      <v-tab v-for="(v, k) in tabs" :key="k" :value="k">
        {{ v }}
      </v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item value="bonus">
        <div class="relative w-[640px] h-[800px]">
          <EventBonus :eid />
        </div>
      </v-tabs-window-item>
      <v-tabs-window-item value="box">
        <EventBox :eid />
      </v-tabs-window-item>
      <v-tabs-window-item value="card">
        <EventCard :eid />
      </v-tabs-window-item>
      <v-tabs-window-item value="reward">
        <EventReward :eid />
      </v-tabs-window-item>
      <v-tabs-window-item value="shop">
        <EventShop :eid />
      </v-tabs-window-item>
      <v-tabs-window-item value="stage">
        <EventStages :eid />
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>

<script setup lang="ts">
const tab = ref("bonus");
const tabs = {
  bonus: "ボーナス生徒",
  box: "報酬交換",
  card: "カード",
  reward: "reward",
  shop: "shop",
  stage: "stage",
};
const route = useRoute<"/event/[id]/">();
const eid = Number(route.params.id);
</script>
