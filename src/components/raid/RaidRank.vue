<template>
  <v-virtual-scroll :height="800" :items="data">
    <template v-slot:default="{ item }">
      <div>
        <div class="bg-slate-800 mt-3 mb-1">
          Rank {{ item.rank }} Score {{ item.score }}
          {{ item.name }}
        </div>
        <div
          class="flex flex-row"
          v-for="team in item.team"
          :key="team.TryNumber"
        >
          <MyCharacter
            v-for="(c, i) in [
              ...team.MainCharacterDBs,
              ...team.SupportCharacterDBs,
            ]"
            :key="i"
            :cid="c.UniqueId"
            :scale="0.4"
            :level="c.Level"
            :star="c.StarGrade + c.WeaponStarGrade"
          />
        </div>
      </div>
    </template>
  </v-virtual-scroll>
</template>

<script setup lang="ts">
// @ts-ignore
import { default as data } from "../../../data/json/score_39716000_26161600.json";
</script>
