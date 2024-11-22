<template>
  <div v-if="card" class="flex flex-row gap-2">
    <GameImg :path="card.IconPath" />
  </div>
</template>

<script setup lang="ts">
import { useExcelEventContentFortuneGacha } from "@/utils/data/excel/event";
import { fail } from "@/utils/misc";

const props = defineProps({
  eid: {
    type: Number,
    required: true,
  },
});

const table = useExcelEventContentFortuneGacha();
const card = computed(() => table.value?.unwrapOrElse(fail)?.get(props.eid));
</script>
