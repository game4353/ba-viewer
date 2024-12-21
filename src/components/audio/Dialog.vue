<template>
  <v-card v-if="dialogObj">
    <div class="flex flex-row items-center h-16">
      <Bond :level="dialogObj.UnlockFavorRank" :scaling="{ w: 40 }" />
      {{ DialogCategory[dialogObj.DialogCategory] }}
      {{ DialogCondition[dialogObj.DialogCondition] }}
      {{ Anniversary[dialogObj.Anniversary] }}
      <div class="grow"></div>
      <div v-for="voiceObj in voiceObjs" :key="voiceObj?.Id">
        <MusicPlayer v-if="voiceObj" :path="voiceObj.Path[0]" />
      </div>
    </div>
    <div class="m-1" v-if="subtitleObj">
      {{ subtitleObj.LocalizeJP }}
    </div>
    <div class="m-1" v-else-if="dialogObj.LocalizeJP">
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
import { ReadonlyDeep } from "type-fest";
import { ERR_HANDLE } from "../warn/error";

const props = defineProps({
  dialogObj: {
    type: Object as PropType<ReadonlyDeep<CharacterDialogExcel>>,
    required: true,
  },
});

const errHandle = inject(ERR_HANDLE)!;

const dialogObj = computed(() => {
  if (props.dialogObj != null) return props.dialogObj;
  return undefined;
});
const subtitleObj = computed(() => {
  if (dialogObj.value == null) return undefined;
  return useExcelDbCharacterDialogSubtitle()
    .value?.andThen((map) => map.getResult(dialogObj.value!.CharacterId))
    .map((arr) =>
      arr.find((o) => o.LocalizeCVGroup === dialogObj.value!.LocalizeCVGroup),
    )
    .unwrapOrElse(errHandle);
});
const voiceObjs = computed(() => {
  const voiceIds = dialogObj.value?.VoiceId ?? [];
  const map = useExcelDbVoice().value?.unwrapOrElse(errHandle);
  if (map == null) return [];
  return voiceIds.map((id) => map.getResult(id).unwrapOrElse(errHandle));
});
</script>

<!-- ExcelDB/MemoryLobby -> BGMId -->
