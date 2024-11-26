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
            v-for="item in itemByCategory.get(ItemCategory[key])"
            :key="item.id"
            :class="item.id === pid ? 'selecting' : 'others'"
          >
            <Parcel
              :pid="item.id"
              :type="ParcelType.Item"
              :scale="0.35"
              route
            />
          </div>
        </v-tabs-window-item>
      </v-tabs-window>
    </div>

    <div class="w-1/2">
      <div v-if="pid != null">
        <ItemDetail :pid />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CItem, useItem, useItemIds } from "@/components/parcel/item/item";
import { fail } from "@/utils/misc";
import { ObjectEntries, ObjectKeys } from "@/utils/types";
import { ItemCategory, ParcelType } from "~game/types/flatDataExcel";

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

const itemIds = useItemIds();
const itemByCategory = computed(() => {
  const items =
    itemIds.value
      ?.unwrapOrElse(fail)
      ?.map((id) => useItem(id).value?.unwrapOrElse(fail))
      .filter((v): v is CItem => v != null) ?? [];

  return Map.groupBy(items, (item) => item.obj.ItemCategory);
});

const route = useRoute<"/parcel/item/[[id]]">();
const pid = computed(() => {
  const id = parseInt(route.params.id ?? "");
  return isNaN(id) ? undefined : id;
});
const picked = computed(() =>
  pid.value == null ? undefined : useItem(pid.value).value,
);
const tab = ref("Material");
watchEffect(() => {
  const cat = picked.value?.unwrapOrElse(fail)?.obj.ItemCategory;
  if (cat == null) tab.value = "Material";
  else tab.value = ItemCategory[cat];
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
