<template>
  <v-img :aspect-ratio="404 / 456" :lazy-src="arona" :src="src">
    <template v-slot:placeholder>
      <div class="d-flex align-center justify-center fill-height">
        <v-progress-circular
          color="grey-lighten-4"
          indeterminate
        ></v-progress-circular>
      </div>
    </template>
  </v-img>
</template>

<script setup lang="ts">
import { Tidy } from "../../../data/ts/tidy";
import { default as costume } from "@/assets/data/costume.json";
import { uiPath } from "../GameImg/loader";

const costumes: Tidy.Costume = costume;
const props = defineProps({
  cid: {
    type: String,
    required: true,
  },
});
const src = uiPath(costumes[props.cid].CollectionTexturePath);
const arona = uiPath(
  "UIs/01_Common/14_CharacterCollect/NPC_Portrait_Arona_Collection",
);
</script>
