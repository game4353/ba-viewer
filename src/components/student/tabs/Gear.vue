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
import { useExcelCharacterGear } from "@/utils/data/excel/character";
import { uiPath } from "../../GameImg/loader";

const props = defineProps({
  cid: {
    type: Number,
    required: true,
  },
});
const gearMap = useExcelCharacterGear();

const src = computed(() => {
  const gear = gearMap.value?.map((map) => map.get(props.cid)?.at(0));
  if (gear?.isOk())
    return uiPath(
      gear.unwrap()?.Icon ??
        "UIs/01_Common/03_NonEquipment/Item_Icon_Secret_Reward",
    );
  else return undefined;
});
</script>
