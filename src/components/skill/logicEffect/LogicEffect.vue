<template>
  <Loading v-if="obj === undefined" />
  <div v-else>
    <div v-if="obj.ApplyRate < 10000">発動率: {{ obj.ApplyRate / 100 }}%</div>
    <v-chip class="w-fit">Channel: {{ obj.Channel }}</v-chip>

    <DamageEffect v-if="obj?.$type === 'DamageEffect'" :data="obj" />
    <div v-else>{{ obj }}</div>
  </div>
</template>

<script setup lang="ts">
import { ERR_HANDLE } from "@/components/warn/error";
import { useLogicEffect } from ".";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  gid: {
    type: String,
    required: true,
  },
  lv: {
    type: Number,
    required: true,
  },
});

const obj = computed(() =>
  useLogicEffect(props.gid, props.lv).unwrapOrElse(errHandle),
);
</script>
