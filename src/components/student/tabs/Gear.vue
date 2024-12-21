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
import { uiPath } from "@/components/GameImg/loader";
import { useExcelCharacterGear } from "@/utils/data/excel/character";

const props = defineProps({
  cid: {
    type: Number,
    required: true,
  },
});
const gearMap = useExcelCharacterGear();

const src = computed(() => {
  const gear = gearMap.value?.map((map) => map.get(props.cid)?.at(0));
  if (gear?.isOk()) return uiPath(gear.unwrap()?.Icon);
  else return undefined;
});
</script>
