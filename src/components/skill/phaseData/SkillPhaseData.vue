<template>
  <v-dialog v-if="table">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        prepend-icon="mdi-table-large"
        text="Show Phase"
        v-bind="activatorProps"
      ></v-btn>
    </template>

    <template v-slot:default="{}">
      <v-table>
        <thead>
          <tr>
            <th class="text-left"></th>
            <th class="text-left" v-for="key in NormalAttackPhaseNameList" :key>
              {{ key }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(a, b) in table" :key="b">
            <td>{{ b }}</td>
            <td v-for="key in NormalAttackPhaseNameList" :key>
              <div v-if="Array.isArray(a[key])">
                <p class="whitespace-nowrap" v-for="p in a[key]" :key="p">
                  {{ p }}
                </p>
              </div>
              <div v-else>{{ a[key] ?? "" }}</div>
            </td>
          </tr>
        </tbody>
      </v-table>
    </template>
  </v-dialog>
</template>

<script lang="ts" setup>
import { NormalAttackPhaseNameList, tidyPhaseData } from "./phaseData";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const table = tidyPhaseData(props.data.PhaseData, props.data.AnimationFrames);
</script>
