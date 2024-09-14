<template>
  <div>
    <EventBonus :eid />
  </div>
</template>

<script setup lang="ts">
import EventBonus from "@/components/event/EventBonus.vue";

const route = useRoute<"/event/[id]/bonus">();
const eid = Number(route.params.id);
</script>

<style scoped>
div {
  height: calc(100vh - 100px);
}
</style>
