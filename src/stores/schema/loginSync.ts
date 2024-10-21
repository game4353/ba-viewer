import { z } from "zod";

const characterDB = z.object({
  Type: z.number(),
  ServerId: z.number(),
  UniqueId: z.number(),
  StarGrade: z.number(),
  Level: z.number(),
  FavorRank: z.number(),
  PublicSkillLevel: z.number(),
  ExSkillLevel: z.number(),
  PassiveSkillLevel: z.number(),
  ExtraPassiveSkillLevel: z.number(),
  EquipmentServerIds: z.number().array(),
  PotentialStats: z.object({
    1: z.number(),
    2: z.number(),
    3: z.number(),
  }),
});

const weaponDB = z.object({
  BoundCharacterServerId: z.number(),
  Level: z.number().default(1),
  StarGrade: z.number().default(1),
});

const CharacterListResponse = z.object({
  CharacterDBs: characterDB.array(),
  WeaponDBs: weaponDB.array(),
});

const EquipmentDB = z.object({
  Level: z.number().default(1),
  Tier: z.number().default(1),
  BoundCharacterServerId: z.number().optional(),
  ServerId: z.number(),
  UniqueId: z.number(),
  StackCount: z.number(),
});

const EquipmentItemListResponse = z.object({
  EquipmentDBs: EquipmentDB.array(),
});

const gearDB = z.object({
  Tier: z.number(),
  BoundCharacterServerId: z.number(),
});

const CharacterGearListResponse = z.object({
  GearDBs: gearDB.array(),
});

const LoginSync = z.object({
  CharacterListResponse,
  EquipmentItemListResponse,
  CharacterGearListResponse,
});

export function parseLoginSync(json: string) {
  try {
    const obj = JSON.parse(json);
    return LoginSync.parse(obj); // Throws if validation fails
  } catch (e) {
    console.error(e);
    throw e;
  }
}
