<template>
  <EventBox :eid />
</template>

<script setup lang="ts">
const route = useRoute<"/event/[id]/box">();
const eid = Number(route.params.id);
</script>
