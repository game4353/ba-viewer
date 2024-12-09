<template>
  <v-container class="flex flex-col justify-center items-center gap-10">
    <div class="h-1"></div>
    <v-img :width="300" :src="uiPath(path)"></v-img>
    <div class="text-3xl">{{ title }}</div>

    <p v-if="err.code < 400"></p>
    <p v-else-if="err.code < 500">
      There is an error. If you think this should not happen, please contact the
      <a
        class="blue underline"
        href="https://github.com/game4353/ba-viewer/issues"
        >developer</a
      >.
    </p>
    <p v-else-if="err.code < 600">
      An unexpected error happens. Please contact the
      <a
        class="blue underline"
        href="https://github.com/game4353/ba-viewer/issues"
        >developer</a
      >.
    </p>

    <div v-if="detail != ''" class="border-2 border-red-800 w-1/2 min-h-24 p-4">
      <p class="text-xs text-red-600 mb-2">Details</p>
      {{ detail }}
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { uiPath } from "../GameImg/loader";
import { ERR_READ } from "./error";

const props = defineProps({
  path: String,
  title: String,
  detail: String,
});

const useErr = inject(ERR_READ)!;
const err = useErr();

const detail = computed(() => props.detail ?? err.display);
const path = computed(() => {
  if (props.path != null) return props.path;
  switch (err.code) {
    case 404:
      return "UIs/01_Common/31_ClanEmoji/ClanChat_Emoji_113_Jp";
    case 406:
      return "UIs/01_Common/31_ClanEmoji/ClanChat_Emoji_117_Jp";
    case 501:
      return "UIs/01_Common/31_ClanEmoji/ClanChat_Emoji_87_Jp";
    case 500:
    default:
      return "UIs/01_Common/31_ClanEmoji/ClanChat_Emoji_126_Jp";
  }
});
const title = computed(() => {
  if (props.title != null) return props.title;
  switch (err.code) {
    case 404:
      return "404 - Not Found";
    case 406:
      return "406 - Not Acceptable";
    case 501:
      return "501 - Not Implemented";
    case 500:
    default:
      return "500 - Internal Server Error";
  }
});
</script>
