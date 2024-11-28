<template>
  <slot v-if="!err.error"></slot>
  <ErrorPage v-else />
</template>

<script setup lang="ts">
import {
  err,
  provideAssertEqual,
  provideAssertSole,
  provideAssertSome,
  provideAssertSomeFilter,
  provideAssertUniqueFilter,
  provideAssertUnreachable,
  provideErr404,
  provideErr501,
  provideErrHandle,
  provideErrRead,
} from "./error";

provideErrRead();
provideErr404();
provideErr501();
provideErrHandle();
provideAssertUnreachable();
provideAssertSome();
provideAssertSole();
provideAssertEqual();
provideAssertUniqueFilter();
provideAssertSomeFilter();
</script>
