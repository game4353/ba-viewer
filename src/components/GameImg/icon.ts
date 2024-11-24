import Outdoor from "~assets/Atlas/Common/Common_Icon_Outdoor.png";
import Indoor from "~assets/Atlas/Common/Common_Icon_Indoor.png";
import Street from "~assets/Atlas/Common/Common_Icon_Street.png";
import BgN from "~assets/Atlas/Common/Card_Item_Bg_N.png";
import BgR from "~assets/Atlas/Common/Card_Item_Bg_R.png";
import BgSR from "~assets/Atlas/Common/Card_Item_Bg_SR.png";
import BgSSR from "~assets/Atlas/Common/Card_Item_Bg_SSR.png";
import Star from "~assets/Atlas/Common/Common_Icon_Formation_Star.png";
import Star2 from "~assets/Atlas/Common/Common_Icon_Formation_Star_2.png";
import Interaction from "~assets/Atlas/Common/Cafe_Icon_Interaction.png";
import Heart from "~assets/Atlas/Common/Common_Icon_Heart.png";
import { Rarity, StageTopography } from "@/assets/game/types/flatDataExcel";

export const Icon = {
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
