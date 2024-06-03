<template>
  <div
    v-if="isLastArray(group) && group.length === 1"
    class="flex flex-row flex-wrap border border-red"
  >
    <Parcel
      :layout
      :amountMin="group[0].ParcelAmountMin"
      :amountMax="group[0].ParcelAmountMax"
      :type="group[0].ParcelType"
      :pid="group[0].ParcelID"
      :rarity="group[0].Rarity"
      :scale
    />
  </div>
  <v-dialog v-else max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <ParcelCommon
        v-bind="activatorProps"
        class="cursor-pointer"
        :layout
        rarity="N"
        :scale
      />
    </template>

    <template v-slot:default="{}">
      <GachaGroupSub :group />
    </template>
  </v-dialog>
</template>

<script setup lang="ts">
import type {
  GachaGroupExcel,
  GachaElementRecursiveExcel,
  GachaElementExcel,
} from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList as d1 } from "~game/excel/GachaGroupExcelTable.json";
// @ts-ignore
import { DataList as d2 } from "~game/excel/GachaElementRecursiveExcelTable.json";
// @ts-ignore
import { DataList as d3 } from "~game/excel/GachaElementExcelTable.json";
import { INJECT_ERR, INJECT_ERR_EQUAL } from "@/utils/error";
import { type Recursive, isLastArray } from "@/types";

const props = defineProps({
  pid: {
    type: Number,
    required: true,
  },
  amount: Number,
  scale: Number,
  iconOnly: Boolean,
});

const setError = inject(INJECT_ERR)!;
if (props.iconOnly) setError("GachaGroup cannot set iconOnly.");
const equalOrError = inject(INJECT_ERR_EQUAL)!;

const groups = d1 as GachaGroupExcel[];
const dict = Object.fromEntries(groups.map((v) => [v.ID, v]));
const obj = computed(() => dict[props.pid]);
if (obj == null) setError(`Unable to find id ${props.pid}`);

const layout = computed(() => {
  switch (obj.value.GroupType) {
    case "Reward_General":
      return "random";
    case "Reward_Pack":
      return "pack";
    default:
      setError(`Unimplemented GroupType ${obj.value.GroupType}.`);
  }
});

function getGroup(id: number): Recursive<GachaElementExcel[]> {
  const group = dict[id];
  if (group == null) setError(`Unable to find id ${id}`);
  if (group.IsRecursive) {
    const subGroups = (d2 as GachaElementRecursiveExcel[]).filter(
      (v) => v.GachaGroupID === id,
    );
    return subGroups.map((v) => {
      equalOrError(v.ParcelType, "GachaGroup");
      equalOrError(v.ParcelAmountMin, 1);
      equalOrError(v.ParcelAmountMax, 1);
      equalOrError(v.Prob, 0);
      equalOrError(v.State, 1);
      return getGroup(v.ParcelID);
    });
  } else {
    const elements = (d3 as GachaElementExcel[]).filter(
      (v) => v.GachaGroupID === id,
    );
    return elements;
  }
}
const group = computed(() => getGroup(props.pid));
</script>
