<template>
  <div v-if="lobbyPaths?.isOk()">
    <div v-for="(arr, key) in lobbyPaths.unwrap()" :key>
      <div class="flex flex-row">
        <MyCharacter :cid="Number(key)" :scale="0.4" />
        <v-btn
          v-for="(str, key) in arr"
          :to="`/l2d/query?paths=${str.slice(0, -5)}`"
          :key
        >
          {{ str.split("/").at(-2) }}
        </v-btn>
      </div>
    </div>
  </div>
  <div v-if="characterPaths?.isOk()">
    <div v-for="(arr, key) in characterPaths.unwrap()" :key>
      {{ key }}
      {{ arr }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSpineCharacterPath, useSpineLobbyPath } from "@/utils/data/l2d";

const lobbyPaths = useSpineLobbyPath();
const characterPaths = useSpineCharacterPath();
</script>
