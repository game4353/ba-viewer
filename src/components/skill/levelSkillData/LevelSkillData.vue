<template>
  <div>
    <div v-if="Object.keys(misc).length > 0">{{ misc }}</div>
    <div v-if="mainEntity">
      <br />
      Main Entity:<br />
      {{ mainEntity }}
    </div>
    <div v-for="(o, i) in data?.EntityTimeline ?? {}" :key="i">
      <br />
      EntityTimeline{{ i + 1 }}:<br />
      <SkillEntity :tl="o" />
    </div>
    <SkillPhaseData :data />
    <SkillTarget :sort="data.TargetSortRule" />
    <SkillShotFrames :data />
  </div>
</template>

<script setup lang="ts">
import { tidyGeneralEntity } from "../entity/timeline";
import { getLevelSkillData } from "./levelSkillData";

const props = defineProps({
  group: {
    type: String,
    required: true,
  },
});

const data = computed(() => getLevelSkillData(props.group));
const mainEntity = computed(() => {
  const e = data.value?.MainEntityData;
  if (e == null) return null;
  return tidyGeneralEntity(e, {});
});

// TODO:
// AutoUseRule
// InvokerDirection
// InvokerDirectionWorldPosition
// ExclusiveIngInvokerDirectionOverride
// ExclusiveIngInvokerDirectionOverrideWorldPosition
const misc = computed(() => {
  const skill = data.value;
  if (skill == null) return {};
  const out: any = {};
  if (skill.SkillTargetType != null)
    out["SkillTargetType"] = skill.SkillTargetType;
  if (skill.DistributeType !== 0) out["DistributeType"] = skill.DistributeType;
  if (skill.Range !== 0) out["Range"] = skill.Range;
  if (skill.Angle !== 0) out["Angle"] = skill.Angle;
  if (skill.CheckCanUseSkillPoint)
    out["CheckCanUseSkillPoint"] = skill.CheckCanUseSkillPoint;
  if (skill.IsWeaponMountAfterSkill)
    out["IsWeaponMountAfterSkill"] = skill.IsWeaponMountAfterSkill;
  if (skill.Duration !== 2147483647) out["Duration"] = skill.Duration;
  if (skill.RootMotionMoveData != null)
    out["RootMotionMoveData"] = skill.RootMotionMoveData;
  if (skill.SkipAttackEnterAfterRootMotion)
    out["SkipAttackEnterAfterRootMotion"] =
      skill.SkipAttackEnterAfterRootMotion;
  if (skill.MinRange !== 0) out["MinRange"] = skill.MinRange;
  if (skill.hideFlags !== 0) out["hideFlags"] = skill.hideFlags;
  return out;
});
</script>
