<template>
  <EventShop :eid />
</template>

<script setup lang="ts">
const route = useRoute<"/event/[id]/shop">();
const eid = Number(route.params.id);
</script>
