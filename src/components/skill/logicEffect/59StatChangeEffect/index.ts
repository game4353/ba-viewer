import { EndCondition, StatType } from "@/assets/game/excelType";
import { z } from "zod";
import { bool, int, long } from "../../misc";
import { ZLogicEffect } from "../_base";

export const ZStatChangeEffect = ZLogicEffect.extend({
  StatType: z.nativeEnum(StatType),
  EndCondition: z.nativeEnum(EndCondition),
  EndConditionArgumentFirst: z.string(),
  EndConditionArgumentSecond: z.string(),
  RemoveCondition: z.nativeEnum(EndCondition),
  RemoveConditionArgumentFirst: z.string(),
  RemoveConditionArgumentSecond: z.string(),
  BaseAmount: long(),
  CasterCoefficientAmount: long(),
  CasterStatType: z.nativeEnum(StatType),
  TargetCoefficientAmount: long(),
  Dispellable: bool(),
  StackSameEffectApplied: bool(),
  StackSameEffectCount: int(),
  ExpireOldIfStackCountOver: bool(),
  ChangeRateByCost: z.string(),
});

export type TZStatChangeEffect = z.infer<typeof ZStatChangeEffect>;
