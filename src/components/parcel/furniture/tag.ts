import { CTag, CTagGroup } from "@/components/filter/tag";
import {
  FurnitureCategory,
  FurnitureSubCategory,
  Rarity,
} from "~game/types/flatDataExcel";

class FurnitureTagInteraction extends CTag<boolean> {}

export const FurnitureTagInteractionGroup = new CTagGroup("", [
  new FurnitureTagInteraction(true, "モーション有り"),
  new FurnitureTagInteraction(false, "モーション無し"),
]);

class FurnitureTagRarity extends CTag<Rarity> {}

export const FurnitureTagRarityGroup = new CTagGroup("", [
  new FurnitureTagRarity(Rarity.N, "N"),
  new FurnitureTagRarity(Rarity.R, "R"),
  new FurnitureTagRarity(Rarity.SR, "SR"),
  new FurnitureTagRarity(Rarity.SSR, "SSR"),
]);

class FurnitureTagCategory extends CTag<FurnitureCategory> {}

export const FurnitureTagCategoryGroup = new CTagGroup("", [
  new FurnitureTagCategory(FurnitureCategory.Furnitures, "家具"),
  new FurnitureTagCategory(FurnitureCategory.Decorations, "装飾"),
  new FurnitureTagCategory(FurnitureCategory.Interiors, "内装"),
]);

class FurnitureTagSubCategory extends CTag<FurnitureSubCategory> {}

export const FurnitureTagSubCategoryGroup = new CTagGroup("", [
  new FurnitureTagSubCategory(FurnitureSubCategory.Table, "テーブル"),
  new FurnitureTagSubCategory(FurnitureSubCategory.Closet, "クローゼット"),
  new FurnitureTagSubCategory(FurnitureSubCategory.Chair, "椅子"),
  new FurnitureTagSubCategory(FurnitureSubCategory.Bed, "ベッド"),
  new FurnitureTagSubCategory(FurnitureSubCategory.FurnitureEtc, "その他"),
  // new FurnitureTagSubCategory(
  //   FurnitureSubCategory.FurnitureSubCategory1,
  //   "？",
  // ),
  new FurnitureTagSubCategory(FurnitureSubCategory.Prop, "小物"),
  new FurnitureTagSubCategory(FurnitureSubCategory.HomeAppliance, "家電"),
  new FurnitureTagSubCategory(FurnitureSubCategory.WallDecoration, "壁の装飾"),
  new FurnitureTagSubCategory(FurnitureSubCategory.FloorDecoration, "床の装飾"),
  // new FurnitureTagSubCategory(FurnitureSubCategory.DecorationEtc, "その他"),
  // new FurnitureTagSubCategory(
  //   FurnitureSubCategory.DecorationSubCategory1,
  //   "？",
  // ),
  new FurnitureTagSubCategory(FurnitureSubCategory.Floor, "床"),
  new FurnitureTagSubCategory(FurnitureSubCategory.Background, "背景"),
  new FurnitureTagSubCategory(FurnitureSubCategory.Wallpaper, "壁紙"),
  // new FurnitureTagSubCategory(
  //   FurnitureSubCategory.InteriorsSubCategory1,
  //   "？",
  // ),
  // new FurnitureTagSubCategory(FurnitureSubCategory.All, ""),
]);
export const furnitureTags = [
  FurnitureTagRarityGroup,
  FurnitureTagCategoryGroup,
  FurnitureTagSubCategoryGroup,
  FurnitureTagInteractionGroup,
];
