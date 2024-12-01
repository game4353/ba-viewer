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
        <div class="font-weight-black">
          {{ skill.name.unwrapOrElse(errHandle) }}
        </div>
        <v-card-subtitle>
          <div class="flex flex-row gap-2">
            <span class="text-sm" v-if="lv != null">LV {{ lv }}</span>
            <span class="text-sm" v-if="cost"> cost {{ cost }} </span>
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
import { ERR_HANDLE } from "../warn/error";
import { CSkill } from "./skill";

const props = defineProps({
  sid: {
    type: String,
    required: true,
  },
  lv: Number,
  type: Number as PropType<BulletType>,
  layout: String as PropType<"icon" | "default" | "full">,
  normalAttack: Boolean,
});
const errHandle = inject(ERR_HANDLE)!;

const skill = computed(() => new CSkill(props.sid));
const desc = ref("");
watchEffect(() => {
  if (props.lv != null) skill.value.level = props.lv;
  desc.value = skill.value.desc.unwrapOrElse(errHandle) ?? "";
});
const cost = computed(() => skill.value.obj.unwrapOrElse(errHandle)?.SkillCost);
</script>
