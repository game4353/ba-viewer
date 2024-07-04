<template>
  <router-link :to="`/student/${parcel.id}`">
    <Scaled :scale :width="imgW" :height="imgH">
      <v-img class="absolute" :width="imgW" :height="imgH" :src="bg">
        <GameImg
          :path="parcel.iconPath"
          class="absolute top-0 left-0 p-1 w-auto"
        />
        <span class="level" v-if="levelNum > 0"> Lv.{{ levelNum }} </span>
        <div class="atk-def">
          <div :class="parcel.obj.BulletType"></div>
          <div :class="parcel.obj.ArmorType"></div>
        </div>
        <v-img
          class="star"
          v-if="starNum > 0"
          width="64"
          height="64"
          :src="starNum > 5 ? Icon.Star2 : Icon.Star"
        >
          {{ starNum > 5 ? starNum - 5 : starNum }}
        </v-img>
      </v-img>
    </Scaled>
  </router-link>
</template>

<script setup lang="ts">
import { CharaData, useCharaStore } from "@/stores/character";
import { Icon } from "../GameImg/icon";
import Scaled from "../misc/Scaled.vue";
import { getParcel } from "../parcel/parcel";
import { CCharacter } from "../parcel/character";
import { ASSERT_UNREACHABLE } from "../warn/error";

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
});

const chara = CharaData.fromObj(useCharaStore(Number(props.cid)).now());
const levelNum = computed(() => props.level ?? chara.lv ?? 0);
const starNum = computed(() => props.star ?? chara.star ?? 0);

const parcel: CCharacter = getParcel("Character", props.cid) as any;
const bg = computed(() => {
  switch (parcel.rarity) {
    case "N":
      return Icon.BgN;
    case "R":
      return Icon.BgR;
    case "SR":
      return Icon.BgSR;
    case "SSR":
      return Icon.BgSSR;
    default:
      assertUnreachable(`Unknown rarity ${parcel.rarity}`);
  }
});
</script>

<style scoped lang="scss">
@use "@/styles/variables" as var;

.level {
  @apply text-white absolute left-11 top-1 text-5xl;
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
.Explosion,
.LightArmor {
  background-color: var.$color-explosion;
}
.Pierce,
.HeavyArmor {
  background-color: var.$color-pierce;
}
.Mystic,
.Unarmed {
  background-color: var.$color-mystic;
}
.Sonic,
.ElasticArmor {
  background-color: var.$color-sonic;
}
// .Normal{}
// .None, .Structure {}
// .Siege{}
</style>
