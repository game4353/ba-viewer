<template>
  <div class="flex flex-row flex-wrap">
    <div class="w-1/2 min-w-[364px]">
      <div>
        <div
          class="flex flex-row flex-wrap gap-y-2 mt-1 max-h-[600px] overflow-auto"
        >
          <div
            v-for="item in equipments"
            :key="item.Id"
            :class="
              String(item.Id) === route.params.id ? 'selecting' : 'others'
            "
          >
            <Parcel
              :hover="equipmentGetName(item.Id)"
              :pid="item.Id"
              type="Equipment"
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
              {{ equipmentGetName(picked) }}
            </span>
          </template>
          <template v-slot:prepend>
            <Equipment :pid="picked" :scale="0.4" />
          </template>
          <v-card-text class="bg-surface-light pt-4">
            {{ equipmentGetDesc(picked) }}
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  equipments,
  equipmentGetName,
  equipmentGetDesc,
} from "../../components/parcel/equipment";

const route = useRoute<"/equipment/[[id]]">();
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
