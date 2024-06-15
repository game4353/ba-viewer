<template>
  <ParcelCommon
    :amount
    :iconPath="costume.TextureDir"
    :layout
    :rarity="costume.Rarity"
    :scale
    :tag
  />
</template>

<script setup lang="ts">
import type {
  CharacterExcel,
  CostumeExcel,
  RewardTag,
} from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList as d1 } from "~game/excel/CharacterExcelTable.json";
// @ts-ignore
import { DataList as d2 } from "~game/excel/CostumeExcelTable.json";
import { ASSERT_SOME } from "../warn/error";

const props = defineProps({
  pid: {
    type: Number,
    required: true,
  },
  amount: Number,
  layout: {
    type: String as PropType<"icon" | "random" | "pack" | "select" | "default">,
  },
  scale: Number,
  tag: {
    type: String as PropType<keyof typeof RewardTag>,
  },
});
const assertSome = inject(ASSERT_SOME)!;

const characters = d1 as CharacterExcel[];
const dict1 = Object.fromEntries(characters.map((v) => [v.Id, v]));
const costumes = d2 as CostumeExcel[];
const dict2 = Object.fromEntries(costumes.map((v) => [v.CostumeGroupId, v]));

const character = computed(() => dict1[props.pid]);
assertSome(character.value, 500, `Unable to find character id (${props.pid}).`);
const costume = computed(() => dict2[character.value.CostumeGroupId]);
assertSome(
  costume.value,
  500,
  `Unable to find costume id (${character.value.CostumeGroupId}).`,
);
</script>
