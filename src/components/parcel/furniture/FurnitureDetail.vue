<template>
  <div v-if="picked != null">
    <v-card class="mx-auto">
      <template v-slot:title>
        <span class="font-weight-black">{{ picked.name }}</span>
      </template>
      <template v-slot:prepend>
        <Parcel :type="ParcelType.Furniture" :pid="picked.id" :scale="0.4" />
      </template>
      <v-card-text class="bg-surface-light pt-4">
        {{ picked.desc }}
      </v-card-text>
    </v-card>
    <v-card
      class="border rounded-xl m-4"
      v-if="picked.group != null"
      :title="picked.group.groupName"
    >
      <v-card-text class="bg-surface-light pt-4">
        {{ picked.group.groupDesc }}
      </v-card-text>
    </v-card>
    <v-card
      class="border rounded-xl m-4"
      v-if="picked.isInteractive"
      title="家具モーション"
    >
      <div class="bg-surface-light pl-4 flex flex-row flex-wrap">
        <div v-for="tag in ObjectKeys(interactionTypes)" :key="tag">
          <div
            v-if="picked.getInteract(tag).length > 0"
            class="flex flex-col w-min gap-2 items-center py-4"
          >
            <div class="flex flex-row">
              <div v-for="c in picked.getInteract(tag)" :key="c">
                <MyCharacter :cid="c" :scale="0.35" />
              </div>
            </div>
            <v-tooltip :text="interactionTypes[tag]">
              <template v-slot:activator="{ props }">
                <v-btn class="w-4/5" v-bind="props">
                  {{ tag }}
                </v-btn>
              </template>
            </v-tooltip>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ObjectKeys } from "@/types";
import { furnitureDict } from "./furniture";
import { ParcelType } from "~game/types/flatDataExcel";

const props = defineProps({
  pid: {
    type: [String, Number],
    required: true,
  },
});

const interactionTypes = {
  Req: "Requires all REQ characters to interact.",
  Add: "Requires all REQ characters to interact.",
  Make: "No restriction.",
  Only: "Only one character in ONLY will interact.",
};

const picked = computed(() => {
  return furnitureDict[props.pid];
});
</script>
