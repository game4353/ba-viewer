<template>
  <div class="flex flex-row flex-wrap">
    <div class="w-1/2 min-w-[364px]">
      <v-data-iterator
        class="flex flex-row flex-wrap gap-y-2 mt-1 overflow-auto"
        :items="searchedItems"
        :items-per-page="49"
        :page="currPage"
      >
        <template v-slot:header>
          <v-toolbar>
            <v-text-field
              class="mx-3"
              v-model="search"
              density="compact"
              placeholder="Search"
              prepend-inner-icon="mdi-magnify"
              style="max-width: 300px"
              variant="solo"
              clearable
              hide-details
            ></v-text-field>
            <v-btn
              :icon="expand === 'no' ? 'mdi-filter-plus' : 'mdi-filter-minus'"
              size="small"
              variant="tonal"
              elevation="10"
              @click="switchExpand"
            ></v-btn>
          </v-toolbar>
          <v-expansion-panels v-model="expand">
            <v-expansion-panel value="on">
              <v-expansion-panel-text>
                <v-chip-group
                  v-for="(tagGroup, i) in characterTags"
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
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </template>

        <template v-slot:default="{ items }">
          <div class="flex flex-row flex-wrap">
            <div
              :class="item.raw.id === pid ? 'selecting' : 'others'"
              v-for="item in items"
              :key="item.raw.id"
            >
              <Parcel
                :pid="item.raw.id"
                :type="ParcelType.Character"
                :scaling="{ w: 80 }"
                route
              />
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
      <CharacterDetail v-if="pid != null" :pid />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  CCharacter,
  useCharacter,
  useCharacterIds,
} from "@/components/parcel/character/character";
import { characterTags } from "@/components/parcel/character/tag";
import { ERR_HANDLE } from "@/components/warn/error";
import { toHiragana } from "wanakana";
import { ParcelType } from "~game/types/flatDataExcel";
const errHandle = inject(ERR_HANDLE)!;

const currPage = ref(1);
const search = ref("");

const characterIds = useCharacterIds();
const characters = computed(
  () =>
    characterIds.value
      ?.unwrapOrElse(errHandle)
      ?.map((id) => useCharacter(id).value?.unwrapOrElse(errHandle))
      .filter((v): v is CCharacter => v != null) ?? [],
);

const sortedItems = computed(() => characters.value);
const filteredItems = computed(() => {
  if (fire.value) return sortedItems.value.filter((v) => v.hideCount === 0);
  else return sortedItems.value.filter((v) => v.hideCount === 0);
});
const searchedItems = computed(() => {
  const newSearch = search.value ?? "";
  if (newSearch === "") return filteredItems.value;
  else {
    const q = toHiragana(newSearch);
    return filteredItems.value.filter((f) => {
      if (f.search.value.unwrapOrElse(errHandle)?.[0]?.includes(q)) return true;
      return false;
    });
  }
});

const expand = ref("no");
function switchExpand() {
  const s = expand.value;
  expand.value = s[1] + s[0];
}

const tags = ref<number[][]>([]);
const fire = ref(true);
const route = useRoute<"/parcel/character/[[id]]">();
const pid = computed(() => {
  const id = route.params.id ?? "";
  return id === "" ? undefined : Number(id);
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
