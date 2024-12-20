import { Club } from "@/assets/game/types/flatDataExcel";
import { noDefault } from "@/utils/misc";

export default function clubLocalizeKey(club: Club) {
  switch (club) {
    case Club.None:
      return 0;
    case Club.Engineer:
      return 3688098515;
    case Club.CleanNClearing:
      return 3046912603;
    case Club.KnightsHospitaller:
      return 2297258644;
    case Club.IndeGEHENNA:
      return 2237321000;
    case Club.IndeMILLENNIUM:
      return 3130601975;
    case Club.IndeHyakkiyako:
      return 36621418;
    case Club.IndeShanhaijing:
      return 3591139121;
    case Club.IndeTrinity:
      return 2481622338;
    case Club.FoodService:
      return 512921459;
    case Club.Countermeasure:
      return 3192151255;
    case Club.BookClub:
      return 475852969;
    case Club.MatsuriOffice:
      return 3071844505;
    case Club.GourmetClub:
      return 1084697131;
    case Club.HoukagoDessert:
      return 3478558676;
    case Club.RedwinterSecretary:
      return 814005695;
    case Club.Schale:
      return 2061870877;
    case Club.TheSeminar:
      return 994952503;
    case Club.AriusSqud:
      return 1856328608;
    case Club.Justice:
      return 807342657;
    case Club.Fuuki:
      return 2781545398;
    case Club.Kohshinjo68:
      return 2473308179;
    case Club.Meihuayuan:
      return 542709158;
    case Club.SisterHood:
      return 48146678;
    case Club.GameDev:
      return 3286973941;
    case Club.anzenkyoku:
      return 1333412405;
    case Club.RemedialClass:
      return 2177215947;
    case Club.SPTF:
      return 3255143589;
    case Club.TrinityVigilance:
      return 276390250;
    case Club.Veritas:
      return 2990854926;
    case Club.TrainingClub:
      return 2933916540;
    case Club.Onmyobu:
      return 3488335082;
    case Club.Shugyobu:
      return 4030183534;
    case Club.Endanbou:
      return 221007527;
    case Club.NinpoKenkyubu:
      return 4113604176;
    case Club.Class227:
      return 1601558005;
    case Club.EmptyClub:
      return 3385575796;
    case Club.Emergentology:
      return 1637611057;
    case Club.RabbitPlatoon:
      return 2734594077;
    case Club.PandemoniumSociety:
      return 3888645239;
    case Club.HotSpringsDepartment:
      return 3522220440;
    case Club.TeaParty:
      return 1961436132;
    case Club.PublicPeaceBureau:
      return 1099365500;
    case Club.Genryumon:
      return 2697079690;
    case Club.BlackTortoisePromenade:
      return 2522104341;
    case Club.LaborParty:
      return 3807444412;
    case Club.KnowledgeLiberationFront:
      return 4105550656;
    case Club.Hyakkayouran:
      return 4136403277;
    case Club.ShinySparkleSociety:
      return 855669332;
    case Club.AbydosStudentCouncil:
      return 239447011;
    default:
      return noDefault(club);
  }
}
