<template>
  <div>
    <v-container class="bg-surface-variant">
      <StatSingle
        v-for="(row, key) in statRows"
        :key
        :lv="dataStudentNow.use(cid).lv"
        :cid
        :type="row.type"
        :color="key % 2 ? 'grey-darken-3' : ''"
      />
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { dataStudentNow } from "@/stores/student";
import { statRows } from "../stat";

defineProps({
  cid: {
    type: Number,
    required: true,
  },
});
</script>
