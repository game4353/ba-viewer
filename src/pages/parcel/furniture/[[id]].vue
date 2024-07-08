<template>
  <div class="flex flex-row flex-wrap">
    <div class="w-1/2 min-w-[364px]">
      <v-tabs center-active v-model="tab" bg-color="primary" show-arrows>
        <v-tab
          v-for="[key, name] in ObjectEntries(tabs)"
          :key
          :value="key"
          :disabled="name === '??'"
          :text="name"
        />
      </v-tabs>

      <v-tabs-window v-model="tab">
        <v-tabs-window-item
          v-for="key in ObjectKeys(tabs)"
          :key
          :value="key"
          class="flex flex-row flex-wrap gap-y-2 mt-1 max-h-[600px] overflow-auto"
        >
          <div
            v-for="item in furnitureByCategory[key]"
            :key="item.id"
            :class="item.id === picked?.id ? 'selecting' : 'others'"
          >
            <Parcel :pid="item.id" type="Furniture" :scale="0.35" route />
          </div>
        </v-tabs-window-item>
      </v-tabs-window>
    </div>

    <div class="w-1/2">
      <div v-if="picked != null">
        <v-card class="mx-auto">
          <template v-slot:title>
            <span class="font-weight-black">{{ picked.name }}</span>
          </template>
          <template v-slot:prepend>
            <Parcel type="Furniture" :pid="picked.id" :scale="0.4" />
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
        <v-card class="border rounded-xl m-4" title="家具モーション">
          <div class="bg-surface-light pl-4 flex flex-row flex-wrap">
            <v-card-text v-if="picked.getInteract('All').length === 0">
              N/A
            </v-card-text>
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
                    <v-btn class="w-4/5" v-bind="props">{{ tag }}</v-btn>
                  </template>
                </v-tooltip>
              </div>
            </div>
          </div>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ObjectKeys, ObjectEntries, ObjectValues } from "@/types";
import { CFurniture, furnitureDict } from "~/components/parcel/furniture";

const interactionTypes = {
  Req: "Requires all REQ characters to interact.",
  Add: "Requires all REQ characters to interact.",
  Make: "No restriction.",
  Only: "Only one character in ONLY will interact.",
};

const tabs: Record<CFurniture["category"], string> = {
  Furnitures: "家具",
  Decorations: "装飾",
  Interiors: "内装",
};
const furnitureByCategory = Object.groupBy(
  ObjectValues(furnitureDict),
  ({ category }) => category,
);

const route = useRoute<"/parcel/furniture/[[id]]">();
const picked = computed(() => {
  const id = route.params.id ?? "";
  return furnitureDict[id];
});
const tab = ref(picked.value?.category ?? "Furnitures");
watch(picked, (newPicked) => {
  tab.value = newPicked?.category ?? "Furnitures";
});
</script>

<style lang="scss" scoped>
.selecting {
  @apply border-2 border-sky-400;
}
.others {
  margin: 2px;
}
</style>
