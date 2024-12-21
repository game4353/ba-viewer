<template>
  <v-card v-if="student" style="margin: auto">
    <v-card-text>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-title>
            <div class="flex flex-row gap-2">
              <MyCharacter :cid :scaling="{ r: 0.4 }" />
            </div>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <Slider name="Lv" keys="lv" :cid />
            <Slider
              name="★"
              keys="star"
              :cid
              :init="student.obj.DefaultStarGrade"
            />
            <Slider name="Weapon" keys="weapon" :cid />
            <Slider name="❤" keys="bond" :cid />
          </v-expansion-panel-text>
        </v-expansion-panel>
        <TabBasicStat :cid />
        <TabBasicSkill :cid />
        <v-expansion-panel>
          <v-expansion-panel-title>
            <v-container>
              <v-row>
                <v-col>
                  <Equip
                    :category="student.obj.EquipmentSlot[0]"
                    :tier="student.statNow.gear1"
                  />
                </v-col>
                <v-col>
                  <Equip
                    :category="student.obj.EquipmentSlot[1]"
                    :tier="student.statNow.gear2"
                  />
                </v-col>
                <v-col>
                  <Equip
                    :category="student.obj.EquipmentSlot[2]"
                    :tier="student.statNow.gear3"
                  />
                </v-col>
                <v-col><Gear v-if="gear" :cid /></v-col>
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
            <Slider v-if="gear" name="gear0" keys="gear0" :cid />
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { useStudent } from "@/components/student/student";
import { ERR_HANDLE } from "@/components/warn/error";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  cid: {
    type: Number,
    required: true,
  },
});

const student = computed(() =>
  useStudent(props.cid).value.unwrapOrElse(errHandle),
);
const gear = computed(() => student.value?.useGear().unwrapOrElse(errHandle));
</script>
