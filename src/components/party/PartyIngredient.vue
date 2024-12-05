<template>
  <v-container class="bg-surface-variant">
    <v-row>
      <v-col>
        <v-row v-for="i in ooparts1" :key="i" no-gutters>
          <v-col v-for="j in [0, 1, 2, 3]" :key="j" cols="3">
            <ItemAmount
              class="m-1"
              :key="j"
              :pid="i + j"
              :type="ParcelType.Item"
              :need="ingredients.item.get(i + j)"
              :scaled-w="parcelWidth"
              :mode="editing ? 'edit' : 'display'"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <v-row v-for="i in ooparts2" :key="i" no-gutters>
          <v-col v-for="j in [0, 1, 2, 3]" :key="j" cols="3">
            <ItemAmount
              class="m-1"
              :key="j"
              :pid="i + j"
              :type="ParcelType.Item"
              :need="ingredients.item.get(i + j)"
              :scaled-w="parcelWidth"
              :mode="editing ? 'edit' : 'display'"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-row v-for="i in bds" :key="i" no-gutters>
          <v-col v-for="j in [0, 1, 2, 3]" :key="j">
            <ItemAmount
              class="m-1"
              :pid="i + j"
              :type="ParcelType.Item"
              :need="ingredients.item.get(i + j)"
              :scaled-w="parcelWidth"
              :mode="editing ? 'edit' : 'display'"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <v-row v-for="i in notes" :key="i" no-gutters>
          <v-col v-for="j in [0, 1, 2, 3]" :key="j">
            <ItemAmount
              class="m-1"
              :pid="i + j"
              :type="ParcelType.Item"
              :need="ingredients.item.get(i + j)"
              :scaled-w="parcelWidth"
              :mode="editing ? 'edit' : 'display'"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-row no-gutters>
          <v-col v-for="i in others" :key="i" cols="3">
            <ItemAmount
              class="m-1"
              :pid="i"
              :type="ParcelType.Item"
              :need="ingredients.item.get(i)"
              :scaled-w="parcelWidth"
              :mode="editing ? 'edit' : 'display'"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <v-row no-gutters>
          <v-col>
            <ItemAmount
              class="m-1"
              :pid="1"
              :type="ParcelType.Currency"
              :need="ingredients.currency.get(1)"
              :scaled-w="parcelWidth"
              :mode="editing ? 'edit' : 'display'"
            />
          </v-col>
          <v-col>
            <v-btn
              :icon="editing ? 'mdi-check' : 'mdi-pencil'"
              :color="editing ? 'success' : ''"
              @click="editing = !editing"
            ></v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import {
  ParcelType,
  RecipeIngredientExcel,
} from "@/assets/game/types/flatDataExcel";
import { useCharacter } from "@/components/parcel/character/character";
import { ERR_HANDLE } from "@/components/warn/error";
import { useCharaStore } from "@/stores/character";
import { dataParty } from "@/stores/party";
import { range } from "@/utils/misc";
import { ReadonlyDeep } from "type-fest";
const errHandle = inject(ERR_HANDLE)!;

function unknownParcel(type: ParcelType, id: number) {
  errHandle(
    new Error(`Parcel (type = ${type}, id = ${id}) is not in the grid.`),
  );
}

const props = defineProps({
  pid: {
    type: Number,
    required: true,
  },
});

const ooparts1 = [...range(100, 200, 10)];
const ooparts2 = [...range(200, 300, 10)];
const bds = [...range(3000, 3090, 10)];
const notes = [...range(4000, 4090, 10)];
const others = [2000, 2001, 2002, 9999];

const editing = ref(false);
const parcelWidth = ref(70);

const ingredients = computed(() => {
  const itemMap = new Map(
    ooparts1
      .concat(ooparts2, bds, notes)
      .map((i) => [...range(i, i + 4)])
      .concat(others)
      .flat()
      .map((i) => [i, [] as number[][]]),
  );
  const currencyMap = new Map([[1, [] as number[][]]]);

  const ids = dataParty.use(props.pid).student;
  for (const id of ids) {
    const chara = useCharacter(id).value.unwrapOrElse(errHandle);
    if (chara == null) break;

    const ingredients: ReadonlyDeep<RecipeIngredientExcel>[] = [];
    for (const i of [0, 1, 2, 3] as const) {
      const arr = chara
        .getSkill(i)
        .andThen((skill) =>
          skill.useLevelUpIngredient(useCharaStore(id).goal()[`skill${i}`]),
        )
        .unwrapOrElse(errHandle);
      if (arr != null) ingredients.push(...arr);
    }
    for (const i of [1, 2, 3] as const) {
      const arr = chara.usePotentialRecipes(i).unwrapOrElse(errHandle);
      if (arr != null) ingredients.push(...arr);
    }

    const tmp: Record<number | string, number> = {};
    let coin = 0;
    ingredients.forEach((excel) => {
      excel.IngredientParcelType.forEach((type, i) => {
        const id = excel.IngredientId[i];
        const amount = excel.IngredientAmount[i];
        if (type !== ParcelType.Item) unknownParcel(type, id);
        tmp[id] ??= 0;
        tmp[id] += amount;
      });
      excel.CostParcelType.forEach((type, i) => {
        const id = excel.CostId[i];
        const amount = excel.CostAmount[i];
        if (type !== ParcelType.Currency || id !== 1) unknownParcel(type, id);
        coin += amount;
      });
    });

    Object.keys(tmp).forEach((k) => {
      const pid = Number(k);
      const arr = itemMap.get(pid);
      if (arr == null) return unknownParcel(ParcelType.Item, pid);
      arr.push([id, tmp[k]]);
    });
    if (coin > 0) currencyMap.get(1)!.push([id, coin]);
  }
  return { item: itemMap, currency: currencyMap };
});
</script>
