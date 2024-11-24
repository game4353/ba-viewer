<template>
  <div class="flex flex-row flex-wrap gap-4 p-1 w-full">
    <router-link
      :to="`${$route.fullPath}/${v.Id}`"
      v-for="(v, i) of guides"
      :key="i"
    >
      <v-card>
        <div class="flex flex-column items-center">
          <GameImg :path="v.LobbyBannerImage" class="h-40" />
          <div>{{ v.StartDate }}</div>
          <div>
            {{
              v.StartableEndDate.startsWith("2099") ? "∞" : v.StartableEndDate
            }}
          </div>
        </div>
      </v-card>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { useExcel } from "@/utils/data/excel";
import { fail } from "@/utils/misc";
import type { GuideMissionSeasonExcelTable } from "~game/types/flatDataExcel";

const table = useExcel<GuideMissionSeasonExcelTable>(
  "GuideMissionSeasonExcelTable",
);
const guides = computed(() => table.value?.unwrapOrElse(fail)?.DataList);
</script>
