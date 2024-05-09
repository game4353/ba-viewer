<template>
  <v-slider
    v-model="val"
    :max="dMax"
    :min="dMin"
    :step="1"
    class="ma-4"
    :label="name"
    color="orange"
    :show-ticks="dMax - dMin > 10 ? false : 'always'"
    hide-details
  >
    <template v-slot:prepend>
      <v-text-field
        v-model="val"
        density="compact"
        style="width: 80px"
        type="number"
        variant="outlined"
        hide-details
        :max="dMax"
        :min="dMin"
      ></v-text-field>
    </template>
  </v-slider>
</template>

<script setup lang="ts">
import { Chara, charaDefault, useCharaStore } from "@/stores/personal";
import { storeToRefs } from "pinia";

const props = defineProps({
  cid: {
    type: Number,
    required: true,
  },
  keys: {
    type: String as PropType<keyof Chara>,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  min: {
    type: Number,
  },
  max: {
    type: Number,
  },
});

const dMin = props.min ?? charaDefault()[props.keys];
const dMax = props.max ?? charaDefault(true)[props.keys];
const chara = storeToRefs(useCharaStore(props.cid).now);
const val = chara[props.keys];
</script>
