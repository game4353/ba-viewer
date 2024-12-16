<template>
  <Loading v-if="students == null" />
  <div v-else class="flex flex-col gap-1">
    <div class="flex flex-row gap-1">
      <v-icon>mdi-cake-variant</v-icon>
      <p>誕生日</p>
    </div>
    <div class="flex flex-row flex-wrap gap-3">
      <div v-for="student in students" :key="student.id">
        <MyCharacter :cid="student.id" :scaling="{ w: 70 }" />
        <RichText :text="student.useProfile('Birthday')" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ERR_HANDLE } from "@/components/warn/error";
import { useNextBd } from "./birthday";
const errHandle = inject(ERR_HANDLE)!;

const students = computed(() => useNextBd().unwrapOrElse(errHandle));
</script>
