<template>
  <div class="h-full">
    <Scroll class="mx-6 px-2">
      <StudentList :character-ids="studentIds" />
    </Scroll>
  </div>
</template>

<script setup lang="ts">
import { usePlayableIds } from "@/components/parcel/character/character";

const playableIds = usePlayableIds();
const studentIds = computed(() => {
  if (playableIds.value == null) return [];
  if (playableIds.value.isErr()) return [];
  return playableIds.value.unwrap();
});
</script>
