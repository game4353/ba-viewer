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
    <v-radio value="loginSync" :disabled="task === 'export'">
      <template v-slot:label>
        <div>loginSync</div>
      </template>
    </v-radio>
    <v-radio value="justin163" :disabled="task === 'export'">
      <template v-slot:label>
        <div>justin163</div>
      </template>
    </v-radio>
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
import {
  exportV0,
  importJustin,
  importLoginSync,
  importVx,
} from "@/stores/personal";
import { unreachable } from "@/utils/misc";

const task = ref("export");
const format = ref("BA Viewer");
const content = ref("");

function exportData() {
  if (format.value === "BA Viewer") {
    content.value = exportV0();
  } else {
    unreachable();
  }
}
function importData() {
  if (format.value === "BA Viewer") {
    importVx(content.value);
  } else if (format.value === "justin163") {
    importJustin(content.value);
  } else if (format.value === "loginSync") {
    importLoginSync(content.value);
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
