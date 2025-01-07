import { bool, int } from "@/components/skill/misc";
import { z } from "zod";
import { SkillToTargetDistributeType } from "../../enum";
import { ZExSkillEntityTimeline } from "../../timeline/schema";
import { ZNewSkillAction } from "../NewSkillAction/NewSkillAction";

// 2
export const ZTimelineSkillAction = ZNewSkillAction.extend({
  DistributeType: z.nativeEnum(SkillToTargetDistributeType),
  RotateTurretOnly: bool(),
  RotateTurretDirectionTargetTracking: bool(),
  RotatingTurretFrameMin: int(),
  RotatingTurretFrameMax: int(),
  RotateInvokerDirectionEveryFrame: bool(),
  EntityTimeline: ZExSkillEntityTimeline.array(),
});
