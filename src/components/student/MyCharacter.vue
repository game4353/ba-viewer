<template>
  <Loading v-if="student == null" />
  <component
    :is="noRoute ? 'span' : 'router-link'"
    v-else
    :to="`/student/${student.id}`"
  >
    <Scaled :scaling :width="imgW" :height="imgH">
      <v-img
        class="absolute"
        :class="dark ? 'opacity-25' : gray ? 'opacity-75' : ''"
        :width="imgW"
        :height="imgH"
        :src="bg"
      >
        <GameImg
          :path="student.iconPath"
          class="absolute top-2 left-2"
          :width="240"
          v
        />
        <span class="level" v-if="levelNum! > 0"> Lv.{{ levelNum }} </span>
        <div class="atk-def">
          <div :class="student.bulletType"></div>
          <div :class="student.armorType"></div>
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
import { useStudent } from "@/components/student/student";
import { Icon, rarityBgIcon } from "../GameImg/icon";
import { ScaleOption } from "../misc/scale";
import { ERR_HANDLE } from "../warn/error";
const errHandle = inject(ERR_HANDLE)!;

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
  dark: Boolean,
  noRoute: Boolean,
});
const student = computed(() =>
  useStudent(props.cid).value.unwrapOrElse(errHandle),
);

const levelNum = computed(() => props.level ?? student.value?.statNow.lv);
const starNum = computed(() => {
  if (props.star != null) return props.star;
  const starMin = student.value?.starMin ?? 0;
  return levelNum.value === 0 ? starMin : student.value?.statNow.star;
});
const bondNum = computed(() => props.bond ?? student.value?.statNow.bond);

const bg = computed(() => {
  if (student.value == null) return;
  return rarityBgIcon(student.value.rarity);
});

const dark = computed(() => props.dark && student.value?.statNow.lv === 0);
const gray = computed(
  () => props.dark && (student.value?.statNow.star ?? 0) < (props.star ?? 0),
);
</script>

<style scoped lang="scss">
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
