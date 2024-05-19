<template>
  <v-container>
    <v-row>
      <v-col v-for="chara in charas" :key="chara.Id" cols="2">
        <div
          class="cursor-pointer w-full relative min-w-24"
          @click.stop="$router.push(`/student/${chara.Id}`)"
        >
          <Collect class="absolute" :cid="chara.Id" />
          <div
            class="flex flex-col items-center justify-center absolute bottom-0 w-full min-w-[100px] h-7 bg-blue-900/85 text-center"
          >
            <p class="" :class="textSize(localize.etc(chara.LocalizeEtcId))">
              {{ localize.etc(chara.LocalizeEtcId) }}
            </p>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import Collect from "@/components/character/Collect.vue";
import * as localize from "@/utils/localize";
import { CharacterExcel } from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/CharacterExcelTable.json";

const charas = (DataList as CharacterExcel[]).filter(
  (v) => v.IsPlayableCharacter && !v.IsNPC && v.ProductionStep == "Release",
);

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
