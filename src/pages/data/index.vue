<template>
  <v-radio-group v-model="task" inline>
    <template v-slot:label>
      <div>Task:</div>
    </template>
    <v-radio value="export" @change="format = 'BA Viewer'">
      <template v-slot:label>
        <div>Export</div>
      </template>
    </v-radio>
    <v-radio value="import">
      <template v-slot:label>
        <div>Import</div>
      </template>
    </v-radio>
  </v-radio-group>
  <v-radio-group v-model="format" inline>
    <template v-slot:label>
      <div>Format:</div>
    </template>
    <v-radio value="BA Viewer">
      <template v-slot:label>
        <div>BA Viewer</div>
      </template>
    </v-radio>
    <!-- <v-radio value="loginSync" :disabled="task === 'export'">
      <template v-slot:label>
        <div>loginSync</div>
      </template>
    </v-radio>
    <v-radio value="itemList" :disabled="task === 'export'">
      <template v-slot:label>
        <div>itemList</div>
      </template>
    </v-radio>
    <v-radio value="justin163" :disabled="task === 'export'">
      <template v-slot:label>
        <div>justin163</div>
      </template>
    </v-radio> -->
  </v-radio-group>

  <v-textarea
    class="textarea"
    label="Data"
    variant="outlined"
    v-model="content"
  ></v-textarea>
  <ActionButton
    :action="importData"
    success="Data imported."
    failed="Failed to import data."
    label="IMPORT"
    icon="mdi-import"
  />
  <ActionButton
    :action="exportData"
    success="Data exported."
    failed="Failed to export data."
    label="EXPORT"
    icon="mdi-export"
  />
  <ActionButton
    :action="copy"
    success="Data copied to clipboard."
    failed="Failed to copy data."
    label="COPY"
    icon="mdi-content-copy"
  />
  <ActionButton
    :action="paste"
    success="Data pasted to clipboard."
    failed="Failed to paste data."
    label="PASTE"
    icon="mdi-content-paste"
  />
</template>

<script setup lang="ts">
import { exportAll, importAll } from "@/stores/all";
import { importItemList } from "@/stores/extra/itemList";
import { importJustin } from "@/stores/extra/justin";
import { importLoginSync } from "@/stores/extra/loginSync";
import { unreachable } from "@/utils/misc";

const task = ref("export");
const format = ref("BA Viewer");
const content = ref("");

function exportData() {
  if (format.value === "BA Viewer") {
    content.value = exportAll().unwrap();
  } else {
    unreachable();
  }
}
function importData() {
  if (format.value === "BA Viewer") {
    const res = importAll(content.value);
    res.unwrap();
  } else if (format.value === "justin163") {
    const res = importJustin(content.value);
    res.unwrap();
  } else if (format.value === "loginSync") {
    const res = importLoginSync(content.value);
    res.unwrap();
  } else if (format.value === "itemList") {
    const res = importItemList(content.value);
    res.unwrap();
  } else {
    unreachable();
  }
}
async function copy() {
  await navigator.clipboard.writeText(content.value);
}
async function paste() {
  content.value = await navigator.clipboard.readText();
}
</script>

<style lang="scss" scoped>
.textarea {
  @apply m-3;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
