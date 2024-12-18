<template>
  <v-expansion-panel>
    <v-expansion-panel-title>
      SKILL
      <div class="flex flex-row w-full justify-evenly" v-if="skills">
        <SkillIcon
          v-for="skill in skills"
          :key="skill.id"
          :skill
          :scaling="{ w: 64 }"
        />
      </div>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <Slider name="EX" keys="skill0" :cid />
      <Slider name="skill1" keys="skill1" :cid />
      <Slider name="skill2" keys="skill2" :cid />
      <Slider name="skill3" keys="skill3" :cid />
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script setup lang="ts">
import { useStudent } from "@/components/student/student";
import { Result } from "@/utils/result";
import { ERR_HANDLE } from "~/components/warn/error";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  cid: {
    type: Number,
    required: true,
  },
});

const student = computed(() =>
  useStudent(props.cid).value.unwrapOrElse(errHandle),
);
const skills = computed(() => {
  if (student.value == null) return student.value;
  return Result.all(
    ([0, 1, 2, 3] as const).map((v) => student.value!.getSkill(v)),
  ).unwrapOrElse(errHandle);
});
</script>
