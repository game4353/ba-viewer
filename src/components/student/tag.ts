import { CTag, CTagGroup } from "@/components/parcel/tag";

class StudentTagRarity extends CTag<number> {}
export const StudentTagRarityGroup = new CTagGroup("所持☆", [
  new StudentTagRarity(1, "☆"),
  new StudentTagRarity(2, "☆☆"),
  new StudentTagRarity(3, "☆☆☆"),
  new StudentTagRarity(4, "☆☆☆☆"),
  new StudentTagRarity(5, "☆☆☆☆☆"),
  new StudentTagRarity(6, "☆☆☆☆☆★"),
  new StudentTagRarity(7, "☆☆☆☆☆★★"),
  new StudentTagRarity(8, "☆☆☆☆☆★★★"),
]);

export const studentTags = { StudentTagRarityGroup };
