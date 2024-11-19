<template>
  <ParcelCommon
    v-if="chara.obj.TacticEntityType === TacticEntityType.Student"
    :parcel="chara"
    :layout
    :route
    :scale
    :tag
  />
  <EnemyIcon
    v-else-if="
      [
        TacticEntityType.Minion,
        TacticEntityType.Elite,
        TacticEntityType.Champion,
        TacticEntityType.Boss,
        TacticEntityType.Summoned,
        TacticEntityType.Vehicle,
        TacticEntityType.None,
      ].includes(chara.obj.TacticEntityType)
    "
    :cid
    :layout
    :route
    :scale
  />
  <router-link v-else :to="`/parcel/character/${cid}`">{{
    chara.obj.TacticEntityType
  }}</router-link>
</template>

<script setup lang="ts">
import { ASSERT_SOME } from "@/components/warn/error";
import { getParcel } from "../parcel";
import {
  ParcelType,
  RewardTag,
  TacticEntityType,
} from "@/assets/game/types/flatDataExcel";

const props = defineProps({
  cid: {
    type: [String, Number],
    required: true,
  },
  hover: String,
  layout: {
    type: String as PropType<"icon" | "random" | "pack" | "select" | "default">,
  },
  route: Boolean,
  scale: Number,
  tag: {
    type: Number as PropType<RewardTag>,
  },
});
const assertSome = inject(ASSERT_SOME)!;

const chara = computed(() =>
  assertSome(getParcel(ParcelType.Character, props.cid)),
);
</script>
