<template>
  <Loading v-if="info == null" />
  <v-card v-else>
    <div class="flex flex-col items-center">
      <div class="banner">
        <GameImg :path="info.bg" />
        <GameImg :path="info.portrait" />
        <div class="right-0">
          <div>
            <v-img :src="info.topography"></v-img>
          </div>
          <div class="p-1" :class="info.atk">
            <v-img :src="Icon.Attack"></v-img>
          </div>
          <div class="p-1" :class="info.def">
            <v-img :src="Icon.Defense"></v-img>
          </div>
        </div>
      </div>
      <div>{{ data.SeasonStartData }}</div>
      <div>{{ data.SeasonEndData }}</div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import {
  ArmorType,
  BulletType,
  RaidSeasonManageExcel,
  StageTopography,
} from "@/assets/game/types/flatDataExcel";
import { Icon } from "@/components/GameImg/icon";
import { ERR_HANDLE } from "@/components/warn/error";
import { useExcelGround, useExcelRaidStage } from "@/utils/data/excel/raid";
import { noDefault } from "@/utils/misc";
import { filterSingle } from "@/utils/result";
import { ReadonlyDeep } from "type-fest";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  data: {
    type: Object as PropType<ReadonlyDeep<RaidSeasonManageExcel>>,
    required: true,
  },
});

const info = computed(() => {
  const data = props.data;
  const boss = filterSingle(data.OpenRaidBossGroup, () => true).unwrapOrElse(
    errHandle,
  );
  if (boss == null) return boss;
  const stages = useExcelRaidStage()
    .value.andThen((map) => map.getResult(boss))
    .unwrapOrElse(errHandle);
  if (stages == null) return stages;
  const stage = stages.at(-1)!; // hardest

  const ground = useExcelGround()
    .value.andThen((map) => map.getResult(stage.GroundId))
    .unwrapOrElse(errHandle);
  if (ground == null) return ground;

  return {
    bg: stage.BGPath,
    portrait: stage.PortraitPath,
    topography: topographyPath(ground.StageTopography),
    atk: BulletType[ground.EnemyBulletType],
    def: ArmorType[ground.EnemyArmorType],
  };
});

function topographyPath(t: StageTopography) {
  switch (t) {
    case StageTopography.Street:
      return Icon.Street;
    case StageTopography.Outdoor:
      return Icon.Outdoor;
    case StageTopography.Indoor:
      return Icon.Indoor;
    default:
      return noDefault(t);
  }
}
</script>

<style scoped>
.v-card {
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
}
.banner {
  position: relative;
  height: 72px;
  width: 240px;
  & > * {
    position: absolute;
    height: 72px;
    & > div {
      width: 24px;
      height: 24px;
    }
  }
}
</style>
