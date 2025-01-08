import { StatType } from "@/assets/game/excelType";
import { z } from "zod";
import { ZLogicEffect } from "../_base";
import { DamageCriticalType } from "../enum";

export const ZDamageEffect = ZLogicEffect.extend({
  CriticalCheck: z.nativeEnum(DamageCriticalType),
  CanEvade: z.boolean(),
  Amount: z.number(),
  BonusSourceFirst: z.nativeEnum(StatType),
  BonusRateFirst: z.number(),
  LifeRecover: z.number(),
  ApplyBulletType: z.boolean(),
  ApplyDefense: z.boolean(),
  ApplyDamageRatio: z.boolean(),
  ApplyDamageRatio2: z.boolean(),
  DefensePenetrationRate: z.number(),
  ChangeRateByCost: z.string(),
  IgnoreShield: z.boolean(),
  ApplyStability: z.boolean(),
  ApplyTerrainAdaptationDamage: z.boolean(),
  ApplyExDamagedRatio: z.boolean(),
  ForceFloaterHide: z.boolean(),
});
