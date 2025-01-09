import { z } from "zod";
import { int } from "../../misc";
import { AreaEntitySchema } from "../entity/0AreaEntity";

export const ZAreaTimeline = z.object({
  Frame: int(),
  SpawnCheckLogicEffetTemplateId: z.string().optional(),
  AreaData: AreaEntitySchema,
});
export type TZAreaTimeline = z.infer<typeof ZAreaTimeline>;
