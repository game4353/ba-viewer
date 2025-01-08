<template>
  <Loading v-if="obj === undefined" />
  <div v-else>
    <Info>
      <p v-for="(str, key) in base?.info" :key>{{ str }}</p>
    </Info>

    <!-- 17 -->
    <DamageEffect v-if="obj.$type === 'DamageEffect'" :data="obj" ref="base" />
    <!-- 59 -->
    <StatChangeEffect
      v-else-if="obj.$type === 'StatChangeEffect'"
      :data="obj"
      ref="base"
    />
    <div v-else>
      <div>"{{ obj.$type }}" is not done yet.</div>
    </div>
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
const base = ref();
</script>
