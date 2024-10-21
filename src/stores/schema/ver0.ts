import { z } from "zod";

const characterSchema0 = z.object({
  lv: z.number().default(90),
  star: z.number().default(8),
  weapon: z.number().default(50),
  bond: z.number().default(20),
  skill0: z.number().default(5),
  skill1: z.number().default(10),
  skill2: z.number().default(10),
  skill3: z.number().default(10),
  gear1: z.number().default(9),
  gear1lv: z.number().default(65),
  gear2: z.number().default(9),
  gear2lv: z.number().default(65),
  gear3: z.number().default(9),
  gear3lv: z.number().default(65),
  gear0: z.number().default(0),
  break1: z.number().default(0),
  break2: z.number().default(0),
  break3: z.number().default(0),
});

const dbSchema0 = z.object({
  version: z.literal(0),
  characters: z.record(
    z.string(),
    z.object({
      now: characterSchema0.optional(),
      goal: characterSchema0.optional(),
    }),
  ),
});

export function parseV0(json: string) {
  try {
    const obj = JSON.parse(json);
    return dbSchema0.parse(obj); // Throws if validation fails
  } catch (e) {
    return null;
  }
}
