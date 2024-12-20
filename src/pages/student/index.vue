<template>
  <Loading v-if="students == null" />
  <div v-else class="flex flex-row h-full">
    <div class="w-[240px] h-full flex-shrink-0">
      <FilterPanel :items="students" :tagGroups />
    </div>
    <div class="h-full">
      <Scroll class="mx-6 px-2">
        <StudentList :students />
      </Scroll>
    </div>
  </div>
</template>

<script setup lang="ts">
import { characterTags } from "@/components/parcel/character/tag";
import { useStudents } from "@/components/student/student";
import { studentTags } from "@/components/student/tag";
import { ERR_HANDLE } from "@/components/warn/error";
const errHandle = inject(ERR_HANDLE)!;

const students = computed(() => useStudents().value.unwrapOrElse(errHandle));

const tagGroups = [
  characterTags.CharacterTagSquadTypeGroup,
  characterTags.CharacterTagBulletTypeGroup,
  characterTags.CharacterTagArmorTypeGroup,
  characterTags.CharacterTagTacticRoleGroup,
  characterTags.CharacterTagTacticRangeGroup,
  characterTags.CharacterTagRarityGroup,
  studentTags.StudentTagRarityGroup,
  characterTags.CharacterTagWeaponTypeGroup,
  characterTags.CharacterTagSchoolGroup,
  characterTags.CharacterTagEquipmentCategoryGroup,
];
</script>
