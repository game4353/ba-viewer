import { z } from "zod";

export const ZSkillLogic = z.object({
  name: z.string(),
  SkillDataKey: z.string(),
});
