<template>
  <v-card v-if="obj" class="mx-auto">
    <template v-slot:title>
      <span class="font-weight-black">
        {{ obj.name.value?.unwrapOrElse(errHandle) }}
      </span>
    </template>
    <template v-slot:prepend>
      <Parcel :type="ParcelType.Equipment" :pid="pid" :scale="0.4" />
    </template>
    <v-card-text class="bg-surface-light !pt-4">
      {{ obj.desc.value?.unwrapOrElse(errHandle) }}
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ERR_HANDLE } from "@/components/warn/error";
import { ParcelType } from "~game/types/flatDataExcel";
import { useEquipment } from "./equipment";

const props = defineProps({
  pid: {
    type: Number,
    required: true,
  },
});
const errHandle = inject(ERR_HANDLE)!;

const obj = computed(() =>
  useEquipment(props.pid).value?.unwrapOrElse(errHandle),
);
</script>
