<template>
  <v-row class="flex flex-row gap-2" v-if="info && stats" no-gutters>
    <v-col cols="4">
      <v-sheet :color>
        {{ info.name.unwrapOrElse(errHandle) }}
      </v-sheet>
    </v-col>
    <v-col cols="2">
      <v-sheet class="text-right" :color>
        {{ stats.getValue().value.unwrapOrElse(errHandle) }}
      </v-sheet>
    </v-col>
    <v-col cols="2">
      <v-sheet class="text-right" :color>
        {{ "-" }}
      </v-sheet>
    </v-col>
    <v-col cols="2">
      <v-sheet class="text-right" :color>
        {{ "-" }}
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { StatType } from "@/assets/game/types/flatDataExcel";
import { useCharacter } from "@/components/parcel/character/character";
import { statRows } from "@/components/student/stat";
import { ERR_HANDLE } from "@/components/warn/error";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  cid: {
    type: Number,
    required: true,
  },
  type: {
    type: Number as PropType<StatType>,
    required: true,
  },
  lv: {
    type: Number,
    required: true,
  },
  color: String,
});

const info = computed(() => statRows.find((o) => o.type === props.type));
const chara = computed(() =>
  useCharacter(props.cid).value.unwrapOrElse(errHandle),
);
const stats = computed(() =>
  chara.value
    ?.baseStats()
    .getResult(props.type)
    .unwrapOrElse(errHandle)
    ?.unwrapOrElse(errHandle),
);
</script>
