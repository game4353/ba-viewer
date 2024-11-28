<template>
  <div v-if="card" class="flex flex-row gap-2">
    <GameImg :path="card.IconPath" />
  </div>
</template>

<script setup lang="ts">
import { useExcelEventContentFortuneGacha } from "@/utils/data/excel/event";
import { ERR_HANDLE } from "../warn/error";

const props = defineProps({
  eid: {
    type: Number,
    required: true,
  },
});
const errHandle = inject(ERR_HANDLE)!;

const table = useExcelEventContentFortuneGacha();
const card = computed(() =>
  table.value?.unwrapOrElse(errHandle)?.get(props.eid),
);
</script>
