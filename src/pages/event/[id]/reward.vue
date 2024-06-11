<template>
  <div class="flex flex-row flex-wrap gap-4">
    <div
      v-for="(reward, key) in rewards"
      :key
      class="flex flex-row gap-1 align-center"
    >
      <p class="h-fit">
        {{ reward.RequiredEventItemAmount }}
      </p>
      <Parcel
        v-for="(_, i) in reward.RewardParcelId"
        :key="i"
        :pid="reward.RewardParcelId[i]"
        :type="reward.RewardParcelType[i]"
        :amount="reward.RewardParcelAmount[i]"
        :scale="0.3"
        route
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import type { EventContentStageTotalRewardExcel } from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/EventContentStageTotalRewardExcelTable.json";

import { INJECT_ERR } from "@/utils/error";

const route = useRoute();
const id = route.params.id;

const setError = inject(INJECT_ERR)!;
if (Array.isArray(id)) setError(`Invalid id (${id}) from url.`);
const eid = Number(id);

const rewards = (DataList as EventContentStageTotalRewardExcel[]).filter(
  (v) => v.EventContentId === eid,
);
</script>
