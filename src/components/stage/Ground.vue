<template>
  <!-- TODO -->
  <div class="hidden">{{ ground }}</div>
</template>

<script setup lang="ts">
import { useExcelGround } from "@/utils/data/excel/stage";
import { ERR_HANDLE } from "../warn/error";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  groundId: {
    type: Number,
    required: true,
  },
});

const ground = computed(() => {
  if (props.groundId === 0) return null;
  return useExcelGround()
    .value.andThen((map) => map.getResult(props.groundId))
    .unwrapOrElse(errHandle);
});
</script>
