<template>
  <v-tooltip location="top">
    <template v-slot:activator="{ props }">
      <v-icon :color :icon :size v-bind="props" />
    </template>
    <slot></slot>
  </v-tooltip>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String as PropType<"?" | "!" | "i">,
  },
  size: [String, Number],
  color: String,
});

const icon = computed(() => {
  switch (props.type) {
    case "?":
      return "mdi-help-circle";
    case "!":
      return "mdi-alert-circle";
    case "i":
    default:
      return "mdi-information-variant-circle";
  }
});
</script>
