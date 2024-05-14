<template>
  <v-range-slider
    v-model="range"
    :max="sliderMax"
    :min="sliderMin"
    :step="1"
    class="ma-4"
    :label="name"
    color="red"
    :show-ticks="sliderMax - sliderMin > 10 ? false : 'always'"
    hide-details
    strict
    @click.stop
    :disabled
  >
    <template v-slot:prepend>
      <v-text-field
        v-model="val1"
        density="compact"
        style="width: 80px"
        type="number"
        variant="outlined"
        hide-details
        :max="leftMax"
        :min="leftMin"
      ></v-text-field>
    </template>
    <template v-slot:append>
      <v-text-field
        v-model="val2"
        density="compact"
        style="width: 80px"
        type="number"
        variant="outlined"
        hide-details
        :max="rightMax"
        :min="rightMin"
      ></v-text-field>
    </template>
  </v-range-slider>
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
  /** Only used for `star` as an absolute minimum. */
  init: Number,
  disabled: Boolean,
});

const store = useCharaStore(props.cid);
const charaNow = storeToRefs(store.now());
const charaGoal = storeToRefs(store.goal());
const val1 = charaNow[props.keys];
const val2 = charaGoal[props.keys];
const range = computed({
  get() {
    return [val1.value, val2.value];
  },
  set(values) {
    val1.value = Math.max(values[0], leftMin);
    val2.value = values[1];
  },
});

const sliderMin = charaDefault()[props.keys];
const sliderMax = charaDefault(true)[props.keys];
const leftMin = props.init ?? sliderMin;
if (val1.value < leftMin) val1.value = leftMin;
const rightMax = sliderMax;
const leftMax = val2;
const rightMin = val1;
</script>
