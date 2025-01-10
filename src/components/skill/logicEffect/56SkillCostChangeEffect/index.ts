import { EndCondition } from "@/assets/game/excelType";
import { z } from "zod";
import { bool, int, long } from "../../misc";
import { ZLogicEffect } from "../_base";

export const ZSkillCostChangeEffect = ZLogicEffect.extend({
  BaseAmount: long(),
  Coefficient: long(),
  EndCondition: z.nativeEnum(EndCondition),
  EndConditionArgument: int(),
  Dispellable: bool(),
});
