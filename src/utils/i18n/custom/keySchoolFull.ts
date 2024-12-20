import { School } from "@/assets/game/types/flatDataExcel";
import { noDefault } from "@/utils/misc";

export default function schoolFullLocalizeKey(school: School) {
  switch (school) {
    case School.None:
      return 0;
    case School.Hyakkiyako:
      return 1563751060;
    case School.RedWinter:
      return 2940461121;
    case School.Trinity:
      return 4226222338;
    case School.Gehenna:
      return 3736730534;
    case School.Abydos:
      return 2877335168;
    case School.Millennium:
      return 2224197674;
    case School.Arius:
      return 417290178;
    case School.Shanhaijing:
      return 3997137133;
    case School.Valkyrie:
      return 1843937705;
    case School.WildHunt:
      return 2206508743;
    case School.SRT:
      return 2978806820;
    case School.SCHALE:
      return 1559075168;
    case School.ETC:
      return 1926648970;
    case School.Tokiwadai:
      return 200151146;
    case School.Sakugawa:
      return 2990540125;
    default:
      return noDefault(school);
  }
}
