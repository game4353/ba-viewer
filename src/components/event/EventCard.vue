<template>
  <div class="flex flex-row gap-2 h">
    <v-tabs v-model="tab" bg-color="secondary" direction="vertical">
      <v-tab
        v-for="key in ObjectKeys(rolls)"
        :key
        :value="key"
        :text="`${key}枚目`"
      />
    </v-tabs>

    <v-tabs-window class="h" v-model="tab">
      <v-tabs-window-item
        v-for="key in ObjectKeys(rolls)"
        :key
        :value="key"
        class="flex flex-col gap-y-2 mt-2 h overflow-auto"
      >
        <Scroll>
          <div class="flex flex-row mx-2" v-for="r in rolls[key]" :key="r.Id">
            <div class="w-16">
              <GameImg :path="cards[r.CardGroupId].IconPath" />
            </div>
            <div class="flex flex-col">
              <div class="px-3 text-lg">{{ r.Prob / 100 }}%</div>
              <div class="flex flex-row">
                <Parcel
                  v-for="(p, i) in r.RewardParcelType"
                  :key="i"
                  :type="p"
                  :pid="r.RewardParcelId[i]"
                  :amount="r.RewardParcelAmount[i]"
                  :scale="0.3"
                />
              </div>
            </div>
          </div>
        </Scroll>
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>

<script setup lang="ts">
import {
  useExcelEventContentCard,
  useExcelEventContentCardShop,
} from "@/utils/data/excel/event";
import { ObjectKeys } from "@/utils/types";
import { ERR_HANDLE } from "../warn/error";

const props = defineProps({
  eid: {
    type: Number,
    required: true,
  },
});
const errHandle = inject(ERR_HANDLE)!;

const tab = ref(0);

const cardTable = useExcelEventContentCard();
const cards = computed(() => {
  return Object.fromEntries(
    (cardTable.value?.unwrapOrElse(errHandle)?.get(props.eid) ?? []).map(
      (v) => [v.CardGroupId, v],
    ),
  );
});

const shopTable = useExcelEventContentCardShop();
const rolls = computed(() => {
  return Object.groupBy(
    shopTable.value?.unwrapOrElse(errHandle)?.get(props.eid) ?? [],
    (v) => v.RefreshGroup,
  );
});
</script>

<style scoped lang="scss">
.h {
  height: 800px;
}
</style>
