<template>
  <WIP />
  <PartySelect v-model="partyId" />
  <v-tabs
    class="mb-2"
    v-model="tab"
    align-tabs="center"
    bg-color="deep-purple-accent-4"
  >
    <v-tab :value="1">生徒</v-tab>
    <v-tab :value="2">素材</v-tab>
    <v-tab :value="3">編成</v-tab>
  </v-tabs>

  <v-tabs-window v-model="tab">
    <v-tabs-window-item :value="1">
      <PartyMember :pid="partyId" />
    </v-tabs-window-item>
    <v-tabs-window-item :value="2">
      <PartyIngredient :pid="partyId" />
    </v-tabs-window-item>
    <v-tabs-window-item :value="3"> </v-tabs-window-item>
  </v-tabs-window>
</template>

<script setup lang="ts">
const partyId = ref(0);
const tab = ref();
</script>

<!-- TODO: copy party, party url -->
