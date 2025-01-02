<template>
  {{ data }}
</template>

<script setup lang="ts">
import { z } from "zod";
import { ZManualSkill } from "./ManualSkill";

defineProps({
  data: {
    type: Object as PropType<z.infer<typeof ZManualSkill>>,
    required: true,
  },
  lv: {
    type: Number,
    required: true,
  },
});
</script>
