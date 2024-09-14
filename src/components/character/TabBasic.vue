<template>
  <v-card style="margin: auto" width="600">
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
              :init="chara.obj.DefaultStarGrade"
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
        <v-expansion-panel>
          <v-expansion-panel-title>
            SKILL
            <div class="flex flex-row w-full justify-evenly">
              <div class="w-1/4 max-w-16" v-for="([n, v], key) in skills" :key>
                <Skill
                  :sid="n"
                  :type="chara.obj.BulletType"
                  :lv="v"
                  layout="icon"
                />
              </div>
            </div>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <Slider name="EX" keys="skill0" :cid />
            <Slider name="skill1" keys="skill1" :cid />
            <Slider name="skill2" keys="skill2" :cid />
            <Slider name="skill3" keys="skill3" :cid />
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>
            <v-container>
              <v-row>
                <v-col>
                  <Equip
                    :category="chara.obj.EquipmentSlot[0]"
                    :tier="charaParam.gear1"
                  />
                </v-col>
                <v-col>
                  <Equip
                    :category="chara.obj.EquipmentSlot[1]"
                    :tier="charaParam.gear2"
                  />
                </v-col>
                <v-col>
                  <Equip
                    :category="chara.obj.EquipmentSlot[2]"
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
import { characterDict } from "../parcel/character";
import { ASSERT_SOME } from "../warn/error";
import { getSkillList } from "../skill/skillList";
import { storeToRefs } from "pinia";

const assertSome = inject(ASSERT_SOME)!;

const props = defineProps({
  cid: {
    type: Number,
    required: true,
  },
});

const chara = computed(() =>
  assertSome(
    characterDict[props.cid],
    501,
    `Unable to find ${props.cid} in character excel table.`,
  ),
);
const store = useCharaStore(props.cid);
const charaNow = storeToRefs(store.now());
const charaParam = useCharaStore(props.cid).now();

const skillList = computed(() => {
  return getSkillList(
    props.cid,
    charaParam.star > 6 ? 2 : 0,
    charaParam.gear0 > 1 ? 2 : 0,
    0,
  );
});
const skillEX = computed(() => skillList.value?.ExSkillGroupId?.at(0));
const skillNS = computed(() => skillList.value?.PublicSkillGroupId?.at(0));
const skillPS = computed(() => skillList.value?.PassiveSkillGroupId?.at(0));
const skillSS = computed(() =>
  skillList.value?.ExtraPassiveSkillGroupId?.at(0),
);
const skills = computed<[string, number][]>(() => [
  [skillEX.value ?? "", charaNow.skill0.value],
  [skillNS.value ?? "", charaNow.skill1.value],
  [skillPS.value ?? "", charaNow.skill2.value],
  [skillSS.value ?? "", charaNow.skill3.value],
]);
</script>
