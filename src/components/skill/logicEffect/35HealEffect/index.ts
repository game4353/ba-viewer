import { StatType } from "@/assets/game/excelType";
import { z } from "zod";
import { bool, long } from "../../misc";
import { ZLogicEffect } from "../_base";
import { ExtraStatType } from "../enum";

export const ZHealEffect = ZLogicEffect.extend({
  Amount: long(),
  BonusSource: z.nativeEnum(StatType),
  BonusRate: long(),
  ExtraStatSource: z.nativeEnum(ExtraStatType),
  ExtraStatRate: long(),
  ChangeRateByCost: z.string(),
  ForceFloaterHide: bool(),
  ApplyHealRate: bool(),
  ApplyHealRateByArmorType: bool(),
  ApplyHealRateByBulletType: bool(),
});
