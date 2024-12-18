<template>
  <v-card v-if="voiceObj">
    <div class="flex flex-row items-center h-16">
      <Bond :level="voiceObj.UnlockFavorRank" :scaling="{ w: 40 }" />
      <p class="mx-2">{{ localize(voiceObj?.LocalizeCVGroup) }}</p>
      <div class="grow"></div>
      <MusicPlayer :path="voiceObj.Path[0]" />
    </div>
    <div v-if="subtitleObj">
      {{ subtitleObj.LocalizeJP }}
    </div>
  </v-card>
</template>

<script lang="ts" setup>
import { CharacterVoiceExcel } from "@/assets/game/types/flatDataExcelDb";
import { useExcelDbCharacterVoiceSubtitle } from "@/utils/data/excel/voice";
import localize from "@/utils/i18n/custom/CVGroup";
import { ReadonlyDeep } from "type-fest";
import { ERR_HANDLE } from "../warn/error";

const props = defineProps({
  voiceObj: {
    type: Object as PropType<ReadonlyDeep<CharacterVoiceExcel>>,
  },
});

const errHandle = inject(ERR_HANDLE)!;

const voiceObj = computed(() => {
  if (props.voiceObj != null) return props.voiceObj;
  return undefined;
});
const subtitleObj = computed(() => {
  if (voiceObj.value == null) return undefined;
  return useExcelDbCharacterVoiceSubtitle()
    .value?.unwrapOrElse(errHandle)
    ?.getResult(voiceObj.value.CharacterVoiceGroupId)
    .unwrapOrElse(errHandle)
    ?.find((o) => o.LocalizeCVGroup === voiceObj.value!.LocalizeCVGroup);
});
</script>
