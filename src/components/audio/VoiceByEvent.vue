<template>
  <v-card
    v-if="(voices ?? []).filter((v) => v).length > 0"
    class="flex flex-col gap-2 pb-3"
    :style="`order: ${event};`"
  >
    <div v-for="(voice, key) of voices ?? []" :key>
      <Voice v-if="voice" :voiceObj="voice" />
    </div>
  </v-card>
</template>

<script lang="ts" setup>
import { VoiceEvent } from "@/assets/game/types/flatDataExcel";
import {
  useExcelDbCharacterVoice,
  useExcelDbVoiceCommon,
} from "@/utils/data/excel/voice";
import { ERR_HANDLE } from "../warn/error";

const props = defineProps({
  event: {
    type: Number as PropType<VoiceEvent>,
    required: true,
  },
  cid: {
    type: Number,
    required: true,
  },
});

const errHandle = inject(ERR_HANDLE)!;

const common = computed(() =>
  useExcelDbVoiceCommon()
    .value?.unwrapOrElse(errHandle)
    ?.getResult(props.event)
    .unwrapOrElse(errHandle),
);
const voices = computed(() => {
  if (common.value == null) return undefined;

  const arr = useExcelDbCharacterVoice()
    .value?.unwrapOrElse(errHandle)
    ?.getResult(props.cid)
    .unwrapOrElse(errHandle);
  if (arr == null) return undefined;

  return common.value.VoiceHash.map((hash) =>
    arr.find((o) => o.VoiceHash === hash),
  );
});
</script>
