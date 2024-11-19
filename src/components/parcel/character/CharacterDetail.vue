<template>
  <div v-if="picked != null">
    <v-card class="mx-auto">
      <template v-slot:title>
        <span class="font-weight-black">{{ picked.name }}</span>
      </template>
      <template v-slot:prepend>
        <Parcel :type="ParcelType.Character" :pid :scaledW="80" />
      </template>
      <div class="flex flex-col gap-2">
        <div class="flex flex-row gap-4 mx-2">
          <v-chip v-if="skill?.TSAInteractionId !== 0">
            TSA:{{ skill?.TSAInteractionId }}
          </v-chip>
          <v-chip v-if="skill?.IsRootMotion"> RootMotion </v-chip>
          <v-chip v-if="skill?.IsMoveLeftRight"> MoveLeftRight </v-chip>
          <v-chip v-if="skill?.UseRandomExSkillTimeline">
            RandomExSkillTimeline
          </v-chip>
        </div>
        <div class="flex flex-row items-center">
          <v-checkbox
            v-if="weapon2valid"
            v-model="weapon2"
            label="武器2"
          ></v-checkbox>
          <v-checkbox
            v-if="gear2valid"
            v-model="gear2"
            label="愛用品2"
          ></v-checkbox>
          <v-slider
            class="mx-8"
            v-model="form"
            label="FORM"
            show-ticks="always"
            :ticks="Array.from({ length: forms }).map((_, i) => i)"
            step="1"
            :max="forms - 1"
          ></v-slider>
        </div>
        <v-card-text class="bg-surface-light pt-4" v-if="normalAttack">
          <div class="big">通常攻撃</div>
          <template v-for="s in normalAttack" :key="s">
            <Skill :sid="s" normalAttack />
          </template>
        </v-card-text>
        <v-card-text class="bg-surface-light pt-4" v-if="skillEx">
          <div class="big">EXスキル</div>
          <div v-for="(s, i) in skillEx" :key="s + i">
            <div v-if="s === 'EmptySkill'">N/A</div>
            <Skill v-else :sid="s" layout="full" />
          </div>
        </v-card-text>
        <v-card-text class="bg-surface-light pt-4" v-if="skillNs">
          <div class="big">ノーマルスキル</div>
          <Skill v-for="s in skillNs" :key="s" :sid="s" layout="full" />
        </v-card-text>
        <v-card-text class="bg-surface-light pt-4" v-if="skillPs">
          <div class="big">パッシブスキル</div>
          <Skill
            v-for="(s, i) in skillPs"
            :key="s + i"
            :sid="s"
            layout="full"
          />
        </v-card-text>
        <v-card-text class="bg-surface-light pt-4" v-if="skillSs">
          <div class="big">サブスキル</div>
          <Skill v-for="s in skillSs" :key="s" :sid="s" layout="full" />
        </v-card-text>
        <v-card-text class="bg-surface-light pt-4" v-if="skillHs">
          <div class="big">隠しスキル</div>
          <Skill v-for="s in skillHs" :key="s" :sid="s" layout="full" />
        </v-card-text>
        <!-- <v-card-text class="bg-surface-light pt-4">
          {{ picked.obj }}{{ picked.costume }}
        </v-card-text> -->
      </div>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { getSkillListFull } from "@/components/skill/skillList";
import { characterDict } from "../character";
import { ParcelType } from "~game/types/flatDataExcel";

const props = defineProps({
  pid: {
    type: [String, Number],
    required: true,
  },
});

const weapon2 = ref(false);
const weapon2valid = ref(false);
const tsaInteractions = ref([0]);
const tsaInteraction = ref(0);
const gear2 = ref(false);
const gear2valid = ref(false);
const form = ref(0);
const forms = ref(0);

const picked = computed(() => {
  return characterDict[props.pid];
});
const skills = computed(() => {
  const sid = picked.value?.id;
  if (sid == null) return null;
  return getSkillListFull(sid);
});
const skill = computed(() => {
  const obj1 = skills.value;
  if (obj1 == null) return null;
  tsaInteractions.value = Object.keys(obj1).map(Number);
  if (!tsaInteractions.value.includes(tsaInteraction.value))
    tsaInteraction.value = tsaInteractions.value[0];
  const obj2 = obj1[tsaInteraction.value];
  weapon2valid.value = obj2[2] != null;
  if (weapon2valid.value == false) weapon2.value = false;
  const obj3 = obj2[weapon2.value ? 2 : 0];
  gear2valid.value = obj3[2] != null;
  if (gear2valid.value == false) gear2.value = false;
  const arr = obj3[gear2.value ? 2 : 0];
  forms.value = arr.length;
  if (form.value >= forms.value) form.value = 0;
  return arr[form.value];
});
const skillEx = computed(() => {
  const a = skill.value?.ExSkillGroupId ?? [];
  if (a.length === 0) return null;
  return a;
});
const skillNs = computed(() => {
  const a = skill.value?.PublicSkillGroupId ?? [];
  if (a.length === 0) return null;
  return a;
});
const skillPs = computed(() => {
  const a = skill.value?.PassiveSkillGroupId ?? [];
  if (a.length === 0) return null;
  return a;
});
const skillSs = computed(() => {
  const a = skill.value?.ExtraPassiveSkillGroupId ?? [];
  if (a.length === 0) return null;
  return a;
});
const skillHs = computed(() => {
  const a = skill.value?.HiddenPassiveSkillGroupId ?? [];
  if (a.length === 0) return null;
  return a;
});
const normalAttack = computed(() => {
  const a = skill.value?.NormalSkillGroupId ?? [];
  if (a.length === 0) return null;
  return a;
});
</script>

<style lang="scss" scoped>
.big {
  @apply text-xl mb-2;
}
</style>
