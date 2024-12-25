import { cache } from "@/utils/misc";
import type {
  EventContentBoxGachaElementExcelTable,
  EventContentBoxGachaManageExcelTable,
  EventContentBoxGachaShopExcelTable,
  EventContentCardExcelTable,
  EventContentCardShopExcelTable,
  EventContentCharacterBonusExcelTable,
  EventContentCurrencyItemExcelTable,
  EventContentFortuneGachaExcelTable,
  EventContentFortuneGachaModifyExcelTable,
  EventContentFortuneGachaShopExcelTable,
  EventContentMiniEventTokenExcelTable,
  EventContentMissionExcelTable,
  EventContentSeasonExcelTable,
  EventContentShopExcelTable,
  EventContentShopInfoExcelTable,
  EventContentStageExcelTable,
  EventContentStageRewardExcelTable,
  EventContentStageTotalRewardExcelTable,
  EventContentTreasureCellRewardExcel,
  EventContentTreasureRewardExcel,
  EventContentTreasureRoundExcel,
} from "~game/excelType";
import {
  useExcelDbMapMany,
  useExcelDbMapSingle,
  useExcelMapMany,
  useExcelMapSingle,
} from ".";

export const useExcelEventContentTreasureCellReward = cache(() =>
  useExcelDbMapSingle<EventContentTreasureCellRewardExcel, "Id">(
    "EventContentTreasureCellReward",
    "Id",
  ),
);
export const useExcelEventContentTreasureReward = cache(() =>
  useExcelDbMapSingle<EventContentTreasureRewardExcel, "Id">(
    "EventContentTreasureReward",
    "Id",
  ),
);
export const useExcelEventContentTreasureRound = cache(() =>
  useExcelDbMapMany<EventContentTreasureRoundExcel, "EventContentId">(
    "EventContentTreasureRound",
    "EventContentId",
  ),
);

export const useExcelEventContentBoxGachaElement = cache(() =>
  useExcelMapMany<EventContentBoxGachaElementExcelTable, "EventContentId">(
    "EventContentBoxGachaElementExcelTable",
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

export const useExcelEventContentCard = cache(() =>
  useExcelMapMany<EventContentCardExcelTable, "EventContentId">(
    "EventContentCardExcelTable",
    "EventContentId",
  ),
);

export const useExcelEventContentCardShop = cache(() =>
  useExcelMapMany<EventContentCardShopExcelTable, "EventContentId">(
    "EventContentCardShopExcelTable",
    "EventContentId",
  ),
);

export const useExcelEventContentCharacterBonus = cache(() =>
  useExcelMapMany<EventContentCharacterBonusExcelTable, "EventContentId">(
    "EventContentCharacterBonusExcelTable",
    "EventContentId",
  ),
);

export const useExcelEventContentCurrencyItem = cache(() =>
  useExcelMapMany<EventContentCurrencyItemExcelTable, "EventContentId">(
    "EventContentCurrencyItemExcelTable",
    "EventContentId",
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

export const useExcelEventContentMiniEventToken = cache(() =>
  useExcelMapMany<EventContentMiniEventTokenExcelTable, "EventContentId">(
    "EventContentMiniEventTokenExcelTable",
    "EventContentId",
  ),
);

export const useExcelEventContentMission = cache(() =>
  useExcelMapMany<EventContentMissionExcelTable, "EventContentId">(
    "EventContentMissionExcelTable",
    "EventContentId",
  ),
);

export const useExcelEventContentSeason = cache(() =>
  useExcelMapMany<EventContentSeasonExcelTable, "EventContentId">(
    "EventContentSeasonExcelTable",
    "EventContentId",
  ),
);

export const useExcelEventContentShop = cache(() =>
  useExcelMapMany<EventContentShopExcelTable, "EventContentId">(
    "EventContentShopExcelTable",
    "EventContentId",
  ),
);
export const useExcelEventContentShopInfo = cache(() =>
  useExcelMapMany<EventContentShopInfoExcelTable, "EventContentId">(
    "EventContentShopInfoExcelTable",
    "EventContentId",
  ),
);

export const useExcelEventContentStage = cache(() =>
  useExcelMapMany<EventContentStageExcelTable, "EventContentId">(
    "EventContentStageExcelTable",
    "EventContentId",
  ),
);

export const useExcelEventContentStageTotalReward = cache(() =>
  useExcelMapMany<EventContentStageTotalRewardExcelTable, "EventContentId">(
    "EventContentStageTotalRewardExcelTable",
    "EventContentId",
  ),
);

export const useExcelEventContentStageReward = cache(() =>
  useExcelMapMany<EventContentStageRewardExcelTable, "GroupId">(
    "EventContentStageRewardExcelTable",
    "GroupId",
  ),
);

export const useExcelEventContentFortuneGacha = cache(() =>
  useExcelMapSingle<EventContentFortuneGachaExcelTable, "FortuneGachaGroupId">(
    "EventContentFortuneGachaExcelTable",
    "FortuneGachaGroupId",
  ),
);
