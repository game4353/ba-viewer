import { bool, long } from "@/components/skill/misc";
import { zFlag } from "@/utils/types";
import { z } from "zod";
import { TargetEntityType } from "../../../misc/enum";
import { ZSkillEntity } from "../_base";

export const ZRootMotionMoveBase = ZSkillEntity.extend({});

// 1
export const ZRootMotionMove = ZRootMotionMoveBase.extend({
  CheckCollisionType: zFlag(TargetEntityType),
  IgnoreMovableCheckInMove: bool(),
});

// 2
export const ZRootMotionMoveWithSpeed = ZRootMotionMove.extend({
  MoveSpeed: long(),
});

export const URootMotionMoveBase = [
  ZRootMotionMoveBase.extend({
    $type: z.literal("RootMotionMoveBase"),
  }), // 60
  ZRootMotionMove.extend({
    $type: z.literal("RootMotionMove"),
  }), // 61
  ZRootMotionMoveWithSpeed.extend({
    $type: z.literal("RootMotionMoveWithSpeed"),
  }), // 62
] as const;
export const ZURootMotionMoveBase = z.discriminatedUnion("$type", [
  ...URootMotionMoveBase,
]);
