<template>
  <router-link :to="relPath('bonus')">
    <v-card> ボーナス生徒 </v-card>
  </router-link>
  <router-link :to="relPath('card')">
    <v-card> カード </v-card>
  </router-link>
  <router-link :to="relPath('shop')">
    <v-card> shop </v-card>
  </router-link>
  <router-link :to="relPath('stage')">
    <v-card> stage </v-card>
  </router-link>
  <router-link :to="relPath('reward')">
    <v-card> reward </v-card>
  </router-link>
  <router-link :to="relPath('box')">
    <v-card> 報酬交換 </v-card>
  </router-link>
</template>

<script setup lang="ts">
const route = useRoute<"/event/[id]/">();

function relPath(child: string) {
  let curr = route.fullPath;
  if (!curr.endsWith("/")) curr += "/";
  return curr + child;
}
</script>
