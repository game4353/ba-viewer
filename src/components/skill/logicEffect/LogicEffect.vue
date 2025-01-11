<template>
  <Loading v-if="obj === undefined" />
  <div v-else>
    <div class="flex flex-row gap-2">
      <p class="text-base">
        効果<span v-if="idx != null">{{ idx + 1 }}</span
        >.
      </p>
      <Info>
        <p v-for="(str, key) in base?.info" :key>{{ str }}</p>
      </Info>
    </div>

    <component
      v-if="obj.$type in doneEffects"
      :is="obj.$type"
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
import { doneEffects } from "./schema";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  gid: {
    type: String,
    required: true,
  },
  idx: {
    type: Number,
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
