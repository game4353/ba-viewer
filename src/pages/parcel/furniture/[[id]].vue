<template>
  <div class="flex flex-row flex-wrap">
    <div class="w-1/2 min-w-[364px]">
      <v-data-iterator
        class="flex flex-row flex-wrap gap-y-2 mt-1 overflow-auto"
        :items="filteredItems"
        :items-per-page="30"
        :page="currPage"
      >
        <template v-slot:header>
          <v-toolbar class="px-2">
            <v-text-field
              v-model="search"
              density="comfortable"
              placeholder="Search"
              prepend-inner-icon="mdi-magnify"
              style="max-width: 300px"
              variant="solo"
              clearable
              hide-details
            ></v-text-field>
          </v-toolbar>

          <div>
            <v-chip-group
              v-for="(tagGroup, i) in furnitureTags"
              :key="i"
              column
              multiple
              v-model="tags[i]"
              @update:modelValue="
                (v: number[]) => {
                  tagGroup.setPicked(v);
                  fire = !fire;
                }
              "
            >
              <v-chip
                v-for="tag in tagGroup.tags"
                :key="tag.value"
                :text="tag.display"
                selected-class="filtering"
              ></v-chip>
            </v-chip-group>
          </div>
        </template>

        <template v-slot:default="{ items }">
          <div class="flex flex-row flex-wrap">
            <div
              :class="item.raw.id === pid ? 'selecting' : 'others'"
              v-for="item in items"
              :key="item.raw.id"
            >
              <Parcel :pid="item.raw.id" type="Furniture" :scale="0.35" route />
            </div>
          </div>
        </template>

        <template v-slot:footer="{ pageCount }">
          <v-pagination class="w-full" v-model="currPage" :length="pageCount">
          </v-pagination>
        </template>
      </v-data-iterator>
    </div>

    <div class="w-1/2">
      <FurnitureDetail v-if="pid != null" :pid />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ObjectValues } from "@/types";
import { toHiragana } from "wanakana";
import { furnitureDict } from "@/components/parcel/furniture/furniture";
import { furnitureTags } from "@/components/parcel/furniture/tag";

const currPage = ref(1);
const search = ref("");
const furniture = ObjectValues(furnitureDict);
const sortedItems = ref(furniture);
const filteredItems = ref(sortedItems.value);
const searchedItems = ref(filteredItems.value);

const tags = ref<number[][]>([]);
const fire = ref(true);
const route = useRoute<"/parcel/furniture/[[id]]">();
const pid = computed(() => {
  const id = route.params.id ?? "";
  return id === "" ? undefined : Number(id);
});
watch(fire, () => {
  filteredItems.value = sortedItems.value.filter((v) => v.hideCount === 0);
});
watch([search], ([newSearch]) => {
  if ((newSearch ?? "") === "") searchedItems.value = filteredItems.value;
  else {
    const q = toHiragana(newSearch);
    searchedItems.value = filteredItems.value.filter((f) => {
      if (f.search[0].indexOf(q) > -1) return true;
      return false;
    });
  }
});
</script>

<style lang="scss" scoped>
.selecting {
  @apply border-2 border-sky-400;
}
.others {
  margin: 2px;
}
.filtering {
  background-color: blue;
}
</style>
