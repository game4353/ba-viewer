<template>
  <v-card v-if="picked" class="mx-auto">
    <template v-slot:title>
      <span class="font-weight-black">{{
        picked.name.value?.unwrapOrElse(errHandle) ?? ""
      }}</span>
    </template>
    <template v-slot:prepend>
      <Parcel :type="ParcelType.Item" :pid="picked.id" :scale="0.4" />
    </template>
    <v-card-text class="bg-surface-light !pt-4">
      {{ picked.desc.value?.unwrapOrElse(errHandle) ?? "" }}
    </v-card-text>
  </v-card>

  <v-card v-if="picked && picked.obj.UsingResultParcelType !== ParcelType.None">
    <v-card-title>使用</v-card-title>
    <Parcel
      :pid="picked.obj.UsingResultId"
      :type="picked.obj.UsingResultParcelType"
      :amount="picked.obj.UsingResultAmount"
      :scale="0.3"
    />
  </v-card>
</template>

<script setup lang="ts">
import { ERR_HANDLE } from "@/components/warn/error";
import { ParcelType } from "~game/types/flatDataExcel";
import { useItem } from "./item";

const props = defineProps({
  pid: {
    type: Number,
    required: true,
  },
});
const errHandle = inject(ERR_HANDLE)!;

const picked = computed(() =>
  useItem(props.pid).value?.unwrapOrElse(errHandle),
);
</script>
