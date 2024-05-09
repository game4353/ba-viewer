<template>
  <v-card style="margin: auto" width="400">
    <v-responsive
      :style="{ background: `rgb(100, 46, 140)` }"
      height="300px"
    ></v-responsive>

    <v-card-text>
      <Slider name="Lv" keys="lv" :cid="cid"></Slider>
      <Slider name="★" keys="star" :cid="cid"></Slider>
      <Slider name="Weapon" keys="weapon" :cid="cid"></Slider>
      <Slider name="bond" keys="bond" :cid="cid"></Slider>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const cid = Number(useRoute().params.id);
</script>

<style scoped lang="scss"></style>
