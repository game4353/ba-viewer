<template>
  <WIP />
  <BG :path="bgPath">
    <v-container>
      <v-row>
        <v-col> <SpineCharacter :paths="paths" /></v-col>
        <v-col>
          <v-card style="margin: auto" width="600">
            <v-card-text>
              <Slider name="Lv" keys="lv" :cid="cid"></Slider>
              <Slider name="★" keys="star" :cid="cid"></Slider>
              <Slider name="Weapon" keys="weapon" :cid="cid"></Slider>
              <Slider
                name="bond"
                keys="bond"
                :cid="cid"
                :max="bondMax"
              ></Slider>
              <Slider name="skill0" keys="skill0" :cid="cid"></Slider>
              <Slider name="skill1" keys="skill1" :cid="cid"></Slider>
              <Slider name="skill2" keys="skill2" :cid="cid"></Slider>
              <Slider name="skill3" keys="skill3" :cid="cid"></Slider>
              <v-expansion-panels>
                <v-expansion-panel readonly>
                  <v-expansion-panel-title>
                    <v-container>
                      <v-row>
                        <v-col>
                          <Equipment
                            :category="data.EquipmentSlot[0]"
                            :tier="chara.gear1"
                          />
                        </v-col>
                        <v-col>
                          <Equipment
                            :category="data.EquipmentSlot[1]"
                            :tier="chara.gear2"
                          />
                        </v-col>
                        <v-col>
                          <Equipment
                            :category="data.EquipmentSlot[2]"
                            :tier="chara.gear3"
                          />
                        </v-col>
                        <v-col><Gear :cid="cid" /></v-col>
                      </v-row>
                    </v-container>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <Slider name="gear1" keys="gear1" :cid="cid"></Slider>
                    <Slider name="gear1lv" keys="gear1lv" :cid="cid"></Slider>
                    <Slider name="gear2" keys="gear2" :cid="cid"></Slider>
                    <Slider name="gear2lv" keys="gear2lv" :cid="cid"></Slider>
                    <Slider name="gear3" keys="gear3" :cid="cid"></Slider>
                    <Slider name="gear3lv" keys="gear3lv" :cid="cid"></Slider>
                    <Slider name="gear0" keys="gear0" :cid="cid"></Slider>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-text> </v-card
        ></v-col>
      </v-row>
    </v-container>
  </BG>
</template>

<script setup lang="ts">
import { useCharaStore } from "@/stores/personal";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { default as m } from "~game/SpineCharacters.json";
import SpineCharacter from "@/components/character/SpineCharacter.vue";
import { CharacterExcel, CostumeExcel } from "~game/type/excel";
import { default as excel } from "~game/excel/characterexceltable.json";
import { default as excel2 } from "~game/excel/costumeexceltable.json";

const id = useRoute().params.id as any as keyof typeof m;
const name = m[id];
const paths = [`/game/SpineCharacters/${name}/${name}.skel`];
const cid = Number(id);

const data = excel.find((o) => o.Id === cid) as CharacterExcel;
const data2 = excel2.find((o) => o.CostumeGroupId === cid) as CostumeExcel;

const bgPath = data2.CollectionBGTexturePath;
const chara = useCharaStore(cid).now();
const bondMax = computed(() => {
  if (chara.star < 3) return 10;
  if (chara.star < 5) return 20;
  return 100;
});
const disS2 = computed(() => chara.star < 2);
const disS3 = computed(() => chara.star < 3);
const disG2 = computed(() => chara.lv < 15);
const disG3 = computed(() => chara.lv < 35);
const disW = computed(() => chara.star < 5);
</script>

<style scoped lang="scss">
.bg {
  background-image: url("path/to/your/image.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
}
</style>
