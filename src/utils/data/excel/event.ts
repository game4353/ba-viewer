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
  useExcelMapMany<EventContentSeasonExcelTable>(
    "EventContentSeasonExcelTable",
    "EventContentId",
  );

export const useExcelEventContentStage = () =>
  useExcelMapMany<EventContentStageExcelTable>(
    "EventContentStageExcelTable",
    "EventContentId",
  );

export const useExcelEventContentStageReward = () =>
  useExcelMapMany<EventContentStageRewardExcelTable>(
    "EventContentStageRewardExcelTable",
    "GroupId",
  );

export const useExcelEventContentShop = () =>
  useExcelMapMany<EventContentShopExcelTable>(
    "EventContentShopExcelTable",
    "EventContentId",
  );

export const useExcelEventContentFortuneGacha = () =>
  useExcelMapSingle<EventContentFortuneGachaExcelTable>(
    "EventContentFortuneGachaExcelTable",
    "FortuneGachaGroupId",
  );

export const useExcelEventContentFortuneGachaModify = () =>
  useExcelMapSingle<EventContentFortuneGachaModifyExcelTable>(
    "EventContentFortuneGachaModifyExcelTable",
    "EventContentId",
  );

export const useExcelEventContentFortuneGachaShop = () =>
  useExcelMapMany<EventContentFortuneGachaShopExcelTable>(
    "EventContentFortuneGachaShopExcelTable",
    "EventContentId",
  );

export const useExcelEventContentCurrencyItem = () =>
  useExcelMapMany<EventContentCurrencyItemExcelTable>(
    "EventContentCurrencyItemExcelTable",
    "EventContentId",
  );

export const useExcelEventContentCardShop = () =>
  useExcelMapMany<EventContentCardShopExcelTable>(
    "EventContentCardShopExcelTable",
    "EventContentId",
  );

export const useExcelEventContentCard = () =>
  useExcelMapMany<EventContentCardExcelTable>(
    "EventContentCardExcelTable",
    "EventContentId",
  );

export const useExcelEventContentBoxGachaManage = () =>
  useExcelMapMany<EventContentBoxGachaManageExcelTable>(
    "EventContentBoxGachaManageExcelTable",
    "EventContentId",
  );

export const useExcelEventContentBoxGachaShop = () =>
  useExcelMapMany<EventContentBoxGachaShopExcelTable>(
    "EventContentBoxGachaShopExcelTable",
    "EventContentId",
  );

export const useExcelEventContentCharacterBonus = () =>
  useExcelMapMany<EventContentCharacterBonusExcelTable>(
    "EventContentCharacterBonusExcelTable",
    "EventContentId",
  );
