<template>
  <v-card v-if="voiceObj">
    <div class="flex flex-row items-center">
      <Bond :level="voiceObj.UnlockFavorRank" scaled :scaledW="60" />
      {{ Local.custom(voiceObj?.LocalizeCVGroup) }}
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
import { Local } from "@/utils/localize";
import { fail } from "@/utils/misc";
import { ReadonlyDeep } from "type-fest";

const props = defineProps({
  voiceObj: {
    type: Object as PropType<ReadonlyDeep<CharacterVoiceExcel>>,
  },
});

const voiceObj = computed(() => {
  if (props.voiceObj != null) return props.voiceObj;
  return undefined;
});
const subtitleObj = computed(() => {
  if (voiceObj.value == null) return undefined;
  return useExcelDbCharacterVoiceSubtitle()
    .value?.unwrapOrElse(fail)
    ?.getResult(voiceObj.value.CharacterVoiceGroupId)
    .unwrapOrElse(fail)
    ?.find((o) => o.LocalizeCVGroup === voiceObj.value!.LocalizeCVGroup);
});
</script>
