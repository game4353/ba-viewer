<template>
  {{ group }}
  <Loading v-if="data == null" />
  <ManualSkill v-else-if="data.$type === 'ManualSkill'" :data :lv />
  <NormalAttackSkillAction
    v-else-if="data.$type === 'NormalAttackSkillAction'"
    :data
    :lv
  />
  <TimelineSkillAction
    v-else-if="data.$type === 'TimelineSkillAction'"
    :data
    :lv
  />
  <PassiveSkill v-else-if="data.$type === 'PassiveSkill'" :data :lv />
  <NewSkillAction v-else-if="data.$type === 'NewSkillAction'" :data :lv />
</template>

<script setup lang="ts">
import { ERR_HANDLE } from "@/components/warn/error";
import { NotImplementErr } from "@/utils/result/error";
import { Err, Ok } from "@/utils/result/result";
import { getLevelSkillData } from "./levelSkillData";
import { SkillLogicSchema } from "./schema";
const errHandle = inject(ERR_HANDLE)!;

const props = defineProps({
  group: {
    type: String,
    required: true,
  },
  lv: Number,
});

const data = computed(() =>
  getLevelSkillData(props.group)
    .andThen2((v) => {
      const res = SkillLogicSchema.safeParse(v);
      if (res.success) return Ok(res.data);
      console.error(res.error);
      return Err(NotImplementErr.from(`Skill group "${props.group}"`));
    })
    .unwrapOrElse(errHandle),
);
const lv = props.lv ?? 1;
</script>
