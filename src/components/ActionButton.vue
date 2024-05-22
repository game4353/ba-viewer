<template>
  <v-btn :prepend-icon="icon" @click.stop="wrapped"> {{ label }} </v-btn>
  <v-snackbar v-model="actionSuccess" :timeout="3000" color="success">
    {{ success }}
    <template v-slot:actions>
      <v-btn variant="text" @click="actionSuccess = false"> Close </v-btn>
    </template>
  </v-snackbar>
  <v-snackbar v-model="actionFailed" :timeout="3000" color="error">
    {{ failed }}
    <template v-slot:actions>
      <v-btn variant="text" @click="actionFailed = false"> Close </v-btn>
    </template>
  </v-snackbar>
</template>

<script lang="ts" setup>
const props = defineProps({
  success: {
    type: String,
    required: true,
  },
  failed: {
    type: String,
    required: true,
  },
  action: {
    type: Function,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});

const actionSuccess = ref(false);
const actionFailed = ref(false);
async function wrapped() {
  try {
    await props.action();
    actionSuccess.value = true;
  } catch (error: unknown) {
    if (error instanceof Error) console.error(error.message);
    actionFailed.value = true;
  }
}
</script>
