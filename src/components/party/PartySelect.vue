<template>
  <div class="flex flex-row items-center gap-2 m-2">
    <p>Current Party</p>
    <v-btn
      :disabled="renaming"
      icon="mdi-pencil"
      @click="renaming = true"
    ></v-btn>
    <v-select
      label=""
      :items="partyList"
      variant="solo"
      v-model="partyId"
      hide-details
    ></v-select>
  </div>

  <v-dialog v-model="renaming" max-width="320">
    <v-card
      prepend-icon="mdi-human-female-female"
      :title="`Rename ${party.name}`"
    >
      <v-form v-model="renameForm" @submit.prevent="renameParty">
        <v-card-text>
          <v-text-field
            v-model="newName"
            label="Party name"
            required
            :rules="[required]"
          ></v-text-field>
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text="Cancel"
            variant="plain"
            @click="renaming = false"
          ></v-btn>

          <v-btn
            color="primary"
            text="OK"
            variant="tonal"
            :disabled="!renameForm"
            type="submit"
          ></v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { dataParty } from "@/stores/party";
import { range } from "@/utils/misc";

const total = dataParty.useAmount();
const parties = ref([...range(0, total.value)].map((i) => dataParty.use(i)));
watch(total, () => {
  while (parties.value.length < total.value)
    parties.value.push(dataParty.use(parties.value.length));
});

const partyId = defineModel({ default: 0, required: true });
const party = computed(() => {
  return dataParty.use(partyId.value);
});
const partyList = computed(() => {
  const arr = parties.value.map((v, i) => ({
    title: `${i + 1}. ${v.name}`,
    value: i,
  }));
  arr.push({
    title: "Add new party...",
    value: arr.length,
  });
  return arr;
});

const newName = ref("");
const renameForm = ref(false);
const renaming = ref(false);
function renameParty() {
  if (!renameForm.value) return;
  party.value.name = newName.value;
  renaming.value = false;
}
function required(v: any) {
  return !!v || "Name cannot be empty.";
}
</script>
