<template>
  <div class="flex flex-row gap-2 h-full">
    <v-tabs v-model="tab" bg-color="secondary" direction="vertical">
      <v-tab v-for="(t, i) in tabs" :key="i" :value="i">
        {{ t }}
      </v-tab>
    </v-tabs>

    <v-tabs-window class="h-full" v-model="tab">
      <v-tabs-window-item
        class="h-full"
        v-for="(t, i) in tabs"
        :key="i"
        :value="i"
      >
        <Scroll>
          <div class="flex flex-col m-2 gap-1">
            <EventStage v-for="(stage, j) in tabContents[t]" :key="j" :stage />
          </div>
        </Scroll>
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>

<script setup lang="ts">
import type { EventContentStageExcel } from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/EventContentStageExcelTable.json";

const props = defineProps({
  eid: {
    type: Number,
    required: true,
  },
});

const tabs = ["story", "quest", "challenge"] as const;
const tab = ref(0);

const stages = (DataList as EventContentStageExcel[]).filter(
  (v) => v.EventContentId === props.eid,
);

const tabContents: Partial<
  Record<(typeof tabs)[number], EventContentStageExcel[]>
> = {};
stages.forEach((v) => {
  const key = (
    {
      None: null,
      Normal: "story",
      Hard: "quest",
      VeryHard: "challenge",
      VeryHard_Ex: "challenge",
    } as const
  )[v.StageDifficulty];
  if (key == null) return;
  tabContents[key] ??= [];
  tabContents[key]!.push(v);
});
</script>
