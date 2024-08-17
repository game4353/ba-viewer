<template>
  <input type="file" @change="handleFileUpload" accept=".json" />
  <v-data-iterator :items="filtered" :items-per-page="3">
    <template v-slot:default="{ items }">
      <div class="w-min" v-for="(item, key) in items" :key>
        <div class="bg-slate-800 mt-3 mb-1">
          # {{ item.raw.no + 1 }} Score {{ item.raw.score }}
        </div>
        <div
          class="flex flex-row w-full"
          v-for="(team, i) in item.raw.parties"
          :key="i"
        >
          <div class="flex-1" v-for="(c, j) in team" :key="j">
            <MyCharacter
              v-if="c != null"
              :cid="c.cid"
              :scale="0.3"
              :level="c.lv"
              :star="c.star"
            />
          </div>
        </div>
      </div>
    </template>

    <template v-slot:header="{ page, prevPage, nextPage, pageCount, setPage }">
      <div class="flex flex-row">
        <div class="flex flex-row items-center gap-1">
          exclude:
          <v-text-field
            v-model="exclude"
            density="compact"
            width="5.5rem"
            variant="outlined"
            hide-details
            single-line
          ></v-text-field>
        </div>
        <div class="d-flex align-center justify-center pa-4">
          <v-btn
            :disabled="page === 1"
            density="comfortable"
            icon="mdi-arrow-left"
            variant="tonal"
            rounded
            @click="prevPage"
          ></v-btn>

          <div class="mx-2 flex flex-row gap-1 items-center">
            Page
            <v-text-field
              @input="
                ({ target }: InputEvent) =>
                  setPage((target as HTMLInputElement | null)?.value)
              "
              :value="page"
              density="compact"
              width="5rem"
              variant="outlined"
              hide-details
              single-line
            ></v-text-field
            >of {{ pageCount }}
          </div>
          <v-btn
            :disabled="page >= pageCount"
            density="comfortable"
            icon="mdi-arrow-right"
            variant="tonal"
            rounded
            @click="nextPage"
          ></v-btn>
        </div>
      </div>
    </template>
  </v-data-iterator>
</template>

<script setup lang="ts">
type Data = {
  no: number;
  score: number;
  parties: ({
    cid: number;
    star: number;
    lv: number;
  } | null)[][];
};
const exclude = ref("");
const leaderBoard = ref<Data[]>([]);
const filtered = computed(() => {
  if (exclude.value === "dupe")
    return leaderBoard.value.filter((v) =>
      v.parties
        .flat()
        .map((o) => o?.cid)
        .filter((o): o is number => o != null)
        .every((c, i, a) => a.indexOf(c) === i),
    );
  else
    return leaderBoard.value.filter((v) =>
      v.parties.flat().every((c) => c?.cid !== Number(exclude.value)),
    );
});

const handleFileUpload = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file && file.type === "application/json") {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        leaderBoard.value = JSON.parse(e.target?.result as string).map(
          (v: any, no: number) => ({ no, ...v }),
        );
        console.log(leaderBoard.value);
      } catch (error) {
        console.error("Invalid JSON file", error);
      }
    };

    reader.readAsText(file);
  } else {
    console.error("Please upload a valid JSON file.");
  }
};
</script>
