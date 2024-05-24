<template>
  <v-container class="flex flex-col justify-center items-center gap-10">
    <div class="text-3xl">404 - Page Not Found</div>
    <p>
      The requested URL <strong>{{ $route.fullPath }}</strong> was not found on
      this server.
    </p>
    <v-img
      :width="300"
      :src="uiPath('UIs/01_Common/31_ClanEmoji/ClanChat_Emoji_113_Jp')"
    ></v-img>
  </v-container>
</template>

<script setup lang="ts">
import { uiPath } from "../GameImg/loader";
</script>
