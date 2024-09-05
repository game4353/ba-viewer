import { getLogicEffect } from "../logicEffect";
import type {
  LevelAreaEntityData,
  LevelAuraEntityData,
  LevelCircleAreaEntityData,
  LevelCircleAuraEntityData,
  LevelDonutAreaEntityData,
  LevelFanAreaEntityData,
  LevelNontargetProjectileEntityData,
  LevelNormalAttackBulletEntityData,
  LevelObbAreaEntityData,
  LevelProjectileEntityData,
  LevelSkillAbilityData,
  LevelSkillEntityData,
  LevelTargetAttachedEntityData,
  LevelTargetProjectileEntityData,
} from "../type";

export function tidyLevelCircleAuraEntityData(
  e: LevelCircleAuraEntityData,
  out: any,
) {
  out["Radius"] = e.Radius;
  return tidyLevelAuraEntityData(e, out);
}
function tidyLevelAuraEntityData(e: LevelAuraEntityData, out: any) {
  out["AttachSpawnTarget"] = e.AttachSpawnTarget;
  out["RemoveEntityIfAttachSpawnTargetDie"] =
    e.RemoveEntityIfAttachSpawnTargetDie;
  out["Duration"] = e.Duration;
  out["Interval"] = e.Interval;
  out["RemoveEntityIfSameEntitySpawn"] = e.RemoveEntityIfSameEntitySpawn;
  out["RemoveEntityIfSkillCancel"] = e.RemoveEntityIfSkillCancel;
  if (e.AreaAbilities != null)
    out["AreaAbilities"] = e.AreaAbilities.map(tidyAbility);
  return tidyLevelSkillEntityData(e, out);
}

export function tidyLevelNontargetProjectileEntityData(
  e: LevelNontargetProjectileEntityData,
  out: any,
) {
  out["AngleOffset"] = e.AngleOffset;
  out["ExpireDistance"] = e.ExpireDistance;
  out["Piercing"] = e.Piercing;
  out["BounceCondition"] = e.BounceCondition;
  if (e.BounceEntity != null)
    out["BounceEntity"] = tidyLevelSkillEntityData(e.BounceEntity, {});
  return tidyLevelProjectileEntityData(e, out);
}

export function tidyLevelTargetSkillEntityData(
  e: LevelTargetProjectileEntityData,
  out: any,
) {
  if (e.Abilities != null) out["Abilities"] = e.Abilities.map(tidyAbility);
  return tidyLevelSkillEntityData(e, out);
}

export function tidyLevelTargetProjectileEntityData(
  e: LevelTargetProjectileEntityData,
  out: any,
) {
  return tidyLevelProjectileEntityData(e, out);
}

export function tidyLevelProjectileEntityData(
  e: LevelProjectileEntityData,
  out: any,
) {
  out["DestinationType"] = e.DestinationType;
  out["ReduceDamageRatePerHit"] = e.ReduceDamageRatePerHit;
  out["MaxReducedDamageRate"] = e.MaxReducedDamageRate;
  out["ProjectileType"] = e.ProjectileType;
  out["ShapeType"] = e.ShapeType;
  out["Width"] = e.Width;
  out["Height"] = e.Height;
  out["Speed"] = e.Speed;
  out["FireDelayFrame"] = e.FireDelayFrame;
  if (e.Abilities != null) out["Abilities"] = e.Abilities.map(tidyAbility);
  return tidyLevelSkillEntityData(e, out);
}

export function tidyLevelCircleAreaEntityData(
  e: LevelCircleAreaEntityData,
  out: any,
) {
  out["Radius"] = e.Radius;
  return tidyLevelAreaEntityData(e, out);
}
export function tidyLevelDonutAreaEntityData(
  e: LevelDonutAreaEntityData,
  out: any,
) {
  out["ExcludeRadius"] = e.ExcludeRadius;
  return tidyLevelFanAreaEntityData(e, out);
}
export function tidyLevelObbAreaEntityData(
  e: LevelObbAreaEntityData,
  out: any,
) {
  out["Width"] = e.Width;
  out["Height"] = e.Height;
  out["AngleOffset"] = e.AngleOffset;
  return tidyLevelAreaEntityData(e, out);
}
export function tidyLevelFanAreaEntityData(
  e: LevelFanAreaEntityData,
  out: any,
) {
  out["Radius"] = e.Radius;
  out["Degree"] = e.Degree;
  out["AngleOffset"] = e.AngleOffset;
  return tidyLevelAreaEntityData(e, out);
}

export function tidyLevelAreaEntityData(e: LevelAreaEntityData, out: any) {
  out["AttachTarget"] = e.AttachTarget;
  out["Duration"] = e.Duration;
  out["AllowDuplicateHit"] = e.AllowDuplicateHit;
  out["RemoveEntityIfSkillCancel"] = e.RemoveEntityIfSkillCancel;
  out["HitFrames"] = e.HitFrames;
  out["CheckBlockHit"] = e.CheckBlockHit;
  if (e.AreaAbilities != null)
    out["AreaAbilities"] = e.AreaAbilities.map(tidyAbility);
  return tidyLevelSkillEntityData(e, out);
}

export function tidyLevelTargetAttachedEntityData(
  e: LevelTargetAttachedEntityData,
  out: any,
) {
  if (e.Abilities != null) out["Abilities"] = e.Abilities.map(tidyAbility);
  return tidyLevelSkillEntityData(e, out);
}
export function tidyLevelNormalAttackBulletEntityData(
  e: LevelNormalAttackBulletEntityData,
  out: any,
) {
  out["Speed"] = e.Speed;
  if (e.Abilities != null) out["Abilities"] = e.Abilities.map(tidyAbility);
  return tidyLevelSkillEntityData(e, out);
}

export function tidyLevelSkillEntityData(e: LevelSkillEntityData, out: any) {
  if (e.SpawnRate !== 10000) out["SpawnRate"] = e.SpawnRate;
  if (e.SpawnDelay !== 0) out["SpawnDelay"] = e.SpawnDelay;
  out["ApplyType"] = e.ApplyType;
  // TODO
  // TargetSortRule
  // EssentialCandidateRule
  // OptionalCandidateRule
  return out;
}

function tidyAbility(a: LevelSkillAbilityData) {
  const out: any = {
    LogicEffect: a.LogicEffectGroupIds.map((id: string) => getLogicEffect(id)),
  };
  if (a.StartDelay !== 0) out["StartDelay"] = a.StartDelay;
  return out;
}
