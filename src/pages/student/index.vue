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
import {
  CCharacter,
  useCharacter,
  usePlayableIds,
} from "@/components/parcel/character/character";
import { fail } from "@/utils/misc";

const playableIds = usePlayableIds();
const studentIds = computed(() => {
  if (playableIds.value == null) return [];
  if (playableIds.value.isErr()) return [];
  return playableIds.value.unwrap();
});
const students = computed(() =>
  studentIds.value
    .map((id) => useCharacter(id).value?.unwrapOrElse(fail))
    .filter((v): v is CCharacter => v != null),
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
