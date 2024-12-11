<template>
  <div class="flex flex-row flex-wrap gap-5">
    <div
      :class="visibleIds?.has(cid) === false ? 'hidden' : ''"
      :style="{ order: getOrder(cid) }"
      v-for="cid in characterIds"
      :key="cid"
    >
      <MyCharacterBig :cid :scaling="{ w: 120 }" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";

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

function getOrder(cid: number) {
  return props.orderMap?.get(cid) ?? 2147483647;
}
</script>
