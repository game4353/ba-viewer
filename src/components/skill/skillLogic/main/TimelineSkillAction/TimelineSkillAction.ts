import { z } from "zod";
import { SkillToTargetDistributeType } from "../../enum";
import { ExSkillEntityTimeline } from "../../timeline/schema";
import { ZNewSkillAction } from "../NewSkillAction/NewSkillAction";

// 2
export const ZTimelineSkillAction = ZNewSkillAction.extend({
  DistributeType: z.nativeEnum(SkillToTargetDistributeType),
  // RotateTurretOnly: z.boolean(), // not important I guess
  // RotateTurretDirectionTargetTracking: z.boolean(), // not important I guess
  // RotatingTurretFrameMin: z.number(), // not important I guess
  // RotatingTurretFrameMax: z.number(), // not important I guess
  // RotateInvokerDirectionEveryFrame: z.boolean(), // not important I guess
  EntityTimeline: ExSkillEntityTimeline.array(),
});
