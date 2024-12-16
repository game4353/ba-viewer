<template>
  <WIP />
  <BG :path="bgPath">
    <div class="flex flex-row">
      <div><SpineCharacter v-if="paths" :paths="paths" /></div>

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
            <TabStat :cid />
          </v-tabs-window-item>
          <v-tabs-window-item value="skill">
            <TabSkill :cid />
          </v-tabs-window-item>
          <v-tabs-window-item value="info">
            <TabInfo :cid />
          </v-tabs-window-item>
          <v-tabs-window-item value="voice">
            <TabVoice :cid />
          </v-tabs-window-item>
        </v-tabs-window>
      </div>
    </div>
  </BG>
</template>

<script setup lang="ts">
import { ERR_HANDLE } from "@/components/warn/error";
import { useExcelCostume } from "@/utils/data/excel/character";
import { useSpineCharacterPath } from "@/utils/data/l2d";

import { undefinedIsError } from "@/utils/result";
const errHandle = inject(ERR_HANDLE)!;

const route = useRoute<"/student/[id]/">();
const id = route.params.id;
const cid = Number(id);

const items = ["basic", "stats", "skill", "info", "voice"];
const tab = ref(items[0]);

const spr = computed(() =>
  useSpineCharacterPath()
    .value?.andThen((dict) =>
      undefinedIsError(dict[cid]?.find((p) => p.endsWith("_spr.skel"))),
    )
    .unwrapOrElse(errHandle),
);
const paths = computed(() =>
  spr.value ? ["/assets/" + spr.value] : undefined,
);

const data = computed(() =>
  useExcelCostume()
    .value?.andThen((map) => map.getResult(cid))
    .unwrapOrElse(errHandle),
);
const bgPath = computed(() => data.value?.CollectionBGTexturePath ?? "");
</script>
