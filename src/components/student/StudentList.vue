<template>
  <div class="flex flex-row flex-wrap gap-5">
    <div v-for="student in students" :key="student.id">
      <MyCharacterBig :cid="student.id" :scaled-w="120" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import type { CCharacter } from "../parcel/character";

defineProps({
  students: {
    type: Object as PropType<Array<CCharacter>>,
    required: true,
  },
});
</script>
