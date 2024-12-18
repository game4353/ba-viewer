<template>
  <div class="flex flex-row h-full">
    <div class="w-[240px] h-full flex-shrink-0">
      <FilterPanel :items="students" :setOrder :setVisible />
    </div>
    <div class="h-full">
      <Scroll class="mx-6 px-2">
        <StudentList :characterIds="studentIds" :visibleIds :orderMap />
      </Scroll>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePlayableIds, useStudent } from "@/components/student/student";
import { ERR_HANDLE } from "@/components/warn/error";
import { isDefined } from "@/utils/misc";

const errHandle = inject(ERR_HANDLE)!;

const playableIds = usePlayableIds();
const studentIds = computed(() => {
  if (playableIds.value == null) return [];
  if (playableIds.value.isErr()) return [];
  return playableIds.value.unwrap();
});
const students = computed(() =>
  studentIds.value
    .map((id) => useStudent(id).value?.unwrapOrElse(errHandle))
    .filter(isDefined),
);
const orderMap = ref<Map<number, number>>();
const visibleIds = ref<Set<number>>();
function setOrder(map: Map<number, number>) {
  orderMap.value = map;
}
function setVisible(set: Set<number>) {
  visibleIds.value = set;
}
</script>
