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
            <EventStage
              v-for="(stage, j) in tabContents.get(t)"
              :key="j"
              :stage
            />
          </div>
        </Scroll>
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>

<script setup lang="ts">
import { StageDifficulty } from "~game/types/flatDataExcel";

import { useExcelEventContentStage } from "@/utils/data/excel/event";
import { fail } from "@/utils/misc";

const props = defineProps({
  eid: {
    type: Number,
    required: true,
  },
});

const tabs = ["story", "quest", "challenge"] as const;
const tab = ref(0);

const table = useExcelEventContentStage();
const stages = computed(
  () => table.value?.unwrapOrElse(fail)?.get(props.eid) ?? [],
);

const tabContents = computed(() => {
  const mapping = (diff: StageDifficulty) =>
    diff === StageDifficulty.Normal
      ? "story"
      : diff === StageDifficulty.Hard
        ? "quest"
        : diff === StageDifficulty.VeryHard
          ? "challenge"
          : diff === StageDifficulty.VeryHard_Ex
            ? "challenge"
            : "none";
  const m = Map.groupBy(stages.value, (stage) =>
    mapping(stage.StageDifficulty),
  );
  m.delete("none");
  return m;
});
</script>
