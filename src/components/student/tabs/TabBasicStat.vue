<template>
  <v-expansion-panel v-if="student">
    <v-expansion-panel-title>
      <div class="flex flex-row gap-2">
        <v-sheet>
          <v-row>
            <!-- TODO -->
            <!-- has: bonds lv wpn equip gear -->
            <!-- no: skill -->
            <v-col>
              HP
              {{
                student
                  .baseStats()
                  .getResult(StatType.MaxHP)
                  .andThen((res) => res)
                  .andThen((statBase) => statBase.getValue().value)
                  .unwrapOrElse(errHandle)
              }}
            </v-col>
            <v-col> Lv. {{ student.statNow.break1 }} </v-col>
            <v-col>
              攻撃力
              {{
                student
                  .baseStats()
                  .getResult(StatType.AttackPower)
                  .andThen((res) => res)
                  .andThen((statBase) => statBase.getValue().value)
                  .unwrapOrElse(errHandle)
              }}
            </v-col>
            <v-col> Lv. {{ student.statNow.break2 }} </v-col>
          </v-row>
          <v-row>
            <v-col>
              防御力
              {{
                student
                  .baseStats()
                  .getResult(StatType.DefensePower)
                  .andThen((res) => res)
                  .andThen((statBase) => statBase.getValue().value)
                  .unwrapOrElse(errHandle)
              }}
            </v-col>
            <v-col> </v-col>
            <v-col>
              治癒力
              {{
                student
                  .baseStats()
                  .getResult(StatType.HealPower)
                  .andThen((res) => res)
                  .andThen((statBase) => statBase.getValue().value)
                  .unwrapOrElse(errHandle)
              }}
            </v-col>
            <v-col> Lv. {{ student.statNow.break3 }} </v-col>
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
</template>

<script setup lang="ts">
import { StatType } from "@/assets/game/types/flatDataExcel";
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
</script>
