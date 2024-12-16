<template>
  <div class="w-[560px]">
    <v-container class="bg-surface-variant">
      <StatSingle
        v-for="(row, key) in statRows"
        :key
        :lv
        :cid
        :type="row.type"
        :color="key % 2 ? 'grey-darken-3' : ''"
      />
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { useCharaStore } from "@/stores/character";
import { statRows } from "../stat";

const props = defineProps({
  cid: {
    type: Number,
    required: true,
  },
});
const lv = computed(() => {
  const store = useCharaStore(props.cid).now();
  return store.lv;
});
</script>
