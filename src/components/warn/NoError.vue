<template>
  <FiveOO v-if="err.error" />
  <slot v-else></slot>
</template>

<script setup lang="ts">
import {
  INJECT_ERR,
  INJECT_ERR_FILTER_UNIQUE,
  err,
  filterUniqueOrError,
  setError,
} from "@/utils/error";
import { provide } from "vue";

provide(INJECT_ERR, setError);
provide(INJECT_ERR_FILTER_UNIQUE, filterUniqueOrError);
</script>
