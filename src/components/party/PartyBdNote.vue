<template>
  <v-container class="bg-surface">
    <v-row>
      <v-col>
        <v-row v-for="i in range(3000, 3090, 10)" :key="i" no-gutters>
          <v-col v-for="j in [0, 1, 2, 3]" :key="j">
            <ItemAmount
              class="m-1"
              :pid="i + j"
              :type="ParcelType.Item"
              :need="itemMap?.get(i + j)"
              :scaling="{ w: parcelWidth }"
              :mode="editing ? 'edit' : 'display'"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <v-row v-for="i in range(4000, 4090, 10)" :key="i" no-gutters>
          <v-col v-for="j in [0, 1, 2, 3]" :key="j">
            <ItemAmount
              class="m-1"
              :pid="i + j"
              :type="ParcelType.Item"
              :need="itemMap?.get(i + j)"
              :scaling="{ w: parcelWidth }"
              :mode="editing ? 'edit' : 'display'"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ParcelType } from "@/assets/game/types/flatDataExcel";
import { range } from "@/utils/misc";

defineProps({
  pid: {
    type: Number,
    required: true,
  },
  parcelWidth: {
    type: Number,
    required: true,
  },
  editing: {
    type: Boolean,
    required: true,
  },
  itemMap: {
    type: Map as PropType<Map<number, Map<number, number>>>,
  },
});
</script>
