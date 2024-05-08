<template>
  <v-img
    :aspect-ratio="404 / 456"
    :lazy-src="arona"
    :src="src"
    :alt="devName"
    :label="devName"
  >
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

const costumes: Tidy.Costume = costume;
const props = defineProps({
  cid: {
    type: String,
    required: true,
  },
});
const glob = import.meta.glob(
  "@/assets/UIs/01_Common/14_CharacterCollect/*.png",
  {
    eager: true,
  },
);
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [
    key
      .match(/(UIs\/.+).png/)
      ?.at(1)
      ?.toLowerCase() ?? "",
    value.default,
  ]),
);
const src = images[costumes[props.cid].CollectionTexturePath.toLowerCase()];
const arona =
  images[
    "UIs/01_Common/14_CharacterCollect/NPC_Portrait_Arona_Collection".toLowerCase()
  ];
</script>
