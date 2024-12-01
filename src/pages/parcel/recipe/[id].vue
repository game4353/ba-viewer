<template>
  <div class="flex flex-col">
    <Recipe v-for="pid of recipeIds" :pid :key="pid" />
  </div>
</template>

<script setup lang="ts">
import { ERR_HANDLE } from "@/components/warn/error";
import { useExcelRecipe } from "@/utils/data/excel/recipe";
const errHandle = inject(ERR_HANDLE)!;

const recipes = useExcelRecipe();
const recipeIds = computed(() => [
  ...(recipes.value?.unwrapOrElse(errHandle)?.keys() ?? []),
]);
</script>
