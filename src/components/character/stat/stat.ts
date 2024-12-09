import {
  CharacterStatExcel,
  StatLevelUpType,
  StatType,
} from "@/assets/game/types/flatDataExcel";
import type { CCharacter } from "@/components/parcel/character/character";
import { MapResult } from "@/utils/data/excel";
import { useExcelCharacterTranscendence } from "@/utils/data/excel/character";
import { useExcelStatLevelInterpolation } from "@/utils/data/excel/stat";
import { Local } from "@/utils/localize";
import {
  Result,
  assertSome,
  filterSingle,
  type ComputedResult,
} from "@/utils/result";
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
        (info) => info.name.value,
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
    if (Array.isArray(key)) return Local.useLocalize(key[0]);
    return Local.useLocalize(key);
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
  new StatInfo(
    StatType.CriticalChanceResistPoint,

    "CriticalResistPoint",
  ),
  new StatInfo(
    StatType.CriticalDamageRate,

    "CriticalDamageRate",
    true,
  ),
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
  new StatInfo(
    StatType.EnhanceExplosionRate,

    "EnhanceExplosionRate",
    true,
  ),
  new StatInfo(
    StatType.EnhancePierceRate,

    "EnhancePierceRate",
    true,
  ),
  new StatInfo(
    StatType.EnhanceMysticRate,

    "EnhanceMysticRate",
    true,
  ),
  new StatInfo(StatType.EnhanceSonicRate, "EnhanceSonicRate", true),
  new StatInfo(
    StatType.ExtendBuffDuration,

    "ExtendBuffDuration",
    true,
  ),
  new StatInfo(
    StatType.ExtendDebuffDuration,

    "ExtendDebuffDuration",
    true,
  ),
  new StatInfo(
    StatType.HealEffectivenessRate,

    "HealEffectivenessRate",
    true,
  ),
  new StatInfo(
    StatType.NormalAttackSpeed,

    "NormalAttackSpeed",
    true,
  ),
  new StatInfo(StatType.MoveSpeed, "MoveSpeed"),
  new StatInfo(StatType.BlockRate, "BlockRate", true),
  new StatInfo(
    StatType.StreetBattleAdaptation,

    "StreetBattleAdaptation",
  ),
  new StatInfo(
    StatType.OutdoorBattleAdaptation,

    "OutdoorBattleAdaptation",
  ),
  new StatInfo(
    StatType.IndoorBattleAdaptation,

    "IndoorBattleAdaptation",
  ),
];

function statLocalizeKey(stat: StatType) {
  switch (stat) {
    case StatType.None:
      return 0;
    case StatType.MaxHP:
      return [174099309, 2315751001];
    case StatType.AttackPower:
      return [2776096194, 3814013723];
    case StatType.DefensePower:
      return [3565550080, 2811023218];
    case StatType.HealPower:
      return [2350318299, 1505936883];
    case StatType.AccuracyPoint:
      return [3491696154, 3969676476];
    case StatType.AccuracyRate:
      return 0;
    case StatType.DodgePoint:
      return [3877153994, 167972287];
    case StatType.DodgeRate:
      return 3097994845;
    case StatType.CriticalPoint:
      return [3746647505, 3756261878];
    case StatType.CriticalChanceRate:
      return 3914006887;
    case StatType.CriticalResistChanceRate:
      return 0;
    case StatType.CriticalDamageRate:
      return [324300432, 360182301];
    case StatType.MoveSpeed:
      return 2720480260;
    case StatType.SightRange:
      return 3022657841;
    case StatType.ActiveGauge:
      return 0;
    case StatType.StabilityPoint:
      return [3996994971, 3845644051];
    case StatType.StabilityRate:
      return 132816424;
    case StatType.ReloadTime:
      return 2786644157;
    case StatType.MaxBulletCount:
      return 3893970368;
    case StatType.IgnoreDelayCount:
      return 0;
    case StatType.WeaponRange:
      return [1815108773, 4050385988];
    case StatType.BlockRate:
      return 153250186;
    case StatType.BodyRadius:
      return 0;
    case StatType.ActionCount:
      return 0;
    case StatType.StrategyMobility:
      return 0;
    case StatType.StrategySightRange:
      return 0;
    case StatType.StreetBattleAdaptation:
      return [2892501778, 1450079696];
    case StatType.OutdoorBattleAdaptation:
      return [195645400, 2731595079];
    case StatType.IndoorBattleAdaptation:
      return [2867785960, 467926590];
    case StatType.HealEffectivenessRate:
      return 1032137393;
    case StatType.CriticalChanceResistPoint:
      return 893696770;
    case StatType.CriticalDamageResistRate:
      return 3064913964;
    case StatType.LifeRecoverOnHit:
      return 0;
    case StatType.NormalAttackSpeed:
      return 4177175092;
    case StatType.AmmoCost:
      return 2221774116;
    case StatType.GroggyGauge:
      return 0;
    case StatType.GroggyTime:
      return 0;
    case StatType.DamageRatio:
      return 0;
    case StatType.DamagedRatio:
      return 0;
    case StatType.OppressionPower:
      return [3913914365, 3503353690];
    case StatType.OppressionResist:
      return [1306414638, 3161569696];
    case StatType.RegenCost:
      return [985260961, 3627383766];
    case StatType.InitialWeaponRangeRate:
      return 0;
    case StatType.DefensePenetration:
      return 2981862394;
    case StatType.DefensePenetrationResisit:
      return 234860988;
    case StatType.ExtendBuffDuration:
      return [1992155137, 2311064264];
    case StatType.ExtendDebuffDuration:
      return [762452597, 3795623591];
    case StatType.ExtendCrowdControlDuration:
      return [586720942, 2071966422];
    case StatType.EnhanceExplosionRate:
      return [2467564135, 3243126610];
    case StatType.EnhancePierceRate:
      return [2845625919, 3653558365];
    case StatType.EnhanceMysticRate:
      return [4164119721, 3570523915];
    case StatType.EnhanceLightArmorRate:
      return [105668838, 2848948005];
    case StatType.EnhanceHeavyArmorRate:
      return [1509378743, 51768661];
    case StatType.EnhanceUnarmedRate:
      return [2289801375, 356407691];
    case StatType.EnhanceSiegeRate:
      return 1603775950;
    case StatType.EnhanceNormalRate:
      return 2830969998;
    case StatType.EnhanceStructureRate:
      return 2434439654;
    case StatType.EnhanceNormalArmorRate:
      return 2314919724;
    case StatType.DamageRatio2Increase:
      return 2568506766;
    case StatType.DamageRatio2Decrease:
      return 866634439;
    case StatType.DamagedRatio2Increase:
      return 1835081002;
    case StatType.DamagedRatio2Decrease:
      return 1476217792;
    case StatType.EnhanceSonicRate:
      return 1942470412;
    case StatType.EnhanceElasticArmorRate:
      return 1405904843;
    case StatType.ExDamagedRatioIncrease:
      return 0;
    case StatType.ExDamagedRatioDecrease:
      return 0;
    case StatType.EnhanceExDamageRate:
      return 0;
    case StatType.ReduceExDamagedRate:
      return 0;
    case StatType.HealRate:
      return 0;
    case StatType.HealLightArmorRate:
      return 0;
    case StatType.HealHeavyArmorRate:
      return 0;
    case StatType.HealUnarmedRate:
      return 0;
    case StatType.HealElasticArmorRate:
      return 0;
    case StatType.HealNormalArmorRate:
      return 0;
    case StatType.HealedExplosionRate:
      return 0;
    case StatType.HealedPierceRate:
      return 0;
    case StatType.HealedMysticRate:
      return 0;
    case StatType.HealedSonicRate:
      return 0;
    case StatType.HealedNormalRate:
      return 0;
    case StatType.Max:
      return 0;
  }
}

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
