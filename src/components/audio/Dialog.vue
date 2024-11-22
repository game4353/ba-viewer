<template>
  <v-card v-if="dialogObj">
    <div class="flex flex-row items-center">
      <Bond :level="dialogObj.UnlockFavorRank" scaled :scaledW="60" />
      {{ DialogCategory[dialogObj.DialogCategory] }}
      {{ DialogCondition[dialogObj.DialogCondition] }}
      {{ Anniversary[dialogObj.Anniversary] }}
      <div class="grow"></div>
      <div v-for="voiceObj in voiceObjs" :key="voiceObj?.Id">
        <MusicPlayer v-if="voiceObj" :path="voiceObj.Path[0]" />
      </div>
    </div>
    <div v-if="subtitleObj">
      {{ subtitleObj.LocalizeJP }}
    </div>
    <div v-else-if="dialogObj.LocalizeJP">
      {{ dialogObj.LocalizeJP }}
    </div>
  </v-card>
</template>

<script lang="ts" setup>
import {
  Anniversary,
  CharacterDialogExcel,
  DialogCategory,
  DialogCondition,
} from "@/assets/game/types/flatDataExcelDb";
import {
  useExcelDbCharacterDialogSubtitle,
  useExcelDbVoice,
} from "@/utils/data/excel/voice";
import { fail } from "@/utils/misc";
import { ReadonlyDeep } from "type-fest";
import { PropType } from "vue";

const props = defineProps({
  dialogObj: {
    type: Object as PropType<ReadonlyDeep<CharacterDialogExcel>>,
  },
});

const dialogObj = computed(() => {
  if (props.dialogObj != null) return props.dialogObj;
  return undefined;
});
const subtitleObj = computed(() => {
  if (dialogObj.value == null) return undefined;
  return useExcelDbCharacterDialogSubtitle()
    .value?.unwrapOrElse(fail)
    ?.getResult(dialogObj.value.CharacterId)
    .unwrapOrElse(fail)
    ?.find((o) => o.LocalizeCVGroup === dialogObj.value!.LocalizeCVGroup);
});
const voiceObjs = computed(() => {
  const voiceIds = dialogObj.value?.VoiceId ?? [];
  const map = useExcelDbVoice().value?.unwrapOrElse(fail);
  if (map == null) return [];
  return voiceIds.map((id) => map.getResult(id).unwrapOrElse(fail));
});
</script>

<!-- ExcelDB/MemoryLobby -> BGMId -->
