<template>
  <div v-if="shot">{{ shot }}</div>
</template>

<script lang="ts" setup>
import { ReadonlyDeep } from "type-fest";
import { TimelineType } from "../../../timeline/schema";

const props = defineProps({
  data: {
    type: Array as PropType<Readonly<ReadonlyDeep<TimelineType>[]>>,
    required: true,
  },
});

const shot = computed(() => {
  return props.data;
});
</script>
