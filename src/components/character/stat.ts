import {
  StatType,
  type CharacterStatExcel,
} from "@/assets/game/types/flatDataExcel";
import type { NumberKeys } from "@/utils/types";

enum StatBuffType {
  Base,
  Add,
  Percent,
}

export class Stat {
  type: StatType;
  value: number;
  /** default: StatBuffType.Base */
  buffType: StatBuffType;
  constructor(type: StatType, value: number, buffType?: StatBuffType) {
    this.type = type;
    this.value = value;
    this.buffType = buffType ?? StatBuffType.Base;
  }
}

export class Stats {
  base: Stat[] = [];
  stats: Stat[][] = [];
  add(...stats: Stat[]) {
    stats.forEach((stat) => {
      if (stat.buffType === StatBuffType.Base) {
        this.base[stat.type] = stat;
      } else {
        this.stats[stat.type] ??= [];
        this.stats[stat.type].push(stat);
      }
    });
    return this;
  }
  getList(statType: StatType) {
    const out: [number, number, number] = [0, 0, 0];
    const arr = [this.base[statType], ...this.stats[statType]];
    arr.forEach((s) => {
      out[s.buffType] += s.value;
    });
    return out;
  }
  getValue(statType: StatType) {
    const [b, a, m] = this.getList(statType);
    // TODO: upper/lower bound
    return Math.round((b + a) * (1 + m / 10000));
  }
  toList() {
    return statRows.map((statRow): [string, number, number, number] => [
      statRow.name,
      ...this.getList(statRow.type),
    ]);
  }
  static from(...stats: Stat[]) {
    return new Stats().add(...stats);
  }
}

export class StatRow {
  constructor(
    public type: StatType,
    public name: string,
    public key?: NumberKeys<CharacterStatExcel>,
    public isPercent = false,
  ) {
    this.type = type;
    this.name = name;
    this.key = key;
    this.isPercent = isPercent;
  }
}

export const statRows = [
  new StatRow(StatType.MaxHP, "HP"),
  new StatRow(StatType.AttackPower, "攻撃力"),
  new StatRow(StatType.DefensePower, "防御力"),
  new StatRow(StatType.HealPower, "治癒力"),
  new StatRow(StatType.AccuracyPoint, "命中値", "AccuracyPoint"),
  new StatRow(StatType.DodgePoint, "回避値", "DodgePoint"),
  new StatRow(StatType.CriticalPoint, "会心値", "CriticalPoint"),
  new StatRow(
    StatType.CriticalResistChanceRate,
    "会心発生抵抗力",
    "CriticalResistPoint",
  ),
  new StatRow(
    StatType.CriticalDamageRate,
    "会心ダメージ",
    "CriticalDamageRate",
    true,
  ),
  new StatRow(
    StatType.CriticalDamageResistRate,
    "会心ダメージ抵抗率",
    "CriticalDamageResistRate",
    true,
  ),
  new StatRow(StatType.DefensePenetration, "防御貫通値"),
  new StatRow(StatType.DefensePenetrationResisit, "防御貫通抵抗率"),
  new StatRow(StatType.StabilityPoint, "安定値", "StabilityPoint"),
  new StatRow(StatType.WeaponRange, "射程距離", "Range"),
  new StatRow(StatType.SightRange, "視野", "SightPoint"),
  new StatRow(StatType.RegenCost, "コスト回復力", "RegenCost"),
  new StatRow(StatType.OppressionPower, "CC強化力", "OppressionPower"),
  new StatRow(StatType.OppressionResist, "CC抵抗力", "OppressionResist"),
  new StatRow(
    StatType.ExtendCrowdControlDuration,
    "CC状態持続力",
    "ExtendCrowdControlDuration",
    true,
  ),
  new StatRow(
    StatType.EnhanceExplosionRate,
    "爆発特効",
    "EnhanceExplosionRate",
    true,
  ),
  new StatRow(
    StatType.EnhancePierceRate,
    "貫通特効",
    "EnhancePierceRate",
    true,
  ),
  new StatRow(
    StatType.EnhanceMysticRate,
    "神秘特効",
    "EnhanceMysticRate",
    true,
  ),
  new StatRow(StatType.EnhanceSonicRate, "振動特効 ", "EnhanceSonicRate", true),
  new StatRow(
    StatType.ExtendBuffDuration,
    "バフ効果持続力",
    "ExtendBuffDuration",
    true,
  ),
  new StatRow(
    StatType.ExtendDebuffDuration,
    "弱体状態持続力",
    "ExtendDebuffDuration",
    true,
  ),
  new StatRow(
    StatType.HealEffectivenessRate,
    "被回復率",
    "HealEffectivenessRate",
    true,
  ),
  new StatRow(
    StatType.NormalAttackSpeed,
    "攻撃速度",
    "NormalAttackSpeed",
    true,
  ),
  new StatRow(StatType.MoveSpeed, "移動速度", "MoveSpeed"),
  new StatRow(StatType.BlockRate, "遮蔽ブロック率ボーナス ", "BlockRate", true),
];
