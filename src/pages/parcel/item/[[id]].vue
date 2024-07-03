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
            v-for="item in itemByCategory[key]"
            :key="item.Id"
            :class="item.Id === picked?.id ? 'selecting' : 'others'"
          >
            <Parcel :pid="item.Id" type="Item" :scale="0.35" route />
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
            <Parcel type="Item" :pid="picked.id" :scale="0.4" />
          </template>
          <v-card-text class="bg-surface-light pt-4">
            {{ picked.desc }}
          </v-card-text>
        </v-card>

        <v-card v-if="picked.obj.UsingResultParcelType !== 'None'">
          <v-card-title>使用</v-card-title>
          <Parcel
            :pid="picked.obj.UsingResultId"
            :type="picked.obj.UsingResultParcelType"
            :amount="picked.obj.UsingResultAmount"
            :scale="0.3"
          />
        </v-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ItemCategory } from "~game/types/flatDataExcel";
import { ObjectKeys, ObjectEntries } from "@/types";
import { itemArr, itemDict } from "@/components/parcel/item";

const tabs: Record<keyof typeof ItemCategory, string> = {
  SecretStone: "神名文字",
  Coin: "コイン",
  Material: "素材",
  Consumable: "使用タイプ",
  Favor: "贈り物",
  Collectible: "収集品",
  CharacterExpGrowth: "レポート",
  RecruitCoin: "ポイント",
  InvisibleToken: "??",
};
const itemByCategory = Object.groupBy(
  itemArr,
  ({ ItemCategory }) => ItemCategory,
);

const route = useRoute<"/parcel/item/[[id]]">();
const picked = computed(() => {
  const id = route.params.id ?? "";
  return itemDict[id];
});
const tab = ref(picked.value?.obj.ItemCategory ?? "Material");
watch(picked, (newPicked) => {
  tab.value = newPicked?.obj.ItemCategory ?? "Material";
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
