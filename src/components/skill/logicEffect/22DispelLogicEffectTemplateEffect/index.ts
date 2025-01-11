import { z } from "zod";
import { int } from "../../misc";
import { ZLogicEffect } from "../_base";

export const ZDispelLogicEffectTemplateEffect = ZLogicEffect.extend({
  LogicEffectTemplateToDispel: z.string(),
  DispelCount: int(),
});
