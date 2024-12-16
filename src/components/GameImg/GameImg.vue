<template>
  <v-img v-if="v" :src="uiPath(path)"></v-img>
  <img v-else :src="uiPath(path)" />
</template>

<script setup lang="ts">
import { PropMaybeResult } from "@/utils/result";
import { ERR_HANDLE } from "../warn/error";
import { uiPath } from "./loader";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  path: {
    type: [String, Object] as PropMaybeResult<string>,
    required: true,
  },
  v: Boolean,
});

const path = computed(() => {
  if (typeof props.path === "string") return props.path;
  return props.path.unwrapOrElse(errHandle) ?? "";
});
</script>
