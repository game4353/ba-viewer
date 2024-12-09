<template>
  <v-expansion-panel>
    <v-expansion-panel-title>
      SKILL
      <div class="flex flex-row w-full justify-evenly" v-if="chara">
        <Skill
          class="w-1/4 max-w-16"
          v-if="skillEX"
          :sid="skillEX"
          :type="chara.obj.BulletType"
          :lv="charaNow.skill0.value"
          layout="icon"
        />
        <Skill
          class="w-1/4 max-w-16"
          v-if="skillNS"
          :sid="skillNS"
          :type="chara.obj.BulletType"
          :lv="charaNow.skill1.value"
          layout="icon"
        />
        <Skill
          class="w-1/4 max-w-16"
          v-if="skillPS"
          :sid="skillPS"
          :type="chara.obj.BulletType"
          :lv="charaNow.skill2.value"
          layout="icon"
        />
        <Skill
          class="w-1/4 max-w-16"
          v-if="skillSS"
          :sid="skillSS"
          :type="chara.obj.BulletType"
          :lv="charaNow.skill3.value"
          layout="icon"
        />
      </div>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <Slider name="EX" keys="skill0" :cid />
      <Slider name="skill1" keys="skill1" :cid />
      <Slider name="skill2" keys="skill2" :cid />
      <Slider name="skill3" keys="skill3" :cid />
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script setup lang="ts">
import { useCharaStore } from "@/stores/character";
import { storeToRefs } from "pinia";
import { useCharacter } from "~/components/parcel/character/character";
import { useSkillList } from "~/components/skill/skillList";
import { ERR_HANDLE } from "~/components/warn/error";
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
const store = useCharaStore(props.cid);
const charaNow = storeToRefs(store.now());

const skillList = useSkillList(
  props.cid,
  charaNow.star.value > 6 ? 2 : 0,
  charaNow.gear0.value > 1 ? 2 : 0,
);
const skillEX = computed(
  () => skillList.value.unwrapOrElse(errHandle)?.ExSkillGroupId[0],
);
const skillNS = computed(
  () => skillList.value.unwrapOrElse(errHandle)?.PublicSkillGroupId[0],
);
const skillPS = computed(
  () => skillList.value.unwrapOrElse(errHandle)?.PassiveSkillGroupId[0],
);
const skillSS = computed(
  () => skillList.value.unwrapOrElse(errHandle)?.ExtraPassiveSkillGroupId[0],
);
</script>
