<template>
  <Loading v-if="chapters == null" />
  <div v-else>
    <v-tabs
      v-model="tab"
      align-tabs="center"
      center-active
      bg-color="deep-purple-accent-4"
    >
      <v-tab
        v-for="chapter in chapters"
        :key="chapter.Id"
        :value="chapter.Id"
        >{{ chapter.Name }}</v-tab
      >
    </v-tabs>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item
        v-for="chapter in chapters"
        :key="chapter.Id"
        :value="chapter.Id"
      >
        <CampaignChapter :obj="chapter" />
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>

<script setup lang="ts">
import { ERR_HANDLE } from "@/components/warn/error";
import { useExcelCampaignChapter } from "@/utils/data/excel/stage";

const errHandle = inject(ERR_HANDLE)!;

const tab = ref();

const chapters = computed(() =>
  useExcelCampaignChapter()
    .value.map((map) => [...map.values()])
    .unwrapOrElse(errHandle),
);
</script>
