<template>
  <slot v-if="!err.error"></slot>
  <ErrorPage v-else />
</template>

<script setup lang="ts">
import {
  err,
  provideErr404,
  provideErr501,
  provideErrHandle,
  provideErrRead,
} from "./error";

provideErr404();
provideErr501();
provideErrHandle();
provideErrRead();
</script>
