<template>
  <div class="flex flex-row">
    <Parcel
      v-for="(reward, key) in rewards"
      :key
      :type="reward.type"
      :pid="reward.id"
      :amount="reward.amount"
      :scaling
      route
    />
  </div>
</template>

<script setup lang="ts">
import { ScaleOption } from "../misc/scale";
import { ERR_HANDLE } from "../warn/error";

const props = defineProps({
  ids: {
    type: Array as PropType<number[] | readonly number[]>,
    required: true,
  },
  types: {
    type: Array as PropType<number[] | readonly number[]>,
    required: true,
  },
  amounts: {
    type: Array as PropType<number[] | readonly number[]>,
    required: true,
  },
  scaling: Object as PropType<ScaleOption>,
});
const errHandle = inject(ERR_HANDLE)!;

type Data = {
  id: number;
  type: number;
  amount: number;
};

const rewards = computed(() => {
  if (
    props.ids.length !== props.types.length ||
    props.types.length !== props.amounts.length
  )
    errHandle(
      new Error(
        `Invalid parcels: ${props.ids}, ${props.types}, ${props.amounts}`,
      ),
    );
  const arr: Data[] = [];
  props.ids.forEach((id, i) => {
    arr.push({ id, type: props.types[i], amount: props.amounts[i] });
  });
  return arr;
});
</script>
