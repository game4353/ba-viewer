<template>
  <Scaled class="w-full" :width="174" :height="158" :scaling>
    <div class="hexagon" :class="color">
      <GameImg class="absolute" :path="skill.iconPath" v />
    </div>
    <div class="circle" v-if="plus" :class="color"></div>
  </Scaled>
</template>

<script setup lang="ts">
import { BulletType } from "@/assets/game/types/flatDataExcel";
import { ScaleOption } from "../misc/scale";
import { CSkill } from "./skill";

const props = defineProps({
  skill: {
    type: Object as PropType<CSkill>,
    required: true,
  },
  scaling: Object as PropType<ScaleOption>,
});

const color = computed(() => BulletType[props.skill.obj.BulletType]);
const plus = computed(() =>
  /GearPublic|WeaponPassive/.test(props.skill.obj.GroupId),
);
</script>

<style scoped lang="scss">
.hexagon {
  position: relative;
  width: 135px;
  aspect-ratio: cos(30deg);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    object-fit: cover;
  }
}
.circle {
  position: absolute;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  top: 10px;
  left: 115px;
  text-align: center;
  font-size: 36px;
  line-height: 40px;
  border: black 6px solid;
  &:after {
    display: inline-block;
    content: "✚";
  }
}
</style>
