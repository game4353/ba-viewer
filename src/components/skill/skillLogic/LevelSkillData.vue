<template>
  <div class="flex flex-row gap-2">
    <p class="text-lg">Skill</p>
    <Info>
      <p>Group: {{ group }}</p>
      <p v-for="(str, key) in base?.info" :key>{{ str }}</p>
    </Info>
  </div>
  <Loading v-if="data == null" />
  <ManualSkill v-else-if="data.$type === 'ManualSkill'" :data :lv />
  <NormalAttackSkillAction
    v-else-if="data.$type === 'NormalAttackSkillAction'"
    :data
    :lv
    ref="base"
  />
  <TimelineSkillAction
    v-else-if="data.$type === 'TimelineSkillAction'"
    :data
    :lv
    ref="base"
  />
  <PassiveSkill
    v-else-if="data.$type === 'PassiveSkill'"
    :data
    :lv
    ref="base"
  />
  <NewSkillAction
    v-else-if="data.$type === 'NewSkillAction'"
    :data
    :lv
    ref="base"
  />
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
const lv = computed(() => props.lv ?? 1);
const base = ref();
</script>
