import { ArmorType } from "@/assets/game/excelType";
import { z } from "zod";
import { IncludeType } from "../../../enum";
import { ZSkillAbilityModifier$base } from "../base";

export const ZArmorConditionModifier = ZSkillAbilityModifier$base.extend({
  ArmorType: z.nativeEnum(ArmorType),
  IncludeType: z.nativeEnum(IncludeType),
});

export type TZArmorConditionModifier = z.infer<typeof ZArmorConditionModifier>;
