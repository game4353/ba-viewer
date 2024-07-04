<template>
  <router-link :to="`${$route.fullPath}/bonus`">
    <v-card> ボーナス生徒 </v-card>
  </router-link>
  <router-link :to="`${$route.fullPath}/shop`">
    <v-card> shop </v-card>
  </router-link>
  <router-link :to="`${$route.fullPath}/stage`">
    <v-card> stage </v-card>
  </router-link>
  <router-link :to="`${$route.fullPath}/reward`">
    <v-card> reward </v-card>
  </router-link>
</template>

<script setup lang="ts"></script>
