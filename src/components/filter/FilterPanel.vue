<template>
  <div class="flex flex-col h-full">
    <v-toolbar class="w-full flex-1">
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
    <v-expansion-panels class="flex min-h-0" v-model="expand">
      <Scroll>
        <v-expansion-panel value="on">
          <v-expansion-panel-text class="h-full">
            <v-sheet class="py-4 px-1">
              <v-chip-group
                selected-class="text-primary"
                mandatory
                v-model="sortTag"
              >
                <v-chip
                  v-for="tag in sortTags"
                  :key="tag"
                  :text="tag"
                  :value="tag"
                ></v-chip>
              </v-chip-group>
            </v-sheet>
            <div v-for="(tagGroup, i) in tagGroups" :key="i">
              <div class="text-lg">{{ tagGroup.title }}</div>
              <v-chip-group
                column
                multiple
                v-model="filterTags[i]"
                @update:modelValue="(v: number[]) => tagGroup.setPicked(v)"
              >
                <v-chip
                  v-for="tag in tagGroup.tags"
                  :key="tag.value"
                  selected-class="filtering"
                >
                  <v-avatar v-if="tag.icon" start :size="24">
                    <v-img class="items-center" :color="tag.bg">
                      <v-img
                        class="m-auto"
                        :width="16"
                        :height="16"
                        :src="tag.icon"
                      ></v-img>
                    </v-img>
                  </v-avatar>
                  {{ tag.display }}
                </v-chip>
              </v-chip-group>
            </div>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </Scroll>
    </v-expansion-panels>
  </div>
</template>

<script setup lang="ts">
import { studentTags } from "@/components/student/tag";
import { useStudentFilterStore } from "@/stores/filter";
import { CCharacter } from "../parcel/character/character";
import { characterTags } from "../parcel/character/tag";
import { compare } from "../parcel/tag";

const props = defineProps({
  items: {
    type: Array as PropType<CCharacter[]>,
    required: true,
  },
});

const store = useStudentFilterStore();
const search = computed({
  get: () => store.search,
  set: (v) => (store.search = v ?? ""),
});

const tagGroups = [
  characterTags.CharacterTagSquadTypeGroup,
  characterTags.CharacterTagBulletTypeGroup,
  characterTags.CharacterTagArmorTypeGroup,
  characterTags.CharacterTagTacticRoleGroup,
  characterTags.CharacterTagTacticRangeGroup,
  characterTags.CharacterTagRarityGroup,
  studentTags.StudentTagRarityGroup,
  characterTags.CharacterTagWeaponTypeGroup,
  characterTags.CharacterTagSchoolGroup,
  characterTags.CharacterTagEquipmentCategoryGroup,
];

const items = computed(() => props.items);

const expand = ref("on");
function switchExpand() {
  const s = expand.value;
  expand.value = s[1] + s[0];
}

const sortTags = ["id", "name"];
const sortTag = ref("id");
watchEffect(() => {
  const compareValues = items.value.map((item, i) => ({
    idx: i,
    val: item.sortValue(sortTag.value).value,
  }));
  compareValues.sort((a, b) => compare(a.val, b.val));
  compareValues.forEach((o, i) => (items.value[o.idx].order$ = i));
});

const filterTags = ref<number[][]>(
  tagGroups.map((tagGroup) => [...tagGroup.picked]),
);
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
