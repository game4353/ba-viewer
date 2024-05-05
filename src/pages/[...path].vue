<template>
  <v-container class="flex flex-col justify-center items-center gap-10">
    <div class="text-3xl">404 - Page Not Found</div>
    <p>
      The requested URL <strong>{{ $route.fullPath }}</strong> was not found on
      this server.
    </p>
    <v-img :width="300" src="@/assets/404.png"></v-img>
  </v-container>
</template>
