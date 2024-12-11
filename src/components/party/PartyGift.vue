<template>
  <v-container class="bg-surface">
    <v-row no-gutters>
      <v-col
        v-for="j in [
          ...range(5000, 5035),
          ...range(5100, 5113),
          ...range(5996, 6000),
        ]"
        :key="j"
        no-gutters
      >
        <div>
          <ItemAmount
            class="m-1"
            :pid="j"
            :type="ParcelType.Item"
            :need="itemMap?.get(j)"
            :scaling="{ w: parcelWidth }"
            :mode="editing ? 'edit' : 'display'"
          />
        </div>
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
