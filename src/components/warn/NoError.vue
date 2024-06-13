<template>
  <slot v-if="!err.error"></slot>
  <FiveOOne v-else-if="err.code === 501">{{ err.display }}</FiveOOne>
  <FourOFour v-else-if="err.code === 404">{{ err.display }}</FourOFour>
  <FiveOO v-else />
</template>

<script setup lang="ts">
import {
  err,
  provideAssertEqual,
  provideAssertSole,
  provideAssertSome,
  provideAssertUniqueFilter,
  provideAssertUnreachable,
} from "./error";

provideAssertUnreachable();
provideAssertSome();
provideAssertSole();
provideAssertEqual();
provideAssertUniqueFilter();
</script>
