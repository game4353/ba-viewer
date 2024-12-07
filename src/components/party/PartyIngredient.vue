<template>
  <div class="flex flex-row">
    <v-tabs
      class="flex-grow"
      v-model="tab"
      align-tabs="center"
      color="deep-purple-accent-4"
      stacked
    >
      <v-tab value="1">
        <v-icon icon="mdi-cube-outline"></v-icon>
        オーパーツ
      </v-tab>
      <v-tab value="2">
        <v-icon icon="mdi-book"></v-icon>
        ノートBD
      </v-tab>
      <v-tab value="3">
        <v-icon icon="mdi-watch-variant"></v-icon>
        設計図
      </v-tab>
      <v-tab value="4">
        <v-icon icon="mdi-gift"></v-icon>
        贈り物
      </v-tab>
      <v-tab value="5">
        <v-icon icon="mdi-credit-card"></v-icon>
        その他
      </v-tab>
    </v-tabs>

    <div class="flex mr-6 items-center">
      <v-btn
        :icon="editing ? 'mdi-check' : 'mdi-pencil'"
        :color="editing ? 'success' : 'deep-purple-accent-4'"
        @click="editing = !editing"
      ></v-btn>
    </div>
  </div>
  <v-tabs-window v-model="tab">
    <v-tabs-window-item value="1">
      <PartyOoparts :pid :parcelWidth :editing :item-map="maps?.item" />
    </v-tabs-window-item>
    <v-tabs-window-item value="2">
      <PartyBdNote :pid :parcelWidth :editing :item-map="maps?.item" />
    </v-tabs-window-item>
    <v-tabs-window-item value="3">
      <PartyEquipment
        :pid
        :parcelWidth
        :editing
        :equipment-map="maps?.equipment"
      />
    </v-tabs-window-item>
    <v-tabs-window-item value="4">
      <PartyGift :pid :parcelWidth :editing :item-map="maps?.item" />
    </v-tabs-window-item>
    <v-tabs-window-item value="5">
      <PartyIngredientRest
        :pid
        :parcelWidth
        :editing
        :item-map="maps?.item"
        :equipment-map="maps?.equipment"
        :currency-map="maps?.currency"
      />
    </v-tabs-window-item>
  </v-tabs-window>
</template>

<script setup lang="ts">
import {
  ParcelType,
  RecipeIngredientExcel,
} from "@/assets/game/types/flatDataExcel";
import { ERR_HANDLE } from "@/components/warn/error";
import { dataParty } from "@/stores/party";
import { isDefined } from "@/utils/misc";
import { Result } from "@/utils/result";
import { ReadonlyDeep } from "type-fest";
import { useCharacter } from "../parcel/character/character";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  pid: {
    type: Number,
    required: true,
  },
});

const tab = ref();
const editing = ref(false);
const parcelWidth = ref(64);

function unknownParcel(type: ParcelType, id: number) {
  errHandle(
    new Error(`Parcel (type = ${type}, id = ${id}) is not in the grid.`),
  );
}

const students = computed(() => {
  const ids = dataParty.use(props.pid).student;
  const arr = [];
  for (const id of ids) {
    const chara = useCharacter(id).value.unwrapOrElse(errHandle);
    if (chara == null) return undefined;
    arr.push(chara);
  }
  return arr;
});

const ingredients = computed(() => {
  if (students.value == null) return undefined;

  const map = new Map<number, ReadonlyDeep<RecipeIngredientExcel[]>>();

  for (const chara of students.value) {
    const cid = chara.id;

    const ingredientResults: (
      | Result<ReadonlyDeep<RecipeIngredientExcel[]>, Error>
      | undefined
    )[] = [];

    // equipment
    for (const i of [1, 2, 3] as const) {
      ingredientResults.push(
        chara[`equipment${i}`]?.andThen((eq) =>
          eq.getIngredients(chara.statGoal[`gear${i}`]),
        ),
      );
    }

    // skill
    for (const i of [0, 1, 2, 3] as const) {
      ingredientResults.push(
        chara
          .getSkill(i)
          .andThen((skill) =>
            skill.useLevelUpIngredient(chara.statGoal[`skill${i}`]),
          ),
      );
    }

    // potential
    for (const i of [1, 2, 3] as const) {
      ingredientResults.push(chara.usePotentialRecipes(i));
    }

    const arr = Result.all(ingredientResults.filter(isDefined))
      .unwrapOrElse(errHandle)
      ?.flat();
    if (arr == null) return undefined;
    map.set(cid, arr);
  }
  return map;
});

const maps = computed(() => {
  if (ingredients.value == null) return undefined;

  const equipmentMap = new Map<number, Map<number, number>>();
  const itemMap = new Map<number, Map<number, number>>();
  const currencyMap = new Map<number, Map<number, number>>();

  ingredients.value.forEach((arr, cid) => {
    arr.forEach((excel) => {
      excel.IngredientParcelType.forEach((type, i) => {
        const id = excel.IngredientId[i];
        const amount = excel.IngredientAmount[i];
        if (type === ParcelType.Item) {
          if (!itemMap.has(id)) itemMap.set(id, new Map());
          const map = itemMap.get(id)!;
          const v = map.get(cid) ?? 0;
          map.set(cid, v + amount);
        } else if (type === ParcelType.Equipment) {
          if (!equipmentMap.has(id)) equipmentMap.set(id, new Map());
          const map = equipmentMap.get(id)!;
          const v = map.get(cid) ?? 0;
          map.set(cid, v + amount);
        } else {
          unknownParcel(type, id);
        }
      });
      excel.CostParcelType.forEach((type, i) => {
        const id = excel.CostId[i];
        const amount = excel.CostAmount[i];
        if (type === ParcelType.Currency) {
          if (!currencyMap.has(id)) currencyMap.set(id, new Map());
          const map = currencyMap.get(id)!;
          const v = map.get(cid) ?? 0;
          map.set(cid, v + amount);
        } else unknownParcel(type, id);
      });
    });
  });
  return { item: itemMap, currency: currencyMap, equipment: equipmentMap };
});
</script>
