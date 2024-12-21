<template>
  <WIP />
  <div class="flex flex-row flex-wrap">
    <div class="w-1/2 min-w-[364px]">
      <div>
        <div
          class="flex flex-row flex-wrap gap-y-2 mt-1 max-h-[600px] overflow-auto"
        >
          <div
            v-for="id in ids"
            :key="id"
            :class="String(id) === route.params.id ? 'selecting' : 'others'"
          >
            <ParcelCommon
              :parcel="useEmblem(id).unwrapOrElse(errHandle)"
              :scaling="{ r: 0.35 }"
              route
            />
          </div>
        </div>
      </div>
    </div>

    <div class="w-1/2">
      <div v-if="Boolean(picked)">
        <EmblemDetail :pid="Number(picked)" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ERR_HANDLE } from "@/components/warn/error";
import { useExcelEmblem } from "@/utils/data/excel/parcel";
import { useEmblem } from "~/components/parcel/emblem/emblem";
const errHandle = inject(ERR_HANDLE)!;

const route = useRoute<"/parcel/emblem/[[id]]">();
const picked = computed(() => route.params.id);

const table = useExcelEmblem();
const ids = computed(
  () => table.value?.map((map) => Array.from(map.keys())) ?? [],
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
