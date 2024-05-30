<template>
  <router-link :to="`${$route.fullPath}/bonus`">
    <v-card> bonus </v-card>
  </router-link>
  <router-link :to="`${$route.fullPath}/shop`">
    <v-card> shop </v-card>
  </router-link>
</template>

<script setup lang="ts"></script>
