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
            <!--v-sheet class="py-4 px-1">
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
            </v-sheet-->
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
import { toHiragana } from "wanakana";
import { CCharacter } from "../parcel/character/character";
import { characterTags } from "../parcel/character/tag";
import { compare } from "../parcel/tag";
import { ERR_HANDLE } from "../warn/error";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  items: {
    type: Array as PropType<CCharacter[]>,
    required: true,
  },
  setOrder: {
    type: Function as PropType<(map: Map<number, number>) => void>,
    required: true,
  },
  setVisible: {
    type: Function as PropType<(set: Set<number>) => void>,
    required: true,
  },
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

const expand = ref("on");
function switchExpand() {
  const s = expand.value;
  expand.value = s[1] + s[0];
}

const itemIdx = props.items.map((_, i) => i);
// const sortTags = ["id", "name"];
const sortTag = ref("id");
watchEffect(() => {
  const compareValues = itemIdx.map((i) => props.items[i].sortValue(sortTag));
  itemIdx.sort((a, b) =>
    compare(compareValues[a].value, compareValues[b].value),
  );
  const order = new Map(itemIdx.map((v, i) => [props.items[v].id, i]));
  props.setOrder(order);
});

const allCC = computed(() => new Set(props.items.map((o) => o.id)));
const search = ref("");
const filterTags = ref<number[][]>(
  tagGroups.map((tagGroup) => [...tagGroup.picked]),
);

const searchVisibles = ref<Set<number>>();
const filterVisibles = computed(
  () =>
    new Set(
      props.items
        .filter((item) => item.useHidden().value === false)
        .map((item) => item.id),
    ),
);

watch(search, () => {
  const query = toHiragana(search.value ?? "").trim();
  if (query === "") searchVisibles.value = undefined;
  else {
    searchVisibles.value = new Set(
      props.items
        .filter((o) =>
          o.search.value.unwrapOrElse(errHandle)?.[0].includes(query),
        )
        .map((o) => o.id),
    );
  }
});

watch(
  [allCC, searchVisibles, filterVisibles],
  () => {
    const a = searchVisibles.value ?? allCC.value;
    const b = filterVisibles.value ?? allCC.value;
    // const visible = a.intersection(b);
    const visible = new Set([...a].filter((id) => b.has(id)));
    props.setVisible(visible);
  },
  { immediate: true },
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
