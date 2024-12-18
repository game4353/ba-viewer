import { Ok, err2 } from "@/utils/result/result";
import { z } from "zod";
import { importAll } from "../all";

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
  Type: z.number(),
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

function parseLoginSync(json: string) {
  try {
    const obj = JSON.parse(json);
    const data = LoginSync.parse(obj); // Throws if validation fails

    const weapons = new Map(
      data.CharacterListResponse.WeaponDBs.map((d) => [
        d.BoundCharacterServerId,
        d,
      ]),
    );
    const gears = new Map(
      data.CharacterGearListResponse.GearDBs.map((d) => [
        d.BoundCharacterServerId,
        d,
      ]),
    );
    const equips = new Map(
      data.EquipmentItemListResponse.EquipmentDBs.map((d) => [
        d.ServerId ?? -1,
        d,
      ]),
    );

    const parcel = Object.fromEntries(
      data.EquipmentItemListResponse.EquipmentDBs.filter(
        (o) => o.BoundCharacterServerId == null,
      ).map((o) => [`${o.Type},${o.UniqueId}`, { amount: o.StackCount }]),
    );

    const chara = new Map();
    data.CharacterListResponse.CharacterDBs.forEach((d) => {
      const g = gears.get(d.ServerId);
      const w = weapons.get(d.ServerId);
      const c = {
        lv: d.Level,
        star: d.StarGrade + (w?.StarGrade ?? 0),
        weapon: w?.Level ?? 0,
        bond: d.FavorRank,
        skill0: d.ExSkillLevel,
        skill1: d.PublicSkillLevel,
        skill2: d.PassiveSkillLevel,
        skill3: d.ExtraPassiveSkillLevel,
        gear1: equips.get(d.EquipmentServerIds[0])?.Tier ?? 0,
        gear1lv: equips.get(d.EquipmentServerIds[0])?.Level ?? 0,
        gear2: equips.get(d.EquipmentServerIds[1])?.Tier ?? 0,
        gear2lv: equips.get(d.EquipmentServerIds[1])?.Level ?? 0,
        gear3: equips.get(d.EquipmentServerIds[2])?.Tier ?? 0,
        gear3lv: equips.get(d.EquipmentServerIds[2])?.Level ?? 0,
        gear0: g?.Tier ?? 0,
        break1: d.PotentialStats["1"],
        break2: d.PotentialStats["2"],
        break3: d.PotentialStats["3"],
      };
      chara.set(d.UniqueId, c);
    });

    return Ok(
      JSON.stringify({
        version: 1,
        now: JSON.stringify(Object.fromEntries(chara)),
        parcel: JSON.stringify(parcel),
      }),
    );
  } catch (e) {
    return err2(e);
  }
}

export function importLoginSync(packet: string) {
  return parseLoginSync(packet).andThen(importAll);
}
