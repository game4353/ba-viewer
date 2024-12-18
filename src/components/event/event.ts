import {
  useExcelDbEventContentTreasureRound,
  useExcelEventContentBoxGachaManage,
  useExcelEventContentBoxGachaShop,
  useExcelEventContentCard,
  useExcelEventContentCardShop,
  useExcelEventContentCharacterBonus,
  useExcelEventContentCurrencyItem,
  useExcelEventContentFortuneGachaModify,
  useExcelEventContentFortuneGachaShop,
  useExcelEventContentMission,
  useExcelEventContentShop,
  useExcelEventContentStage,
  useExcelEventContentStageTotalReward,
} from "@/utils/data/excel/event";
import { asResult } from "@/utils/result/result";

export class CEvent {
  constructor(public id: number) {}

  get bonus() {
    return asResult(
      useExcelEventContentCharacterBonus().value.map((map) => map.get(this.id)),
    );
  }

  get boxManage() {
    return asResult(
      useExcelEventContentBoxGachaManage().value.map((map) => map.get(this.id)),
    );
  }
  get boxShop() {
    return asResult(
      useExcelEventContentBoxGachaShop().value.map((map) => map.get(this.id)),
    );
  }

  get card() {
    return asResult(
      useExcelEventContentCard().value.map((map) => map.get(this.id)),
    );
  }
  get cardShop() {
    return asResult(
      useExcelEventContentCardShop().value.map((map) => map.get(this.id)),
    );
  }

  get currency() {
    return asResult(
      useExcelEventContentCurrencyItem().value.map((map) => map.get(this.id)),
    );
  }

  get fortuneModify() {
    return asResult(
      useExcelEventContentFortuneGachaModify().value.map((map) =>
        map.get(this.id),
      ),
    );
  }
  get fortuneShop() {
    return asResult(
      useExcelEventContentFortuneGachaShop().value.map((map) =>
        map.get(this.id),
      ),
    );
  }

  get missions() {
    return asResult(
      useExcelEventContentMission().value.map((map) => map.get(this.id)),
    );
  }

  get shops() {
    return asResult(
      useExcelEventContentShop().value.map((map) => map.get(this.id)),
    );
  }

  get stages() {
    return asResult(
      useExcelEventContentStage().value.map((map) => map.get(this.id)),
    );
  }

  get totalReward() {
    return asResult(
      useExcelEventContentStageTotalReward().value.map((map) =>
        map.get(this.id),
      ),
    );
  }

  get treasureRound() {
    return asResult(
      useExcelDbEventContentTreasureRound().value.map((map) =>
        map.get(this.id),
      ),
    );
  }
}
