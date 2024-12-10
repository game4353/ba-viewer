<template>
  <v-card v-if="obj" class="mx-auto">
    <template v-slot:title>
      <span class="font-weight-black">
        {{ obj.name.value?.unwrapOrElse(errHandle) ?? "" }}
      </span>
    </template>
    <template v-slot:prepend>
      <Parcel :type="ParcelType.Emblem" :pid="obj.id" :scale="0.4" />
    </template>
    <v-card-text class="bg-surface-light !pt-4">
      {{ obj.desc.value?.unwrapOrElse(errHandle) ?? "" }}
    </v-card-text>
    <v-img width="600" height="120">
      <GameImg class="absolute" :path="obj.obj.EmblemBGPathJp" />
      <GameImg
        class="absolute top-[3px] left-1"
        :path="obj.obj.EmblemIconPath"
      />
    </v-img>
  </v-card>
</template>

<script setup lang="ts">
import { ERR_HANDLE } from "@/components/warn/error";
import { ParcelType } from "~game/types/flatDataExcel";
import { useEmblem } from "./emblem";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  pid: {
    type: Number,
    required: true,
  },
});

const obj = computed(() => useEmblem(props.pid).unwrapOrElse(errHandle));
</script>
