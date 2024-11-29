<template>
  <v-card v-if="chara?.isOk()" style="margin: auto" width="600">
    <v-card-text>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-title>
            <div class="flex flex-row gap-2">
              <MyCharacter :cid :scale="0.4" />
            </div>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <Slider name="Lv" keys="lv" :cid />
            <Slider
              name="★"
              keys="star"
              :cid
              :init="chara.unwrap().obj.DefaultStarGrade"
            />
            <Slider name="Weapon" keys="weapon" :cid />
            <Slider name="❤" keys="bond" :cid />
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>
            <div class="flex flex-row gap-2">
              <v-sheet>
                <v-row>
                  <!-- TODO -->
                  <!-- has: bonds lv wpn equip gear -->
                  <!-- no: skill -->
                  <v-col> HP {{ charaParam.baseHP }} </v-col>
                  <v-col> Lv. {{ charaParam.break1 }} </v-col>
                  <v-col> 攻撃力 {{ charaParam.baseATK }} </v-col>
                  <v-col> Lv. {{ charaParam.break2 }} </v-col>
                </v-row>
                <v-row>
                  <v-col> 防御力 {{ charaParam.baseDEF }} </v-col>
                  <v-col> </v-col>
                  <v-col> 治癒力 {{ charaParam.baseHEA }} </v-col>
                  <v-col> Lv. {{ charaParam.break3 }} </v-col>
                </v-row>
              </v-sheet>
            </div>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <Slider name="最大HP" keys="break1" :cid />
            <Slider name="攻撃力" keys="break2" :cid />
            <Slider name="治癒力" keys="break3" :cid />
          </v-expansion-panel-text>
        </v-expansion-panel>
        <TabBasicSkill :cid />
        <v-expansion-panel>
          <v-expansion-panel-title>
            <v-container>
              <v-row>
                <v-col>
                  <Equip
                    :category="chara.unwrap().obj.EquipmentSlot[0]"
                    :tier="charaParam.gear1"
                  />
                </v-col>
                <v-col>
                  <Equip
                    :category="chara.unwrap().obj.EquipmentSlot[1]"
                    :tier="charaParam.gear2"
                  />
                </v-col>
                <v-col>
                  <Equip
                    :category="chara.unwrap().obj.EquipmentSlot[2]"
                    :tier="charaParam.gear3"
                  />
                </v-col>
                <v-col><Gear :cid /></v-col>
              </v-row>
            </v-container>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <Slider name="gear1" keys="gear1" :cid />
            <Slider name="gear1lv" keys="gear1lv" :cid />
            <Slider name="gear2" keys="gear2" :cid />
            <Slider name="gear2lv" keys="gear2lv" :cid />
            <Slider name="gear3" keys="gear3" :cid />
            <Slider name="gear3lv" keys="gear3lv" :cid />
            <Slider name="gear0" keys="gear0" :cid />
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { useCharaStore } from "@/stores/character";
import { useCharacter } from "../parcel/character/character";

const props = defineProps({
  cid: {
    type: Number,
    required: true,
  },
});

const chara = useCharacter(props.cid);
const charaParam = useCharaStore(props.cid).now();
</script>
