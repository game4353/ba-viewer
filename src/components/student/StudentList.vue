<template>
  <div class="flex flex-row flex-wrap gap-5">
    <div
      :class="student.hidden$ ? 'hidden' : ''"
      :style="{ order: student.order$ }"
      v-for="student in students"
      :key="student.id"
    >
      <MyCharacterBig :cid="student.id" :scaling="{ w: 120 }" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { CStudent } from "@/components/student/student";

defineProps({
  students: {
    type: Array as PropType<CStudent[]>,
    required: true,
  },
});
</script>
