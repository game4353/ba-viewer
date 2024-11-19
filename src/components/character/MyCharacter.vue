<template>
  <router-link :to="`/student/${parcel.id}`">
    <Scaled :scale :width="imgW" :height="imgH">
      <v-img class="absolute" :width="imgW" :height="imgH" :src="bg">
        <GameImg
          :path="parcel.iconPath"
          class="absolute top-0 left-0 p-1 w-auto"
        />
        <span class="level" v-if="levelNum! > 0"> Lv.{{ levelNum }} </span>
        <div class="atk-def">
          <div :class="parcel.obj.BulletType"></div>
          <div :class="parcel.obj.ArmorType"></div>
        </div>
        <v-img
          class="star"
          width="64"
          height="64"
          :src="starNum! > 5 ? Icon.Star2 : Icon.Star"
        >
          {{ starNum! > 5 ? starNum! - 5 : starNum }}
        </v-img>
        <v-img
          class="heart"
          v-if="levelNum! > 0"
          width="90"
          height="83"
          :src="Icon.Heart"
        >
          {{ bondNum }}
        </v-img>
      </v-img>
    </Scaled>
  </router-link>
</template>

<script setup lang="ts">
import { useCharaStore } from "@/stores/character";
import { Icon } from "../GameImg/icon";
import Scaled from "../misc/Scaled.vue";
import { getParcel } from "../parcel/parcel";
import { CCharacter } from "../parcel/character";
import { ASSERT_UNREACHABLE } from "../warn/error";
import { ParcelType, Rarity } from "@/assets/game/types/flatDataExcel";

const assertUnreachable = inject(ASSERT_UNREACHABLE)!;

const imgW = 256;
const imgH = 210;

const props = defineProps({
  cid: {
    type: Number,
    required: true,
  },
  scale: Number,
  level: Number,
  star: Number,
  bond: Number,
});
const parcel: CCharacter = getParcel(ParcelType.Character, props.cid) as any;

const chara = useCharaStore(Number(props.cid)).now();
const levelNum = ref(props.level);
watchEffect(() => {
  if (props.level != null) return;
  levelNum.value = chara.lv;
});
const starNum = ref(props.star);
watchEffect(() => {
  if (props.star != null) return;
  starNum.value = levelNum.value === 0 ? parcel.starMin : chara.star;
});
const bondNum = ref(props.bond);
watchEffect(() => {
  if (props.bond != null) return;
  bondNum.value = chara.bond;
});

const bg = computed(() => {
  switch (parcel.rarity) {
    case Rarity.N:
      return Icon.BgN;
    case Rarity.R:
      return Icon.BgR;
    case Rarity.SR:
      return Icon.BgSR;
    case Rarity.SSR:
      return Icon.BgSSR;
    default:
      assertUnreachable(`Unknown rarity ${parcel.rarity}`);
  }
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
.heart {
  @apply right-0 -top-1 text-black text-center;
  position: absolute !important;
  text-shadow:
    -3px 0 white,
    3px 0 white,
    0 -3px white,
    0 3px white,
    1px -1px white,
    -1px -1px white,
    1px 1px white,
    -1px 1px white;
  font-size: 30px;
  line-height: 80px;
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
