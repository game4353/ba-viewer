<template>
  <router-link :to="`/student/${parcel.id}`">
    <Scaled :scale :scaled-w :scaled-h :scale-type :width="imgW" :height="imgH">
      <v-img
        class="absolute"
        :width="imgW"
        :height="imgH"
        :src="bg"
        :lazy-src="loading"
      >
        <template v-slot:placeholder>
          <div class="d-flex align-center justify-center fill-height">
            <v-progress-circular
              color="grey-lighten-4"
              indeterminate
            ></v-progress-circular>
          </div>
        </template>
        <span class="level" v-if="levelNum! > 0"> Lv.{{ levelNum }} </span>
        <div class="atk-def">
          <div :class="parcel.obj.BulletType"></div>
          <div :class="parcel.obj.ArmorType"></div>
        </div>
        <div class="name">
          <p :class="textSize(parcel.name)">
            {{ parcel.name }}
          </p>
        </div>
        <v-img
          class="star"
          width="96"
          height="96"
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
        <div class="skills">
          <span v-for="(skill, key) in skillTexts" :key>
            {{ skill }}
          </span>
        </div>
        <div class="gears">
          <span v-for="(gear, key) in gearTexts" :key>
            {{ gear }}
          </span>
        </div>
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
import { uiPath } from "../GameImg/loader";

const imgW = 404;
const imgH = 456;

const props = defineProps({
  cid: {
    type: Number,
    required: true,
  },
  scale: Number,
  scaledW: Number,
  scaledH: Number,
  scaleType: String as PropType<"min" | "max">,
  level: Number,
  star: Number,
  bond: Number,
});
const parcel: CCharacter = getParcel("Character", props.cid) as any;

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
function skillStr(val: number, max: number) {
  if (val === max) return "M";
  return val.toString();
}
const skillTexts = ref(["0", "0", "0", "0"]);
watchEffect(() => {
  skillTexts.value[0] = skillStr(chara.skill0, 5);
  skillTexts.value[1] = skillStr(chara.skill1, 10);
  skillTexts.value[2] = skillStr(chara.skill2, 10);
  skillTexts.value[3] = skillStr(chara.skill3, 10);
});
const gearTexts = ref(["0", "0", "0", "0"]);
watchEffect(() => {
  gearTexts.value[0] = chara.gear1.toString();
  gearTexts.value[1] = chara.gear2.toString();
  gearTexts.value[2] = chara.gear3.toString();
  gearTexts.value[3] = chara.gear0.toString();
  if (parcel.gear == null) gearTexts.value[3] = "";
});

const bg = computed(() => uiPath(parcel.costume.CollectionTexturePath));
const folder = "/src/assets/game/UIs/01_Common/14_CharacterCollect/";
const arona = folder + "NPC_Portrait_Arona_Collection.png";
const plana = folder + "NPC_Portrait_NP0035_Collection.png";
const loading = Math.random() < 0.5 ? arona : plana;

function textSize(text: string) {
  const l = text.length;
  if (l < 7) return "big";
  if (l > 10) return "small";
  return "len" + l;
}
</script>

<style scoped lang="scss">
@use "@/styles/variables" as var;

.level {
  @apply text-white right-2;
  position: absolute;
  text-shadow:
    -5px 0 black,
    5px 0 black,
    0 -5px black,
    0 5px black,
    3px -3px black,
    -3px -3px black,
    3px 3px black,
    -3px 3px black;
  font-size: 48px;
}
.star {
  @apply left-2 top-0 text-black text-center;
  position: absolute !important;
  font-size: 56px;
  line-height: 100px;
}
.heart {
  @apply left-0 top-24 text-black text-center;
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

.skills {
  @apply absolute flex flex-row bottom-20 text-4xl w-36 bg-slate-800/85;
  border: black 1px solid !important;
  span {
    @apply flex-1 text-center;
  }
}
.gears {
  @extend .skills;
  @apply right-0;
}

.atk-def {
  @apply absolute flex flex-row w-full opacity-85 bottom-0 h-20;
  div {
    @apply h-full w-1/2;
  }
}
.name {
  @apply absolute bottom-0 w-full h-20 text-center;
  p {
    line-height: 78px;
  }
}
.small {
  font-size: 34px;
}
.len10 {
  font-size: 36px;
}
.len9 {
  font-size: 40px;
}
.len8 {
  font-size: 44px;
}
.len7 {
  font-size: 52px;
}
.big {
  font-size: 56px;
}
</style>
