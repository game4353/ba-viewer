import { zFlag } from "@/utils/types";
import { z } from "zod";
import { TargetEntityType } from "../enum";
import { ZSkillEntity } from "./_base";

const RootMotionMoveBase = ZSkillEntity.extend({});
const RootMotionMove = RootMotionMoveBase.extend({
  $type: z.literal("RootMotionMove"),
  CheckCollisionType: zFlag(TargetEntityType),
  IgnoreMovableCheckInMove: z.boolean(),
});
const RootMotionMoveWithSpeed = RootMotionMove.extend({
  $type: z.literal("RootMotionMoveWithSpeed"),
  MoveSpeed: z.number(),
});
export const RootMotionMoveBaseSchema = z.discriminatedUnion("$type", [
  RootMotionMove,
  RootMotionMoveWithSpeed,
]);
