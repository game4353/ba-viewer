<template>
  <div class="flex flex-col">
    <Recipe v-for="pid of recipeIds" :pid :key="pid" />
  </div>
</template>

<script setup lang="ts">
import { useExcelRecipe } from "@/utils/data/excel/recipe";
import { fail } from "@/utils/misc";

const recipes = useExcelRecipe();
const recipeIds = computed(() => [
  ...(recipes.value?.unwrapOrElse(fail)?.keys() ?? []),
]);
</script>
