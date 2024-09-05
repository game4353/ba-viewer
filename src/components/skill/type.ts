type bool = boolean;
type int = number;
type long = number;
type float = number;

enum TargetSortCriteria {
  None,
  CurrentHP,
  MaxHP,
  HPRate,
  Distance,
  AttackPower,
  DefensePower,
  BuffCount,
  DebuffCount,
  CrowdControlCount,
  LogicEffectTemplateCount,
  Stat,
  SummonedTime,
  All,
}
enum AliveState {
  None = 0,
  Alive = 1,
  Dying = 2,
  Dead = 4,
  AliveOrDying = 3,
  AliveOrDead = 5,
  DeadOrDying = 6,
  All = -1,
}
enum CoverState {
  None,
  NotCovered,
  Covered,
}
enum TransformDecideTiming {
  SkillStart,
  EntitySpawn,
}
enum HighlightOption {
  None,
  Highlight,
  HighlightAndFactor,
}
enum SpawnPositionTypes {
  None,
  Invoker,
  InputPosition,
  InputBattleEntity,
  AliveAllyCenter,
  AliveEnemyCenter,
  GroundCenter,
  BattleEntity,
  WorldPosition,
  SkillCommandSelectedTarget,
  SkillCommandSelectedPosition,
}
enum SpawnDirectionTypes {
  None,
  Invoker,
  Input,
  ToTarget,
  AllyToEnemy,
  EnemyToAlly,
  AliveAllyCenter,
  AliveEnemyCenter,
  WorldPosition,
  CasterToTarget,
  TargetToCaster,
}
enum SkillApplyType {
  None,
  Direct = 2,
  Hitscan = 4,
  AlwaysBlocked,
}
enum AbilityActivateTag {
  None,
  ActionStart,
  ActionRelease,
  ActionEnd = 4,
}
enum TargetSortOrder {
  None,
  Highest,
  Lowest,
  Random,
}
enum StatType {
  AttackPower,
  DefensePower,
  MoveSpeed,
  AttackRange,
  CriticalRate,
  CriticalDamageRate,
  ShotTime,
  Hp,
  LifeStealRate,
  EvasionRate,
}
enum PassiveTriggerEvent {
  None,
  BattleEntity_NormalAttack = 2,
  BattleEntity_UseSkillStart,
  BattleEntity_Attack,
  BattleEntity_Damaged,
  BattleEntity_Polling,
  BattleEntity_Heal,
  BattleEntity_Healed,
  BattleEntity_Dying,
  BattleEntity_Attacked = 0xb,
  BattleEntity_Dodged,
  BattleEntity_AttackCritical,
  BattleEntity_Died,
  BattleEntity_KillEnemy,
  BattleEntity_Reload,
  BattleEntity_UseSkillEnd,
  BattleEntity_AddLogicEffectTemplate,
  BattleEntity_CoverStart,
  BattleEntity_CoverEnd,
  BattleEntity_DamageHit,
  BattleEntity_RemoveLogicEffectTemplate,
  BattleEntity_AddLogicEffectCategory,
  BattleEntity_AddLogicEffectGroupId,
  BattleEntity_RemoveLogicEffectGroupId,
  BattleEntity_KillAlly,
  BattleEntity_CountLogicEffectCategory,
  BattleEntity_UseExSkillCost,
  BattleEntity_AppliedLogicEffectCategory,
  BattleEntity_AppliedLogicEffectGroupId,
  BattleEntity_AppliedLogicEffectTemplate,
  Immediate = 1,
  Battle_Periodic = 0x69,
  Battle_Polling = 0x65,
  BattleEntityState_OnOff = 0x12d,
  BattleEntityState_NotMoving,
  BattleEntityState_Reloading,
}
enum PassiveSkillTargetType {
  None,
  UseTriggerSource,
  UseTriggerTarget,
  UseSkillEntityTargetingRule,
  UseTriggerTargetExceptSelf,
}
enum SkillToTargetDistributeType {
  None,
  EachToEachTarget,
  AllToOneTarget,
  OneToAllTarget,
}
enum TargetSideId {
  None = 0,
  Self = 2,
  Ally_Except_Self = 4,
  Enemy = 8,
  Neutral = 0x10,
  Ally = 6,
  Self_or_Enemy = 0xa,
  Self_or_Neutral = 0x12,
  Ally_or_Enemy = 0xe,
  Ally_or_Neutral = 0x16,
  Enemy_or_Neutral = 0x18,
  All_Except_Self = 0xc,
  ALL = 0x7fffffff,
}
enum TargetingType {
  None,
  Target,
  Position,
}
enum TargetEntityType {
  None = 0,
  Character = 5,
  Character_Except_TSS = 1,
  TSS = 4,
  Supporter = 8,
  Obstacle = 2,
}
enum ModifierCheckTarget {
  Caster,
  Target,
  CasterAlly,
  CasterEnemy,
  All,
  CasterAllyExceptCaster,
}
enum ManualSkillTypes {
  None,
  GroupBuff,
  StrategyBuff,
  EventBuff,
}
enum NormalAttackCondition {
  None,
  IsWeaponMounted,
  MoveEndRequired,
  TargetNotAvailable,
  ForceMoveCommandExists,
  BulletEmpty,
  BurstRoundOver,
  PublicSkillEnabled,
  FormConversionRequired,
  IsOrderByRandom,
}
enum NormalAttackPhaseName {
  AttackEnter,
  Reload,
  AttackStart = 3,
  AttackIng,
  AttackBurstDelay,
  AttackFinish,
  MountWeapon,
  UnmountWeapon,
  SearchNewTarget = 0x7ffffffe,
  ExitNormalAttack,
}
enum AutoUseConditionType {
  None,
  Interval,
  HpUnder,
  HasLogicEffectCategory,
  AmmoCountUnder,
  OnAttackIng,
  KillTarget,
  GainBattleItem,
  HitLogicEffectCategory,
  HpOver,
  CriticalAttack,
  CriticalAttacked,
  Healed,
  Dodged,
  Blocked,
  CoverTime,
  UseSkill,
  HitLogicEffectGroupId,
  HitLogicEffectTemplateId,
  Attacked,
  RemoveLogicEffectTemplateId,
}
enum AreaTransformTypes {
  None,
  RadiusIncrement,
  RadiusDecrement,
  ObbCenterIncrement,
  ObbCenterDecrement,
  FanClockWise,
  FanCounterClockWise,
  FanClockwiseRound,
  FanCounterClockwiseRound,
}

interface Vector2 {
  x: number;
  y: number;
}
interface AbilityModifierData {
  CheckTarget: ModifierCheckTarget;
}
export interface LevelSkillAbilityData {
  StartDelay: number;
  LogicEffectGroupIds: string[];
  Modifiers: AbilityModifierData[];
}
interface SkillLogicData {
  SkillDataKey: string;
}
interface TargetSortRule {
  SortCriteria: TargetSortCriteria;
  SortStat: StatType;
  SortParameter: string;
  OrderBy: TargetSortOrder;
}
interface EssentialCandidateRule {
  TargetSide: TargetSideId;
  TargetingType: TargetingType;
  ApplyEntityType: TargetEntityType;
  MaxTargetCount: number;
}
interface PassiveTriggerData {
  Event: PassiveTriggerEvent;
  Parameters: string;
  ConditionExpression: string;
  TriggerRate: number;
  EchelonConstraint: EchelonConstraint;
}
interface TargetFindRule {
  Sort: TargetSortRule;
  EssentialCandidate: EssentialCandidateRule;
  OptionalCandidate: OptionalCandidateRule;
}
export interface SkillEntityTimelineData {
  Frame: number;
  DamageDistributeRate: number;
  Entity: LevelSkillEntityData;
}
export interface LevelSkillEntityData {
  EntityName: string;
  SpawnRate: number;
  SpawnDelay: number;
  ApplyType: SkillApplyType;
  DecideTiming: TransformDecideTiming;
  EntitySpawnIncludeOutOfRangeInputTarget: boolean;
  SpawnPositionType: SpawnPositionTypes;
  SpawnWorldPosition: Vector2;
  PositionOffset: Vector2;
  PositionRandomOffsetRange: number;
  OffsetDirectionType: SpawnDirectionTypes;
  SpawnDirectionType: SpawnDirectionTypes;
  OverrideTargetingRule: boolean;
  TargetSortRule: TargetSortRule;
  EssentialCandidateRule: EssentialCandidateRule;
  OptionalCandidateRule: OptionalCandidateRule;
  HighlightOption: HighlightOption;
  CheckSpawnPositionMovable: boolean;
}
interface LevelTargetSkillEntityData extends LevelSkillEntityData {
  Abilities: LevelSkillAbilityData[];
}
export interface LevelNormalAttackBulletEntityData
  extends LevelTargetSkillEntityData {
  Speed: number;
}
export interface LevelFanAreaEntityData extends LevelAreaEntityData {
  Radius: number;
  Degree: number;
  AngleOffset: number;
}
enum ProjectileTypes {
  None,
  TargetCharacter,
  TargetPosition,
  Nontarget,
  Max,
}
enum EntitySpawnRule {
  SpawnAll,
  SpawnOnlyOne,
  SpawnOnlyOnePerFrame,
}
enum EntitySpawnCondition {
  None,
  HPRateUnder,
  HPRateOver,
  IncludeLogicEffectTemplateId,
  ExcludeLogicEffectTemplateId,
  Rate,
  IncludeArmorType,
  ExcludeArmorType,
  SkillLevel,
  IncludeTag,
  ExcludeTag,
}
enum EntitySpawnConditionCheckTarget {
  Caster,
  Target,
}
interface AreaTimelineData {
  Frame: int;
  SpawnCheckLogicEffetTemplateId: string;
  AreaData: LevelAreaEntityData;
}
interface AreaSpawnerData extends LevelSkillEntityData {
  Duration: number;
  EntityTimeline: AreaTimelineData[];
}
export interface LevelTargetAttachedEntityData extends LevelSkillEntityData {
  Abilities: LevelSkillAbilityData[];
}
export interface LevelObbAreaEntityData extends LevelAreaEntityData {
  Width: long;
  Height: long;
  AngleOffset: float;
}
export interface LevelDonutAreaEntityData extends LevelFanAreaEntityData {
  ExcludeRadius: long;
}
export interface LevelCircleAreaEntityData extends LevelAreaEntityData {
  Radius: long;
}
export interface SkillEntitySpawnerTimelineData
  extends SkillEntityTimelineData {
  SpawnCondition: EntitySpawnCondition;
  SpawnConditionParameter: string;
  SpawnConditionParameterForTag: string;
  SpawnConditionCheckTarget: EntitySpawnConditionCheckTarget;
}
export interface SkillEntitySpawnerData extends LevelSkillEntityData {
  Duration: int;
  SpawnRule: EntitySpawnRule;
  RemoveEntityIfSkillCancel: bool;
  OverrideSkillStartTimingWithSpawnerSpawn: bool;
  EntityTimeline: Array<SkillEntitySpawnerTimelineData>;
}
export interface LevelNontargetProjectileEntityData
  extends LevelProjectileEntityData {
  AngleOffset: float;
  ExpireDistance: long;
  Piercing: bool;
  BounceCondition: LevelNontargetProjectileEntityData_NontargetBounceCondition;
  BounceEntity: LevelSkillEntityData;
}
enum LevelNontargetProjectileEntityData_NontargetBounceCondition {
  None,
  Obstacle,
  Boss,
}
export interface LevelTargetProjectileEntityData
  extends LevelProjectileEntityData {}
export interface LevelProjectileEntityData extends LevelSkillEntityData {
  DestinationType: SpawnPositionTypes;
  DestinationWorldPosition: Vector2;
  DestinationPositionOffset: Vector2;
  DestinationPositionRandomOffsetRange: number;
  DestinationOffsetDirectionType: SpawnDirectionTypes;
  ReduceDamageRatePerHit: number;
  MaxReducedDamageRate: number;
  ProjectileType: ProjectileTypes;
  ShapeType: ShapeType;
  Width: number;
  Height: number;
  Speed: number;
  FireDelayFrame: number;
  IsStickToTargetAfterHit: boolean;
  Abilities: Array<LevelSkillAbilityData>;
  SplashDelayFrame: number;
  SplashAreaEntityData: LevelAreaEntityData;
  AreaSpawnerData: AreaSpawnerData;
  SkillEntitySpawnerData: SkillEntitySpawnerData;
}
enum ShapeType {
  None,
  Circle = 3,
  Donut,
  Fan,
  LineSegment,
  OBB,
}
export interface LevelAreaEntityData extends LevelSkillEntityData {
  AttachTarget: boolean;
  AllowDuplicateHit: boolean;
  RemoveEntityIfSkillCancel: boolean;
  Duration: number;
  RotateEntityDirectionEveryFrame: boolean;
  ApplyOffsetRotateEntityDirection: boolean;
  HitFrames: Array<number>;
  CollisionProperty: AreaCollisionProperty;
  CheckBlockHit: boolean;
  AreaAbilities: Array<LevelSkillAbilityData>;
  HitCheckCouplingKey: string;
}
interface AreaCollisionProperty {
  TransformType: AreaTransformTypes;
  TransformCount: number;
}
interface SkillEntityValue {
  EntityName: string;
  SpawnRate: number;
  SpawnDelay: number;
  LogicName: string;
  ApplyType: SkillApplyType;
  DecideTiming: TransformDecideTiming;
  EntitySpawnIncludeOutOfRangeInputTarget: boolean;
  SpawnPositionType: SpawnPositionTypes;
  SpawnWorldPosition: Vector2;
  PositionOffset: Vector2;
  PositionRandomOffsetRange: number;
  OffsetDirectionType: SpawnDirectionTypes;
  SpawnDirectionType: SpawnDirectionTypes;
  TargetSortRule: TargetSortRule;
  TargetCandidateRule: TargetCandidateRule;
  UsePrimaryTargetingRule: boolean;
  DamageDistributeRate: number;
  CheckSpawnPositionMovable: boolean;
}
interface TargetSkillEntityValue extends SkillEntityValue {
  Abilities: SkillAbilityValue[];
}
export interface NormalAttackBulletEntityValue extends TargetSkillEntityValue {
  Speed: number;
}
export interface ExSkillEntityTimelineData extends SkillEntityTimelineData {
  Tag: AbilityActivateTag;
  InvokerDirectionOverride: SpawnDirectionTypes;
  InvokerDirectionOverrideWorldPosition: Vector2;
}
interface ExtraFrameData {
  Key: string;
  Frame: number;
}
interface NewSkillActionData extends SkillLogicData {
  MinRange: number;
  Duration: number;
  Range: number;
  Angle: number;
  CheckCanUseSkillPoint: boolean;
  IsWeaponMountAfterSkill: boolean;
  InvokerDirection: SpawnDirectionTypes;
  InvokerDirectionWorldPosition: Vector2;
  RootMotionMoveData: LevelRootMotionMoveData;
  SkipAttackEnterAfterRootMotion: boolean;
  MainEntityData: LevelSkillEntityData;
  TargetSortRule: TargetSortRule;
  EssentialCandidateRule: EssentialCandidateRule;
  OptionalCandidateRule: OptionalCandidateRule;
  AutoUseRule: AutoUseRule;
}
interface LevelRootMotionMoveData extends LevelSkillEntityData {
  CheckCollisionType: TargetEntityType;
  IgnoreMovableCheckInMove: boolean;
}
interface NormalAttackPhaseData {
  Description: string;
  PhaseDataId: number;
  OnEnterNormalAttack: Array<NormalAttackPhaseControl>;
  AfterAttackEnter: Array<NormalAttackPhaseControl>;
  AfterReload: Array<NormalAttackPhaseControl>;
  AfterAttackStart: Array<NormalAttackPhaseControl>;
  AfterAttackIng: Array<NormalAttackPhaseControl>;
  AfterAttackBurstDelay: Array<NormalAttackPhaseControl>;
  AfterAttackFinish: Array<NormalAttackPhaseControl>;
  AfterMountWeapon: Array<NormalAttackPhaseControl>;
  AfterUnmountWeapon: Array<NormalAttackPhaseControl>;
  AfterSearchNewTarget: Array<NormalAttackPhaseControl>;
}
interface NormalAttackPhaseControl {
  Condition: NormalAttackCondition;
  ConditionSecond: NormalAttackCondition;
  NextPhase: NormalAttackPhaseName;
}
interface AutoUseRule {
  ConditionType: AutoUseConditionType;
  ConditionArgument: string;
  ConditionCheckTarget: ModifierCheckTarget;
  CoolTimeNotTrigger: number;
  TryCount: number;
  ResetTryCountUseSkill: boolean;
  TriggerRate: number;
  MaxTriggerCount: number;
  CheckMountStatus: boolean;
}
export interface ManualSkillData extends SkillLogicData {
  ManualSkillType: ManualSkillTypes;
  Abilities: LevelSkillAbilityData[];
}
export interface PassiveSkillData extends SkillLogicData {
  Duration: number;
  MaxTriggerCount: number;
  CoolTimeNotTrigger: number;
  TryCount: number;
  ResetTryCountUseSkill: boolean;
  TriggerCondition: PassiveTriggerData;
  TriggerSourceFindRule: TargetFindRule;
  SkillTargetType: PassiveSkillTargetType;
  EntityTimeline: ExSkillEntityTimelineData[];
}
export interface TimelineSkillActionData {
  DistributeType: SkillToTargetDistributeType;
  RotateTurretOnly: boolean;
  RotateInvokerDirectionEveryFrame: boolean;
  EntityTimeline: ExSkillEntityTimelineData[];
}
export interface NormalAttackSkillActionData extends NewSkillActionData {
  DistributeType: SkillToTargetDistributeType;
  AnimationFrames: Array<ExtraFrameData>;
  ExclusiveIngInvokerDirectionOverride: SpawnDirectionTypes;
  ExclusiveIngInvokerDirectionOverrideWorldPosition: Vector2;
  ShotFrames: Array<SkillEntityTimelineData>;
  PhaseData: NormalAttackPhaseData;
}
export interface LevelCircleAuraEntityData extends LevelAuraEntityData {
  Radius: long;
}
enum LevelAuraEntityData_SameAuraCheckCondition {
  None = 0,
  SameInvokerEntityId = 1,
  SameInvokerTeam = 2,
  SameSkillId = 4,
  SameSkillEntityName = 8,
  All = 0xf,
}
export interface LevelAuraEntityData extends LevelSkillEntityData {
  AttachSpawnTarget: bool;
  RotateEntityDirectionEveryFrame: bool;
  ApplyOffsetRotateEntityDirection: bool;
  RemoveEntityIfAttachSpawnTargetDie: bool;
  Duration: int;
  Interval: int;
  RemoveEntityIfSameEntitySpawn: LevelAuraEntityData_SameAuraCheckCondition;
  RemoveEntityIfSkillCancel: bool;
  AreaAbilities: Array<LevelSkillAbilityData>;
}

interface EchelonConstraint {
  // CountConstraint: CountConstraint;
  // SchoolConstraint: SchoolConstraint;
  // WeaponConstraint: WeaponConstraint;
  IsEmpty: boolean;
}
interface OptionalCandidateRule {
  AliveState: AliveState;
  // SchoolConstraint: SchoolConstraint;
  // WeaponConstraint: WeaponConstraint;
  // SquadTypeConstraint: SquadTypeConstraint;
  // AdaptationConstraint: AdaptationConstraint;
  // BulletConstraint: BulletConstraint;
  // TacticRangeConstraint: TacticRangeConstraint;
  // TagConstraint: TagConstraint;
  CoverState: CoverState;
  // HPRateConstraint: HPRateConstraint;
  // TacticRoleConstraint: TacticRoleConstraint;
}
interface TargetCandidateRule {
  IsValid: boolean;
  TargetingType: TargetingType;
  ApplyEntityType: TargetEntityType;
  MaxCount: number;
  TargetSide: TargetSideId;
  AliveState: AliveState;
  // SchoolConstraint: SchoolConstraint;
  // WeaponConstraint: WeaponConstraint;
  // SquadTypeConstraint: SquadTypeConstraint;
  // AdaptationConstraint: AdaptationConstraint;
  // BulletConstraint: BulletConstraint;
  // TacticRangeConstraint: TacticRangeConstraint;
  // TagConstraint: TagConstraint;
  // HPRateConstraint: HPRateConstraint;
  // TacticRoleConstraint: TacticRoleConstraint;
  CoverState: CoverState;
  NeedSearchTarget: boolean;
}
interface LogicEffectValue {
  Level: number;
  LogicEffectGroupId: string;
  LogicEffectTemplateId: string;
  // Category: LogicEffectCategory;
  Channel: number;
  // ApplyRate: BasisPoint;
  CommonVisualIdHash: number;
  ForceFloaterHide: boolean;
  PriorityWhenSameFrame: number;
}
interface SkillAbilityValue {
  StartDelay: number;
  LogicEffectValues: LogicEffectValue[];
  // Modifiers: AbilityModifier[];
}
