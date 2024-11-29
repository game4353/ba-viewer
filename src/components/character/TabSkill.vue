<template>
  <div class="w-[560px]">
    <div v-if="chara" class="flex flex-col gap-1">
      <Skill
        v-if="skillEX"
        :sid="skillEX"
        :type="chara.obj.BulletType"
        :lv="charaNow.skill0.value"
        layout="default"
      />
      <Skill
        v-if="skillNS"
        :sid="skillNS"
        :type="chara.obj.BulletType"
        :lv="charaNow.skill1.value"
        layout="default"
      />
      <Skill
        v-if="skillPS"
        :sid="skillPS"
        :type="chara.obj.BulletType"
        :lv="charaNow.skill2.value"
        layout="default"
      />
      <Skill
        v-if="skillSS"
        :sid="skillSS"
        :type="chara.obj.BulletType"
        :lv="charaNow.skill3.value"
        layout="default"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCharaStore } from "@/stores/character";
import { storeToRefs } from "pinia";
import { useCharacter } from "../parcel/character/character";
import { useSkillList } from "../skill/skillList";
import { ERR_HANDLE } from "../warn/error";
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
