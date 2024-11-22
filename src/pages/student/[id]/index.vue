<template>
  <WIP />
  <BG :path="bgPath">
    <div class="flex flex-row">
      <div><SpineCharacter :paths="paths" /></div>

      <div>
        <v-tabs v-model="tab" bg-color="red-darken-4" color="basil" grow>
          <v-tab
            v-for="item in items"
            :key="item"
            :text="item"
            :value="item"
          ></v-tab>
        </v-tabs>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="basic">
            <TabBasic :cid />
          </v-tabs-window-item>
          <v-tabs-window-item value="stats">
            <!-- <TabStat :cid /> -->
          </v-tabs-window-item>
          <v-tabs-window-item value="skill">
            <TabSkill :cid />
          </v-tabs-window-item>
          <v-tabs-window-item value="info"> </v-tabs-window-item>
          <v-tabs-window-item value="voice">
            <!-- <TabVoice :cid /> -->
          </v-tabs-window-item>
        </v-tabs-window>
      </div>
    </div>
  </BG>
</template>

<script setup lang="ts">
import SpineCharacter from "@/components/character/SpineCharacter.vue";
import { default as m } from "~game/SpineCharacters.json";
import { CostumeExcel } from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/CostumeExcelTable.json";

const route = useRoute<"/student/[id]/">();
const id = route.params.id as keyof typeof m;
// TODO: 404
const path = m[id];
const paths = [`/assets/SpineCharacters/${path}`];
const cid = Number(id);

const items = ["basic", "stats", "skill", "info", "voice"];
const tab = ref(items[0]);

const data = (DataList as CostumeExcel[]).find((o) => o.CostumeGroupId === cid);
if (data == null) console.error(`Cannot find ${cid} in character excel table.`);
const bgPath = data?.CollectionBGTexturePath ?? "";
</script>
