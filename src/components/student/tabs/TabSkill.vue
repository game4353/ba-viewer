<template>
  <div>
    <div v-if="chara" class="flex flex-col gap-1">
      <Skill :cid :skill-no="0" />
      <Skill :cid :skill-no="1" />
      <Skill :cid :skill-no="2" />
      <Skill :cid :skill-no="3" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCharacter } from "~/components/parcel/character/character";
import { ERR_HANDLE } from "~/components/warn/error";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  cid: {
    type: Number,
    required: true,
  },
});

const chara = computed(() =>
  useCharacter(props.cid).value.unwrapOrElse(errHandle),
);
</script>
