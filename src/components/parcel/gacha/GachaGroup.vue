<template>
  <template v-if="layout">
    <div v-if="single" class="flex flex-row flex-wrap border border-red">
      <Parcel
        :layout
        :amountMin="single.ParcelAmountMin"
        :amountMax="single.ParcelAmountMax"
        :type="single.ParcelType"
        :pid="single.ParcelID"
        :rarity="single.Rarity"
        :scale
      />
    </div>
    <v-dialog v-else max-width="500">
      <template v-slot:activator="{ props: activatorProps }">
        <ParcelBox v-bind="activatorProps" :layout :scale :amount />
      </template>

      <template v-slot:default="{}">
        <GachaGroupSub class="p-2" :pid :scale="0.3" />
      </template>
    </v-dialog>
  </template>
</template>

<script setup lang="ts">
import {
  useExcelGachaElement,
  useExcelGachaGroup,
} from "@/utils/data/excel/gacha";
import { GachaGroupType, RewardTag } from "~game/types/flatDataExcel";
import { ERR_HANDLE } from "../../warn/error";

const props = defineProps({
  pid: {
    type: Number,
    required: true,
  },
  amount: Number,
  amountMin: Number,
  amountMax: Number,
  scale: Number,
  tag: {
    type: Number as PropType<RewardTag>,
  },
});
const errHandle = inject(ERR_HANDLE)!;

const obj = computed(() =>
  useExcelGachaGroup().value.unwrapOrElse(errHandle)?.get(props.pid),
);

const layout = computed(() => {
  if (obj.value == null) return null;
  switch (obj.value.GroupType) {
    case GachaGroupType.Reward_General:
      return "random";
    case GachaGroupType.Reward_Pack:
      return "pack";
    default:
      errHandle(
        new Error(`Unimplemented GachaGroupType ${obj.value.GroupType}.`),
      );
  }
});

const single = computed(() => {
  if (obj.value?.IsRecursive !== false) return undefined;
  return useExcelGachaElement()
    .value.andThen((map) => map.getResult(props.pid))
    .map((arr) => (arr.length === 1 ? arr[0] : undefined))
    .unwrapOrElse(errHandle);
});
</script>
