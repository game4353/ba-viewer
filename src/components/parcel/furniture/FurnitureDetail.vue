<template>
  <div v-if="picked != null">
    <v-card class="mx-auto">
      <template v-slot:title>
        <span class="font-weight-black">{{
          picked.name.value.unwrapOrElse(errHandle) ?? ""
        }}</span>
      </template>
      <template v-slot:prepend>
        <Parcel
          :type="ParcelType.Furniture"
          :pid="picked.id"
          :scaling="{ r: 0.4 }"
        />
      </template>
      <v-card-text class="bg-surface-light !pt-4">
        {{ picked.desc.value.unwrapOrElse(errHandle) ?? "" }}
      </v-card-text>
    </v-card>
    <v-card
      class="border rounded-xl m-4"
      v-if="picked.group.value?.isOk()"
      :title="picked.group.value.unwrap().groupName.unwrapOrElse(errHandle)"
    >
      <v-card-text class="bg-surface-light !pt-4">
        {{ picked.group.value.unwrap().groupDesc.unwrapOrElse(errHandle) }}
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
              <div
                v-for="c in picked.getInteract(tag)"
                :key="c.value.unwrapOr(undefined)"
              >
                <MyCharacter
                  v-if="c.value.isOk()"
                  :cid="c.value.unwrap()"
                  :scaling="{ r: 0.35 }"
                  route
                />
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
import { ERR_HANDLE } from "@/components/warn/error";
import { ObjectKeys } from "@/utils/types";
import { ParcelType } from "~game/types/flatDataExcel";
import { useFurniture } from "./furniture";

const props = defineProps({
  pid: {
    type: Number,
    required: true,
  },
});
const errHandle = inject(ERR_HANDLE)!;

const interactionTypes = {
  Req: "Requires all REQ characters to interact.",
  Add: "Requires all REQ characters to interact.",
  Make: "No restriction.",
  Only: "Only one character in ONLY will interact.",
};

const picked = computed(() =>
  useFurniture(props.pid).value.unwrapOrElse(errHandle),
);
</script>
