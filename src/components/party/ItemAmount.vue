<template>
  <div class="flex flex-row min-w-fit w-fit" :class="bg">
    <Parcel
      :pid
      :type
      :amount="hasAmount.amount"
      :scale
      :scaled-w
      :scaled-h
      :scale-type
    />
    <div class="flex flex-col grow pr-1">
      <v-tooltip content-class="!p-0" location="top">
        <template v-slot:activator="{ props }">
          <div
            class="flex flex-col min-w-16 text-right text-base"
            :class="mode === 'display' ? '' : '!hidden'"
            v-bind="props"
          >
            <p>{{ needAmount }}</p>
            <p>{{ diff < 0 ? diff : `+${diff}` }}</p>
          </div>
          <v-text-field
            class="min-w-16 h-4/5"
            :class="mode === 'edit' ? '' : '!hidden'"
            v-model="keyInAmount"
            density="compact"
            type="number"
            hide-details
            hide-spin-buttons
            single-line
          ></v-text-field>
        </template>
        <v-card v-if="needAmount > 0">
          <div
            class="flex flex-row flex-wrap border-4 rounded m-1 p-1 gap-1"
            :class="bc"
          >
            <div
              class="flex flex-col items-center"
              v-for="[cid, amount] in need"
              :key="cid"
            >
              <MyCharacter :cid :scale :scale-type :scaled-w :scaled-h />
              <p class="text-base">{{ amount }}</p>
            </div>
          </div>
        </v-card>
      </v-tooltip>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ParcelType } from "@/assets/game/types/flatDataExcel";
import { dataParcel } from "@/stores/parcel";

const props = defineProps({
  pid: {
    type: Number,
    required: true,
  },
  type: {
    type: Number as PropType<ParcelType>,
    required: true,
  },
  need: {
    type: Map as PropType<Map<number, number>>,
  },
  mode: {
    type: String as PropType<"display" | "edit">,
    required: true,
  },
  scale: Number,
  scaledW: Number,
  scaledH: Number,
  scaleType: String as PropType<"min" | "max">,
});

const needAmount = computed(() =>
  props.need ? [...props.need.values()].reduce((a, b) => a + b, 0) : 0,
);
const hasAmount = dataParcel.use(props.type, props.pid);
const keyInAmount = ref(`${hasAmount.amount}`);
watch([keyInAmount, () => hasAmount.amount] as const, (newV, oldV) => {
  let v = parseInt(newV[0]);
  if (newV[0] !== oldV[0]) {
    if (isNaN(v)) v = 0;
    hasAmount.amount = v;
  } else if (newV[1] !== oldV[1]) {
    if (!isNaN(v)) keyInAmount.value = `${newV[1]}`;
  }
});
const diff = computed(() => {
  return hasAmount.amount - needAmount.value;
});

const bg = computed(() =>
  diff.value < 0
    ? "bg-error"
    : needAmount.value > 0
      ? "bg-success"
      : "bg-surface-light",
);
const bc = computed(() =>
  diff.value < 0
    ? "border-red-400"
    : needAmount.value > 0
      ? "border-green-500"
      : "border-slate-300",
);
</script>

<style lang="scss" scoped>
.v-text-field:deep(input) {
  @apply p-0 text-right;
}
</style>
