<template>
  <div>
    <v-tabs v-model="tab" bg-color="red-darken-4" color="basil" grow>
      <v-tab
        v-for="[key, text] in Object.entries(tabs)"
        :key
        :text
        :value="key"
      ></v-tab>
    </v-tabs>
    <v-tabs-window v-model="tab">
      <v-tabs-window-item value="basic">
        <div v-if="voices" class="flex flex-col gap-1">
          <Voice
            v-for="voice in voices.filter(
              (o) => o.CVCollectionType === CVCollectionType.CVNormal,
            )"
            :key="voice.VoiceHash"
            :voiceObj="voice"
          />
        </div>
      </v-tabs-window-item>
      <v-tabs-window-item value="battle">
        <div v-if="voices" class="flex flex-col gap-1">
          <Voice
            v-for="voice in voices.filter(
              (o) => o.CVCollectionType === CVCollectionType.CVEtc,
            )"
            :key="voice.VoiceHash"
            :voiceObj="voice"
          />
        </div>
      </v-tabs-window-item>
      <v-tabs-window-item value="event">
        <div class="flex flex-col gap-1">
          <VoiceByEvent v-for="event in eventIds" :key="event" :event :cid />
        </div>
      </v-tabs-window-item>
      <v-tabs-window-item value="dialog">
        <div v-if="dialogs" class="flex flex-col gap-1">
          <Dialog
            v-for="dialog in dialogs"
            :key="dialog.VoiceId[0]"
            :dialogObj="dialog"
            :cid
          />
        </div>
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>

<script lang="ts" setup>
import {
  useExcelDbCharacterDialog,
  useExcelDbCharacterVoice,
  useExcelDbVoiceCommon,
} from "@/utils/data/excel/voice";
import { ERR_HANDLE } from "~/components/warn/error";
import { CVCollectionType } from "~game/types/flatDataExcelDb";

const props = defineProps({
  cid: {
    type: Number,
    required: true,
  },
});
const errHandle = inject(ERR_HANDLE)!;

const eventIds = computed(() =>
  Array.from(
    useExcelDbVoiceCommon().value?.unwrapOrElse(errHandle)?.keys() ?? [],
  ),
);
const voices = computed(() =>
  useExcelDbCharacterVoice()
    .value?.andThen((map) => map.getResult(props.cid))
    .unwrapOrElse(errHandle),
);
const dialogs = computed(() =>
  useExcelDbCharacterDialog()
    .value?.andThen((map) => map.getResult(props.cid))
    .unwrapOrElse(errHandle),
);

const tabs = {
  basic: "一般",
  battle: "戦闘",
  event: "event",
  dialog: "dialog",
};
const tab = ref("basic");
</script>
