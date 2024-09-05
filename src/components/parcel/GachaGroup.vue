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
      <ParcelBox v-bind="activatorProps" :layout :scale :amount />
    </template>

    <template v-slot:default="{}">
      <GachaGroupSub class="p-2" :group :scale="0.3" />
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
import { ASSERT_EQUAL, ASSERT_SOME, ASSERT_UNREACHABLE } from "../warn/error";
import { type Recursive, isLastArray } from "@/types";

const props = defineProps({
  pid: {
    type: [Number, String],
    required: true,
  },
  amount: Number,
  scale: Number,
});

const assertSome = inject(ASSERT_SOME)!;
const assertUnreachable = inject(ASSERT_UNREACHABLE)!;
const assertEqual = inject(ASSERT_EQUAL)!;

const groups = d1 as GachaGroupExcel[];
const dict = Object.fromEntries(groups.map((v) => [v.ID, v]));
const obj = computed(() => dict[props.pid]);

const layout = computed(() => {
  switch (obj.value.GroupType) {
    case "Reward_General":
      return "random";
    case "Reward_Pack":
      return "pack";
    default:
      assertUnreachable(`Unimplemented GroupType ${obj.value.GroupType}.`);
  }
});

function getGroup(pid: number | string): Recursive<GachaElementExcel[]> {
  const id = Number(pid);
  const group = assertSome(
    dict[id],
    500,
    `Unable to find gacha element id (${id}).`,
  );
  if (group.IsRecursive) {
    const subGroups = (d2 as GachaElementRecursiveExcel[]).filter(
      (v) => v.GachaGroupID === id,
    );
    return subGroups.map((v) => {
      assertEqual(v.ParcelType, "GachaGroup");
      assertEqual(v.ParcelAmountMin, 1);
      assertEqual(v.ParcelAmountMax, 1);
      assertEqual(v.Prob, 0);
      assertEqual(v.State, 1);
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
