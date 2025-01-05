<template>
  <Loading v-if="dungeon == null" />
  <router-link v-else :to="`/jointfiringdrill/${season.Id}`">
    <v-card>
      <div class="flex flex-col items-center w-fit">
        <div class="flex flex-row -mb-2">
          <GameImg class="w-20" :path="bg" v>
            <GameImg class="top-2 h-4/5" :path="dungeon.IconPath" v />
          </GameImg>
          <div class="flex flex-row flex-wrap w-[72px] py-1 ml-2">
            <div
              class="w-1/2 h-fit"
              v-for="(path, key) in data!.GeasIconPath"
              :key
            >
              <GameImg :path />
            </div>
          </div>
        </div>
        <div>{{ season.StartDate }}</div>
        <div>{{ season.EndDate }}</div>
      </div>
    </v-card>
  </router-link>
</template>

<script setup lang="ts">
import { ERR_HANDLE } from "@/components/warn/error";
import {
  useExcelTimeAttackDungeon,
  useExcelTimeAttackDungeonGeas,
} from "@/utils/data/excel/stage";
import { ReadonlyDeep } from "type-fest";
import { TimeAttackDungeonSeasonManageExcel } from "~game/excelType";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  season: {
    type: Object as PropType<ReadonlyDeep<TimeAttackDungeonSeasonManageExcel>>,
    required: true,
  },
});

const data = computed(() =>
  useExcelTimeAttackDungeonGeas()
    .value.andThen2((map) =>
      map.getResult(props.season.DifficultyGeas.at(-1) ?? -1),
    )
    .unwrapOrElse(errHandle),
);

const dungeon = computed(() => {
  if (data.value == null) return data.value;
  return useExcelTimeAttackDungeon()
    .value.andThen2((map) => map.getResult(props.season.DungeonId))
    .unwrapOrElse(errHandle);
});

const bg = computed(() => {
  const id = props.season.UISlot - 1 || 3;
  return `UIs/01_Common/35_TimeAttack/TimeAttack_SlotBG_0${id}`;
});
</script>

<style lang="scss" scoped>
.v-card {
  width: fit-content;
  padding: 0 12px 6px 16px;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
}
</style>
