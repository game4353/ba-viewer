<template>
  <div v-if="rewards" class="flex flex-row flex-wrap gap-4">
    <div
      v-for="(reward, key) in rewards"
      :key
      class="flex flex-row gap-1 align-center"
    >
      <EventReward :reward />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useExcelEventContentStageTotalReward } from "@/utils/data/excel/event";
import { KeyNotFoundErr } from "@/utils/error";
import { Err, Ok } from "@/utils/result";
import { ERR_HANDLE } from "../warn/error";

const props = defineProps({
  eid: {
    type: Number,
    required: true,
  },
});

const errHandle = inject(ERR_HANDLE)!;

const rewards = computed(() =>
  useExcelEventContentStageTotalReward()
    .value?.andThen((map) => map.getResult(props.eid))
    .orElse2((e) => {
      if (e instanceof KeyNotFoundErr) return Ok(null);
      else return Err(e);
    })
    .unwrapOrElse(errHandle),
);
</script>
