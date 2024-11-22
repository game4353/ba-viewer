<template>
  <div class="flex flex-row flex-wrap gap-5">
    <div v-for="cid in characterIds" :key="cid">
      <MyCharacterBig :cid :scaled-w="120" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";

defineProps({
  characterIds: {
    type: Object as PropType<Array<number>>,
    required: true,
  },
});
</script>
