import { School } from "@/assets/game/types/flatDataExcel";
import { noDefault } from "@/utils/misc";

export function schoolFullLocalizeKey(school: School) {
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

export function schoolLocalizeKey(school: School) {
  switch (school) {
    case School.None:
      return 0;
    case School.Hyakkiyako:
      return 3786038973;
    case School.RedWinter:
      return 982417714;
    case School.Trinity:
      return 3504002057;
    case School.Gehenna:
      return 1025777212;
    case School.Abydos:
      return 1587450786;
    case School.Millennium:
      return 1212601399;
    case School.Arius:
      return 2914766135;
    case School.Shanhaijing:
      return 4011672681;
    case School.Valkyrie:
      return 3959854634;
    case School.WildHunt: // missing
      return 2206508743;
    case School.SRT:
      return 1623348934;
    case School.SCHALE: // missing
      return 1559075168;
    case School.ETC:
      return 3923413756;
    case School.Tokiwadai: // missing
      return 200151146;
    case School.Sakugawa: // missing
      return 2990540125;
    default:
      return noDefault(school);
  }
}
