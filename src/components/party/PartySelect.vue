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
      v-model="selectedPartyId"
      hide-details
    ></v-select>
  </div>

  <v-dialog v-model="renaming" max-width="320">
    <v-card
      prepend-icon="mdi-human-female-female"
      :title="`Rename ${partyList[partyId].title}`"
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
import { usePartyStore } from "@/stores/party";

const party = usePartyStore();
if (party.amount === 0) party.newParty();

const selectedPartyId = ref(0);
const partyId = computed(() => {
  if (selectedPartyId.value >= party.amount) party.newParty();
  return selectedPartyId.value;
});
const partyList = computed(() => {
  const arr = party.party.map((v, i) => ({
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
  party.updateParty(partyId.value, { name: newName.value });
  renaming.value = false;
}
function required(v: any) {
  return !!v || "Name cannot be empty.";
}

defineExpose({ partyId });
</script>
