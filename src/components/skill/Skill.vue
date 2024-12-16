<template>
  <Loading v-if="skill == null" />
  <div v-else>
    <v-card>
      <template v-slot:prepend>
        <SkillIcon :skill :scaling="{ h: 60 }" />
      </template>

      <template v-slot:title>
        <RichText class="font-weight-black" :text="skill.name" />
        <v-card-subtitle>
          <div class="flex flex-row gap-2 items-stretch">
            <div class="flex flex-col">
              <div class="flex flex-row grow gap-2 justify-center items-center">
                <span class="text-sm">Lv.{{ lvVal }}</span>
                <span class="text-sm" v-if="cost"> cost {{ cost }} </span>
              </div>
              <div class="flex flex-row grow items-center" v-if="lvNG">
                <span class="text-sm">Lv.{{ lvNG[0] }} → Lv.{{ lvNG[1] }}</span>
              </div>
            </div>
            <div class="flex flex-col grow px-2">
              <v-slider
                v-if="lvLimit"
                v-model="lvVal"
                :min="lvLimit[0]"
                :max="lvLimit[1]"
                show-ticks="always"
                step="1"
                tick-size="4"
                hide-details
              ></v-slider>
              <v-range-slider
                v-if="lvLimit && lvNG"
                v-model="lvNG"
                :min="lvLimit[0]"
                :max="lvLimit[1]"
                show-ticks="always"
                step="1"
                tick-size="4"
                hide-details
              ></v-range-slider>
            </div>
          </div>
        </v-card-subtitle>
      </template>

      <v-card-text class="bg-surface-light !pt-4">
        <div class="flex flex-col gap-2">
          <RichText :text="skill.desc" />
          <template v-if="layout === 'full' && group">
            <v-divider></v-divider>
            <LevelSkillData :group />
          </template>
        </div>
      </v-card-text>
    </v-card>

    <div></div>
  </div>
</template>

<script setup lang="ts">
import { useStudent } from "../student/student";
import { ERR_HANDLE } from "../warn/error";
import { useSkill, useSkillLvs } from "./skill";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  cid: Number,
  skillNo: Number as PropType<0 | 1 | 2 | 3>,
  group: String,
  layout: String as PropType<"default" | "full">,
  normalAttack: Boolean,
});
const layout = props.layout ?? "default";

const student = computed(() =>
  props.cid ? useStudent(props.cid).value.unwrapOrElse(errHandle) : undefined,
);

const lvNG = computed({
  get() {
    if (student.value == null) return undefined;
    if (props.skillNo == null) return undefined;
    const key = `skill${props.skillNo}` as const;
    return [student.value.statNow[key], student.value.statGoal[key]];
  },
  set(arr?: number[]) {
    if (!Array.isArray(arr)) return;
    if (student.value == null) return;
    if (props.skillNo == null) return;
    const key = `skill${props.skillNo}` as const;
    student.value.statNow[key] = arr[0];
    student.value.statGoal[key] = arr[1];
  },
});
const lvVal = ref(lvNG.value?.[0] ?? 1);

const skill = computed(() => {
  if (props.group != null)
    return useSkill(props.group, lvVal.value).value.unwrapOrElse(errHandle);
  if (props.skillNo != null && student.value != null)
    return student.value
      .getSkill(props.skillNo, lvVal.value)
      .unwrapOrElse(errHandle);
  return undefined;
});
const cost = computed(() => skill.value?.obj.SkillCost);
const lvLimit = computed(() => {
  if (skill.value == null) return undefined;
  if (props.skillNo === 0) return [1, 5];
  return useSkillLvs(skill.value.obj.GroupId).value.unwrapOrElse(errHandle);
});
</script>
