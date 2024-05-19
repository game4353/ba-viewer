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
import { CharacterGearExcel } from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList as excel } from "~game/excel/CharacterGearExcelTable.json";
import { uiPath } from "../GameImg/loader";

const props = defineProps({
  cid: {
    type: Number,
    required: true,
  },
});
const data = (excel as CharacterGearExcel[]).filter(
  (o) => o.CharacterId === props.cid,
);

const src = uiPath(
  data.at(0)?.Icon ?? "UIs/01_Common/03_NonEquipment/Item_Icon_Secret_Reward",
);
</script>
