<template>
  <v-container class="flex flex-col justify-center items-center gap-10">
    <div class="text-3xl">500 - Internal Server Error</div>
    <p>
      An unexpected error happens. Please contact the
      <a
        class="blue underline"
        href="https://github.com/game4353/ba-viewer/issues"
        >developer</a
      >.
    </p>
    <v-img
      :width="300"
      :src="uiPath('UIs/01_Common/31_ClanEmoji/ClanChat_Emoji_126_Jp')"
    ></v-img>
  </v-container>
</template>

<script setup lang="ts">
import { uiPath } from "../GameImg/loader";
</script>
