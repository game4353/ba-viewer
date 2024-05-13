<template>
  <v-container>
    <v-row>
      <v-col> <SpineCharacter :paths="paths" /></v-col>
      <v-col>
        <v-card style="margin: auto" width="400">
          <v-card-text>
            <Slider name="Lv" keys="lv" :cid="cid"></Slider>
            <Slider name="★" keys="star" :cid="cid"></Slider>
            <Slider name="Weapon" keys="weapon" :cid="cid"></Slider>
            <Slider name="bond" keys="bond" :cid="cid"></Slider>
            <Slider name="skill0" keys="skill0" :cid="cid"></Slider>
            <Slider name="skill1" keys="skill1" :cid="cid"></Slider>
            <Slider name="skill2" keys="skill2" :cid="cid"></Slider>
            <Slider name="skill3" keys="skill3" :cid="cid"></Slider>
            <Slider name="gear1" keys="gear1" :cid="cid"></Slider>
            <Slider name="gear1lv" keys="gear1lv" :cid="cid"></Slider>
            <Slider name="gear2" keys="gear2" :cid="cid"></Slider>
            <Slider name="gear2lv" keys="gear2lv" :cid="cid"></Slider>
            <Slider name="gear3" keys="gear3" :cid="cid"></Slider>
            <Slider name="gear3lv" keys="gear3lv" :cid="cid"></Slider>
            <Slider name="gear0" keys="gear0" :cid="cid"></Slider>
          </v-card-text> </v-card
      ></v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { default as m } from "~game/SpineCharacters.json";
import SpineCharacter from "@/components/character/SpineCharacter.vue";

const id = useRoute().params.id as any as keyof typeof m;
const name = m[id];
const paths = [`/game/SpineCharacters/${name}/${name}.skel`];
const cid = Number(id);
</script>

<style scoped lang="scss"></style>
