<template>
  <Loading v-if="students == null" />
  <div v-else class="flex flex-row h-full">
    <div class="w-[240px] h-full flex-shrink-0">
      <FilterPanel :items="students" :setOrder :setVisible />
    </div>
    <div class="h-full">
      <Scroll class="mx-6 px-2">
        <StudentList :students />
      </Scroll>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStudents } from "@/components/student/student";
import { ERR_HANDLE } from "@/components/warn/error";

const errHandle = inject(ERR_HANDLE)!;

const students = computed(() => useStudents().value.unwrapOrElse(errHandle));
const orderMap = ref<Map<number, number>>();
const visibleIds = ref<Set<number>>();
function setOrder(map: Map<number, number>) {
  orderMap.value = map;
}
function setVisible(set: Set<number>) {
  visibleIds.value = set;
}
</script>
