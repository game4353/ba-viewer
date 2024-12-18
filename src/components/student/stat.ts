import {
  CharacterStatExcel,
  StatLevelUpType,
  StatType,
} from "@/assets/game/types/flatDataExcel";
import type { CCharacter } from "@/components/parcel/character/character";
import { MapResult } from "@/utils/data/excel";
import { useExcelCharacterTranscendence } from "@/utils/data/excel/character";
import { useExcelStatLevelInterpolation } from "@/utils/data/excel/stat";
import statLocalizeKey from "@/utils/i18n/custom/keyStatType";
import { useLocalize } from "@/utils/i18n/localize";
import {
  Result,
  assertSome,
  filterSingle,
  type ComputedResult,
} from "@/utils/result/result";
import type { NumberKeys } from "@/utils/types";

enum StatBuffType {
  Base,
  Support,
  Add,
  Multiply,
}

class StatBase {
  apply = true;
  constructor(
    public type: StatType,
    public buffType: StatBuffType,
    public levelUpType: StatLevelUpType,
    private lv: ComputedRef<number>,
    private bonus: ComputedResult<number, Error>,
    public value1: number,
    public value100?: number,
  ) {}

  get name() {
    return computed(() =>
      filterSingle(statRows, (info) => info.type === this.type).andThen(
        (info) => info.name,
      ),
    );
  }

  getValue() {
    return computed(() => {
      const lv = this.lv.value;
      let val = this.value1;
      if (this.value100 != null && lv > 1) {
        // TODO: verify this bold guess
        const index =
          this.levelUpType < StatLevelUpType.TimeAttack ? 0 : this.levelUpType;
        const message =
          `Unable to index '${index}' of ` +
          `StatLevelInterpolationExcel (Level = ${lv}).`;

        const res = useExcelStatLevelInterpolation()
          .value.andThen((map) => map.getResult(lv))
          .map((arr) => arr.StatTypeIndex[index])
          .andThen(assertSome(message))
          .map(
            (ratio) =>
              this.value1 +
              Math.round(((this.value100! - this.value1) * ratio) / 10000),
          );
        if (res.isErr()) return res;
        else val = res.unwrap();
      }
      return this.bonus.value.map((bonus) =>
        Math.ceil(val + (bonus / 10000) * val),
      );
    });
  }
}

export class Stats {
  supports: StatBase[] = [];
  adds: StatBase[] = [];
  multiplies: StatBase[] = [];
  constructor(public base: StatBase) {}

  add(stat: StatBase) {
    switch (stat.buffType) {
      case StatBuffType.Base:
        this.base = stat;
        break;
      case StatBuffType.Support:
        this.supports.push(stat);
        break;
      case StatBuffType.Add:
        this.adds.push(stat);
        break;
      case StatBuffType.Multiply:
        this.multiplies.push(stat);
        break;
    }
    return this;
  }

  getAdd() {
    return computed(() =>
      Result.all(
        this.adds.filter((s) => s.apply).map((s) => s.getValue().value),
      ).map((arr) => arr.reduce((a, b) => a + b, 0)),
    );
  }
  getMultiply() {
    return computed(() =>
      Result.all(
        this.multiplies.filter((s) => s.apply).map((s) => s.getValue().value),
      ).map((arr) => arr.reduce((a, b) => a + b, 0)),
    );
  }
  getSupport() {
    return computed(() =>
      Result.all(
        this.supports.filter((s) => s.apply).map((s) => s.getValue().value),
      ).map((arr) => arr.reduce((a, b) => a + b, 0)),
    );
  }

  getValue() {
    return computed(() =>
      Result.all(
        this.base.getValue().value,
        this.getAdd().value,
        this.getMultiply().value,
        this.getSupport().value,
      ).map(([b, a, m, s]) => {
        // TODO: upper/lower bound
        return s + Math.round((b + a) * (1 + m / 10000));
      }),
    );
  }
}

export class StatInfo {
  constructor(
    public type: StatType,
    public key: NumberKeys<CharacterStatExcel>,
    public isPercent = false,
    public key2?: NumberKeys<CharacterStatExcel>,
  ) {}

  get name() {
    const key = statLocalizeKey(this.type);
    if (Array.isArray(key)) return useLocalize(key[0]);
    return useLocalize(key);
  }
}

export const statRows = [
  new StatInfo(StatType.MaxHP, "MaxHP1", false, "MaxHP100"),
  new StatInfo(StatType.AttackPower, "AttackPower1", false, "AttackPower100"),
  new StatInfo(
    StatType.DefensePower,
    "DefensePower1",
    false,
    "DefensePower100",
  ),
  new StatInfo(StatType.HealPower, "HealPower1", false, "HealPower100"),
  new StatInfo(StatType.AccuracyPoint, "AccuracyPoint"),
  new StatInfo(StatType.DodgePoint, "DodgePoint"),
  new StatInfo(StatType.CriticalPoint, "CriticalPoint"),
  new StatInfo(StatType.CriticalChanceResistPoint, "CriticalResistPoint"),
  new StatInfo(StatType.CriticalDamageRate, "CriticalDamageRate", true),
  new StatInfo(
    StatType.CriticalDamageResistRate,
    "CriticalDamageResistRate",
    true,
  ),
  new StatInfo(
    StatType.DefensePenetration,
    "DefensePenetration1",
    false,
    "DefensePenetration100",
  ),
  new StatInfo(
    StatType.DefensePenetrationResisit,
    "DefensePenetrationResist1",
    false,
    "DefensePenetrationResist100",
  ),
  new StatInfo(StatType.StabilityPoint, "StabilityPoint"),
  new StatInfo(StatType.WeaponRange, "Range"),
  new StatInfo(StatType.SightRange, "SightPoint"),
  new StatInfo(StatType.RegenCost, "RegenCost"),
  new StatInfo(StatType.OppressionPower, "OppressionPower"),
  new StatInfo(StatType.OppressionResist, "OppressionResist"),
  new StatInfo(
    StatType.ExtendCrowdControlDuration,
    "ExtendCrowdControlDuration",
    true,
  ),
  new StatInfo(StatType.EnhanceExplosionRate, "EnhanceExplosionRate", true),
  new StatInfo(StatType.EnhancePierceRate, "EnhancePierceRate", true),
  new StatInfo(StatType.EnhanceMysticRate, "EnhanceMysticRate", true),
  new StatInfo(StatType.EnhanceSonicRate, "EnhanceSonicRate", true),
  new StatInfo(StatType.ExtendBuffDuration, "ExtendBuffDuration", true),
  new StatInfo(StatType.ExtendDebuffDuration, "ExtendDebuffDuration", true),
  new StatInfo(StatType.HealEffectivenessRate, "HealEffectivenessRate", true),
  new StatInfo(StatType.NormalAttackSpeed, "NormalAttackSpeed", true),
  new StatInfo(StatType.MoveSpeed, "MoveSpeed"),
  new StatInfo(StatType.BlockRate, "BlockRate", true),
  new StatInfo(StatType.StreetBattleAdaptation, "StreetBattleAdaptation"),
  new StatInfo(StatType.OutdoorBattleAdaptation, "OutdoorBattleAdaptation"),
  new StatInfo(StatType.IndoorBattleAdaptation, "IndoorBattleAdaptation"),
];

export function useBaseStats(this: CCharacter) {
  const cache = new MapResult<StatType, Result<StatBase, Error>>();
  statRows.forEach((info) => {
    const bonus = computed(() =>
      useExcelCharacterTranscendence()
        .value.andThen((map) => map.getResult(this.id))
        .map((excel) => {
          switch (info.type) {
            case StatType.MaxHP:
              return excel.StatBonusRateHP;
            case StatType.AttackPower:
              return excel.StatBonusRateAttack;
            case StatType.HealPower:
              return excel.StatBonusRateHeal;
            default:
              return [];
          }
        })
        .map((arr) => arr.slice(0, this.star.value).reduce((a, b) => a + b, 0)),
    );
    const base = this.stat.value.map(
      (excel) =>
        new StatBase(
          info.type,
          StatBuffType.Base,
          StatLevelUpType.Standard, // TODO
          this.level,
          bonus,
          excel[info.key],
          info.key2 ? excel[info.key2] : undefined,
        ),
    );
    cache.set(info.type, base);
  });
  return cache;
}
