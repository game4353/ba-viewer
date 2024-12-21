import {
  Rarity,
  School,
  StageTopography,
} from "@/assets/game/types/flatDataExcel";
import Interaction from "~assets/Atlas/Common/Cafe_Icon_Interaction.png";
import Gift1 from "~assets/Atlas/Common/Cafe_Interaction_Gift_01.png";
import Gift2 from "~assets/Atlas/Common/Cafe_Interaction_Gift_02.png";
import Gift3 from "~assets/Atlas/Common/Cafe_Interaction_Gift_03.png";
import Gift4 from "~assets/Atlas/Common/Cafe_Interaction_Gift_04.png";
import BgN from "~assets/Atlas/Common/Card_Item_Bg_N.png";
import BgR from "~assets/Atlas/Common/Card_Item_Bg_R.png";
import BgSR from "~assets/Atlas/Common/Card_Item_Bg_SR.png";
import BgSSR from "~assets/Atlas/Common/Card_Item_Bg_SSR.png";
import DamageDealer from "~assets/Atlas/Common/Common_Icon_DamageDealer.png";
import Star from "~assets/Atlas/Common/Common_Icon_Formation_Star.png";
import Star2 from "~assets/Atlas/Common/Common_Icon_Formation_Star_2.png";
import Healer from "~assets/Atlas/Common/Common_Icon_Healer.png";
import Heart from "~assets/Atlas/Common/Common_Icon_Heart.png";
import Indoor from "~assets/Atlas/Common/Common_Icon_Indoor.png";
import Outdoor from "~assets/Atlas/Common/Common_Icon_Outdoor.png";
import Street from "~assets/Atlas/Common/Common_Icon_Street.png";
import Supporter from "~assets/Atlas/Common/Common_Icon_Supporter.png";
import Tanker from "~assets/Atlas/Common/Common_Icon_Tanker.png";
import Vehicle from "~assets/Atlas/Common/Common_Icon_Vehicle.png";
import { uiPath } from "./loader";

export const Icon = {
  Tanker,
  DamageDealer,
  Healer,
  Supporter,
  Vehicle,
  Outdoor,
  Indoor,
  Street,
  BgN,
  BgR,
  BgSR,
  BgSSR,
  Star,
  Star2,
  Interaction,
  Heart,
  Attack: uiPath("UIs/01_Common/25_Campaign/StrategyObjectBuff_Attack"),
  Defense: uiPath("UIs/01_Common/25_Campaign/StrategyObjectBuff_Defense"),
  Gift1,
  Gift2,
  Gift3,
  Gift4,
  arona: uiPath(
    "UIs/01_Common/14_CharacterCollect/NPC_Portrait_Arona_Collection",
  ),
  plana: uiPath(
    "UIs/01_Common/14_CharacterCollect/NPC_Portrait_NP0035_Collection",
  ),
};

export function stageTopographyIcon(stageTopography: StageTopography) {
  switch (stageTopography) {
    case StageTopography.Street:
      return Street;
    case StageTopography.Outdoor:
      return Outdoor;
    case StageTopography.Indoor:
      return Indoor;
  }
}

export function rarityBgIcon(rarity: Rarity) {
  switch (rarity) {
    case Rarity.N:
      return BgN;
    case Rarity.R:
      return BgR;
    case Rarity.SR:
      return BgSR;
    case Rarity.SSR:
      return BgSSR;
  }
}

export function schoolIcon(school: School) {
  const f = (key: string) =>
    uiPath(`UIs/01_Common/11_SchoolIcon/School_Icon_${key}`);
  switch (school) {
    case School.Hyakkiyako:
    case School.RedWinter:
    case School.Trinity:
    case School.Gehenna:
    case School.Abydos:
    case School.Millennium:
    case School.Shanhaijing:
    case School.Valkyrie:
    case School.SRT:
    case School.ETC:
    case School.Sakugawa:
      return f(School[school].toUpperCase());
    case School.Arius:
    case School.Tokiwadai:
      return f(School[school]);
    case School.None:
    case School.WildHunt:
    case School.SCHALE:
      return undefined;
  }
}
