<template>
  <Loading v-if="!Boolean(geas?.length)" />
  <div v-else>
    <v-tabs
      v-model="tab"
      align-tabs="center"
      center-active
      bg-color="deep-purple-accent-4"
    >
      <v-tab v-for="g in geas" :key="g.Id" :value="g.Id">{{
        g.Difficulty
      }}</v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item v-for="g in geas" :key="g.Id" :value="g.Id">
        <v-card>
          <RichText :text="useLocalizeEtc(g.LocalizeEtcKey)" />
          <div>おすすめ Lv. {{ g.RecommandLevel }}</div>
          <div>制限時間: {{ g.BattleDuration / 1000 }}秒</div>
          <Ground :ground-id="g.GroundId" />
          <div class="m-2" v-for="(key, i) in g.GeasLocalizeEtcKey" :key>
            <div class="flex flex-row items-center">
              <GameImg class="w-10" :path="g.GeasIconPath[i]" />
              <RichText class="text-lg" :text="useLocalizeEtc(key)" />
            </div>
            <RichText :text="useLocalizeEtc(key, true)" />
          </div>
        </v-card>
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>

<script setup lang="ts">
import { TimeAttackDungeonSeasonManageExcel } from "@/assets/game/excelType";
import { ERR_HANDLE } from "@/components/warn/error";
import { useExcelTimeAttackDungeonGeas } from "@/utils/data/excel/stage";
import { useLocalizeEtc } from "@/utils/i18n/localize";
import { Result } from "@/utils/result/result";
import { ReadonlyDeep } from "type-fest";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  season: {
    type: Object as PropType<ReadonlyDeep<TimeAttackDungeonSeasonManageExcel>>,
    required: true,
  },
});
const tab = ref(0);

const geas = computed(() =>
  Result.all(
    props.season.DifficultyGeas.map((id) =>
      useExcelTimeAttackDungeonGeas().value.andThen((map) => map.getResult(id)),
    ) ?? [],
  ).unwrapOrElse(errHandle),
);
</script>
