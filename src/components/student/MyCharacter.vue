<template>
  <component
    :is="noRoute ? 'span' : 'router-link'"
    v-if="parcel?.isOk()"
    :to="`/student/${parcel.unwrap().id}`"
  >
    <Scaled :scaling :width="imgW" :height="imgH">
      <v-img class="absolute" :width="imgW" :height="imgH" :src="bg">
        <GameImg
          :path="parcel.unwrap().iconPath"
          class="absolute top-0 left-0 p-1 w-auto"
          v
        />
        <span class="level" v-if="levelNum! > 0"> Lv.{{ levelNum }} </span>
        <div class="atk-def">
          <div :class="parcel.unwrap().bulletType"></div>
          <div :class="parcel.unwrap().armorType"></div>
        </div>
        <v-img
          class="star"
          width="64"
          height="64"
          :src="starNum! > 5 ? Icon.Star2 : Icon.Star"
        >
          {{ starNum! > 5 ? starNum! - 5 : starNum }}
        </v-img>
        <Bond
          class="!absolute right-0 -top-1"
          v-if="levelNum! > 0"
          :level="bondNum"
        />
      </v-img>
    </Scaled>
  </component>
</template>

<script setup lang="ts">
import { useCharaStore } from "@/stores/character";
import { Icon, rarityBgIcon } from "../GameImg/icon";
import { ScaleOption } from "../misc/scale";
import { useCharacter } from "../parcel/character/character";
import { ERR_HANDLE } from "../warn/error";

const imgW = 256;
const imgH = 210;

const props = defineProps({
  cid: {
    type: Number,
    required: true,
  },
  scaling: Object as PropType<ScaleOption>,
  level: Number,
  star: Number,
  bond: Number,
  noRoute: Boolean,
});
const parcel = useCharacter(props.cid);

const errHandle = inject(ERR_HANDLE)!;

const chara = useCharaStore(Number(props.cid)).now();
const levelNum = ref(props.level);
watchEffect(() => {
  if (props.level != null) return;
  levelNum.value = chara.lv;
});
const starNum = ref(props.star);
watchEffect(() => {
  if (props.star != null) return;
  if (parcel.value == null) return;
  const starMin = parcel.value.unwrapOrElse(errHandle)?.starMin ?? 0;
  starNum.value = levelNum.value === 0 ? starMin : chara.star;
});
const bondNum = ref(props.bond);
watchEffect(() => {
  if (props.bond != null) return;
  bondNum.value = chara.bond;
});

const bg = computed(() => {
  if (parcel.value?.unwrapOrElse(errHandle) == null) return;
  return rarityBgIcon(parcel.value.unwrap().rarity);
});
</script>

<style scoped lang="scss">
@use "@/styles/variables" as var;

.level {
  @apply text-white left-11 top-1 text-5xl;
  position: absolute !important;
  text-shadow:
    -5px 0 black,
    5px 0 black,
    0 -5px black,
    0 5px black,
    3px -3px black,
    -3px -3px black,
    3px 3px black,
    -3px 3px black;
  font-size: 36px !important;
  line-height: 48px !important;
  transform: skew(-12.5deg);
}
.star {
  @apply left-2 bottom-1 text-black text-center;
  position: absolute !important;
  font-size: 40px;
  line-height: 65px;
}
.atk-def {
  @apply absolute flex flex-row;
  left: 2px;
  bottom: 4px;
  width: 218px;
  height: 20px;
  transform: skew(-12.5deg);
  div {
    @apply h-full w-1/2;
  }
}
</style>
