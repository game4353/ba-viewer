<template>
  <template v-if="chara">
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
</template>

<script setup lang="ts">
import { RewardTag, TacticEntityType } from "@/assets/game/types/flatDataExcel";
import { ERR_HANDLE } from "@/components/warn/error";
import { useCharacter } from "./character";

const props = defineProps({
  cid: {
    type: Number,
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
const errHandle = inject(ERR_HANDLE)!;

const chara = computed(() =>
  useCharacter(Number(props.cid)).value?.unwrapOrElse(errHandle),
);
</script>
