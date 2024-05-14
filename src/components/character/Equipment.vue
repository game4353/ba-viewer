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
import { EquipmentExcel, EquipmentCategory } from "~game/type/excel";
import { default as excel } from "~game/excel/equipmentexceltable.json";
import { uiPath } from "../GameImg/loader";

const props = defineProps({
  category: {
    type: String as PropType<keyof typeof EquipmentCategory>,
    required: true,
  },
  tier: {
    type: Number,
    required: true,
  },
});
const data = excel.filter(
  (o) => o.EquipmentCategory === props.category,
) as EquipmentExcel[];

const src = computed(() => uiPath(data[(props.tier || 1) - 1].Icon));
</script>
