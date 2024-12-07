<template>
  <v-container class="bg-surface">
    <v-row no-gutters>
      <v-col>
        <ItemAmount
          class="m-1"
          :pid="1"
          :type="ParcelType.Currency"
          :need="currencyMap?.get(1)"
          :scaled-w="parcelWidth"
          :mode="editing ? 'edit' : 'display'"
        />
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col v-for="j in [2000, 2001, 2002, 9999]" :key="j" no-gutters>
        <div>
          <ItemAmount
            class="m-1"
            :pid="j"
            :type="ParcelType.Item"
            :need="itemMap?.get(j)"
            :scaled-w="parcelWidth"
            :mode="editing ? 'edit' : 'display'"
          />
        </div>
      </v-col>
      <v-col cols="6"></v-col>
    </v-row>

    <v-row no-gutters>
      <v-col v-for="j in range(10, 14)" :key="j" no-gutters>
        <div>
          <ItemAmount
            class="m-1"
            :pid="j"
            :type="ParcelType.Item"
            :need="undefined"
            :scaled-w="parcelWidth"
            :mode="editing ? 'edit' : 'display'"
          />
        </div>
      </v-col>
      <v-col cols="6"></v-col>
    </v-row>

    <v-row no-gutters>
      <v-col v-for="j in range(1, 5)" :key="j" no-gutters>
        <div>
          <ItemAmount
            class="m-1"
            :pid="j"
            :type="ParcelType.Equipment"
            :need="undefined"
            :scaled-w="parcelWidth"
            :mode="editing ? 'edit' : 'display'"
          />
        </div>
      </v-col>
      <v-col cols="6"></v-col>
    </v-row>

    <v-row v-for="i in range(1, 5)" :key="i" no-gutters>
      <v-col v-for="j in range(0, 4)" :key="j" no-gutters>
        <div>
          <ItemAmount
            class="m-1"
            :pid="i * 10 + j"
            :type="ParcelType.Equipment"
            :need="undefined"
            :scaled-w="parcelWidth"
            :mode="editing ? 'edit' : 'display'"
          />
        </div>
      </v-col>
      <v-col cols="6"></v-col>
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
  equipmentMap: {
    type: Map as PropType<Map<number, Map<number, number>>>,
  },
  currencyMap: {
    type: Map as PropType<Map<number, Map<number, number>>>,
  },
});
</script>
