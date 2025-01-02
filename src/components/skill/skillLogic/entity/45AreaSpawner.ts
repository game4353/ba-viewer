import { z } from "zod";
import { AreaEntitySchema } from "./0AreaEntity";
import { SkillEntity } from "./_base";

const AreaTimeline = z.object({
  Frame: z.number(),
  SpawnCheckLogicEffetTemplateId: z.string().optional(),
  AreaData: AreaEntitySchema,
});

export const AreaSpawner = SkillEntity.extend({
  Duration: z.number(),
  EntityTimeline: AreaTimeline.array(),
});
