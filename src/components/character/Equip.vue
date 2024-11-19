<template>
  <v-img :aspect-ratio="304 / 240" :src="src">
    <template v-slot:placeholder>
      <div class="d-flex align-center justify-center fill-height">
        <v-progress-circular
          color="grey-lighten-4"
          indeterminate
        ></v-progress-circular>
      </div>
    </template>
  </v-img>
</template>

<script setup lang="ts">
import { EquipmentExcel, EquipmentCategory } from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList as excel } from "~game/excel/EquipmentExcelTable.json";
import { uiPath } from "../GameImg/loader";

const props = defineProps({
  category: {
    type: Number as PropType<EquipmentCategory>,
    required: true,
  },
  tier: {
    type: Number,
    required: true,
  },
});
const data = (excel as EquipmentExcel[]).filter(
  (o) => o.EquipmentCategory === props.category,
);

const src = computed(() => uiPath(data[(props.tier || 1) - 1].Icon));
</script>
