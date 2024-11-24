<template>
  <v-card v-if="obj" class="mx-auto">
    <template v-slot:title>
      <span class="font-weight-black">
        {{ obj.name.value?.unwrapOrElse(fail) ?? "" }}
      </span>
    </template>
    <template v-slot:prepend>
      <Parcel :type="ParcelType.Currency" :pid="obj.id" :scale="0.4" />
    </template>
    <v-card-text class="bg-surface-light pt-4">
      {{ obj.desc.value?.unwrapOrElse(fail) ?? "" }}
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { fail } from "@/utils/misc";
import { ParcelType } from "~game/types/flatDataExcel";
import { useCurrency } from "./currency";

const props = defineProps({
  pid: {
    type: Number,
    required: true,
  },
});

const obj = computed(() => useCurrency(props.pid).value?.unwrapOrElse(fail));
</script>
