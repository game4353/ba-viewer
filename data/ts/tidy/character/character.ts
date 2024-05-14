import { cache, Excel } from "../../util.js";
import {
  ArmorType,
  BulletType,
  CharacterExcel,
  Club,
  EquipmentCategory,
  EquipmentOptionType,
  School,
  SquadType,
  TacticRange,
  TacticRole,
  WeaponType,
  type CharacterGearExcel,
  type CharacterStatExcel,
  type CharacterWeaponExcel,
} from "../type.js";
import { Localize } from "../localize/main.js";
import assert from "assert";
import type { TCharacter, TCharacterGear, TCharacterWeapon } from ".";

export class Character {
  @cache
  static getCharacter(): Partial<Record<string, TCharacter>> {
    return Object.fromEntries(
      (Excel.table("CharacterExcel") as CharacterExcel[])
        .filter(
          (v) =>
            v.IsPlayableCharacter && !v.IsNPC && v.ProductionStep == "Release",
        )
        .map((v) => [
          v.Id,
          {
            DevName: v.DevName,
            Localize: Localize.transEtc(v.LocalizeEtcId).NameJp,
            TacticRole: TacticRole[v.TacticRole],
            WeaponType: WeaponType[v.WeaponType],
            TacticRange: TacticRange[v.TacticRange],
            BulletType: BulletType[v.BulletType],
            ArmorType: ArmorType[v.ArmorType],
            School: School[v.School],
            Club: Club[v.Club],
            DefaultStarGrade: v.DefaultStarGrade,
            SquadType: SquadType[v.SquadType],
            EquipmentSlot: v.EquipmentSlot.map((v) => EquipmentCategory[v]),
          },
        ]),
    );
  }
  @cache
  static getGear(): Partial<Record<string, TCharacterGear>> {
    const output: Partial<Record<string, TCharacterGear>> = {};
    const arr: CharacterGearExcel[] = Excel.table("CharacterGearExcel");
    for (let i = 0; i < arr.length; i += 2) {
      const v1 = arr[i];
      const v2 = arr[i + 1];
      assert(v1.CharacterId === v2.CharacterId);
      assert(String(v1.RecipeId) === `${v1.CharacterId}400`);
      assert(v2.LearnSkillSlot === "PublicSkill01");
      assert(v1.Icon === `UIs/01_Common/40_Gear/Gear_Icon_${v1.CharacterId}`);
      output[v1.CharacterId] = {
        StatType: v1.StatType.map((v) => EquipmentOptionType[v]),
        MinStatValue: v1.MinStatValue,
        MaxStatValue: v1.MaxStatValue,
        LocalizeName: Localize.transEtc(v1.LocalizeEtcId).NameJp,
        LocalizeDesc: Localize.transEtc(v1.LocalizeEtcId).DescriptionJp,
      } as TCharacterGear;
    }
    return output;
  }
  @cache
  static getWeapon(): Partial<Record<string, TCharacterWeapon>> {
    const arr: CharacterWeaponExcel[] = Excel.table("CharacterWeaponExcel");
    // arr.forEach(v => {
    //   assert(true)
    // })
    return Object.fromEntries(
      arr.map((v) => [
        v.Id,
        {
          ImagePath: v.ImagePath,
          AttackPower: v.AttackPower,
          AttackPower100: v.AttackPower100,
          MaxHP: v.MaxHP,
          MaxHP100: v.MaxHP100,
          HealPower: v.HealPower,
          HealPower100: v.HealPower100,
          StatType: EquipmentOptionType[v.StatType[2]],
          StatValue: v.StatValue[2],
        },
      ]),
    );
  }
  @cache
  static getStat(): Partial<Record<string, CharacterStatExcel>> {
    const arr: CharacterStatExcel[] = Excel.table("CharacterStatExcel");
    return Object.fromEntries(arr.map((v) => [v.CharacterId, v]));
  }
}
