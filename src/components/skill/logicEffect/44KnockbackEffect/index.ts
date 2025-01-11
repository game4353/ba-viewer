import { KnockbackDirection } from "@/assets/game/excelType";
import { z } from "zod";
import { long } from "../../misc";
import { ZLogicEffect } from "../_base";

export const ZKnockbackEffect = ZLogicEffect.extend({
  MoveDuration: long(),
  MoveDistance: long(),
  KnockbackDirection: z.nativeEnum(KnockbackDirection),
});
