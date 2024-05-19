<template>{{}}</template>

<script setup lang="ts">
import type { EventContentSeasonExcel } from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/EventContentSeasonExcelTable.json";

const events = DataList as EventContentSeasonExcel[];
console.log(events);
</script>
