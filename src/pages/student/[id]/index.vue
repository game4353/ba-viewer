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
          <v-tabs-window-item value="stats"> </v-tabs-window-item>
          <v-tabs-window-item value="info"> </v-tabs-window-item>
          <v-tabs-window-item value="placeholder"> </v-tabs-window-item>
        </v-tabs-window>
      </div>
    </div>
  </BG>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { default as m } from "~game/SpineCharacters.json";
import SpineCharacter from "@/components/character/SpineCharacter.vue";
import { CostumeExcel } from "~game/type/excel";
import { default as excel } from "~game/excel/costumeexceltable.json";

const id = useRoute().params.id as any as keyof typeof m;
const name = m[id];
const paths = [`/game/SpineCharacters/${name}/${name}.skel`];
const cid = Number(id);

const items = ["basic", "stats", "info", "placeholder"];
const tab = ref(items[0]);

const data = (excel as CostumeExcel[]).find((o) => o.CostumeGroupId === cid)!;
if (data == null) console.error(`Cannot find ${cid} in character excel table.`);
const bgPath = data.CollectionBGTexturePath;
</script>

<style scoped lang="scss">
.bg {
  background-image: url("path/to/your/image.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
}
</style>
