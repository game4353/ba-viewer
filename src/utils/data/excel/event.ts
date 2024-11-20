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
} from "~game/types/flatDataExcel";
import { useExcelMapMany, useExcelMapSingle } from ".";

export const useExcelEventContentSeason = () =>
  useExcelMapMany<EventContentSeasonExcelTable, "EventContentId">(
    "EventContentSeasonExcelTable",
    "EventContentId",
  );

export const useExcelEventContentStage = () =>
  useExcelMapMany<EventContentStageExcelTable, "EventContentId">(
    "EventContentStageExcelTable",
    "EventContentId",
  );

export const useExcelEventContentStageReward = () =>
  useExcelMapMany<EventContentStageRewardExcelTable, "GroupId">(
    "EventContentStageRewardExcelTable",
    "GroupId",
  );

export const useExcelEventContentShop = () =>
  useExcelMapMany<EventContentShopExcelTable, "EventContentId">(
    "EventContentShopExcelTable",
    "EventContentId",
  );

export const useExcelEventContentFortuneGacha = () =>
  useExcelMapSingle<EventContentFortuneGachaExcelTable, "FortuneGachaGroupId">(
    "EventContentFortuneGachaExcelTable",
    "FortuneGachaGroupId",
  );

export const useExcelEventContentFortuneGachaModify = () =>
  useExcelMapSingle<EventContentFortuneGachaModifyExcelTable, "EventContentId">(
    "EventContentFortuneGachaModifyExcelTable",
    "EventContentId",
  );

export const useExcelEventContentFortuneGachaShop = () =>
  useExcelMapMany<EventContentFortuneGachaShopExcelTable, "EventContentId">(
    "EventContentFortuneGachaShopExcelTable",
    "EventContentId",
  );

export const useExcelEventContentCurrencyItem = () =>
  useExcelMapMany<EventContentCurrencyItemExcelTable, "EventContentId">(
    "EventContentCurrencyItemExcelTable",
    "EventContentId",
  );

export const useExcelEventContentCardShop = () =>
  useExcelMapMany<EventContentCardShopExcelTable, "EventContentId">(
    "EventContentCardShopExcelTable",
    "EventContentId",
  );

export const useExcelEventContentCard = () =>
  useExcelMapMany<EventContentCardExcelTable, "EventContentId">(
    "EventContentCardExcelTable",
    "EventContentId",
  );

export const useExcelEventContentBoxGachaManage = () =>
  useExcelMapMany<EventContentBoxGachaManageExcelTable, "EventContentId">(
    "EventContentBoxGachaManageExcelTable",
    "EventContentId",
  );

export const useExcelEventContentBoxGachaShop = () =>
  useExcelMapMany<EventContentBoxGachaShopExcelTable, "EventContentId">(
    "EventContentBoxGachaShopExcelTable",
    "EventContentId",
  );

export const useExcelEventContentCharacterBonus = () =>
  useExcelMapMany<EventContentCharacterBonusExcelTable, "EventContentId">(
    "EventContentCharacterBonusExcelTable",
    "EventContentId",
  );
