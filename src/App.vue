<template>
  <Analytics />
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { Analytics } from "@vercel/analytics/vue";
</script>
