<template>
  <v-card>
    <div class="my-1 mx-2">
      <v-chip v-if="chipData" :color="chipData[0]" variant="flat">
        {{ chipData[1] }}
        <p class="ml-1">No.{{ mission.DisplayOrder }}</p>
      </v-chip>
      {{ desc }}
    </div>
    <v-divider></v-divider>
    <Parcels
      :ids="mission.MissionRewardParcelId"
      :types="mission.MissionRewardParcelType"
      :amounts="mission.MissionRewardAmount"
      :scaled-w="60"
    />
  </v-card>
</template>

<script setup lang="ts">
import {
  EventContentMissionExcel,
  MissionCategory,
} from "@/assets/game/types/flatDataExcel";

import { noDefault } from "@/utils/misc";
import { ReadonlyDeep } from "type-fest";
import { ERR_HANDLE } from "../warn/error";
import { missionDescription } from "./mission";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  mission: {
    type: Object as PropType<ReadonlyDeep<EventContentMissionExcel>>,
    required: true,
  },
});

const desc = computed(() => {
  return missionDescription(props.mission)?.unwrapOrElse(errHandle);
});

const chipData = computed(() => {
  switch (props.mission.Category) {
    case MissionCategory.Daily:
      return ["primary", "デイリー"];
    case MissionCategory.EventAchievement:
      return ["orange-darken-4", "実績"];
    case MissionCategory.EventFixed:
      return ["", ""];
    case MissionCategory.Challenge:
      return ["purple-accent-3", "チャレンジ"];
    case MissionCategory.Weekly:
    case MissionCategory.Achievement:
    case MissionCategory.GuideMission:
    case MissionCategory.All:
    case MissionCategory.MiniGameScore:
    case MissionCategory.MiniGameEvent:
    case MissionCategory.DailySudden:
    case MissionCategory.DailyFixed:
      return ["", props.mission.Category];
    default:
      return noDefault(props.mission.Category);
  }
});
</script>
