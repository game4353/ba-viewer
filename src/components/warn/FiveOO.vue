<template>
  <ErrorPage
    path="UIs/01_Common/31_ClanEmoji/ClanChat_Emoji_126_Jp"
    title="500 - Internal Server Error"
  >
    <p>
      An unexpected error happens. Please contact the
      <a
        class="blue underline"
        href="https://github.com/game4353/ba-viewer/issues"
        >developer</a
      >.
    </p>

    <div
      v-if="err.display != ''"
      class="border-2 border-red-800 w-1/2 min-h-24 p-4"
    >
      <p class="text-xs text-red-600 mb-2">Details</p>
      {{ err.display }}
    </div>
  </ErrorPage>
</template>

<script setup lang="ts">
import { err } from "./error";
</script>
