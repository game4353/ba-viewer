import {
  ArmorType,
  BulletType,
  Club,
  EquipmentCategory,
  EquipmentOptionType,
  School,
  SquadType,
  TacticRange,
  TacticRole,
  WeaponType,
} from "../type.js";

export type TCostume = {
  SpineResourceName: string;
  SpineResourceNameDiorama: string;
  TextureDir: string;
  CollectionTexturePath: string;
  CollectionBGTexturePath: string;
};

export type TCharacter = {
  DevName: string;
  Localize: string;
  TacticRole: TacticRole;
  WeaponType: WeaponType;
  TacticRange: TacticRange;
  BulletType: BulletType;
  ArmorType: ArmorType;
  School: School;
  Club: Club;
  DefaultStarGrade: number;
  SquadType: SquadType;
  EquipmentSlot: EquipmentCategory[];
};

export type TCharacterGear = {
  // RecipeId: number;
  // LearnSkillSlot: string;
  StatType: EquipmentOptionType[];
  MinStatValue: number[];
  MaxStatValue: number[];
  // Icon: string;
  LocalizeName: string;
  LocalizeDesc: string;
};

export type TCharacterWeapon = {
  ImagePath: string;
  AttackPower: number;
  AttackPower100: number;
  MaxHP: number;
  MaxHP100: number;
  HealPower: number;
  HealPower100: number;
  StatType: EquipmentOptionType;
  StatValue: number;
};