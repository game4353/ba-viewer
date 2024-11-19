<template>
  <div class="h-full">
    <Scroll class="mx-6 px-2">
      <StudentList :students />
    </Scroll>
  </div>
</template>

<script setup lang="ts">
import { ProductionStep } from "@/assets/game/types/flatDataExcel";
import { type CCharacter, characterDict } from "@/components/parcel/character";

const students = Object.values(characterDict).filter(
  (v): v is CCharacter =>
    v?.obj.IsPlayableCharacter == true &&
    v?.obj.IsNPC == false &&
    v?.obj.ProductionStep === ProductionStep.Release,
);
</script>
