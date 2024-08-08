<template>
  <EventCard :eid />
</template>

<script setup lang="ts">
const route = useRoute<"/event/[id]/card">();
const eid = Number(route.params.id);
</script>
