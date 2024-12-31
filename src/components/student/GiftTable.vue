<template>
  <div class="w-fit">
    <div class="row1" :style="cssVar">
      <div
        class="col1"
        :class="
          pickedSid.size + pickedGid.size > 0
            ? 'cursor-pointer !bg-green-900'
            : ''
        "
        :style="cssVar"
        @click="
          () => {
            pickedGid.clear();
            pickedSid.clear();
          }
        "
      ></div>
      <div
        class="colX"
        :class="gClass(gid, true)"
        :style="cssVar"
        v-for="gid in gids"
        :key="gid"
        @click="() => gid < 5900 && toggle(gid)"
      >
        <Lazy>
          <Parcel
            :type="ParcelType.Item"
            :pid="gid"
            :scaling="{ w: cssVar['--colW'] - 10 }"
            :amount="dataParcel.use(ParcelType.Item, gid).amount"
          />
        </Lazy>
      </div>
    </div>

    <Lazy
      class="rowX"
      :class="sClass(sid)"
      :style="cssVar"
      v-for="sid in sids"
      :key="sid"
    >
      <div class="col1" :class="sClass(sid, true)" :style="cssVar">
        <MyCharacter
          :cid="sid"
          :scaling="{ h: cssVar['--rowH'] - 10 }"
          @click="() => toggle(sid)"
        />
      </div>
      <div
        class="colX"
        :class="gClass(gid)"
        :style="cssVar"
        v-for="gid in gids"
        :key="gid"
      >
        <FavorFace :favor="useStudentGiftFavor(sid, gid).value" />
      </div>
    </Lazy>
  </div>
</template>

<script setup lang="ts">
import { ParcelType } from "~game/excelType";
import { ERR_HANDLE } from "@/components/warn/error";
import { dataParcel } from "@/stores/parcel";
import {
  getGiftIds,
  useGiftFavor,
  useStudentFavor,
  useStudentGiftFavor,
} from "../student/gift";
import { usePlayableIds } from "../student/student";
const errHandle = inject(ERR_HANDLE)!;

const cssVar = {
  "--col1W": 82,
  "--colW": 64,
  "--row1H": 56,
  "--rowH": 68,
};

const gids = getGiftIds();
const sids = computed(() => usePlayableIds(true).value.unwrapOrElse(errHandle));

const pickedSid = ref(new Set<number>());
const pickedGid = ref(new Set<number>());
const filteredSid = ref(new Set<number>());
const filteredGid = ref(new Set<number>());

function sClass(sid: number, head = false) {
  const arr: string[] = [];
  if (head && pickedSid.value.has(sid)) arr.push("picked");
  if (filteredSid.value.size > 0 && !filteredSid.value.has(sid))
    arr.push("hidden");
  return arr.join(" ");
}
function gClass(gid: number, head = false) {
  const arr: string[] = [];
  if (head && gid < 5900) arr.push("cursor-pointer");
  if (head && pickedGid.value.has(gid)) arr.push("picked");
  if (filteredGid.value.size > 0 && !filteredGid.value.has(gid))
    arr.push("hidden");
  return arr.join(" ");
}

watch(
  () => pickedSid.value.size,
  () => {
    filteredGid.value.clear();
    pickedSid.value.forEach((s) => {
      useStudentFavor(s)
        .value.unwrapOrElse(errHandle)
        ?.forEach((g) => filteredGid.value.add(g));
    });
  },
);
watch(
  () => pickedGid.value.size,
  () => {
    filteredSid.value.clear();
    pickedGid.value.forEach((g) => {
      useGiftFavor(g)
        .value.unwrapOrElse(errHandle)
        ?.forEach((s) => filteredSid.value.add(s));
    });
  },
);

function toggle(id: number) {
  const set = id < 10000 ? pickedGid.value : pickedSid.value;
  if (set.has(id)) set.delete(id);
  else set.add(id);
}
</script>

<style lang="scss" scoped>
%row {
  @apply flex flex-row w-fit;
}
%cell {
  height: 100%;
  outline: 1px solid #ccc;
  outline-offset: -1px;
  padding: 5px;
}
%frozen {
  position: sticky;
  z-index: 5;
  background-color: black;
}

.hidden.hidden {
  display: none;
}
.picked.picked.picked {
  @apply bg-green-700;
}

.row1 {
  @extend %row;
  @extend %frozen;
  height: calc(1px * var(--row1H));
  top: 0;
  z-index: 7;
}
.rowX {
  @extend %row;
  min-width: 100%;
  height: calc(1px * var(--rowH));
  .col1 {
    cursor: pointer;
  }
}
.col1 {
  @extend %cell;
  @extend %frozen;
  min-width: calc(1px * var(--col1W));
  max-width: calc(1px * var(--col1W));
  left: 0;
}
.colX {
  @extend %cell;
  min-width: calc(1px * var(--colW));
  max-width: calc(1px * var(--colW));
}
</style>
