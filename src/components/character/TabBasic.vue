<template>
  <v-card style="margin: auto" width="600">
    <v-card-text>
      <Slider name="Lv" keys="lv" :cid="cid"></Slider>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-title>
            <Slider
              name="★"
              keys="star"
              :cid="cid"
              :init="data.DefaultStarGrade"
            ></Slider
          ></v-expansion-panel-title>
          <v-expansion-panel-text>
            <Slider name="Weapon" keys="weapon" :cid="cid"></Slider
          ></v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
      <Slider name="❤" keys="bond" :cid="cid"></Slider>
      <Slider name="EX" keys="skill0" :cid="cid"></Slider>
      <Slider name="skill1" keys="skill1" :cid="cid"></Slider>
      <Slider name="skill2" keys="skill2" :cid="cid"></Slider>
      <Slider name="skill3" keys="skill3" :cid="cid"></Slider>
      <v-expansion-panels>
        <v-expansion-panel>
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
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { useCharaStore } from "@/stores/personal";
import { CharacterExcel } from "~game/type/excel";
import { default as excel } from "~game/excel/characterexceltable.json";

const props = defineProps({
  cid: {
    type: Number,
    required: true,
  },
});

const data = (excel as CharacterExcel[]).find((o) => o.Id === props.cid)!;
if (data == null)
  console.error(`Cannot find ${props.cid} in character excel table.`);

const chara = useCharaStore(props.cid).now();
</script>
