<template>
  <template v-if="group && layout">
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
</template>

<script setup lang="ts">
import { isLastArray, type Recursive } from "@/types";
import {
  useExcelGachaElement,
  useExcelGachaElementRecursive,
  useExcelGachaGroup,
} from "@/utils/data/excel/gacha";
import { fail } from "@/utils/misc";
import {
  GachaGroupType,
  ParcelType,
  RewardTag,
  type GachaElementExcel,
} from "~game/types/flatDataExcel";
import {
  ASSERT_EQUAL,
  ASSERT_SOME,
  ASSERT_UNREACHABLE,
} from "../../warn/error";

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

const assertSome = inject(ASSERT_SOME)!;
const assertUnreachable = inject(ASSERT_UNREACHABLE)!;
const assertEqual = inject(ASSERT_EQUAL)!;

const gachaGroupMap = useExcelGachaGroup();
const obj = computed(() =>
  gachaGroupMap.value?.unwrapOrElse(fail)?.get(props.pid),
);

const gachaElementRecursiveMap = useExcelGachaElementRecursive();
const gachaElementMap = useExcelGachaElement();

const layout = computed(() => {
  if (obj.value == null) return null;
  switch (obj.value.GroupType) {
    case GachaGroupType.Reward_General:
      return "random";
    case GachaGroupType.Reward_Pack:
      return "pack";
    default:
      assertUnreachable(`Unimplemented GroupType ${obj.value.GroupType}.`);
  }
});

const group = computed(() => {
  const groupMap = gachaGroupMap.value?.unwrapOrElse(fail);
  if (groupMap == null) return undefined;
  const recursiveMap = gachaElementRecursiveMap.value?.unwrapOrElse(fail);
  if (recursiveMap == null) return undefined;
  const elementMap = gachaElementMap.value?.unwrapOrElse(fail);
  if (elementMap == null) return undefined;

  function getGroup(pid: number | string): Recursive<GachaElementExcel[]> {
    const id = Number(pid);
    const group = assertSome(
      groupMap!.get(id),
      500,
      `Unable to find gacha element id (${id}).`,
    );
    if (group.IsRecursive) {
      const subGroups = recursiveMap!.get(id)!;
      return subGroups.map((v) => {
        assertEqual(v.ParcelType, ParcelType.GachaGroup);
        assertEqual(v.ParcelAmountMin, 1);
        assertEqual(v.ParcelAmountMax, 1);
        assertEqual(v.Prob, 0);
        assertEqual(v.State, 1);
        return getGroup(v.ParcelID);
      });
    } else {
      const elements = elementMap!.get(id)!;
      return elements;
    }
  }

  return getGroup(props.pid);
});
</script>
