<template>
  <ParcelCommon
    v-if="chara.obj.TacticEntityType === 'Student'"
    :parcel="chara"
    :layout
    :route
    :scale
    :tag
  />
  <EnemyIcon
    v-else-if="
      [
        'Minion',
        'Elite',
        'Champion',
        'Boss',
        'Summoned',
        'Vehicle',
        'None',
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
import { RewardTag } from "@/assets/game/types/flatDataExcel";

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
    type: String as PropType<keyof typeof RewardTag>,
  },
});
const assertSome = inject(ASSERT_SOME)!;

const chara = computed(() => assertSome(getParcel("Character", props.cid)));
</script>
