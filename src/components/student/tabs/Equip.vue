<template>
  <v-img :aspect-ratio="304 / 240" :src="src">
    <template v-slot:placeholder>
      <div class="flex items-center justify-center h-full">
        <v-progress-circular
          color="grey-lighten-4"
          indeterminate
        ></v-progress-circular>
      </div>
    </template>
  </v-img>
</template>

<script setup lang="ts">
import { useExcel } from "@/utils/data/excel";
import {
  EquipmentCategory,
  EquipmentExcelTable,
} from "~game/types/flatDataExcel";
import { uiPath } from "../../GameImg/loader";

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

const equipmentTable = useExcel<EquipmentExcelTable>("EquipmentExcelTable");

const data = computed(() =>
  equipmentTable.value?.map((t) =>
    t.DataList.filter((o) => o.EquipmentCategory === props.category),
  ),
);
const src = computed(() => {
  const item = data.value?.map((a) => a[(props.tier || 1) - 1]);
  return item?.isOk() ? uiPath(item.unwrap().Icon) : undefined;
});
</script>
