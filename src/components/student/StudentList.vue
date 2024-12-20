<template>
  <Loading v-if="students == null" />
  <div v-else class="flex flex-row flex-wrap gap-5">
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
import Loading from "@/components/misc/Loading.vue";
import { useStudent } from "@/components/student/student";
import { ERR_HANDLE } from "@/components/warn/error";
import { Result } from "@/utils/result/result";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  characterIds: {
    type: Array as PropType<Array<number>>,
    required: true,
  },
  visibleIds: {
    type: Set as PropType<Set<number>>,
  },
  orderMap: {
    type: Map as PropType<Map<number, number>>,
  },
});

const students = computed(() => {
  return Result.all(
    props.characterIds.map((cid) => useStudent(cid).value),
  ).unwrapOrElse(errHandle);
});

// function getOrder(cid: number) {
//   return props.orderMap?.get(cid) ?? 2147483647;
// }
</script>
