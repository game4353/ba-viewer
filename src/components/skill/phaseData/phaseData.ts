import { ObjectKeys } from "@/utils/types";
import type { ReadonlyDeep } from "type-fest";
import type { z } from "zod";
import type { NormalAttackPhaseControl } from "../skillLogic/misc";
import type { NormalAttackSkillAction } from "../skillLogic/schema";

enum NormalAttackCondition {
  None,
  IsWeaponMounted,
  MoveEndRequired,
  TargetNotAvailable,
  ForceMoveCommandExists,
  BulletEmpty,
  BurstRoundOver,
  PublicSkillEnabled,
  FormConversionRequired,
  IsOrderByRandom,
}
enum NormalAttackPhaseName {
  AttackEnter,
  Reload,
  AttackStart = 3,
  AttackIng,
  AttackBurstDelay,
  AttackFinish,
  MountWeapon,
  UnmountWeapon,
  SearchNewTarget = 0x7ffffffe,
  ExitNormalAttack,
}
type PhaseName =
  | keyof typeof NormalAttackPhaseName
  | "AttackReadyStart"
  | "AttackReadyEnd";

export const NormalAttackPhaseNameList: PhaseName[] = ObjectKeys(
  NormalAttackPhaseName,
).filter((v) => isNaN(Number(v)));

export function tidyPhaseData(
  phaseData: ReadonlyDeep<z.infer<typeof NormalAttackSkillAction>["PhaseData"]>,
  animation: ReadonlyDeep<
    z.infer<typeof NormalAttackSkillAction>["AnimationFrames"]
  >,
) {
  const keys = [
    "OnEnterNormalAttack",
    "AfterAttackEnter",
    "AfterReload",
    "AfterAttackStart",
    "AfterAttackIng",
    "AfterAttackBurstDelay",
    "AfterAttackFinish",
    "AfterMountWeapon",
    "AfterUnmountWeapon",
    "AfterSearchNewTarget",
  ] as const;
  const out: {
    frame: Partial<Record<PhaseName, number>>;
  } & {
    [key: string]: Partial<Record<PhaseName, string[]>>;
  } = { frame: {} };

  keys.forEach((v) => {
    if (phaseData[v] != null) out[v] = tidyPhaseDataRow(phaseData[v]);
  });
  animation.forEach((o) => {
    switch (o.Key) {
      case "AttackEnterDuration":
        out.frame["AttackEnter"] = o.Frame;
        break;
      case "AttackStartDuration":
        out.frame["AttackStart"] = o.Frame;
        break;
      case "AttackEndDuration":
        out.frame["AttackFinish"] = o.Frame;
        break;
      case "AttackBurstRoundOverDelay":
        out.frame["AttackBurstDelay"] = o.Frame;
        break;
      case "AttackIngDuration":
        out.frame["AttackIng"] = o.Frame;
        break;
      case "AttackReloadDuration":
        out.frame["Reload"] = o.Frame;
        break;
      case "AttackReadyStartDuration":
        if (!NormalAttackPhaseNameList.includes("AttackReadyStart"))
          NormalAttackPhaseNameList.push("AttackReadyStart");
        out.frame["AttackReadyStart"] = o.Frame;
        break;
      case "AttackReadyEndDuration":
        if (!NormalAttackPhaseNameList.includes("AttackReadyEnd"))
          NormalAttackPhaseNameList.push("AttackReadyEnd");
        out.frame["AttackReadyEnd"] = o.Frame;
        break;
      default:
        console.error(`Unknown animation frame key "${o.Key}": ${o.Frame}.`);
    }
  });
  return out;
}

function tidyPhaseDataRow(
  phaseData: ReadonlyDeep<z.infer<typeof NormalAttackPhaseControl>[]>,
) {
  const out: Partial<Record<keyof typeof NormalAttackPhaseName, string[]>> = {};
  phaseData.forEach((obj, i) => {
    const order = i + 1;
    const next: keyof typeof NormalAttackPhaseName = NormalAttackPhaseName[
      obj.NextPhase
    ] as any;
    const condition = [];
    if (obj.Condition !== 0)
      condition.push(NormalAttackCondition[obj.Condition]);
    if (obj.ConditionSecond !== 0)
      condition.push(NormalAttackCondition[obj.ConditionSecond]);
    let str = `${order}.`;
    if (condition.length > 0) str += " " + condition.join(" & ");
    out[next] ??= [];
    out[next]!.push(str);
  });
  return out;
}
