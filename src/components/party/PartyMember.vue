<template>
  <div v-if="allIds">
    <draggable
      class="flex flex-row gap-1 flex-wrap w-fit min-w-36 min-h-40"
      v-model="charaYes"
      :item-key="(v: number) => v"
      group="chara"
    >
      <template #item="{ element }">
        <div v-on:click.left="() => charaEditing && quickMove(element)">
          <MyCharacterBig
            class="cursor-grab active:cursor-grabbing"
            :cid="element"
            :scaledW="charaWidth"
            detailed
            :no-route="charaEditing"
          />
        </div>
      </template>

      <template #footer>
        <div class="flex flex-row gap-1 flex-wrap">
          <v-btn :width="charaWidth" height="150" @click="toggleEditing">
            <v-icon
              :icon="charaEditing ? 'mdi-plus' : 'mdi-plus-minus-variant'"
              :size="50"
            ></v-icon>
          </v-btn>
        </div>
      </template>
    </draggable>

    <draggable
      class="flex flex-row gap-1 flex-wrap w-fit min-w-36 min-h-40"
      :class="charaEditing ? '' : 'hidden'"
      v-model="charaNo"
      :item-key="(v: number) => v"
      group="chara"
    >
      <template #header>
        <div class="flex flex-row gap-1 flex-wrap">
          <v-btn :width="charaWidth" height="150" @click="toggleEditing">
            <v-icon :icon="'mdi-minus'" :size="50"></v-icon>
          </v-btn>
        </div>
      </template>
      <template #item="{ element }">
        <div v-on:click.left="() => quickMove(element)">
          <MyCharacterBig
            class="cursor-grab active:cursor-grabbing"
            :cid="element"
            :scaledW="charaWidth"
            detailed
            :no-route="charaEditing"
          />
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { usePlayableIds } from "@/components/student/student";
import { ERR_HANDLE } from "@/components/warn/error";
import { dataParty } from "@/stores/party";
import draggable from "vuedraggable";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  pid: {
    type: Number,
    required: true,
  },
});

const allIds = computed(() => usePlayableIds().value.unwrapOrElse(errHandle));
const charaWidth = ref(130);

const party = computed(() => dataParty.use(props.pid));
const charaEditing = ref(false);
function toggleEditing() {
  charaEditing.value = !charaEditing.value;
}
const charaYes = computed({
  get() {
    return party.value.student;
  },
  set(val) {
    party.value.student = val;
  },
});
const charaNo = ref<number[]>();
function quickMove(id: number) {
  if (charaNo.value == null) return;
  const yes = charaYes.value.findIndex((v) => v === id);
  const no = charaNo.value.findIndex((v) => v === id);
  if (yes > -1) {
    charaYes.value.splice(yes, 1);
    charaNo.value.push(id);
  } else if (no > -1) {
    charaNo.value.splice(no, 1);
    charaYes.value.push(id);
  }
}
watch(
  () => props.pid,
  () => {
    charaNo.value = undefined;
    charaEditing.value = false;
  },
);
watch(
  [allIds, charaYes],
  () => {
    if (allIds.value == null) return;
    if (charaYes.value == null) return;
    if (charaNo.value != null) return;
    charaNo.value = allIds.value.filter((v) => !charaYes.value.includes(v));
  },
  { immediate: true },
);
</script>
