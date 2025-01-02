<template>
  <div>
    <p>Main Entity:</p>
    {{ data.MainEntityData }}
  </div>
  <SkillTarget :sort="data.TargetSortRule" />
</template>

<script setup lang="ts">
import { z } from "zod";
import { ZNewSkillAction } from "./NewSkillAction";

defineProps({
  data: {
    type: Object as PropType<z.infer<typeof ZNewSkillAction>>,
    required: true,
  },
  lv: {
    type: Number,
    required: true,
  },
});
</script>
