<template>
  <table>
    <thead>
      <tr>
        <th
          :class="
            pickedSid.size + pickedGid.size > 0
              ? 'cursor-pointer !bg-green-900'
              : ''
          "
          @click="
            () => {
              pickedGid.clear();
              pickedSid.clear();
            }
          "
        ></th>
        <td
          class="cursor-pointer"
          :class="gClass(gid, true)"
          v-for="gid in gids"
          :key="gid"
          @click="() => toggle(gid)"
        >
          <Parcel
            :type="ParcelType.Item"
            :pid="gid"
            :scaling="{ w: colW }"
            :amount="dataParcel.use(ParcelType.Item, gid).amount"
          />
        </td>
      </tr>
    </thead>
    <tbody>
      <tr :class="sClass(sid)" v-for="sid in sids" :key="sid" :height="rowH">
        <th class="cursor-pointer" :class="sClass(sid, true)">
          <MyCharacter
            :cid="sid"
            :scaling="{ h: rowH }"
            no-route
            @click="() => toggle(sid)"
          />
        </th>
        <td :class="gClass(gid)" v-for="gid in gids" :key="gid">
          <FavorFace
            v-if="useStudentGiftFavor(sid, gid).value.unwrapOrElse(errHandle)"
            :favor="
              useStudentGiftFavor(sid, gid).value.unwrapOrElse(errHandle)!
            "
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { ParcelType } from "@/assets/game/types/flatDataExcel";
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

const colW = 60;
const rowH = 64;

const gids = getGiftIds();
const sids = computed(() =>
  usePlayableIds()
    .value.unwrapOrElse(errHandle)
    ?.filter((v) => v !== 10099),
);

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
.picked {
  @apply bg-green-700;
}

.frozen {
  position: sticky;
  z-index: 5;
  background-color: black;
}
thead {
  tr th {
    z-index: 10;
  }
  th,
  td {
    @extend .frozen;
    top: 0px;
  }
}
th {
  @extend .frozen;
  left: 0;
}
th,
td {
  font-weight: 100;
  outline: 1px solid #ccc;
  outline-offset: -1px;
  padding: 5px;
  text-align: left;
}
</style>
