import { cache } from "@/util";
import type {
  EventContentBoxGachaManageExcelTable,
  EventContentBoxGachaShopExcelTable,
  EventContentCardExcelTable,
  EventContentCardShopExcelTable,
  EventContentCharacterBonusExcelTable,
  EventContentCurrencyItemExcelTable,
  EventContentFortuneGachaExcelTable,
  EventContentFortuneGachaModifyExcelTable,
  EventContentFortuneGachaShopExcelTable,
  EventContentSeasonExcelTable,
  EventContentShopExcelTable,
  EventContentStageExcelTable,
  EventContentStageRewardExcelTable,
  EventContentStageTotalRewardExcelTable,
} from "~game/types/flatDataExcel";
import { useExcelMapMany, useExcelMapSingle } from ".";

export const useExcelEventContentSeason = cache(() =>
  useExcelMapMany<EventContentSeasonExcelTable, "EventContentId">(
    "EventContentSeasonExcelTable",
    "EventContentId",
  ),
);

export const useExcelEventContentStage = cache(() =>
  useExcelMapMany<EventContentStageExcelTable, "EventContentId">(
    "EventContentStageExcelTable",
    "EventContentId",
  ),
);

export const useExcelEventContentStageReward = cache(() =>
  useExcelMapMany<EventContentStageRewardExcelTable, "GroupId">(
    "EventContentStageRewardExcelTable",
    "GroupId",
  ),
);
export const useExcelEventContentStageTotalReward = cache(() =>
  useExcelMapMany<EventContentStageTotalRewardExcelTable, "EventContentId">(
    "EventContentStageTotalRewardExcelTable",
    "EventContentId",
  ),
);

export const useExcelEventContentShop = cache(() =>
  useExcelMapMany<EventContentShopExcelTable, "EventContentId">(
    "EventContentShopExcelTable",
    "EventContentId",
  ),
);

export const useExcelEventContentFortuneGacha = cache(() =>
  useExcelMapSingle<EventContentFortuneGachaExcelTable, "FortuneGachaGroupId">(
    "EventContentFortuneGachaExcelTable",
    "FortuneGachaGroupId",
  ),
);

export const useExcelEventContentFortuneGachaModify = cache(() =>
  useExcelMapSingle<EventContentFortuneGachaModifyExcelTable, "EventContentId">(
    "EventContentFortuneGachaModifyExcelTable",
    "EventContentId",
  ),
);

export const useExcelEventContentFortuneGachaShop = cache(() =>
  useExcelMapMany<EventContentFortuneGachaShopExcelTable, "EventContentId">(
    "EventContentFortuneGachaShopExcelTable",
    "EventContentId",
  ),
);

export const useExcelEventContentCurrencyItem = cache(() =>
  useExcelMapMany<EventContentCurrencyItemExcelTable, "EventContentId">(
    "EventContentCurrencyItemExcelTable",
    "EventContentId",
  ),
);

export const useExcelEventContentCardShop = cache(() =>
  useExcelMapMany<EventContentCardShopExcelTable, "EventContentId">(
    "EventContentCardShopExcelTable",
    "EventContentId",
  ),
);

export const useExcelEventContentCard = cache(() =>
  useExcelMapMany<EventContentCardExcelTable, "EventContentId">(
    "EventContentCardExcelTable",
    "EventContentId",
  ),
);

export const useExcelEventContentBoxGachaManage = cache(() =>
  useExcelMapMany<EventContentBoxGachaManageExcelTable, "EventContentId">(
    "EventContentBoxGachaManageExcelTable",
    "EventContentId",
  ),
);

export const useExcelEventContentBoxGachaShop = cache(() =>
  useExcelMapMany<EventContentBoxGachaShopExcelTable, "EventContentId">(
    "EventContentBoxGachaShopExcelTable",
    "EventContentId",
  ),
);

export const useExcelEventContentCharacterBonus = cache(() =>
  useExcelMapMany<EventContentCharacterBonusExcelTable, "EventContentId">(
    "EventContentCharacterBonusExcelTable",
    "EventContentId",
  ),
);
