<template>
  <v-container class="bg-surface">
    <v-row no-gutters>
      <v-col v-for="j in [2000, 2001, 2002, 9999]" :key="j" no-gutters>
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
      <v-spacer></v-spacer>
      <v-col cols="3">
        <div>
          <ItemAmount
            class="m-1 w-full"
            :pid="1"
            :type="ParcelType.Currency"
            :need="currencyMap?.get(1)"
            :scaling="{ w: parcelWidth }"
            :mode="editing ? 'edit' : 'display'"
          />
        </div>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>

    <v-row no-gutters>
      <v-col v-for="j in range(10, 14)" :key="j" no-gutters>
        <div>
          <ItemAmount
            class="m-1"
            :pid="j"
            :type="ParcelType.Item"
            :need="undefined"
            :scaling="{ w: parcelWidth }"
            :mode="editing ? 'edit' : 'display'"
          />
        </div>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="3">
        <div>
          <ItemAmount
            class="m-1 w-full"
            :pid="10"
            :own="expOwn"
            :type="ParcelType.Item"
            :need="expMap"
            :scaling="{ w: parcelWidth }"
            :mode="editing ? 'edit' : 'display'"
          />
        </div>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>

    <v-row no-gutters>
      <v-col v-for="j in range(1, 5)" :key="j" no-gutters>
        <div>
          <ItemAmount
            class="m-1"
            :pid="j"
            :type="ParcelType.Equipment"
            :need="undefined"
            :scaling="{ w: parcelWidth }"
            :mode="editing ? 'edit' : 'display'"
          />
        </div>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="3">
        <div>
          <ItemAmount
            class="m-1 w-full"
            :pid="1"
            :own="equipExpOwn"
            :type="ParcelType.Equipment"
            :need="expEquipMap"
            :scaling="{ w: parcelWidth }"
            :mode="editing ? 'edit' : 'display'"
          />
        </div>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>

    <v-row v-for="i in range(1, 5)" :key="i" no-gutters>
      <v-col v-for="j in range(0, 4)" :key="j" no-gutters>
        <div>
          <ItemAmount
            class="m-1"
            :pid="i * 10 + j"
            :type="ParcelType.Equipment"
            :need="undefined"
            :scaling="{ w: parcelWidth }"
            :mode="editing ? 'edit' : 'display'"
          />
        </div>
      </v-col>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ParcelType } from "@/assets/game/types/flatDataExcel";
import { dataParcel } from "@/stores/parcel";
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
  expMap: {
    type: Map as PropType<Map<number, number>>,
  },
  expEquipMap: {
    type: Map as PropType<Map<number, number>>,
  },
});

const equipExpOwn = computed(() => {
  return (
    dataParcel.use(ParcelType.Equipment, 1).amount +
    dataParcel.use(ParcelType.Equipment, 2).amount * 4 +
    dataParcel.use(ParcelType.Equipment, 3).amount * 16 +
    dataParcel.use(ParcelType.Equipment, 4).amount * 64
  );
});

const expOwn = computed(() => {
  return (
    dataParcel.use(ParcelType.Item, 10).amount +
    dataParcel.use(ParcelType.Item, 11).amount * 10 +
    dataParcel.use(ParcelType.Item, 12).amount * 40 +
    dataParcel.use(ParcelType.Item, 13).amount * 200
  );
});
</script>
