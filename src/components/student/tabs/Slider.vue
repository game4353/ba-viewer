<template>
  <v-range-slider
    v-model="range"
    :max="sliderMax"
    :min="sliderMin"
    :step="1"
    class="my-4"
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
        v-model="charaNow[props.keys]"
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
        v-model="charaGoal[props.keys]"
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
import {
  CharaProp,
  dataStudentGoal,
  dataStudentNow,
  defaultMax,
  defaultMin,
} from "@/stores/student";

const props = defineProps({
  cid: {
    type: Number,
    required: true,
  },
  keys: {
    type: String as PropType<CharaProp>,
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

const charaNow = computed(() => dataStudentNow.use(props.cid));
const charaGoal = computed(() => dataStudentGoal.use(props.cid));
const range = computed({
  get() {
    return [charaNow.value[props.keys], charaGoal.value[props.keys]];
  },
  set(values) {
    charaNow.value[props.keys] = Math.max(values[0], leftMin);
    charaGoal.value[props.keys] = values[1];
  },
});

const sliderMin = defaultMin[props.keys];
const sliderMax = defaultMax[props.keys];

const leftMin = props.init ?? sliderMin;
if (charaNow.value[props.keys] < leftMin) charaNow.value[props.keys] = leftMin;
const rightMax = sliderMax;
const leftMax = charaGoal.value[props.keys];
const rightMin = charaNow.value[props.keys];
</script>
