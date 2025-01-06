<template>
  <StageReward v-if="groupId" :rid="groupId" type="module" />
</template>

<script setup lang="ts">
import { ERR_501 } from "../warn/error";
const error501 = inject(ERR_501)!;

const props = defineProps({
  stageId: {
    type: Number,
    required: true,
  },
});

const groupId = computed(() => {
  switch (props.stageId) {
    case 31101:
      return 1699135692;
    case 31102:
      return 3485155052;
    case 31103:
      return 1688928395;
    case 31104:
      return 21190413;
    case 31105:
      return 29510467;
    case 31106:
      return 3610473423;
    case 31107:
      return 1372438453;
    case 31108:
      return 2587047723;
    case 31109:
      return 2271403252;
    case 31110:
      return 2934645346;
    case 31111:
      return 1616199885;
    case 31112:
      return 1536500265;
    case 31113:
      return 282876802;
    default:
      error501(`Module reward (stageId: ${props.stageId})`);
  }
});
</script>
