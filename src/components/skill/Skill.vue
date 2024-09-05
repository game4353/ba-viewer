<template>
  <SkillIcon v-if="layout === 'icon'" :path="skill.iconPath" :type />
  <div v-else>
    <v-card>
      <template v-slot:prepend>
        <div class="w-12">
          <SkillIcon :path="skill.iconPath" :type />
        </div>
      </template>

      <template v-slot:title>
        <div class="font-weight-black">{{ skill.name }}</div>
        <v-card-subtitle>
          <div class="flex flex-row gap-2">
            <span class="text-sm" v-if="lv != null">LV {{ lv }}</span>
            <span class="text-sm" v-if="skill.rawExcel.SkillCost > 0">
              cost {{ skill.rawExcel.SkillCost }}
            </span>
          </div>
        </v-card-subtitle>
      </template>

      <v-card-text class="bg-surface-light pt-4">
        <div class="flex flex-col gap-2">
          <RichText :text="desc" />
          <template v-if="layout === 'full'">
            <v-divider></v-divider>
            <LevelSkillData :group="sid" />
          </template>
        </div>
      </v-card-text>
    </v-card>

    <div></div>
  </div>
</template>

<script setup lang="ts">
import { BulletType } from "@/assets/game/types/flatDataExcel";
import { CSkill } from "./skill";

const props = defineProps({
  sid: {
    type: String,
    required: true,
  },
  lv: Number,
  type: String as PropType<keyof typeof BulletType>,
  layout: String as PropType<"icon" | "default" | "full">,
  normalAttack: Boolean,
});

const skill = computed(() => new CSkill(props.sid));
const desc = ref("");
watchEffect(() => {
  if (props.lv != null) skill.value.level = props.lv;
  desc.value = skill.value.desc;
});
</script>
