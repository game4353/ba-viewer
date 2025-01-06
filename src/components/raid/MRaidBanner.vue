<template>
  <router-link :to="`/finalrestrictionrelease/${season.SeasonId}`">
    <v-card>
      <div class="flex flex-col items-center w-fit">
        <div class="flex flex-row">
          <GameImg class="w-28" :path="season.LevelImgPath" v>
            <div class="h-6 w-12 flex flex-row" v-if="boss">
              <div class="p-1 w-6" :class="boss.bulletType">
                <v-img :src="Icon.Attack"></v-img>
              </div>
              <div class="p-1 w-6" :class="boss.armorType">
                <v-img :src="Icon.Defense"></v-img>
              </div>
            </div>
          </GameImg>
          <GameImg class="w-20" :path="season.LobbyImgPath" v />
        </div>
        <div>{{ season.SeasonStartDate }}</div>
        <div>{{ season.SeasonEndDate }}</div>
      </div>
    </v-card>
  </router-link>
</template>

<script setup lang="ts">
import { Icon } from "@/components/GameImg/icon";
import { ERR_HANDLE } from "@/components/warn/error";
import { useExcelMultiFloorRaidStage } from "@/utils/data/excel/raid";
import { ReadonlyDeep } from "type-fest";
import { MultiFloorRaidSeasonManageExcel } from "~game/excelType";
import { useCharacter } from "../parcel/character/character";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  season: {
    type: Object as PropType<ReadonlyDeep<MultiFloorRaidSeasonManageExcel>>,
    required: true,
  },
});

const boss = computed(() => {
  const id = props.season.OpenRaidBossGroupId;
  return useExcelMultiFloorRaidStage()
    .value.andThen2((map) => map.getResult(id))
    .map((stages) => stages.at(-1)!.BossCharacterId[0])
    .andThen2((bid) => useCharacter(bid).value)
    .unwrapOrElse(errHandle);
});
</script>

<style lang="scss" scoped>
.v-card {
  padding: 8px 16px;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
}
</style>
