<template>
  <div class="flex flex-row flex-wrap gap-4 p-1 w-full">
    <router-link
      :to="`${$route.fullPath}/${v.Id}`"
      v-for="(v, i) of guides"
      :key="i"
    >
      <v-card>
        <div class="flex flex-col items-center">
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
import { ERR_HANDLE } from "@/components/warn/error";
import { useExcel } from "@/utils/data/excel";
import type { GuideMissionSeasonExcelTable } from "~game/types/flatDataExcel";
const errHandle = inject(ERR_HANDLE)!;

const table = useExcel<GuideMissionSeasonExcelTable>(
  "GuideMissionSeasonExcelTable",
);
const guides = computed(() => table.value?.unwrapOrElse(errHandle)?.DataList);
</script>
