import {
  ArmorType,
  BulletType,
  EquipmentCategory,
  ProductionStep,
  Rarity,
  School,
  SquadType,
  StatLevelUpType,
  TacticRange,
  TacticRole,
  WeaponType,
} from "@/assets/game/types/flatDataExcel";
import { Icon, schoolIcon } from "@/components/GameImg/icon";
import { CTag, CTagGroup } from "../tag";

class CharacterTagSquadType extends CTag<SquadType> {}
export const CharacterTagSquadTypeGroup = new CTagGroup("", [
  new CharacterTagSquadType(SquadType.Main, "Striker"),
  new CharacterTagSquadType(SquadType.Support, "Support"),
  // new CharacterTagSquadType(SquadType.TSS, "TSS"),
  // new CharacterTagSquadType(SquadType.None, "None"),
]);

class CharacterTagBulletType extends CTag<BulletType> {}
export const CharacterTagBulletTypeGroup = new CTagGroup("攻撃タイプ", [
  new CharacterTagBulletType(
    BulletType.Explosion,
    "爆発",
    Icon.Attack,
    "#a73622",
  ),
  new CharacterTagBulletType(BulletType.Pierce, "貫通", Icon.Attack, "#b58b2e"),
  new CharacterTagBulletType(BulletType.Mystic, "神秘", Icon.Attack, "#386c99"),
  new CharacterTagBulletType(BulletType.Sonic, "振動", Icon.Attack, "#8f4aa3"),
  // new CharacterTagBulletType(BulletType.None, ""),
  // new CharacterTagBulletType(BulletType.Normal, ""),
  // new CharacterTagBulletType(BulletType.Siege, ""),
]);

class CharacterTagArmorType extends CTag<ArmorType> {}
export const CharacterTagArmorTypeGroup = new CTagGroup("防御タイプ", [
  new CharacterTagArmorType(
    ArmorType.LightArmor,
    "軽装備",
    Icon.Defense,
    "#a73622",
  ),
  new CharacterTagArmorType(
    ArmorType.HeavyArmor,
    "重装甲",
    Icon.Defense,
    "#b58b2e",
  ),
  new CharacterTagArmorType(
    ArmorType.Unarmed,
    "特殊装甲",
    Icon.Defense,
    "#386c99",
  ),
  new CharacterTagArmorType(
    ArmorType.ElasticArmor,
    "弾力装甲",
    Icon.Defense,
    "#8f4aa3",
  ),
  // new CharacterTagArmorType(ArmorType.Structure, "?"),
  // new CharacterTagArmorType(ArmorType.Normal, "?"),
]);

class CharacterTagTacticRole extends CTag<TacticRole> {}
export const CharacterTagTacticRoleGroup = new CTagGroup("役割", [
  new CharacterTagTacticRole(TacticRole.Tanker, "タンク", Icon.Tanker),
  new CharacterTagTacticRole(
    TacticRole.DamageDealer,
    "アタッカー",
    Icon.DamageDealer,
  ),
  new CharacterTagTacticRole(TacticRole.Healer, "ヒーラー", Icon.Healer),
  new CharacterTagTacticRole(
    TacticRole.Supporter,
    "サポーター",
    Icon.Supporter,
  ),
  new CharacterTagTacticRole(TacticRole.Vehicle, "T.S", Icon.Vehicle),
  // new CharacterTagTacticRole(TacticRole.None, "None"),
]);

class CharacterTagTacticRange extends CTag<TacticRange> {}
export const CharacterTagTacticRangeGroup = new CTagGroup("ポジション", [
  new CharacterTagTacticRange(TacticRange.Front, "FRONT"),
  new CharacterTagTacticRange(TacticRange.Middle, "MIDDLE"),
  new CharacterTagTacticRange(TacticRange.Back, "BACK"),
]);

class CharacterTagRarity extends CTag<Rarity> {}
export const CharacterTagRarityGroup = new CTagGroup("初期☆", [
  // new CharacterTagRarity(Rarity.N, "?"),
  new CharacterTagRarity(Rarity.R, "☆"),
  new CharacterTagRarity(Rarity.SR, "☆☆"),
  new CharacterTagRarity(Rarity.SSR, "☆☆☆"),
]);

class CharacterTagWeaponType extends CTag<WeaponType> {}
export const CharacterTagWeaponTypeGroup = new CTagGroup("武器タイプ", [
  // new CharacterTagWeaponType(WeaponType.None, ""),
  new CharacterTagWeaponType(WeaponType.SG, "SG"),
  new CharacterTagWeaponType(WeaponType.SMG, "SMG"),
  new CharacterTagWeaponType(WeaponType.AR, "AR"),
  new CharacterTagWeaponType(WeaponType.GL, "GL"),
  new CharacterTagWeaponType(WeaponType.HG, "HG"),
  new CharacterTagWeaponType(WeaponType.RL, "RL"),
  new CharacterTagWeaponType(WeaponType.SR, "SR"),
  // new CharacterTagWeaponType(WeaponType.DSMG, "DSMG"),
  new CharacterTagWeaponType(WeaponType.RG, "RG"),
  // new CharacterTagWeaponType(WeaponType.DSG, "DSG"),
  // new CharacterTagWeaponType(WeaponType.Vulcan, "Vulcan"),
  // new CharacterTagWeaponType(WeaponType.Missile, "Missile"),
  // new CharacterTagWeaponType(WeaponType.Cannon, "Cannon"),
  // new CharacterTagWeaponType(WeaponType.Taser, "Taser"),
  new CharacterTagWeaponType(WeaponType.MG, "MG"),
  // new CharacterTagWeaponType(WeaponType.Binah, "Binah"),
  new CharacterTagWeaponType(WeaponType.MT, "MT"),
  // new CharacterTagWeaponType(WeaponType.Relic, "Relic"),
  new CharacterTagWeaponType(WeaponType.FT, "FT"),
  // new CharacterTagWeaponType(WeaponType.Akemi, "Akemi"),
]);

class CharacterTagSchool extends CTag<School> {
  get icon() {
    return schoolIcon(this.value);
  }
  get bg() {
    return "#dfdfdf";
  }
}
export const CharacterTagSchoolGroup = new CTagGroup("学園", [
  new CharacterTagSchool(School.Hyakkiyako, "百鬼夜行"),
  new CharacterTagSchool(School.RedWinter, "レッドウィンター"),
  new CharacterTagSchool(School.Trinity, "トリニティ"),
  new CharacterTagSchool(School.Gehenna, "ゲヘナ"),
  new CharacterTagSchool(School.Abydos, "アビドス"),
  new CharacterTagSchool(School.Millennium, "ミレニアム"),
  new CharacterTagSchool(School.Arius, "アリウス"),
  new CharacterTagSchool(School.Shanhaijing, "山海経"),
  new CharacterTagSchool(School.Valkyrie, "ヴァルキューレ"),
  new CharacterTagSchool(School.SRT, "SRT"),
  new CharacterTagSchool(School.ETC, "その他"),
  new CharacterTagSchool(School.WildHunt, "ワイルドハント"),
  new CharacterTagSchool(School.SCHALE, "シャーレ"),
  new CharacterTagSchool(School.Tokiwadai, "常盤台"),
  new CharacterTagSchool(School.Sakugawa, "柵川"),
  // new CharacterTagSchool(School.None, ""),
]);

class CharacterTagProduction extends CTag<ProductionStep> {}
export const CharacterTagProductionGroup = new CTagGroup("", [
  new CharacterTagProduction(ProductionStep.ToDo, "ToDo"),
  new CharacterTagProduction(ProductionStep.Doing, "Doing"),
  new CharacterTagProduction(ProductionStep.Complete, "Complete"),
  new CharacterTagProduction(ProductionStep.Release, "Release"),
]);

class CharacterTagStatLevelUpType extends CTag<StatLevelUpType> {}
export const CharacterTagStatLevelUpTypeGroup = new CTagGroup("", [
  new CharacterTagStatLevelUpType(StatLevelUpType.LateBloom, "LateBloom"),
  new CharacterTagStatLevelUpType(StatLevelUpType.Obstacle, "Obstacle"),
  new CharacterTagStatLevelUpType(StatLevelUpType.Premature, "Premature"),
  new CharacterTagStatLevelUpType(StatLevelUpType.Standard, "Standard"),
  new CharacterTagStatLevelUpType(StatLevelUpType.TimeAttack, "TimeAttack"),
]);

class CharacterTagEquipmentCategory extends CTag<EquipmentCategory> {}
export const CharacterTagEquipmentCategoryGroup = new CTagGroup("装備", [
  // new CharacterTagEquipmentCategory(EquipmentCategory.Unable, ""),
  // new CharacterTagEquipmentCategory(EquipmentCategory.Exp, ""),
  new CharacterTagEquipmentCategory(EquipmentCategory.Bag, "バッグ"),
  new CharacterTagEquipmentCategory(EquipmentCategory.Hat, "帽子"),
  new CharacterTagEquipmentCategory(EquipmentCategory.Gloves, "グローブ"),
  new CharacterTagEquipmentCategory(EquipmentCategory.Shoes, "シューズ"),
  new CharacterTagEquipmentCategory(EquipmentCategory.Badge, "バッジ"),
  new CharacterTagEquipmentCategory(EquipmentCategory.Hairpin, "ヘアピン"),
  new CharacterTagEquipmentCategory(EquipmentCategory.Charm, "お守り"),
  new CharacterTagEquipmentCategory(EquipmentCategory.Watch, "腕時計"),
  new CharacterTagEquipmentCategory(EquipmentCategory.Necklace, "ネックレス"),
  // new CharacterTagEquipmentCategory(EquipmentCategory.WeaponExpGrowthA, ""),
  // new CharacterTagEquipmentCategory(EquipmentCategory.WeaponExpGrowthB, ""),
  // new CharacterTagEquipmentCategory(EquipmentCategory.WeaponExpGrowthC, ""),
  // new CharacterTagEquipmentCategory(EquipmentCategory.WeaponExpGrowthZ, ""),
]);

export const characterTags = {
  CharacterTagSquadTypeGroup,
  CharacterTagBulletTypeGroup,
  CharacterTagArmorTypeGroup,
  CharacterTagTacticRoleGroup,
  CharacterTagTacticRangeGroup,
  CharacterTagRarityGroup,
  CharacterTagWeaponTypeGroup,
  CharacterTagSchoolGroup,
  CharacterTagEquipmentCategoryGroup,
};
