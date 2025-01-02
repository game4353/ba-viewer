import { z } from "zod";
import { SkillToTargetDistributeType } from "../../enum";
import { ExSkillEntityTimeline } from "../../timeline/schema";
import { ZNewSkillAction } from "../NewSkillAction/NewSkillAction";

// 2
export const ZTimelineSkillAction = ZNewSkillAction.extend({
  $type: z.literal("TimelineSkillAction"),
  DistributeType: z.nativeEnum(SkillToTargetDistributeType),
  RotateTurretOnly: z.boolean(),
  RotateTurretDirectionTargetTracking: z.boolean(),
  RotatingTurretFrameMin: z.number(),
  RotatingTurretFrameMax: z.number(),
  RotateInvokerDirectionEveryFrame: z.boolean(),
  EntityTimeline: ExSkillEntityTimeline.array(),
});
