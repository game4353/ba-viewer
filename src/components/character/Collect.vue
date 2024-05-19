<template>
  <v-img :aspect-ratio="404 / 456" :lazy-src="loading" :src="src">
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
import { uiPath } from "../GameImg/loader";
// @ts-ignore
import { DataList } from "~game/excel/CostumeExcelTable.json";
import { type CostumeExcel } from "~game/types/flatDataExcel";

const props = defineProps({
  cid: {
    type: Number,
    required: true,
  },
});

function cid2src(cid: number) {
  const path = (DataList as CostumeExcel[]).find(
    (o) => o.CostumeGroupId === cid,
  )?.CollectionTexturePath;
  if (path == null) console.error(`Cannot find ${cid} in costume excel table.`);
  return uiPath(path ?? "");
}
const src = cid2src(props.cid);
const arona = cid2src(19009113);
const plana = cid2src(19900006);
const loading = Math.random() < 0.5 ? arona : plana;
</script>
