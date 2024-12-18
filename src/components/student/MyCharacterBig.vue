<template>
  <router-link v-if="student" :to="noRoute ? '' : `/student/${student.id}`">
    <Scaled :scaling :width="imgW" :height="imgH">
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
        <span class="level" v-if="levelNum > 0"> Lv.{{ levelNum }} </span>
        <span
          class="level top-16 opacity-60"
          v-if="detailed && goal.lv > levelNum"
        >
          Lv.{{ goal.lv }}
        </span>
        <div class="atk-def">
          <div :class="student.bulletType"></div>
          <div :class="student.armorType"></div>
        </div>
        <div class="name">
          <p :class="textSize(name)">
            {{ name }}
          </p>
        </div>
        <Star class="!absolute left-2 top-0" :star="starNum!" />
        <Star
          class="!absolute left-28 top-0 opacity-60"
          v-if="detailed && goal.star > starNum!"
          :star="goal.star"
        />
        <Bond
          class="!absolute left-0 top-24"
          v-if="levelNum! > 0"
          :level="bondNum"
        />
        <Bond
          class="!absolute left-0 top-44 opacity-60"
          v-if="detailed && goal.bond > bondNum"
          :level="goal.bond"
        />
        <div class="skills detail" v-if="detailed">
          <span v-for="i in [0, 1, 2, 3] as const" :key="i">
            {{ goalSkillStr(i) }}
          </span>
        </div>
        <div class="skills">
          <span v-for="(skill, key) in skillTexts" :key>
            {{ skill }}
          </span>
        </div>
        <div class="gears detail" v-if="detailed">
          <span v-for="i in [1, 2, 3, 0] as const" :key="i">
            {{ goalGearStr(i) }}
          </span>
        </div>
        <div class="gears">
          <span v-for="(gear, key) in gearTexts" :key>
            {{ gear }}
          </span>
        </div>
        <div
          class="break detail"
          v-if="
            detailed &&
            (goal.break1 > chara.break1 ||
              goal.break2 > chara.break2 ||
              goal.break3 > chara.break3)
          "
        >
          <span> {{ goal.break1 > chara.break1 ? goal.break1 : "　" }} </span>
          <span> {{ goal.break2 > chara.break2 ? goal.break2 : "　" }} </span>
          <span> {{ goal.break3 > chara.break3 ? goal.break3 : "　" }} </span>
        </div>
        <div class="break">
          <span> {{ chara.break1 }} </span>
          <span> {{ chara.break2 }} </span>
          <span> {{ chara.break3 }} </span>
        </div>
      </v-img>
    </Scaled>
  </router-link>
</template>

<script setup lang="ts">
import { useStudent } from "@/components/student/student";
import { dataStudentGoal, dataStudentNow } from "@/stores/student";
import { uiPath } from "../GameImg/loader";
import { ScaleOption } from "../misc/scale";
import { ERR_HANDLE } from "../warn/error";

const imgW = 404;
const imgH = 456;

const props = defineProps({
  cid: {
    type: Number,
    required: true,
  },
  noRoute: Boolean,
  detailed: Boolean,
  scaling: Object as PropType<ScaleOption>,
  level: Number,
  star: Number,
  bond: Number,
});
const errHandle = inject(ERR_HANDLE)!;

const student = computed(() =>
  useStudent(props.cid).value.unwrapOrElse(errHandle),
);

const name = computed(
  () => student.value?.name.value?.unwrapOrElse(errHandle) ?? "",
);
const chara = dataStudentNow.use(props.cid);
const goal = dataStudentGoal.use(props.cid);
const levelNum = computed(() => props.level ?? chara.lv);
const starNum = ref(props.star);
watchEffect(() => {
  if (props.star != null) return;
  if (student.value == null) return;
  starNum.value = levelNum.value === 0 ? student.value.starMin : chara.star;
});
const bondNum = computed(() => props.bond ?? chara.bond);

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
function goalSkillStr(idx: 0 | 1 | 2 | 3) {
  const s = chara[`skill${idx}`];
  const g = goal[`skill${idx}`];
  if (s < g) return skillStr(g, idx < 1 ? 5 : 10);
  return "";
}

const gearTexts = ref(["0", "0", "0", "0"]);
watchEffect(() => {
  gearTexts.value[0] = chara.gear1.toString();
  gearTexts.value[1] = chara.gear2.toString();
  gearTexts.value[2] = chara.gear3.toString();
  gearTexts.value[3] = chara.gear0.toString();
  if (student.value?.gear.value.unwrapOrElse(errHandle) == null)
    gearTexts.value[3] = "";
});
function goalGearStr(idx: 0 | 1 | 2 | 3) {
  if (idx === 0 && gearTexts.value[3] === "") return "";
  const s = chara[`gear${idx}`];
  const g = goal[`gear${idx}`];
  if (s < g) return g;
  return "";
}

const bg = computed(() => {
  const costume = student.value?.costume;
  if (costume == null) return undefined;
  return uiPath(costume.CollectionTexturePath);
});
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

.skills {
  @apply absolute flex flex-row bottom-20 text-4xl w-36 bg-slate-800/85;
  border: black 1px solid !important;
  span {
    @apply flex-1 text-center;
  }
  &.detail {
    @apply bottom-32 opacity-70;
  }
}
.gears {
  @extend .skills;
  @apply right-0;
}
.break {
  @extend .gears;
  @apply flex-col bottom-48 w-16;
  &.detail {
    @apply bottom-48 right-16;
  }
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
