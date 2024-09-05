<template>
  <div class="w-[560px]">
    <div class="flex flex-col gap-1">
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

const skillList = computed(() => {
  return getSkillList(
    props.cid,
    charaNow.star.value > 6 ? 2 : 0,
    charaNow.gear0.value > 1 ? 2 : 0,
  );
});
const skillEX = computed(() => skillList.value?.ExSkillGroupId?.at(0));
const skillNS = computed(() => skillList.value?.PublicSkillGroupId?.at(0));
const skillPS = computed(() => skillList.value?.PassiveSkillGroupId?.at(0));
const skillSS = computed(() =>
  skillList.value?.ExtraPassiveSkillGroupId?.at(0),
);
</script>
