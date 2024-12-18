import { StatType } from "@/assets/game/types/flatDataExcel";
import { noDefault } from "@/utils/misc";

export default function statLocalizeKey(stat: StatType) {
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
    default:
      return noDefault(stat);
  }
}
