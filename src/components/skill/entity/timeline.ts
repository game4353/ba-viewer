import type {
  ExSkillEntityTimelineData,
  LevelSkillEntityData,
  SkillEntitySpawnerData,
  SkillEntitySpawnerTimelineData,
  SkillEntityTimelineData,
} from "../type";
import {
  tidyLevelCircleAreaEntityData,
  tidyLevelCircleAuraEntityData,
  tidyLevelDonutAreaEntityData,
  tidyLevelFanAreaEntityData,
  tidyLevelNontargetProjectileEntityData,
  tidyLevelNormalAttackBulletEntityData,
  tidyLevelObbAreaEntityData,
  tidyLevelSkillEntityData,
  tidyLevelTargetAttachedEntityData,
  tidyLevelTargetProjectileEntityData,
  tidyLevelTargetSkillEntityData,
} from "./entity";

export function tidyGeneralTimeline(tl: any) {
  const type = tl.$type;
  switch (type) {
    case "MX.Logic.Data.ExSkillEntityTimelineData, BlueArchive":
      return tidyExTimeline(tl);
    case "MX.Logic.Data.SkillEntitySpawnerTimelineData, BlueArchive":
      return tidyspawnerTimeline(tl);
    default:
      console.error("unknown EntityTimeline type:", type);
  }
}

export function tidyspawnerTimeline(
  spawnerTimeline: SkillEntitySpawnerTimelineData,
) {
  const out: any = {
    SpawnCondition: spawnerTimeline.SpawnCondition,
    SpawnConditionParameter: spawnerTimeline.SpawnConditionParameter,
    SpawnConditionParameterForTag:
      spawnerTimeline.SpawnConditionParameterForTag,
    SpawnConditionCheckTarget: spawnerTimeline.SpawnConditionCheckTarget,
  };
  return tidyTimeline(spawnerTimeline, out);
}

export function tidyExTimeline(exTimeline: ExSkillEntityTimelineData) {
  const out: any = {
    AbilityActivateTag: exTimeline.Tag,
  };
  return tidyTimeline(exTimeline, out);
}

export function tidyTimeline(timeline: SkillEntityTimelineData, out: any) {
  out["Frame"] = timeline.Frame;
  out["DamageDistributeRate"] = timeline.DamageDistributeRate;
  if (timeline.Entity == null) return out;
  return tidyGeneralEntity(timeline.Entity, out);
}

export function tidyShot(shotFrames: SkillEntityTimelineData[]) {
  return shotFrames?.map((v) => {
    const out = {
      frame: v.Frame,
      damageRate: v.DamageDistributeRate,
    };
    return tidyGeneralEntity(v.Entity, out);
  });
}

export function tidyGeneralEntity(entity: LevelSkillEntityData, out: any) {
  const e = entity as any;
  const type = e.$type;
  switch (type) {
    case "MX.Logic.Data.LevelCircleAreaEntityData, BlueArchive":
      return tidyLevelCircleAreaEntityData(e, out);
    case "MX.Logic.Data.LevelCircleAuraEntityData, BlueArchive":
      return tidyLevelCircleAuraEntityData(e, out);
    case "MX.Logic.Data.LevelDonutAreaEntityData, BlueArchive":
      return tidyLevelDonutAreaEntityData(e, out);
    case "MX.Logic.Data.LevelFanAreaEntityData, BlueArchive":
      return tidyLevelFanAreaEntityData(e, out);
    case "MX.Logic.Data.LevelNontargetProjectileEntityData, BlueArchive":
      return tidyLevelNontargetProjectileEntityData(e, out);
    case "MX.Logic.Data.LevelNormalAttackBulletEntityData, BlueArchive":
      return tidyLevelNormalAttackBulletEntityData(e, out);
    case "MX.Logic.Data.LevelObbAreaEntityData, BlueArchive":
      return tidyLevelObbAreaEntityData(e, out);
    case "MX.Logic.Data.LevelTargetAttachedEntityData, BlueArchive":
      return tidyLevelTargetAttachedEntityData(e, out);
    case "MX.Logic.Data.LevelTargetProjectileEntityData, BlueArchive":
      return tidyLevelTargetProjectileEntityData(e, out);
    case "MX.Logic.Data.LevelTargetSkillEntityData, BlueArchive":
      return tidyLevelTargetSkillEntityData(e, out);
    case "MX.Logic.Data.SkillEntitySpawnerData, BlueArchive":
      return tidySkillEntitySpawnerData(e, out);

    default:
      console.error("unknown Entity type:", type);
      return "[ERROR] please contact the devs.";
  }
}

export function tidySkillEntitySpawnerData(
  e: SkillEntitySpawnerData,
  out: any,
) {
  out["Duration"] = e.Duration;
  out["SpawnRule"] = e.SpawnRule;
  out["RemoveEntityIfSkillCancel"] = e.RemoveEntityIfSkillCancel;
  out["OverrideSkillStartTimingWithSpawnerSpawn"] =
    e.OverrideSkillStartTimingWithSpawnerSpawn;
  out["EntityTimeline"] = e.EntityTimeline.map(tidyspawnerTimeline);
  return tidyLevelSkillEntityData(e, out);
}
