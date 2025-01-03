import { z } from "zod";
import { LogicEffectCategory } from "~game/excelType";

export const ZLogicEffect = z.object({
  Level: z.number(),
  GroupId: z.string(),
  Category: z.nativeEnum(LogicEffectCategory),
  TemplateId: z.string(),
  Channel: z.number(),
  ApplyRate: z.number(),
  CommonVisualId: z.string(),
  CommonVisualHash: z.number(),
  PriorityWhenSameFrame: z.number(),
});
