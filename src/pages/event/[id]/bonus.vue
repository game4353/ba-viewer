<template>
  <div>
    <EventBonus :eid />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { INJECT_ERR } from "@/utils/error";
import EventBonus from "@/components/event/EventBonus.vue";

const setError = inject(INJECT_ERR)!;

const route = useRoute();
const id = route.params.id;
if (Array.isArray(id)) setError(`Invalid id (${id}) from url.`);
const eid = Number(id);
</script>

<style scoped>
div {
  height: calc(100vh - 100px);
}
</style>
