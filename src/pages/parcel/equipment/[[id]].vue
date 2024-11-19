<template>
  <div class="flex flex-row flex-wrap">
    <div class="w-1/2 min-w-[364px]">
      <div>
        <div
          class="flex flex-row flex-wrap gap-y-2 mt-1 max-h-[600px] overflow-auto"
        >
          <div
            v-for="item in Object.values(equipmentDict)"
            :key="item!.id"
            :class="
              String(item!.id) === route.params.id ? 'selecting' : 'others'
            "
          >
            <ParcelCommon
              :hover="item!.name"
              :parcel="item!"
              :scale="0.35"
              route
            />
          </div>
        </div>
      </div>
    </div>

    <div class="w-1/2">
      <div v-if="Boolean(picked)">
        <v-card class="mx-auto">
          <template v-slot:title>
            <span class="font-weight-black">
              {{ equipmentDict[picked!]?.name }}
            </span>
          </template>
          <template v-slot:prepend>
            <Parcel :type="ParcelType.Equipment" :pid="picked!" :scale="0.4" />
          </template>
          <v-card-text class="bg-surface-light pt-4">
            {{ equipmentDict[picked!]?.desc }}
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { equipmentDict } from "~/components/parcel/equipment";
import { ParcelType } from "~game/types/flatDataExcel";

const route = useRoute<"/parcel/equipment/[[id]]">();
const picked = computed(() => route.params.id);
</script>

<style lang="scss" scoped>
.selecting {
  @apply border-2 border-sky-400;
}
.others {
  margin: 2px;
}
</style>
