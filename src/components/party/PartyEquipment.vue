<template>
  <v-container class="bg-surface">
    <v-row v-for="i in range(1, 10)" :key="i" no-gutters>
      <v-col v-for="j in range(1, 9)" :key="j" no-gutters>
        <div>
          <ItemAmount
            class="m-1"
            :pid="100000 + i * 1000 + j"
            :type="ParcelType.Equipment"
            :need="equipmentMap?.get(100000 + i * 1000 + j)"
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
  equipmentMap: {
    type: Map as PropType<Map<number, Map<number, number>>>,
  },
});
</script>
