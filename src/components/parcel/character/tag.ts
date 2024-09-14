import { ProductionStep } from "@/assets/game/types/flatDataExcel";
import { CTag, CTagGroup } from "../tag";

class CharacterTagProduction extends CTag<ProductionStep> {}

export class CharacterTagProductionGroup extends CTagGroup {
  static picked: number[] = [];
  static tags = [
    new CharacterTagProduction(ProductionStep.ToDo, "ToDo"),
    new CharacterTagProduction(ProductionStep.Doing, "Doing"),
    new CharacterTagProduction(ProductionStep.Complete, "Complete"),
    new CharacterTagProduction(ProductionStep.Release, "Release"),
  ];
  static dict = Object.fromEntries(this.tags.map((v) => [v.value, v]));
  static getTag(type: ProductionStep) {
    return this.dict[String(type)];
  }
}

export const characterTags = [CharacterTagProductionGroup];
