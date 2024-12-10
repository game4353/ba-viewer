<template>
  <div v-if="missions" class="flex flex-col flex-wrap gap-4">
    <div
      v-for="(mission, key) in missions"
      :key
      class="flex flex-col gap-1 align-center"
    >
      <EventMission :mission />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useExcelEventContentMission } from "@/utils/data/excel/event";
import { ERR_HANDLE } from "../warn/error";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  eid: {
    type: Number,
    required: true,
  },
});

const missions = computed(() =>
  useExcelEventContentMission()
    .value.map((map) => map.get(props.eid))
    .unwrapOrElse(errHandle),
);
</script>
