<template>
  <div class="flex flex-row flex-wrap">
    <div class="w-1/2 min-w-[364px]">
      <v-tabs center-active v-model="tab" bg-color="primary" show-arrows>
        <v-tab v-for="(t, key) in tabs" :key :value="t">
          {{ tabStrs[t] }}
        </v-tab>
      </v-tabs>

      <v-tabs-window v-model="tab">
        <v-tabs-window-item
          v-for="t in tabs"
          :key="t"
          :value="t"
          class="flex flex-row flex-wrap gap-y-2 mt-1 max-h-[600px] overflow-auto"
        >
          <div
            v-for="item in items.filter((v) => v.ItemCategory === t)"
            :key="item.Id"
            :class="item === picked ? 'selecting' : 'others'"
          >
            <v-tooltip
              location="top"
              :text="Localize.etc(item.LocalizeEtcId, 'name')"
            >
              <template v-slot:activator="{ props }">
                <Parcel v-bind="props" :pid="item.Id" type="Item" route />
              </template>
            </v-tooltip>
          </div>
        </v-tabs-window-item>
      </v-tabs-window>
    </div>
    <div class="w-1/2">
      <div v-if="picked != null">
        <v-card class="mx-auto">
          <template v-slot:title>
            <span class="font-weight-black">{{
              Localize.etc(picked.LocalizeEtcId, "name")
            }}</span>
          </template>
          <template v-slot:prepend>
            <Item :pid="picked.Id" />
          </template>
          <v-card-text class="bg-surface-light pt-4">
            {{ Localize.etc(picked.LocalizeEtcId, "desc") }}
          </v-card-text>
        </v-card>

        <v-card v-if="picked.UsingResultParcelType !== 'None'">
          <v-card-title>使用</v-card-title>
          <Parcel
            :pid="picked.UsingResultId"
            :type="picked.UsingResultParcelType"
            :amount="picked.UsingResultAmount"
          />
        </v-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ItemExcel, ItemCategory } from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/ItemExcelTable.json";
import { Localize } from "@/utils/localize";
import { ObjectKeys } from "@/types";

const items = DataList as ItemExcel[];
const dict = Object.fromEntries(items.map((v) => [v.Id, v]));
const tabStrs: Record<keyof typeof ItemCategory, string> = {
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
const tabs = ObjectKeys(tabStrs).slice(0, -1);

const route = useRoute<"/item/[[id]]">();
const id = computed(() => route.params.id ?? "");
const picked = computed(() => dict[id.value]);
const tab = ref(picked.value?.ItemCategory ?? tabs[0]);

watch(
  () => picked.value,
  (p) => {
    tab.value = p?.ItemCategory ?? tab.value;
  },
);
</script>

<style lang="scss" scoped>
.selecting {
  @apply border-2 border-sky-400;
}
.others {
  margin: 2px;
}
</style>
