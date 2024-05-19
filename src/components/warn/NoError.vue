<template>
  <FiveOO v-if="err.error" />
  <slot v-else></slot>
</template>

<script setup lang="ts">
import { INJECT_ERR, err, setError } from "@/utils/error";
import { provide } from "vue";

provide(INJECT_ERR, setError);
</script>
