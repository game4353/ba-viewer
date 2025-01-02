<template>
  <div>{{ obj }}</div>
</template>

<script setup lang="ts">
import { ERR_HANDLE } from "@/components/warn/error";
import { useLogicEffect } from ".";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  gid: {
    type: String,
    required: true,
  },
  lv: {
    type: Number,
    required: true,
  },
});

const obj = computed(() =>
  useLogicEffect(props.gid, props.lv).unwrapOrElse(errHandle),
);
</script>
