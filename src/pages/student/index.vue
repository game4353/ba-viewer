<template>
  <v-container>
    <v-row>
      <v-col v-for="[id, v] in Object.entries(charas)" :key="id" cols="2">
        <div
          class="cursor-pointer w-full relative min-w-24"
          @click.stop="$router.push(`/student/${id}`)"
        >
          <Collect class="absolute" :cid="id" />
          <div
            class="flex flex-col items-center justify-center absolute bottom-0 w-full min-w-[100px] h-7 bg-blue-900/85 text-center"
          >
            <p class="" :class="textSize(v.Localize)">{{ v.Localize }}</p>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { Tidy } from "../../../data/ts/tidy";
import { default as character } from "~data/character.json";
import Collect from "@/components/character/Collect.vue";

const charas: Tidy.Character = character;
function textSize(text: string) {
  const l = text.length;
  if (l < 7) return "big";
  if (l > 10) return "small";
  return "len" + l;
}
</script>

<style scoped lang="scss">
.small {
  width: 70%;
  font-size: 12px;
  line-height: 12px;
}
.len10 {
  font-size: 12px;
}
.len9 {
  font-size: 13px;
}
.len8,
.len7 {
  font-size: 14px;
}
.big {
  font-size: 16px;
}
</style>
