<template>
  <v-expansion-panel v-if="chara">
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
                chara
                  .baseStats()
                  .getResult(StatType.MaxHP)
                  .andThen((res) => res)
                  .andThen((statBase) => statBase.getValue().value)
                  .unwrapOrElse(errHandle)
              }}
            </v-col>
            <v-col> Lv. {{ charaParam.break1 }} </v-col>
            <v-col>
              攻撃力
              {{
                chara
                  .baseStats()
                  .getResult(StatType.AttackPower)
                  .andThen((res) => res)
                  .andThen((statBase) => statBase.getValue().value)
                  .unwrapOrElse(errHandle)
              }}
            </v-col>
            <v-col> Lv. {{ charaParam.break2 }} </v-col>
          </v-row>
          <v-row>
            <v-col>
              防御力
              {{
                chara
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
                chara
                  .baseStats()
                  .getResult(StatType.HealPower)
                  .andThen((res) => res)
                  .andThen((statBase) => statBase.getValue().value)
                  .unwrapOrElse(errHandle)
              }}
            </v-col>
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
</template>

<script setup lang="ts">
import { StatType } from "@/assets/game/types/flatDataExcel";
import { ERR_HANDLE } from "@/components/warn/error";
import { useCharaStore } from "@/stores/character";
import { useCharacter } from "../../parcel/character/character";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  cid: {
    type: Number,
    required: true,
  },
});

const chara = computed(() =>
  useCharacter(props.cid).value.unwrapOrElse(errHandle),
);
const charaParam = useCharaStore(props.cid).now();
</script>
