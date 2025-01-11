import { int } from "@/components/skill/misc";
import { ZAreaTimeline } from "../../timeline/AreaTimeline";
import { ZSkillEntity } from "../_base";

export const ZAreaSpawner = ZSkillEntity.extend({
  Duration: int(),
  EntityTimeline: ZAreaTimeline.array(),
});
