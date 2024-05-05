export enum GroundNodeType {
  None = 0,
  WalkAble = 1,
  JumpAble = 2,
  TSSOnly = 3,
  NotWalkAble = 2147483647,
}

export enum BubbleType {
  Idle = 0,
  Monologue = 1,
  EmoticonNormal = 2,
  EmoticonFavorite = 3,
  EmoticonReward = 4,
  EmoticonGiveGift = 5,
}

export enum FurnitureCategory {
  Furnitures = 0,
  Decorations = 1,
  Interiors = 2,
}

export enum FurnitureSubCategory {
  Table = 0,
  Closet = 1,
  Chair = 2,
  Bed = 3,
  FurnitureEtc = 4,
  FurnitureSubCategory1 = 5,
  Prop = 6,
  HomeAppliance = 7,
  WallDecoration = 8,
  FloorDecoration = 9,
  DecorationEtc = 10,
  DecorationSubCategory1 = 11,
  Floor = 12,
  Background = 13,
  Wallpaper = 14,
  InteriorsSubCategory1 = 15,
  All = 16,
}

export enum FurnitureLocation {
  None = 0,
  Inventory = 1,
  Floor = 2,
  WallLeft = 3,
  WallRight = 4,
}

export enum AcademyMessageConditions {
  None = 0,
  FavorRankUp = 1,
  AcademySchedule = 2,
  Answer = 3,
  Feedback = 4,
}

export enum AcademyMessageTypes {
  None = 0,
  Text = 1,
  Image = 2,
}

export enum VoiceEvent {
  OnTSA = 0,
  FormationPickUp = 1,
  CampaignResultDefeat = 2,
  CampaignResultVictory = 3,
  CharacterLevelUp = 4,
  CharacterTranscendence = 5,
  SkillLevelUp = 6,
  Formation = 7,
  CampaignCharacterSpawn = 8,
  BattleStartTimeline = 9,
  BattleVictoryTimeline = 10,
  CharacterFavor = 11,
  BattleMiss = 12,
  BattleBlock = 13,
  BattleCover = 14,
  BattleMove = 15,
  BattleMoveToForamtionBeacon = 16,
  MGS_GameStart = 17,
  MGS_CharacterSelect = 18,
  MGS_Attacking = 19,
  MGS_GeasGet = 20,
  EXSkill = 21,
  EXSkillLevel = 22,
  EXSkill2 = 23,
  EXSkillLevel2 = 24,
  EXSkill3 = 25,
  EXSkillLevel3 = 26,
  EXSkill4 = 27,
  EXSkillLevel4 = 28,
  PublicSkill01 = 29,
  PublicSkill02 = 30,
  InteractionPublicSkill01 = 31,
  InteractionPublicSkill02 = 32,
}

export enum UnitType {
  None = 0,
  AR = 1,
  RF = 2,
  HG = 3,
  MG = 4,
  SMG = 5,
  SG = 6,
  HZ = 7,
  Melee = 8,
}

export enum AttackType {
  Single = 0,
  Splash = 1,
  Through = 2,
  Heal = 3,
}

export enum ProjectileType {
  Guided = 0,
  Ground = 1,
  GuidedExplosion = 2,
  GroundConstDistance = 3,
  AirConstDistance = 4,
}

export enum DamageFontColor {
  Blue = 0,
  White = 1,
  Yellow = 2,
  Red = 3,
  Green = 4,
}

export enum TargetingCellType {
  None = 0,
  Near = 1,
  Far = 2,
}

export enum TargetingUnitType {
  None = 0,
  Near = 1,
  Far = 2,
  MinHp = 3,
  MaxHp = 4,
  Random = 5,
}

export enum ProjectileAction {
  None = 0,
  Damage = 1,
  Heal = 2,
}

export enum FontType {
  None = 0,
  Damage = 1,
  Block = 2,
  Heal = 3,
  Miss = 4,
  Critical = 5,
  Skill = 6,
  Immune = 7,
  DamageResist = 8,
  DamageWeak = 9,
  CriticalResist = 10,
  CriticalWeak = 11,
  Effective = 12,
  CriticalEffective = 13,
}

export enum EmoticonEvent {
  CoverEnter = 0,
  ShelterEnter = 1,
  Panic = 2,
  NearlyDead = 3,
  Reload = 4,
  Found = 5,
  GetBeacon = 6,
  Warning = 7,
}

export enum BulletType {
  Normal = 0,
  Pierce = 1,
  Explosion = 2,
  Siege = 3,
  Mystic = 4,
  None = 5,
  Sonic = 6,
}

export enum ActionType {
  Crush = 0,
  Courage = 1,
  Tactic = 2,
}

export enum BuffOverlap {
  Able = 0,
  Unable = 1,
  Change = 2,
  Additive = 3,
}

export enum ReArrangeTargetType {
  AllySelf = 0,
  AllyAll = 1,
  AllyUnitType = 2,
  AllyGroup = 3,
}

export enum ArmorType {
  LightArmor = 0,
  HeavyArmor = 1,
  Unarmed = 2,
  Structure = 3,
  Normal = 4,
  ElasticArmor = 5,
}

export enum WeaponType {
  None = 0,
  SG = 1,
  SMG = 2,
  AR = 3,
  GL = 4,
  HG = 5,
  RL = 6,
  SR = 7,
  DSMG = 8,
  RG = 9,
  DSG = 10,
  Vulcan = 11,
  Missile = 12,
  Cannon = 13,
  Taser = 14,
  MG = 15,
  Binah = 16,
  MT = 17,
  Relic = 18,
  FT = 19,
}

export enum EntityMaterialType {
  Wood = 0,
  Stone = 1,
  Flesh = 2,
  Metal = 3,
}

export enum CoverMotionType {
  All = 0,
  Kneel = 1,
}

export enum TargetSortBy {
  DISTANCE = 0,
  HP = 1,
  DAMAGE_EFFICIENCY = 2,
  TARGETED_COUNT = 3,
  RANDOM = 4,
  FRONT_FORMATION = 5,
}

export enum PositioningType {
  CloseToObstacle = 0,
  CloseToTarget = 1,
}

export enum DamageType {
  Normal = 0,
  Critical = 1,
  IgnoreDefence = 2,
}

export enum FormationLine {
  Students = 0,
  TSS = 1,
}

export enum ExternalBTNodeType {
  Sequence = 0,
  Selector = 1,
  Instant = 2,
  SubNode = 3,
  ExecuteAll = 4,
}

export enum ExternalBTTrigger {
  None = 0,
  HPUnder = 1,
  ApplySkillEffectCategory = 2,
  HaveNextExSkillActiveGauge = 3,
  UseNormalSkill = 4,
  UseExSkill = 5,
  CheckActiveGaugeOver = 6,
  CheckPeriod = 7,
  CheckSummonCharacterCountOver = 8,
  CheckSummonCharacterCountUnder = 9,
  ApplyGroggy = 10,
  ApplyLogicEffectTemplateId = 11,
  OnSpawned = 12,
  CheckActiveGaugeBetween = 13,
  DestroyParts = 14,
  CheckHallucinationCountOver = 15,
  CheckHallucinationCountUnder = 16,
  UseSkillEndGroupId = 17,
}

export enum ExternalBehavior {
  UseNextExSkill = 0,
  ChangePhase = 1,
  ChangeSection = 2,
  AddActiveGauge = 3,
  UseSelectExSkill = 4,
  ClearNormalSkill = 5,
  MoveLeft = 6,
  MoveRight = 7,
  AllUseSelectExSkill = 8,
  ConnectCharacterToDummy = 9,
  ConnectExSkillToParts = 10,
  SetMaxHPToParts = 11,
  AlivePartsUseExSkill = 12,
  ActivatePart = 13,
  AddGroggy = 14,
  SelectTargetToUseSkillAlly = 15,
  ForceChangePhase = 16,
  ClearUseSkillEndGroupId = 17,
}

export enum TacticEntityType {
  None = 0,
  Student = 1,
  Minion = 2,
  Elite = 4,
  Champion = 8,
  Boss = 16,
  Obstacle = 32,
  Servant = 64,
  Vehicle = 128,
  Summoned = 256,
  Hallucination = 512,
  DestructibleProjectile = 1024,
}

export enum BuffIconType {
  None = 0,
  Debuff_DyingPenalty = 1,
  CC_MindControl = 2,
  CC_Inoperative = 3,
  CC_Confusion = 4,
  CC_Provoke = 5,
  CC_Silence = 6,
  CC_Blind = 7,
  Dot_Damage = 8,
  Dot_Heal = 9,
  Buff_AttackPower = 10,
  Buff_CriticalChance = 11,
  Buff_CriticalDamage = 12,
  Buff_DefensePower = 13,
  Buff_Dodge = 14,
  Buff_Hit = 15,
  Buff_WeaponRange = 16,
  Buff_SightRange = 17,
  Buff_MoveSpeed = 18,
  Buff_Mind = 19,
  Debuf_AttackPower = 20,
  Debuff_CriticalChance = 21,
  Debuff_CriticalDamage = 22,
  Debuff_DefensePower = 23,
  Debuff_Dodge = 24,
  Debuff_Hit = 25,
  Debuff_WeaponRange = 26,
  Debuff_SightRange = 27,
  Debuff_MoveSpeed = 28,
  Debuff_Mind = 29,
  Buff_AttackTime = 30,
  Debuff_AttackTime = 31,
  Buff_MaxHp = 32,
  Debuff_MaxHp = 33,
  Buff_MaxBulletCount = 34,
  Debuff_MaxBulletCount = 35,
  Debuff_SuppliesCondition = 36,
  Buff_HealEffectivenessRate = 37,
  Debuff_HealEffectivenessRate = 38,
  Buff_HealPower = 39,
  Debuff_HealPower = 40,
  Buff_CriticalChanceResistPoint = 41,
  Debuff_CriticalChanceResistPoint = 42,
  CC_Stunned = 43,
  Debuff_ConcentratedTarget = 44,
  Buff_Immortal = 45,
  Max = 46,
}

export enum Difficulty {
  Normal = 0,
  Hard = 1,
  VeryHard = 2,
  Hardcore = 3,
  Extreme = 4,
  Insane = 5,
  Torment = 6,
}

export enum EngageType {
  SearchAndMove = 0,
  HoldPosition = 1,
}

export enum HitEffectPosition {
  Position = 0,
  HeadBone = 1,
  BodyBone = 2,
  Follow = 3,
}

export enum StageTopography {
  Street = 0,
  Outdoor = 1,
  Indoor = 2,
}

export enum TerrainAdaptationStat {
  D = 0,
  C = 1,
  B = 2,
  A = 3,
  S = 4,
  SS = 5,
}

export enum SquadType {
  None = 0,
  Main = 1,
  Support = 2,
  TSS = 3,
}

export enum ObstacleClass {
  MAIN = 0,
  SUB = 1,
}

export enum ObstacleDestroyType {
  Remain = 0,
  Remove = 1,
}

export enum ObstacleHeightType {
  Low = 0,
  Middle = 1,
  High = 2,
}

export enum ObstacleCoverType {
  None = 0,
  Cover = 1,
  Shelter = 2,
}

export enum SkillCategory {
  None = 0,
}

export enum LogicEffectCategory {
  None = 0,
  Attack = 1,
  Heal = 2,
  Buff = 3,
  Debuff = 4,
  CrowdControl = 5,
  Boss = 6,
  Dummy = 7,
}

export enum AimIKType {
  None = 0,
  OneHandRight = 1,
  OneHandLeft = 2,
  TwoHandRight = 3,
  TwoHandLeft = 4,
  Tripod = 5,
  Dual = 6,
  Max = 7,
}

export enum DamageAttribute {
  Resist = 0,
  Normal = 1,
  Weak = 2,
  Effective = 3,
}

export enum SkillPriorityCheckCondition {
  None = 0,
  HPRateUnder = 1,
  DebuffCountOver = 2,
  BuffCountOver = 3,
  CrowdControlOver = 4,
}

export enum SkillPriorityCheckTarget {
  Ally = 0,
  Enemy = 1,
  All = 2,
}

export enum StageType {
  Main = 0,
  Sub = 1,
}

export enum OperatorCondition {
  None = 0,
  StrategyStart = 1,
  StrategyVictory = 2,
  StrategyDefeat = 3,
  AdventureCombatStart = 4,
  AdventureCombatVictory = 5,
  AdventureCombatDefeat = 6,
  ArenaCombatStart = 7,
  ArenaCombatVictory = 8,
  ArenaCombatDefeat = 9,
  WeekDungeonCombatStart = 10,
  WeekDungeonCombatVictory = 11,
  WeekDungeonCombatDefeat = 12,
  SchoolDungeonCombatStart = 13,
  SchoolDungeonCombatVictory = 14,
  SchoolDungeonCombatDefeat = 15,
  StrategyWarpUnitFromHideTile = 16,
  TimeAttackDungeonStart = 17,
  TimeAttackDungeonVictory = 18,
  TimeAttackDungeonDefeat = 19,
  WorldRaidBossSpawn = 20,
  WorldRaidBossKill = 21,
  WorldRaidBossDamaged = 22,
  WorldRaidScenarioBattle = 23,
  MinigameTBGThemaOpen = 24,
  MinigameTBGThemaComeback = 25,
  MinigameTBGAllyRevive = 26,
  MinigameTBGItemUse = 27,
}

export enum KnockbackDirection {
  TargetToCaster = 0,
  CasterToTarget = 1,
  TargetToHitPosition = 2,
  HitPositionToTarget = 3,
  CasterToHitPosition = 4,
  HitPositionToCaster = 5,
  Caster = 6,
  Target = 7,
}

export enum EndCondition {
  Duration = 0,
  ReloadCount = 1,
  AmmoCount = 2,
  AmmoHit = 3,
  HitCount = 4,
  None = 5,
  UseExSkillCount = 6,
}

export enum LogicEffectSound {
  None = 0,
  Damage = 1,
  Heal = 2,
  Knockback = 3,
}

export enum EffectBone {
  None = 0,
  Shot = 1,
  Head = 2,
  Body = 3,
  Shot2 = 4,
  Shot3 = 5,
  Extra = 6,
  Extra2 = 7,
  Extra3 = 8,
}

export enum ArenaSimulatorServer {
  Preset = 0,
  Live = 1,
  Dev = 2,
  QA = 3,
}

export enum ClearCheck {
  None = 0,
  Success_Play = 1,
  Success_Sweep = 2,
  Fail_Timeout = 3,
  Fail_PlayerGiveUp = 4,
  Fail_Annihilation = 5,
}

export enum BuffType {
  None = 0,
  Buff_AttackPower = 1,
  Buff_CriticalChance = 2,
  Buff_CriticalDamage = 3,
  Buff_DefensePower = 4,
  Buff_Dodge = 5,
  Buff_Hit = 6,
  Buff_WeaponRange = 7,
  Buff_SightRange = 8,
  Buff_MoveSpeed = 9,
  Buff_AttackTime = 10,
  Buff_MaxHp = 11,
  Buff_MaxBulletCount = 12,
  DeBuff_AttackPower = 13,
  DeBuff_CriticalChance = 14,
  DeBuff_CriticalDamage = 15,
  DeBuff_DefensePower = 16,
  DeBuff_Dodge = 17,
  DeBuff_Hit = 18,
  DeBuff_WeaponRange = 19,
  DeBuff_SightRange = 20,
  DeBuff_MoveSpeed = 21,
  DeBuff_AttackTime = 22,
  DeBuff_MaxHp = 23,
  DeBuff_MaxBulletCount = 24,
}

export enum WorldRaidDifficulty {
  None = 0,
  A = 1,
  B = 2,
  C = 3,
  D = 4,
  E = 5,
  F = 6,
  G = 7,
}

export enum TacticSpeed {
  None = 0,
  Slow = 1,
  Normal = 2,
  Fast = 3,
}

export enum TacticSkillUse {
  None = 0,
  Auto = 1,
  Manual = 2,
}

export enum ShowSkillCutIn {
  None = 0,
  Once = 1,
  Always = 2,
}

export enum BattleCalculationStat {
  FinalDamage = 0,
  FinalHeal = 1,
  FinalDamageRatio = 2,
  FinalDamageRatio2 = 3,
  FinalCriticalRate = 4,
}

export enum StatTransType {
  SpecialTransStat = 0,
  TSATransStat = 1,
}

export enum StatLevelUpType {
  Standard = 0,
  Premature = 1,
  LateBloom = 2,
  Obstacle = 3,
  TimeAttack = 4,
}

export enum GrowthCategory {
  None = 0,
  LevelUp = 1,
  Transcend = 2,
  SkillLevelUp = 3,
}

export enum StatType {
  None = 0,
  MaxHP = 1,
  AttackPower = 2,
  DefensePower = 3,
  HealPower = 4,
  AccuracyPoint = 5,
  AccuracyRate = 6,
  DodgePoint = 7,
  DodgeRate = 8,
  CriticalPoint = 9,
  CriticalChanceRate = 10,
  CriticalResistChanceRate = 11,
  CriticalDamageRate = 12,
  MoveSpeed = 13,
  SightRange = 14,
  ActiveGauge = 15,
  StabilityPoint = 16,
  StabilityRate = 17,
  ReloadTime = 18,
  MaxBulletCount = 19,
  IgnoreDelayCount = 20,
  WeaponRange = 21,
  BlockRate = 22,
  BodyRadius = 23,
  ActionCount = 24,
  StrategyMobility = 25,
  StrategySightRange = 26,
  StreetBattleAdaptation = 27,
  OutdoorBattleAdaptation = 28,
  IndoorBattleAdaptation = 29,
  HealEffectivenessRate = 30,
  CriticalChanceResistPoint = 31,
  CriticalDamageResistRate = 32,
  LifeRecoverOnHit = 33,
  NormalAttackSpeed = 34,
  AmmoCost = 35,
  GroggyGauge = 36,
  GroggyTime = 37,
  DamageRatio = 38,
  DamagedRatio = 39,
  OppressionPower = 40,
  OppressionResist = 41,
  RegenCost = 42,
  InitialWeaponRangeRate = 43,
  DefensePenetration = 44,
  DefensePenetrationResisit = 45,
  ExtendBuffDuration = 46,
  ExtendDebuffDuration = 47,
  ExtendCrowdControlDuration = 48,
  EnhanceExplosionRate = 49,
  EnhancePierceRate = 50,
  EnhanceMysticRate = 51,
  EnhanceLightArmorRate = 52,
  EnhanceHeavyArmorRate = 53,
  EnhanceUnarmedRate = 54,
  EnhanceSiegeRate = 55,
  EnhanceNormalRate = 56,
  EnhanceStructureRate = 57,
  EnhanceNormalArmorRate = 58,
  DamageRatio2Increase = 59,
  DamageRatio2Decrease = 60,
  DamagedRatio2Increase = 61,
  DamagedRatio2Decrease = 62,
  EnhanceSonicRate = 63,
  EnhanceElasticArmorRate = 64,
  ExDamagedRatioIncrease = 65,
  ExDamagedRatioDecrease = 66,
  Max = 67,
}

export enum ProductionStep {
  ToDo = 0,
  Doing = 1,
  Complete = 2,
  Release = 3,
}

export enum TacticRole {
  None = 0,
  DamageDealer = 1,
  Tanker = 2,
  Supporter = 3,
  Healer = 4,
  Vehicle = 5,
}

export enum TacticRange {
  Back = 0,
  Front = 1,
  Middle = 2,
}

export enum CVCollectionType {
  CVNormal = 0,
  CVEvent = 1,
  CVEtc = 2,
}

export enum CVPrintType {
  CharacterOverwrite = 0,
  PrefabOverwrite = 1,
  Add = 2,
}

export enum CVExceptionTarget {
  CharacterId = 0,
  SquadType = 1,
}

export enum PotentialStatBonusRateType {
  None = 0,
  MaxHP = 1,
  AttackPower = 2,
  HealPower = 3,
}

export enum ClanSocialGrade {
  None = 0,
  President = 1,
  Manager = 2,
  Member = 3,
  Applicant = 4,
  Refused = 5,
  Kicked = 6,
  Quit = 7,
  VicePredisident = 8,
}

export enum ClanJoinOption {
  Free = 0,
  Permission = 1,
  All = 2,
}

export enum ClanSearchOption {
  Name = 0,
  Id = 1,
}

export enum ClanRewardType {
  None = 0,
  AssistTerm = 1,
  AssistRent = 2,
  Attendance = 3,
}

export enum ConquestEnemyType {
  None = 0,
  Normal = 1,
  MiddleBoss = 2,
  Boss = 3,
  UnexpectedEvent = 4,
  Challenge = 5,
  IndividualErosion = 6,
  MassErosion = 7,
}

export enum ConquestTeamType {
  None = 0,
  Team1 = 1,
  Team2 = 2,
  Team3 = 3,
}

export enum ConquestTileType {
  None = 0,
  Start = 1,
  Normal = 2,
  Battle = 3,
  Base = 4,
}

export enum ConquestObjectType {
  None = 0,
  ParcelOneTimePerAccount = 1,
}

export enum ConquestItemType {
  None = 0,
  EventPoint = 1,
  EventToken1 = 2,
  EventToken2 = 3,
  EventToken3 = 4,
  EventToken4 = 5,
  EventToken5 = 6,
}

export enum ConquestProgressType {
  None = 0,
  Upgrade = 1,
  Manage = 2,
}

export enum TileState {
  None = 0,
  PartiallyConquested = 1,
  FullyConquested = 2,
}

export enum ConquestEventType {
  None = 0,
  Event01 = 1,
  Event02 = 2,
}

export enum ConquestConditionType {
  None = 0,
  OpenDateOffset = 1,
  ItemAcquire = 2,
  ParcelUse = 3,
  KillUnit = 4,
}

export enum ConquestErosionType {
  None = 0,
  IndividualErosion = 1,
  MassErosion = 2,
}

export enum ContentType {
  None = 0,
  CampaignMainStage = 1,
  CampaignSubStage = 2,
  WeekDungeon = 3,
  EventContentMainStage = 4,
  EventContentSubStage = 5,
  CampaignTutorialStage = 6,
  EventContentMainGroundStage = 7,
  SchoolDungeon = 8,
  TimeAttackDungeon = 9,
  Raid = 10,
  Conquest = 11,
  EventContentStoryStage = 12,
  CampaignExtraStage = 13,
  StoryStrategyStage = 14,
  ScenarioMode = 15,
  EventContent = 16,
  WorldRaid = 17,
  EliminateRaid = 18,
  Chaser = 19,
  FieldContentStage = 20,
  MultiFloorRaid = 21,
}

export enum EventContentType {
  Stage = 0,
  Gacha = 1,
  Mission = 2,
  Shop = 3,
  Raid = 4,
  Arena = 5,
  BoxGacha = 6,
  Collection = 7,
  Recollection = 8,
  MiniGameRhythm = 9,
  CardShop = 10,
  EventLocation = 11,
  MinigameRhythmEvent = 12,
  FortuneGachaShop = 13,
  SubEvent = 14,
  EventMeetup = 15,
  BoxGachaResult = 16,
  Conquest = 17,
  WorldRaid = 18,
  DiceRace = 19,
  MiniGameRhythmMission = 20,
  WorldRaidEntrance = 21,
  MiniEvent = 22,
  MiniGameShooting = 23,
  MiniGameShootingMission = 24,
  MiniGameTBG = 25,
  TimeAttackDungeon = 26,
  EliminateRaid = 27,
  Treasure = 28,
  Field = 29,
  MultiFloorRaid = 30,
  MinigameDreamMaker = 31,
}

export enum OpenCondition {
  Hide = 0,
  Lock = 1,
  Open = 2,
}

export enum ResetContentType {
  None = 0,
  HardStagePlay = 1,
  StarategyMapHeal = 2,
  ShopRefresh = 3,
  ArenaDefenseVictoryReward = 4,
  WeeklyMasterCoin = 5,
  WorldRaidGemEnterCount = 6,
  ConquestDailyErosionCheck = 7,
  MiniEventToken = 8,
}

export enum WeekDungeonType {
  None = 0,
  ChaserA = 1,
  ChaserB = 2,
  ChaserC = 3,
  FindGift = 4,
  Blood = 5,
}

export enum StarGoalType {
  None = 0,
  AllAlive = 1,
  Clear = 2,
  GetBoxes = 3,
  ClearTimeInSec = 4,
}

export enum OpenConditionContent {
  Shop = 0,
  Gacha = 1,
  LobbyIllust = 2,
  Raid = 3,
  Cafe = 4,
  Unit_Growth_Skill = 5,
  Unit_Growth_LevelUp = 6,
  Unit_Growth_Transcendence = 7,
  Arena = 8,
  Academy = 9,
  Equip = 10,
  Item = 11,
  Favor = 12,
  Prologue = 13,
  Mission = 14,
  WeekDungeon_Chase = 15,
  __Deprecated_WeekDungeon_FindGift = 16,
  __Deprecated_WeekDungeon_Blood = 17,
  Story_Sub = 18,
  Story_Replay = 19,
  WeekDungeon = 20,
  None = 21,
  Shop_Gem = 22,
  Craft = 23,
  Student = 24,
  GuideMission = 25,
  Clan = 26,
  Echelon = 27,
  Campaign = 28,
  EventContent = 29,
  Guild = 30,
  EventStage_1 = 31,
  EventStage_2 = 32,
  Talk = 33,
  Billing = 34,
  Schedule = 35,
  Story = 36,
  Tactic_Speed = 37,
  Cafe_Invite = 38,
  EventMiniGame_1 = 39,
  SchoolDungeon = 40,
  TimeAttackDungeon = 41,
  ShiftingCraft = 42,
  WorldRaid = 43,
  Tactic_Skip = 44,
  Mulligan = 45,
  EventPermanent = 46,
  Main_L_1_2 = 47,
  Main_L_1_3 = 48,
  Main_L_1_4 = 49,
  EliminateRaid = 50,
  Cafe_2 = 51,
  Cafe_Invite_2 = 52,
  MultiFloorRaid = 53,
  StrategySkip = 54,
  MinigameDreamMaker = 55,
}

export enum ContentLockType {
  None = 0,
  NotUseControlledByOtherSetting = 1,
  Academy = 2,
  MultiFloorRaid = 3,
  EventContent = 4,
  EventNotice = 5,
  GuideMission = 6,
  Campaign = 7,
  Story = 8,
  WeekDungeon_Chase = 9,
  WeekDungeon = 10,
  SchoolDungeon = 11,
  Raid = 12,
  EliminateRaid = 13,
  TimeAttackDungeon = 14,
  Arena = 15,
  Cafe = 16,
  GemShop = 17,
  Gacha = 18,
  Craft = 19,
  MomoTalk = 20,
}

export enum TutorialFailureContentType {
  None = 0,
  Campaign = 1,
  WeekDungeon = 2,
  Raid = 3,
  TimeAttackDungeon = 4,
  WorldRaid = 5,
  Conquest = 6,
  EliminateRaid = 7,
  MultiFloorRaid = 8,
}

export enum FeverBattleType {
  Campaign = 0,
  Raid = 1,
  WeekDungeon = 2,
  Arena = 3,
}

export enum EventContentScenarioConditionType {
  None = 0,
  DayAfter = 1,
  EventPoint = 2,
}

export enum EventTargetType {
  WeekDungeon = 0,
  Chaser = 1,
  Campaign_Normal = 2,
  Campaign_Hard = 3,
  SchoolDungeon = 4,
  AcademySchedule = 5,
  TimeAttackDungeon = 6,
  AccountLevelExpIncrease = 7,
  Raid = 8,
  EliminateRaid = 9,
}

export enum ContentResultType {
  Failure = 0,
  Success = 1,
}

export enum EventContentItemType {
  EventPoint = 0,
  EventToken1 = 1,
  EventToken2 = 2,
  EventToken3 = 3,
  EventToken4 = 4,
  EventToken5 = 5,
  EventMeetUpTicket = 6,
}

export enum RaidSeasonType {
  None = 0,
  Open = 1,
  Close = 2,
  Settlement = 3,
}

export enum BuffConditionType {
  All = 0,
  Character = 1,
  School = 2,
  Weapon = 3,
}

export enum EventCollectionUnlockType {
  None = 0,
  ClearSpecificEventStage = 1,
  ClearSpecificEventScenario = 2,
  ClearSpecificEventMission = 3,
  PurchaseSpecificItemCount = 4,
  SpecificEventLocationRank = 5,
  DiceRaceConsumeDiceCount = 6,
  MinigameTBGThemaClear = 7,
  MinigameEnter = 8,
  MinigameDreamMakerParameter = 9,
}

export enum ShortcutContentType {
  None = 0,
  CampaignStage = 1,
  EventStage = 2,
  Blood = 3,
  WeekDungeon = 4,
  Arena = 5,
  Raid = 6,
  Shop = 7,
  ItemInventory = 8,
  Craft = 9,
  SchoolDungeon = 10,
  Academy = 11,
  Mission = 12,
  MultiFloorRaid = 13,
}

export enum JudgeGrade {
  None = 0,
  Miss = 1,
  Attack = 2,
  Critical = 3,
}

export enum SchoolDungeonType {
  SchoolA = 0,
  SchoolB = 1,
  SchoolC = 2,
  None = 3,
}

export enum EventContentBuffFindRule {
  None = 0,
  WeaponType = 1,
  SquadType = 2,
  StreetBattleAdaptation = 3,
  OutdoorBattleAdaptation = 4,
  IndoorBattleAdaptation = 5,
  BulletType = 6,
  School = 7,
  TacticRange = 8,
}

export enum TimeAttackDungeonRewardType {
  Fixed = 0,
  TimeWeight = 1,
}

export enum TimeAttackDungeonType {
  None = 0,
  Defense = 1,
  Shooting = 2,
  Destruction = 3,
  Escort = 4,
}

export enum SuddenMissionContentType {
  OrdinaryState = 0,
  CampaignNormalStage = 1,
  CampaignHardStage = 2,
  EventStage = 3,
  WeekDungeon = 4,
  Chaser = 5,
  SchoolDungeon = 6,
  TimeAttackDungeon = 7,
  Raid = 8,
}

export enum ContentsChangeType {
  None = 0,
  WorldRaidBossDamageRatio = 1,
  WorldRaidBossGroupDate = 2,
}

export enum EventNotifyType {
  RewardIncreaseEvent = 0,
  AccountExpIncreaseEvent = 1,
  RaidSeasonManager = 2,
  TimeAttackDungeonSeasonManage = 3,
  EliminateRaidSeasonManage = 4,
}

export enum EventContentDiceRaceResultType {
  DiceResult1 = 0,
  DiceResult2 = 1,
  DiceResult3 = 2,
  DiceResult4 = 3,
  DiceResult5 = 4,
  DiceResult6 = 5,
  MoveForward = 6,
  LapFinish = 7,
  EventOccur = 8,
  DiceResultFixed1 = 9,
  DiceResultFixed2 = 10,
  DiceResultFixed3 = 11,
  DiceResultFixed4 = 12,
  DiceResultFixed5 = 13,
  DiceResultFixed6 = 14,
  SpecialReward = 15,
}

export enum EventContentDiceRaceNodeType {
  StartNode = 0,
  RewardNode = 1,
  MoveForwardNode = 2,
  SpecialRewardNode = 3,
}

export enum MeetupConditionType {
  None = 0,
  EventContentStageClear = 1,
  ScenarioClear = 2,
}

export enum MeetupConditionPrintType {
  None = 0,
  Lock = 1,
  Hide = 2,
}

export enum GuideMissionTabType {
  None = 0,
  Daily = 1,
  StageClear = 2,
}

export enum RankingSearchType {
  None = 0,
  Rank = 1,
  Score = 2,
}

export enum EventContentReleaseType {
  None = 0,
  Permanent = 1,
  MainStory = 2,
  PermanentSpecialOperate = 3,
}

export enum CraftSlotIndex {
  Slot00 = 0,
  Slot01 = 1,
  Slot02 = 2,
  Max = 3,
}

export enum CraftNodeTier {
  Base = 0,
  Node01 = 1,
  Node02 = 2,
  Node03 = 3,
  Max = 4,
}

export enum SubEventType {
  None = 0,
  SubEvent = 1,
  SubEventPermanent = 2,
}

export enum EquipmentCategory {
  Unable = 0,
  Exp = 1,
  Bag = 2,
  Hat = 3,
  Gloves = 4,
  Shoes = 5,
  Badge = 6,
  Hairpin = 7,
  Charm = 8,
  Watch = 9,
  Necklace = 10,
  WeaponExpGrowthA = 11,
  WeaponExpGrowthB = 12,
  WeaponExpGrowthC = 13,
  WeaponExpGrowthZ = 14,
}

export enum EquipmentOptionType {
  None = 0,
  MaxHP_Base = 1,
  MaxHP_Coefficient = 2,
  AttackPower_Base = 3,
  AttackPower_Coefficient = 4,
  DefensePower_Base = 5,
  DefensePower_Coefficient = 6,
  HealPower_Base = 7,
  HealPower_Coefficient = 8,
  CriticalPoint_Base = 9,
  CriticalPoint_Coefficient = 10,
  CriticalChanceRate_Base = 11,
  CriticalDamageRate_Base = 12,
  CriticalDamageRate_Coefficient = 13,
  SightRange_Base = 14,
  SightRange_Coefficient = 15,
  MaxBulletCount_Base = 16,
  MaxBulletCount_Coefficient = 17,
  HPRecoverOnKill_Base = 18,
  HPRecoverOnKill_Coefficient = 19,
  StreetBattleAdaptation_Base = 20,
  OutdoorBattleAdaptation_Base = 21,
  IndoorBattleAdaptation_Base = 22,
  HealEffectivenessRate_Base = 23,
  HealEffectivenessRate_Coefficient = 24,
  CriticalChanceResistPoint_Base = 25,
  CriticalChanceResistPoint_Coefficient = 26,
  CriticalDamageResistRate_Base = 27,
  CriticalDamageResistRate_Coefficient = 28,
  ExSkillUpgrade = 29,
  OppressionPower_Base = 30,
  OppressionPower_Coefficient = 31,
  OppressionResist_Base = 32,
  OppressionResist_Coefficient = 33,
  StabilityPoint_Base = 34,
  StabilityPoint_Coefficient = 35,
  AccuracyPoint_Base = 36,
  AccuracyPoint_Coefficient = 37,
  DodgePoint_Base = 38,
  DodgePoint_Coefficient = 39,
  MoveSpeed_Base = 40,
  MoveSpeed_Coefficient = 41,
  Max = 42,
  NormalAttackSpeed_Base = 43,
  NormalAttackSpeed_Coefficient = 44,
  DefensePenetration_Base = 45,
  DefensePenetrationResisit_Base = 46,
  ExtendBuffDuration_Base = 47,
  ExtendDebuffDuration_Base = 48,
  ExtendCrowdControlDuration_Base = 49,
  EnhanceExplosionRate_Base = 50,
  EnhanceExplosionRate_Coefficient = 51,
  EnhancePierceRate_Base = 52,
  EnhancePierceRate_Coefficient = 53,
  EnhanceMysticRate_Base = 54,
  EnhanceMysticRate_Coefficient = 55,
  EnhanceLightArmorRate_Base = 56,
  EnhanceLightArmorRate_Coefficient = 57,
  EnhanceHeavyArmorRate_Base = 58,
  EnhanceHeavyArmorRate_Coefficient = 59,
  EnhanceUnarmedRate_Base = 60,
  EnhanceUnarmedRate_Coefficient = 61,
  EnhanceSiegeRate_Base = 62,
  EnhanceSiegeRate_Coefficient = 63,
  EnhanceNormalRate_Base = 64,
  EnhanceNormalRate_Coefficient = 65,
  EnhanceStructureRate_Base = 66,
  EnhanceStructureRate_Coefficient = 67,
  EnhanceNormalArmorRate_Base = 68,
  EnhanceNormalArmorRate_Coefficient = 69,
  DamageRatio2Increase_Base = 70,
  DamageRatio2Increase_Coefficient = 71,
  DamageRatio2Decrease_Base = 72,
  DamageRatio2Decrease_Coefficient = 73,
  DamagedRatio2Increase_Base = 74,
  DamagedRatio2Increase_Coefficient = 75,
  DamagedRatio2Decrease_Base = 76,
  DamagedRatio2Decrease_Coefficient = 77,
  EnhanceSonicRate_Base = 78,
  EnhanceSonicRate_Coefficient = 79,
  EnhanceElasticArmorRate_Base = 80,
  EnhanceElasticArmorRate_Coefficient = 81,
  IgnoreDelayCount_Base = 82,
  WeaponRange_Base = 83,
  BlockRate_Base = 84,
  BlockRate_Coefficient = 85,
  AmmoCost_Base = 86,
  RegenCost_Base = 87,
  RegenCost_Coefficient = 88,
}

export enum MultipleConditionCheckType {
  And = 0,
  Or = 1,
}

export enum Language {
  Kr = 0,
  Jp = 1,
  Th = 2,
  Tw = 3,
  En = 4,
}

export enum SoundType {
  UI = 0,
  BGM = 1,
  FX = 2,
}

export enum WeekDay {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
  All = 7,
}

export enum EchelonType {
  None = 0,
  Adventure = 1,
  Raid = 2,
  ArenaAttack = 3,
  ArenaDefence = 4,
  WeekDungeonChaserA = 5,
  Scenario = 6,
  WeekDungeonBlood = 7,
  WeekDungeonChaserB = 8,
  WeekDungeonChaserC = 9,
  WeekDungeonFindGift = 10,
  EventContent = 11,
  SchoolDungeonA = 12,
  SchoolDungeonB = 13,
  SchoolDungeonC = 14,
  TimeAttack = 15,
  WorldRaid = 16,
  Conquest = 17,
  ConquestManage = 18,
  StoryStrategyStage = 19,
  EliminateRaid01 = 20,
  EliminateRaid02 = 21,
  EliminateRaid03 = 22,
  Field = 23,
  MultiFloorRaid = 24,
}

export enum EchelonExtensionType {
  Base = 0,
  Extension = 1,
}

export enum NoticeType {
  None = 0,
  Notice = 1,
  Event = 2,
}

export enum RewardTag {
  Default = 0,
  FirstClear = 1,
  StrategyObject = 2,
  Event = 3,
  ThreeStar = 4,
  ProductMonthly = 5,
  Rare = 6,
  EventBonus = 7,
  TimeWeight = 8,
  ProductWeekly = 9,
  ProductBiweekly = 10,
  EventPermanentReward = 11,
  ConquestManageEvent = 12,
  ConquestManageDefault = 13,
  ConquestCalculateDefault = 14,
  ConquestCalculateLevel2 = 15,
  ConquestCalculateLevel3 = 16,
  ConquestFootholdUpgrade2 = 17,
  ConquestFootholdUpgrade3 = 18,
  ConquestErosionPenalty = 19,
  GemBonus = 20,
  GemPaid = 21,
}

export enum ArenaRewardType {
  None = 0,
  Time = 1,
  Daily = 2,
  SeasonRecord = 3,
  OverallRecord = 4,
  SeasonClose = 5,
  AttackVictory = 6,
  DefenseVictory = 7,
  RankIcon = 8,
}

export enum ServiceActionType {
  ClanCreate = 0,
  HardAdventurePlayCountRecover = 1,
}

export enum RaidStatus {
  None = 0,
  Playing = 1,
  Clear = 2,
  Close = 3,
}

export enum WebAPIErrorLevel {
  None = 0,
  Warning = 1,
  Error = 2,
}

export enum GachaTicketType {
  None = 0,
  PackageThreeStar = 1,
  ThreeStar = 2,
  TwoStar = 3,
  Normal = 4,
  NormalOnce = 5,
  SelectRecruit = 6,
  PackagePropertyThreeStar = 7,
  Temp_1 = 8,
  PackageAcademyThreeStar = 9,
}

export enum EventChangeType {
  MainSub = 0,
  SubMain = 1,
}

export enum CafeCharacterState {
  None = 0,
  Idle = 1,
  Walk = 2,
  Reaction = 3,
  Interaction = 4,
  Max = 5,
}

export enum FurnitureFunctionType {
  None = 0,
  EventCollection = 1,
  VideoPlay = 2,
  TrophyCollection = 3,
  InteractionBGMPlay = 4,
}

export enum NotificationEventReddot {
  StagePointReward = 0,
  MissionComplete = 1,
  MiniGameMissionComplete = 2,
  WorldRaidReward = 3,
  ConquestCalculateReward = 4,
  DiceRaceLapReward = 5,
}

export enum EmblemCategory {
  None = 0,
  Default = 1,
  Mission = 2,
  GroupStory = 3,
  Event = 4,
  MainStory = 5,
  Favor = 6,
  Boss = 7,
  Etc = 8,
  Etc_Anniversary = 9,
  MultiFloorRaid = 10,
  Potential = 11,
}

export enum EmblemDisplayType {
  Always = 0,
  Time = 1,
  Favor = 2,
  Potential = 3,
}

export enum EmblemCheckPassType {
  None = 0,
  Default = 1,
  Favor = 2,
  Story = 3,
  Potential = 4,
}

export enum StickerGetConditionType {
  None = 0,
  StickerCheckPass = 1,
  GetStickerCondition = 2,
}

export enum Nation {
  None = 0,
  All = 1,
  JP = 2,
  GL = 3,
  KR = 4,
}

export enum FilterCategory {
  Character = 0,
  Equipment = 1,
  Item = 2,
  Craft = 3,
  ShiftCraft = 4,
  Shop = 5,
  MemoryLobby = 6,
  Trophy = 7,
  Emblem = 8,
}

export enum FilterIcon {
  TextOnly = 0,
  TextWithIcon = 1,
  Pin = 2,
  Role = 3,
  CharacterStar = 4,
  WeaponStar = 5,
  Attack = 6,
  Defense = 7,
  Range = 8,
  MemoryLobby = 9,
}

export enum FieldConditionType {
  Invalid = 0,
  Interaction = 1,
  QuestInProgress = 2,
  QuestClear = 3,
  Date = 4,
  StageClear = 5,
  HasKeyword = 6,
  HasEvidence = 7,
  OpenDate = 8,
  OpenDateAfter = 9,
}

export enum FieldInteractionType {
  None = 0,
  Scenario = 1,
  Reward = 2,
  Dialog = 3,
  Stage = 4,
  KeywordFound = 5,
  EvidenceFound = 6,
  SceneChange = 7,
  Timeline = 8,
  ActionTrigger = 9,
  Interplay = 10,
}

export enum FieldConditionClass {
  AndOr = 0,
  OrAnd = 1,
  Multi = 2,
}

export enum FieldDialogType {
  None = 0,
  Talk = 1,
  Think = 2,
  Exclaim = 3,
  Question = 4,
  Upset = 5,
  Surprise = 6,
  Bulb = 7,
  Heart = 8,
  Sweat = 9,
  Angry = 10,
  Music = 11,
  Dot = 12,
  Momotalk = 13,
  Phone = 14,
  Keyword = 15,
  Evidence = 16,
}

export enum FieldTutorialType {
  None = 0,
  MasteryHUD = 1,
  QuestHUD = 2,
  WorldMapHUD = 3,
}

export enum FriendSearchLevelOption {
  Recommend = 0,
  All = 1,
  Level1To30 = 2,
  Level31To40 = 3,
  Level41To50 = 4,
  Level51To60 = 5,
  Level61To70 = 6,
  Level71To80 = 7,
  Level81To90 = 8,
  Level91To100 = 9,
}

export enum ItemCategory {
  Coin = 0,
  CharacterExpGrowth = 1,
  SecretStone = 2,
  Material = 3,
  Consumable = 4,
  Collectible = 5,
  Favor = 6,
  RecruitCoin = 7,
  InvisibleToken = 8,
}

export enum MailType {
  System = 0,
  Attendance = 1,
  Event = 2,
  MassTrade = 3,
  InventoryFull = 4,
  ArenaDefenseVictory = 5,
  CouponUsageReward = 6,
  ArenaSeasonClose = 7,
  ProductReward = 8,
  MonthlyProductReward = 9,
  ExpiryChangeItem = 10,
  ClanAttendance = 11,
  AccountLink = 12,
  NewUserBonus = 13,
  LeftClanAssistReward = 14,
  AttendanceImmediately = 15,
  WeeklyProductReward = 16,
  BiweeklyProductReward = 17,
  Temp_1 = 18,
  Temp_2 = 19,
  Temp_3 = 20,
  CouponCompleteReward = 21,
  BirthdayMail = 22,
}

export enum AttendanceType {
  Basic = 0,
  Event = 1,
  Newbie = 2,
  EventCountDown = 3,
  Event20Days = 4,
}

export enum AttendanceCountRule {
  Accumulation = 0,
  Date = 1,
}

export enum AttendanceResetType {
  User = 0,
  Server = 1,
}

export enum DreamMakerMultiplierCondition {
  None = 0,
  Round = 1,
  CollectionCount = 2,
  EndingCount = 3,
}

export enum DreamMakerParameterType {
  None = 0,
  Param01 = 1,
  Param02 = 2,
  Param03 = 3,
  Param04 = 4,
}

export enum DreamMakerResult {
  None = 0,
  Fail = 1,
  Success = 2,
  Perfect = 3,
}

export enum DreamMakerParamOperationType {
  None = 0,
  GrowUpHigh = 1,
  GrowUp = 2,
  GrowDownHigh = 3,
  GrowDown = 4,
}

export enum DreamMakerEndingCondition {
  None = 0,
  Param01 = 1,
  Param02 = 2,
  Param03 = 3,
  Param04 = 4,
  Round = 5,
  CollectionCount = 6,
}

export enum DreamMakerVoiceCondition {
  None = 0,
  Fail = 1,
  Success = 2,
  Perfect = 3,
  DailyResult = 4,
}

export enum DreamMakerEndingType {
  None = 0,
  Normal = 1,
  Special = 2,
}

export enum DreamMakerEndingRewardType {
  None = 0,
  FirstEndingReward = 1,
  LoopEndingReward = 2,
}

export enum Geas {
  ForwardProjectile = 0,
  DiagonalProjectile = 1,
  SideProjectile = 2,
  Pierce = 3,
  Reflect = 4,
  Burn = 5,
  Chill = 6,
  AttackPower = 7,
  AttackSpeed = 8,
  Critical = 9,
  Heal = 10,
}

export enum TBGObjectType {
  None = 0,
  EnemyBoss = 1,
  EnemyMinion = 2,
  Random = 3,
  Facility = 4,
  TreasureBox = 5,
  Start = 6,
  Portal = 7,
}

export enum TBGOptionSuccessType {
  None = 0,
  TBGItemAcquire = 1,
  ItemAcquire = 2,
  TBGDiceAcquire = 3,
  Portal = 4,
}

export enum TBGItemType {
  None = 0,
  Dice = 1,
  Heal = 2,
  HealExpansion = 3,
  Defence = 4,
  Guide = 5,
  DiceResultValue = 6,
  DefenceCritical = 7,
  DiceResultConfirm = 8,
}

export enum TBGItemEffectType {
  None = 0,
  PermanentContinuity = 1,
  TemporaryContinuation = 2,
  Immediately = 3,
}

export enum TBGTileType {
  None = 0,
  Start = 1,
  Movable = 2,
  UnMovable = 3,
}

export enum TBGThemaType {
  None = 0,
  Normal = 1,
  Hidden = 2,
}

export enum TBGPortalCondition {
  None = 0,
  ObjectAllEncounter = 1,
  Round = 2,
}

export enum TBGProbModifyCondition {
  None = 0,
  AllyRevive = 1,
  DicePlayFail = 2,
}

export enum TBGVoiceCondition {
  None = 0,
  DiceResultSuccess = 1,
  DiceResultFailBattle = 2,
  DiceResultFailRandom = 3,
  EnemyDie = 4,
  TreasureBoxNormal = 5,
  TreasureBoxSpecial = 6,
  FacilityResult = 7,
}

export enum MiniGameTBGThemaRewardType {
  TreasureReward = 0,
  EmptyTreasureReward = 1,
  HiddenThemaTreasureReward = 2,
}

export enum MissionCategory {
  Challenge = 0,
  Daily = 1,
  Weekly = 2,
  Achievement = 3,
  GuideMission = 4,
  All = 5,
  MiniGameScore = 6,
  MiniGameEvent = 7,
  EventAchievement = 8,
  DailySudden = 9,
  DailyFixed = 10,
  EventFixed = 11,
}

export enum MissionResetType {
  None = 0,
  Daily = 1,
  Weekly = 2,
  Limit = 3,
}

export enum MissionCompleteConditionType {
  None = 0,
  Reset_DailyLogin = 1,
  Reset_DailyLoginCount = 2,
  Reset_CompleteMission = 3,
  Achieve_EquipmentLevelUpCount = 4,
  Achieve_EquipmentTierUpCount = 5,
  Achieve_CharacterLevelUpCount = 6,
  Reset_CharacterTranscendenceCount = 7,
  Reset_ClearTaticBattleCount = 8,
  Achieve_ClearCampaignStageCount = 9,
  Reset_KillSpecificEnemyCount = 10,
  Reset_KillEnemyWithTagCount = 11,
  Reset_GetCharacterCount = 12,
  Reset_GetCharacterWithTagCount = 13,
  Reset_GetSpecificCharacterCount = 14,
  Reset_AccountLevelUp = 15,
  Reset_GetEquipmentCount = 16,
  Reset_GachaCount = 17,
  Reset_UseGem = 18,
  Reset_GetGem = 19,
  Reset_GetGemPaid = 20,
  Achieve_GetGold = 21,
  Achieve_GetItem = 22,
  Reset_GetFavorLevel = 23,
  Reset___Deprecated_EquipmentAtSpecificLevelCount = 24,
  Reset_EquipmentAtSpecificTierUpCount = 25,
  Reset_CharacterAtSpecificLevelCount = 26,
  Reset_CharacterAtSpecificTranscendenceCount = 27,
  Achieve_CharacterSkillLevelUpCount = 28,
  Reset_CharacterAtSpecificSkillLevelCount = 29,
  Reset_CompleteScheduleCount = 30,
  Reset_CompleteScheduleGroupCount = 31,
  Reset_AcademyLocationRankSum = 32,
  Reset_CraftCount = 33,
  Achieve_GetComfortPoint = 34,
  Achieve_GetWeaponCount = 35,
  Reset_EquipWeaponCount_Obsolete = 36,
  Reset_CompleteScheduleWithSpecificCharacter = 37,
  Reset_CafeInteractionCount = 38,
  Reset_SpecificCharacterAtSpecificLevel = 39,
  Reset_SpecificCharacterAtSpecificTranscendence = 40,
  Reset_LobbyInteraction = 41,
  Achieve_ClearFindGiftAndBloodDungeonCount = 42,
  Reset_ClearSpecificFindGiftAndBloodDungeonCount = 43,
  Achieve_JoinRaidCount = 44,
  Reset_JoinSpecificRaidCount = 45,
  Achieve_JoinArenaCount = 46,
  Reset_ArenaVictoryCount = 47,
  Reset_RaidDamageAmountOnOneBattle = 48,
  Reset_ClearEventStageCount = 49,
  Reset_UseSpecificCharacterCount = 50,
  Achieve_UseGold = 51,
  Reset_UseTiket = 52,
  Reset_ShopBuyCount = 53,
  Reset_ShopBuyActionPointCount = 54,
  Reset_SpecificCharacterAtSpecificFavorRank = 55,
  Reset_ClearSpecificScenario = 56,
  Reset_GetSpecificItemCount = 57,
  Achieve_TotalGetClearStarCount = 58,
  Reset_CompleteCampaignStageMinimumTurn = 59,
  Achieve_TotalLoginCount = 60,
  Reset_LoginAtSpecificTime = 61,
  Reset_CompleteFavorSchedule = 62,
  Reset_CompleteFavorScheduleAtSpecificCharacter = 63,
  Reset_GetMemoryLobbyCount = 64,
  Reset_GetFurnitureGroupCount = 65,
  Reset_AcademyLocationAtSpecificRank = 66,
  Reset_ClearCampaignStageDifficultyNormal = 67,
  Reset_ClearCampaignStageDifficultyHard = 68,
  Achieve_ClearChaserDungeonCount = 69,
  Reset_ClearSpecificChaserDungeonCount = 70,
  Reset_GetCafeRank = 71,
  Reset_SpecificStarCharacterCount = 72,
  Reset_EventClearCampaignStageCount = 73,
  Reset_EventClearSpecificCampaignStageCount = 74,
  Reset_EventCompleteCampaignStageMinimumTurn = 75,
  Reset_EventClearCampaignStageDifficultyNormal = 76,
  Reset_EventClearCampaignStageDifficultyHard = 77,
  Reset_ClearSpecificCampaignStageCount = 78,
  Reset_GetItemWithTagCount = 79,
  Reset_GetFurnitureWithTagCount = 80,
  Reset_GetEquipmentWithTagCount = 81,
  Reset_ClearCampaignStageTimeLimitFromSecond = 82,
  Reset_ClearEventStageTimeLimitFromSecond = 83,
  Reset_ClearRaidTimeLimitFromSecond = 84,
  Reset_ClearBattleWithTagCount = 85,
  Reset_ClearFindGiftAndBloodDungeonTimeLimitFromSecond = 86,
  Reset_CompleteScheduleWithTagCount = 87,
  Reset_ClearChaserDungeonTimeLimitFromSecond = 88,
  Reset_GetTotalScoreRhythm = 89,
  Reset_GetBestScoreRhythm = 90,
  Reset_GetSpecificScoreRhythm = 91,
  Reset_ClearStageRhythm = 92,
  Reset_GetComboCountRhythm = 93,
  Reset_GetFullComboRhythm = 94,
  Reset_GetFeverCountRhythm = 95,
  Reset_UseActionPoint = 96,
  Achieve_ClearSchoolDungeonCount = 97,
  Reset_ClearSchoolDungeonTimeLimitFromSecond = 98,
  Reset_ClearSpecificSchoolDungeonCount = 99,
  Reset_GetCriticalCountRhythm = 100,
  Achieve_WeaponTranscendenceCount = 101,
  Achieve_WeaponLevelUpCount = 102,
  Reset_WeaponAtSpecificTranscendenceCount = 103,
  Reset_WeaponAtSpecificLevelUpCount = 104,
  Reset_BuyShopGoods = 105,
  Reset_ClanLogin = 106,
  Reset_AssistCharacterSetting = 107,
  Reset_DailyMissionFulfill = 108,
  Reset_SelectedMissionFulfill = 109,
  Reset_TotalDamageToWorldRaid = 110,
  Reset_JoinWorldRaidTypeNumber = 111,
  Reset_JoinWorldRaidBattleWithTagCount = 112,
  Reset_ClearWorldRaidTimeLimitFromSecond = 113,
  Achieve_KillEnemyWithDecagrammatonSPOTagCount = 114,
  Reset_ConquerTileCount = 115,
  Reset_ConquerSpecificStepTileCount = 116,
  Reset_ConquerSpecificStepTileAll = 117,
  Reset_UpgradeConquestBaseTileCount = 118,
  Reset_KillConquestBoss = 119,
  Reset_ClearEventConquestTileTimeLimitFromSecond = 120,
  Reset_DiceRaceUseDiceCount = 121,
  Reset_DiceRaceFinishLapCount = 122,
  Reset_FortuneGachaCount = 123,
  Reset_FortuneGachaCountByGrade = 124,
  Reset_ClearCountShooting = 125,
  Reset_ClearSpecificStageShooting = 126,
  Reset_ClearSpecificCharacterShooting = 127,
  Reset_ClearSpecificSectionShooting = 128,
  Achieve_JoinEliminateRaidCount = 129,
  Reset_TBGCompleteRoundCount = 130,
  Reset_CompleteStage = 131,
  Reset_TBGClearSpecificThema = 132,
  Reset_ClearGeneralChaserDungeonCount = 133,
  Reset_ClearGeneralFindGiftAndBloodDungeonCount = 134,
  Reset_ClearGeneralSchoolDungeonCount = 135,
  Reset_JoinArenaCount = 136,
  Reset_GetCafe2ndRank = 137,
  Achieve_GetComfort2ndPoint = 138,
  Reset_ClearSpecificTimeAttackDungeonCount = 139,
  Reset_GetScoreTimeAttackDungeon = 140,
  Reset_GetTotalScoreTimeAttackDungeon = 141,
  Reset_JoinRaidCount = 142,
  Reset_ClearTimeAttackDungeonCount = 143,
  Reset_JoinEliminateRaidCount = 144,
  Reset_FieldClearSpecificDate = 145,
  Reset_FieldGetEvidenceCount = 146,
  Reset_FieldMasteryLevel = 147,
  Reset_TreasureCheckedCellCount = 148,
  Reset_TreasureGetTreasureCount = 149,
  Reset_TreasureRoundRefreshCount = 150,
  Achieve_UseTicketCount = 151,
  Reset_ClearMultiFloorRaidStage = 152,
  Achieve_CharacterPotentialUpCount = 153,
  Reset_CharacterPotentialUpCount = 154,
  Reset_CharacterAtSpecificPotentialCount = 155,
  Reset_PotentialAttackPowerAtSpecificLevel = 156,
  Reset_PotentialMaxHPAtSpecificLevel = 157,
  Reset_PotentialHealPowerAtSpecificLevel = 158,
  Reset_DreamGetSpecificParameter = 159,
  Reset_DreamGetSpecificScheduleCount = 160,
  Reset_DreamGetScheduleCount = 161,
  Reset_DreamGetEndingCount = 162,
  Reset_DreamGetSpecificEndingCount = 163,
  Reset_DreamGetCollectionScenarioCount = 164,
}

export enum AccountAchievementType {
  TotalLoginCount = 0,
  TotalGetClearStarCount = 1,
  TotalCharacterLevelUpCount = 2,
  TotalCharacterSkillLevelUpCount = 3,
  TotalClearCampaignStageCount = 4,
  TotalClearChaserDungeonCount = 5,
  TotalClearFindGiftAndBloodDungeonCount = 6,
  TotalEquipmentLevelUpCount = 7,
  TotalEquipmentTierUpCount = 8,
  MaxComfortPoint = 9,
  TotalGetGold = 10,
  TotalUseGold = 11,
  TotalJoinArenaCount = 12,
  TotalJoinRaidCount = 13,
  TotalClearSchoolDungeonCount = 14,
  TotalGetWeaponCount = 15,
  TotalWeaponLevelUpCount = 16,
  TotalWeaponTranscendenceCount = 17,
  KillEnemyWithDecagrammatonSPOTagCount = 18,
  EventPoint = 19,
  ConquestCalculateReward = 20,
  TotalJoinEliminateRaidCount = 21,
  Cafe2MaxComfortPoint = 22,
  TotalRaidTicketUseCount = 23,
  TotalEliminateTicketUseCount = 24,
  TotalCharacterPotentialUpCount = 25,
}

export enum MissionToastDisplayConditionType {
  Always = 0,
  Complete = 1,
  Never = 2,
}

export enum GetStickerConditionType {
  None = 0,
  Reset_StikcerGetCondition_AccountLevel = 1,
  Reset_StickerGetCondition_ScenarioModeId = 2,
  Reset_StickerGetCondition_EnemyKillCount = 3,
  Reset_StickerGetCondition_GetItemCount = 4,
  Reset_StickerGetCondition_BuyItemCount = 5,
  Reset_StickerGetCondition_ScheduleRank = 6,
  Reset_StickerGetCondition_Change_LobbyCharacter = 7,
  Reset_StickerGetCondition_Cafe_Character_Visit_Count = 8,
  Reset_StickerGetCondition_Cafe_Chracter_Invite_Count = 9,
  Reset_StickerGetCondition_GetChracterCount = 10,
  Reset_StickerGetCondition_Cafe_Furniture_Interaction = 11,
  Reset_StickerGetCondition_GetFurniture = 12,
  Reset_StickerGetCondition_SetFurniture = 13,
  Reset_StickerGetCondition_GivePresentChracterCount = 14,
  Reset_StickerGetCondition_GivePresentCount = 15,
  Reset_StickerGetCondition_MomotalkStudentCount = 16,
  Reset_StickerGetCondition_CombatwithCharacterCount = 17,
  Reset_StickerGetCondition_GachaCharacterCount = 18,
  Reset_StickerGetCondition_TouchLobbyCharacter = 19,
  Reset_StickerGetCondition_UseCircleEmoticonCount = 20,
  Reset_StickerGetCondition_CraftCount = 21,
  Reset_StickerGetCondition_NormalStageClear = 22,
  Reset_StickerGetCondition_NormalStageClear3Star = 23,
  Reset_StickerGetCondition_HardStageClear = 24,
  Reset_StickerGetCondition_HardStageClear3Star = 25,
  Achieve_StikcerGetCondition_AccountLevel = 26,
  Achieve_StickerGetCondition_ClearStageId = 27,
  Achieve_StickerGetCondition_ScenarioModeId = 28,
  Achieve_StickerGetCondition_EnemyKillCount = 29,
  Achieve_StickerGetCondition_GetItemCount = 30,
  Achieve_StickerGetCondition_BuyItemCount = 31,
  Achieve_StickerGetCondition_ScheduleRank = 32,
  Achieve_StickerGetCondition_Change_LobbyCharacter = 33,
  Achieve_StickerGetCondition_Cafe_Character_Visit_Count = 34,
  Achieve_StickerGetCondition_Cafe_Chracter_Invite_Count = 35,
  Achieve_StickerGetCondition_GetChracterCount = 36,
  Achieve_StickerGetCondition_Cafe_Furniture_Interaction = 37,
  Achieve_StickerGetCondition_GetFurniture = 38,
  Achieve_StickerGetCondition_SetFurniture = 39,
  Achieve_StickerGetCondition_GivePresentChracterCount = 40,
  Achieve_StickerGetCondition_GivePresentCount = 41,
  Achieve_StickerGetCondition_MomotalkStudentCount = 42,
  Achieve_StickerGetCondition_CombatwithCharacterCount = 43,
  Achieve_StickerGetCondition_GachaCharacterCount = 44,
  Achieve_StickerGetCondition_TouchLobbyCharacter = 45,
  Achieve_StickerGetCondition_UseCircleEmoticonCount = 46,
  Achieve_StickerGetCondition_CraftCount = 47,
  Achieve_StickerGetCondition_NormalStageClear = 48,
  Achieve_StickerGetCondition_NormalStageClear3Star = 49,
  Achieve_StickerGetCondition_HardStageClear = 50,
  Achieve_StickerGetCondition_HardStageClear3Star = 51,
  Reset_StickerGetCondition_EnemyKillCountbyTag = 52,
  Reset_StickerGetCondition_GetItemCountbyTag = 53,
  Reset_StickerGetCondition_ClearCampaignOrEventStageCount = 54,
  Reset_StickerGetCondition_CompleteCampaignStageMinimumTurn = 55,
  Reset_StickerGetCondition_ClearCampaignStageDifficultyNormal = 56,
  Reset_StickerGetCondition_ClearCampaignStageDifficultyHard = 57,
  Reset_StickerGetCondition_EventClearCampaignStageCount = 58,
  Reset_StickerGetCondition_EventClearSpecificCampaignStageCount = 59,
  Reset_StickerGetCondition_EventCompleteCampaignStageMinimumTurn = 60,
  Reset_StickerGetCondition_EventClearCampaignStageDifficultyNormal = 61,
  Reset_StickerGetCondition_EventClearCampaignStageDifficultyHard = 62,
  Reset_StickerGetCondition_ClearSpecificCampaignStageCount = 63,
  Reset_StickerGetCondition_ClearCampaignStageTimeLimitFromSecond = 64,
  Reset_StickerGetCondition_ClearEventStageTimeLimitFromSecond = 65,
  Reset_StickerGetCondition_ClearStageRhythm = 66,
  Reset_StickerGetCondition_ClearSpecificStageShooting = 67,
  Reset_StickerGetCondition_CompleteStage = 68,
  Achieve_StickerGetCondition_ClearCampaignStageCount = 69,
  Achieve_StickerGetCondition_ClearChaserDungeonCount = 70,
  Reset_StickerGetCondition_ClearSpecificChaserDungeonCount = 71,
  Achieve_StickerGetCondition_ClearSchoolDungeonCount = 72,
  Reset_StickerGetCondition_ClearSpecificSchoolDungeonCount = 73,
  Reset_StickerGetCondition_ClearSpecificWeekDungeonCount = 74,
  Achieve_StickerGetCondition_ClearFindGiftAndBloodDungeonCount = 75,
}

export enum StickerCheckPassType {
  None = 0,
  ClearScenarioModeId = 1,
  ClearCampaignStageId = 2,
}

export enum ParcelType {
  None = 0,
  Character = 1,
  Currency = 2,
  Equipment = 3,
  Item = 4,
  GachaGroup = 5,
  Product = 6,
  Shop = 7,
  MemoryLobby = 8,
  AccountExp = 9,
  CharacterExp = 10,
  FavorExp = 11,
  TSS = 12,
  Furniture = 13,
  ShopRefresh = 14,
  LocationExp = 15,
  Recipe = 16,
  CharacterWeapon = 17,
  CharacterGear = 18,
  IdCardBackground = 19,
  Emblem = 20,
  Sticker = 21,
  Costume = 22,
}

export enum Rarity {
  N = 0,
  R = 1,
  SR = 2,
  SSR = 3,
}

export enum Tier {
  T1 = 0,
  T2 = 1,
  T3 = 2,
  T4 = 3,
}

export enum CurrencyTypes {
  Invalid = 0,
  Gold = 1,
  GemPaid = 2,
  GemBonus = 3,
  Gem = 4,
  ActionPoint = 5,
  AcademyTicket = 6,
  ArenaTicket = 7,
  RaidTicket = 8,
  WeekDungeonChaserATicket = 9,
  WeekDungeonFindGiftTicket = 10,
  WeekDungeonBloodTicket = 11,
  WeekDungeonChaserBTicket = 12,
  WeekDungeonChaserCTicket = 13,
  SchoolDungeonATicket = 14,
  SchoolDungeonBTicket = 15,
  SchoolDungeonCTicket = 16,
  TimeAttackDungeonTicket = 17,
  MasterCoin = 18,
  WorldRaidTicketA = 19,
  WorldRaidTicketB = 20,
  WorldRaidTicketC = 21,
  ChaserTotalTicket = 22,
  SchoolDungeonTotalTicket = 23,
  EliminateTicketA = 24,
  EliminateTicketB = 25,
  EliminateTicketC = 26,
  EliminateTicketD = 27,
  Max = 28,
}

export enum SortingTarget {
  None = 0,
  Rarity = 1,
  Level = 2,
  StarGrade = 3,
  Tier = 4,
}

export enum CurrencyOverChargeType {
  CanNotCharge = 0,
  FitToLimit = 1,
  ChargeOverLimit = 2,
}

export enum CurrencyAdditionalChargeType {
  EnableAutoChargeOverLimit = 0,
  DisableAutoChargeOverLimit = 1,
}

export enum RecipeType {
  None = 0,
  Craft = 1,
  SkillLevelUp = 2,
  CharacterTranscendence = 3,
  EquipmentTierUp = 4,
  CafeRankUp = 5,
  SelectionItem = 6,
  WeaponTranscendence = 7,
  SelectRecruit = 8,
  CharacterPotential = 9,
}

export enum GachaGroupType {
  None = 0,
  Reward_General = 1,
  System_Craft = 2,
  Reward_Pack = 3,
}

export enum ParcelChangeReason {
  None = 0,
  Acquire_NewAccount = 1,
  Acquire_PlayReward = 2,
  Acquire_ChapterReward = 3,
  Acquire_LoginReward = 4,
  Acquire_EventReward = 5,
  Acquire_GMPush = 6,
  Acquire_ShopBuy = 7,
  Acquire_GachaBuy = 8,
  Acquire_CurrencyBuy = 9,
  Equipment_Equip = 10,
  Equipment_Unequip = 11,
  Equipment_Levelup = 12,
  Equipment_LimitBreak = 13,
  Equipment_Transcendence = 14,
  Equipment_Enchant = 15,
  Item_Use = 16,
  Item_Lock = 17,
  Item_CharacterGrowthMaterial = 18,
  Item_Change = 19,
  Item_Delete = 20,
  Item_Consume = 21,
  Item_SelectTicket = 22,
  Character_ExpGrowth = 23,
  Character_Transcendence = 24,
  Character_SkillLevelUp = 25,
  Character_FavorGrowth = 26,
  Furniture_CafeSet = 27,
  Furniture_CafeRecall = 28,
  Academy_AttendSchedule = 29,
  Academy_MessageList = 30,
  Adventure_EnterMainStage = 31,
  Adventure_EnterSubStage = 32,
  Adventure_MainStageBattleResult = 33,
  Adventure_SubStageBattleResult = 34,
  Adventure_ChapterClearReward = 35,
  Adventure_Retreat = 36,
  Adventure_PurchasePlayCountHardStage = 37,
  Adventure_TutorialStage = 38,
  Adventure_TutorialStageBattleResult = 39,
  ContentSweep_Sweep = 40,
  Arena_TimeReward = 41,
  Arena_DailyReward = 42,
  Arena_EnterBattle = 43,
  Arena_BattleResult = 44,
  Cafe_Interact = 45,
  Cafe_Production = 46,
  Cafe_RankUp = 47,
  Cafe_GiveGift = 48,
  WeekDungeon_BattleResult = 49,
  WeekDungeon_EnterBattle = 50,
  WeekDungeon_Retreat = 51,
  Mission_Clear = 52,
  Shop_Refresh = 53,
  Shop_BuyEligma = 54,
  Shop_BuyMerchandise = 55,
  Shop_BuyGacha = 56,
  Scenario_Clear = 57,
  Recipe_Craft = 58,
  Raid_Failed = 59,
  Raid_Reward = 60,
  Raid_SeasonReward = 61,
  Raid_CreateBattle = 62,
  CumulativeTimeReward_Reward = 63,
  Mail_Receive = 64,
  MomoTalk_FavorSchedule = 65,
  WeekDungeon_EnterBlood = 66,
  WeekDungeon_EnterGift = 67,
  Acquire_ActionPoint = 68,
  Acquire_ArenaTicket = 69,
  EventContent_TotalReward = 70,
  Craft_UpdateNode = 71,
  Craft_CompleteProcess = 72,
  Craft_Reward = 73,
  EventContent_BattleResult = 74,
  Adventure_Sweep = 75,
  EventContent_Sweep = 76,
  WeekDungeon_Sweep = 77,
  Acquire_MonthlyProduct = 78,
  Acquire_DailyReward = 79,
  Billing_PurchaseProduct = 80,
  EventContent_EnterMainStage = 81,
  EventContent_EnterSubStage = 82,
  EventContent_MainStageResult = 83,
  EventContent_SubStageResult = 84,
  EventContent_Retreat = 85,
  WeekDungeon_BloodResult = 86,
  WeekDungeon_GiftResult = 87,
  WeekDungeon_EnterChaserA = 88,
  WeekDungeon_EnterChaserB = 89,
  WeekDungeon_EnterChaserC = 90,
  WeekDungeon_ChaserAResult = 91,
  WeekDungeon_ChaserBResult = 92,
  WeekDungeon_ChaserCResult = 93,
  EventContent_BoxGacha = 94,
  Raid_Sweep = 95,
  Clan_AssistReward = 96,
  EventContent_CardShop = 97,
  CharacterWeapon_ExpGrowth = 98,
  CharacterWeapon_Transcendence = 99,
  MiniGameMission_Clear = 100,
  SchoolDungeon_EnterSchoolA = 101,
  SchoolDungeon_EnterSchoolB = 102,
  SchoolDungeon_EnterSchoolC = 103,
  SchoolDungeon_SchoolAResult = 104,
  SchoolDungeon_SchoolBResult = 105,
  SchoolDungeon_SchoolCResult = 106,
  TimeAttackDungeon_CreateBattle = 107,
  TimeAttackDungeon_EndBattle = 108,
  TimeAttackDungeon_Reward = 109,
  Clan_Create = 110,
  Arena_SeasonReward = 111,
  Arena_OverallReward = 112,
  EventContent_AttendSchedule = 113,
  EventContent_BuyFortuneGacha = 114,
  Equipment_BatchGrowth = 115,
  EventContent_EnterStoryStage = 116,
  EventContent_StoryStageResult = 117,
  WorldRaid_EndBattle = 118,
  WorldRaid_Reward = 119,
  Conquest_EnterBattle = 120,
  Conquest_EnterUnExpectBattle = 121,
  Conquest_BattleResult = 122,
  Conquest_UnExpectBattleResult = 123,
  Conquest_UpgradeBase = 124,
  Conquest_ManageBase = 125,
  Conquest_CalculatedReward = 126,
  Conquest_TakeEventBoxObject = 127,
  Conquest_ConquerNormalTile = 128,
  Item_SelectRecruit = 129,
  Adventure_EnterExtraStage = 130,
  Adventure_ExtraStageBattleResult = 131,
  Scenario_EnterMainStage = 132,
  Scenario_MainStageResult = 133,
  Scenario_RetreatMainStage = 134,
  EventContent_DiceRaceRollReward = 135,
  EventContent_DiceRaceLapReward = 136,
  ShiftingCraft_BeginProcess = 137,
  ShiftingCraft_CompleteProcess = 138,
  ShiftingCraft_Reward = 139,
  MiniGame_ShootingBattleResult = 140,
  MiniGame_ShootingSweep = 141,
  EliminateRaid_Failed = 142,
  EliminateRaid_Reward = 143,
  EliminateRaid_SeasonReward = 144,
  EliminateRaid_CreateBattle = 145,
  EliminateRaid_Sweep = 146,
  Item_AutoSynth = 147,
  ContentSweep_MultiSweep = 148,
  Emblem_Acquire = 149,
  MiniGame_TBGMove = 150,
  MiniGame_TBGEncounterInput = 151,
  MiniGame_TBGResurrect = 152,
  MiniGame_TBGSweep = 153,
  Shop_BeforehandGacha = 154,
  EliminateRaid_LimitedReward = 155,
  Craft_AutoBeginProcess = 156,
  Craft_CompleteProcessAll = 157,
  Craft_RewardAll = 158,
  ShiftingCraft_CompleteProcessAll = 159,
  ShiftingCraft_RewardAll = 160,
  Temp_1 = 161,
  Temp_2 = 162,
  Temp_3 = 163,
  Temp_4 = 164,
  EventContent_Treasure = 165,
  Field_EnterStage = 166,
  Field_StageResult = 167,
  Field_Interaction = 168,
  Field_Quest = 169,
  Character_PotentialGrowth = 170,
  MultiFloorRaid_EndBattle = 171,
  MultiFloorRaid_Reward = 172,
  MiniGame_DreamSchedule = 173,
  MiniGame_DreamDailyClosing = 174,
  MiniGame_DreamEnding = 175,
}

export enum ConsumeCondition {
  And = 0,
  Or = 1,
}

export enum DailyRefillType {
  None = 0,
  Default = 1,
  Login = 2,
}

export enum ScenarioBGType {
  None = 0,
  Image = 1,
  BlurRT = 2,
  Spine = 3,
  Hide = 4,
}

export enum ScenarioType {
  None = 0,
  Title = 1,
  Place = 2,
}

export enum ScenarioTypes {
  None = 0,
  Title = 1,
  Place = 2,
}

export enum ScenarioCharacterAction {
  Idle = 0,
  Shake = 1,
  Greeting = 2,
  FalldownLeft = 3,
  FalldownRight = 4,
  Stiff = 5,
  Hophop = 6,
  Jump = 7,
}

export enum ScenarioCharacterBehaviors {
  None = 0,
  Appear = 1,
  Disappear = 2,
  AppearToLeft = 3,
  ApperToRight = 4,
  DisappearToLeft = 5,
  DisappearToRight = 6,
  MoveToTarget = 7,
}

export enum ScenarioCharacterShapes {
  None = 0,
  Signal = 1,
  BlackSilhouette = 2,
  Closeup = 4,
  Highlight = 8,
  WhiteSilhouette = 16,
}

export enum ScenarioBGScroll {
  None = 0,
  Vertical = 1,
  Horizontal = 2,
}

export enum DialogCategory {
  Cafe = 0,
  Echelon = 1,
  CharacterSSRNew = 2,
  CharacterGet = 3,
  Birthday = 4,
  Dating = 5,
  Title = 6,
  UILobby = 7,
  UILobbySpecial = 8,
  UIShop = 9,
  UIGacha = 10,
  UIRaidLobby = 11,
  UIWork = 12,
  UITitle = 13,
  UIWeekDungeon = 14,
  UIAcademyLobby = 15,
  UIRaidLobbySeasonOff = 16,
  UIRaidLobbySeasonOn = 17,
  UIWorkAronaSit = 18,
  UIWorkAronaSleep = 19,
  UIWorkAronaWatch = 20,
  UIGuideMission = 21,
  UILobby2 = 22,
  UIClanSearchList = 23,
  UIAttendance = 24,
  UIAttendanceEvent01 = 25,
  UIEventLobby = 26,
  UIEventShop = 27,
  UIEventBoxGachaShop = 28,
  UIAttendanceEvent02 = 29,
  UIAttendanceEvent03 = 30,
  UIEventCardShop = 31,
  UISchoolDungeon = 32,
  UIAttendanceEvent = 33,
  UISpecialOperationLobby = 34,
  WeaponGet = 35,
  UIAttendanceEvent04 = 36,
  UIEventFortuneGachaShop = 37,
  UIAttendanceEvent05 = 38,
  UIAttendanceEvent06 = 39,
  UIMission = 40,
  UIEventMission = 41,
  UIAttendanceEvent08 = 42,
  UIAttendanceEvent07 = 43,
  UIEventMiniGameMission = 44,
  UIAttendanceEvent09 = 45,
  UIAttendanceEvent10 = 46,
  UIAttendanceEvent11 = 47,
  UIWorkPlanaSit = 48,
  UIWorkPlanaUmbrella = 49,
  UIWorkPlanaCabinet = 50,
  UIWorkCoexist_AronaSleepSit = 51,
  UIWorkCoexist_PlanaWatchSky = 52,
  UIWorkCoexist_PlanaSitPeek = 53,
  UIWorkCoexist_AronaSleepPeek = 54,
  UIEventArchive = 55,
  UIAttendanceEvent12 = 56,
  UIAttendanceEvent13 = 57,
  UIAttendanceEvent14 = 58,
  Temp_1 = 59,
  Temp_2 = 60,
  Temp_3 = 61,
  Temp_4 = 62,
  Temp_5 = 63,
  UIAttendanceEvent15 = 64,
  UILobbySpecial2 = 65,
  UIAttendanceEvent16 = 66,
  UIEventTreasure = 67,
  UIMultiFloorRaid = 68,
  UIEventMiniGameDreamMaker = 69,
}

export enum DialogCondition {
  Idle = 0,
  Enter = 1,
  Exit = 2,
  Buy = 3,
  SoldOut = 4,
  BoxGachaNormal = 5,
  BoxGachaPrize = 6,
  Prize0 = 7,
  Prize1 = 8,
  Prize2 = 9,
  Prize3 = 10,
  Interaction = 11,
  Luck0 = 12,
  Luck1 = 13,
  Luck2 = 14,
  Luck3 = 15,
  Luck4 = 16,
  Luck5 = 17,
  StoryOpen = 18,
  CollectionOpen = 19,
  BoxGachaFinish = 20,
  FindTreasure = 21,
  GetTreasure = 22,
  RoundRenewal = 23,
  MiniGameDreamMakerEnough01 = 24,
  MiniGameDreamMakerEnough02 = 25,
  MiniGameDreamMakerEnough03 = 26,
  MiniGameDreamMakerEnough04 = 27,
  MiniGameDreamMakerDefault = 28,
}

export enum DialogConditionDetail {
  None = 0,
  Day = 1,
  Close = 2,
  MiniGameDreamMakerDay = 3,
}

export enum DialogType {
  Talk = 0,
  Think = 1,
  UITalk = 2,
}

export enum Anniversary {
  None = 0,
  UserBDay = 1,
  StudentBDay = 2,
}

export enum School {
  None = 0,
  Hyakkiyako = 1,
  RedWinter = 2,
  Trinity = 3,
  Gehenna = 4,
  Abydos = 5,
  Millennium = 6,
  Arius = 7,
  Shanhaijing = 8,
  Valkyrie = 9,
  WildHunt = 10,
  SRT = 11,
  SCHALE = 12,
  ETC = 13,
  Tokiwadai = 14,
  Sakugawa = 15,
}

export enum EtcSchool {
  None = 0,
  ETC = 1,
  Tokiwadai = 2,
  Sakugawa = 3,
  Max = 4,
}

export enum StoryCondition {
  Open = 0,
  Locked = 1,
  ComingSoon = 2,
  Hide = 3,
}

export enum EmojiEvent {
  EnterConver = 0,
  EnterShelter = 1,
  SignalLeader = 2,
  Nice = 3,
  Reload = 4,
  Blind = 5,
  Panic = 6,
  Silence = 7,
  NearyDead = 8,
  Run = 9,
  TerrainAdaptionS = 10,
  TerrainAdaptionA = 11,
  TerrainAdaptionB = 12,
  TerrainAdaptionC = 13,
  TerrainAdaptionD = 14,
  TerrainAdaptionSS = 15,
  Dot = 16,
  Angry = 17,
  Bulb = 18,
  Exclaim = 19,
  Surprise = 20,
  Sad = 21,
  Sigh = 22,
  Steam = 23,
  Upset = 24,
  Respond = 25,
  Question = 26,
  Sweat = 27,
  Music = 28,
  Chat = 29,
  Twinkle = 30,
  Zzz = 31,
  Tear = 32,
  Heart = 33,
  Shy = 34,
  Think = 35,
}

export enum ScenarioModeTypes {
  None = 0,
  Main = 1,
  Sub = 2,
  Replay = 3,
  Mini = 4,
}

export enum ScenarioModeSubTypes {
  None = 0,
  Club = 1,
  TSS = 2,
}

export enum ScenarioModeReplayTypes {
  None = 0,
  Event = 1,
  Favor = 2,
  Work = 3,
  EventMeetup = 4,
}

export enum ScenarioEffectDepth {
  None = 0,
  AboveBg = 1,
  AboveCharacter = 2,
  AboveAll = 3,
}

export enum ScenarioZoomAnchors {
  Center = 0,
  LeftTop = 1,
  LeftBottom = 2,
  RightTop = 3,
  RightBottom = 4,
}

export enum ScenarioZoomType {
  Instant = 0,
  Slide = 1,
}

export enum ScenarioContentType {
  Prologue = 0,
  WeekDungeon = 1,
  Raid = 2,
  Arena = 3,
  Favor = 4,
  Shop = 5,
  EventContent = 6,
  Craft = 7,
  Chaser = 8,
  EventContentMeetup = 9,
  TimeAttack = 10,
  Mission = 11,
  EventContentPermanentPrologue = 12,
  EventContentReturnSeason = 13,
  MiniEvent = 14,
  EliminateRaid = 15,
  MultiFloorRaid = 16,
}

export enum MemoryLobbyCategory {
  None = 0,
  UILobbySpecial = 1,
  UILobbySpecial2 = 2,
}

export enum PurchaseCountResetType {
  None = 0,
  Day = 1,
  Week = 2,
  Month = 3,
}

export enum ShopCategoryType {
  General = 0,
  SecretStone = 1,
  Raid = 2,
  Gold = 3,
  Ap = 4,
  PickupGacha = 5,
  NormalGacha = 6,
  PointGacha = 7,
  EventGacha = 8,
  ArenaTicket = 9,
  Arena = 10,
  TutoGacha = 11,
  RecruitSellection = 12,
  EventContent_0 = 13,
  EventContent_1 = 14,
  EventContent_2 = 15,
  EventContent_3 = 16,
  EventContent_4 = 17,
  _Obsolete = 18,
  LimitedGacha = 19,
  MasterCoin = 20,
  SecretStoneGrowth = 21,
  TicketGacha = 22,
  DirectPayGacha = 23,
  FesGacha = 24,
  TimeAttack = 25,
  Chaser = 26,
  ChaserTicket = 27,
  SchoolDungeonTicket = 28,
  AcademyTicket = 29,
  Special = 30,
  Care = 31,
  BeforehandGacha = 32,
  EliminateRaid = 33,
  GlobalSpecialGacha = 34,
}

export enum PurchaseServerTag {
  Audit = 0,
  PreAudit = 1,
  Production = 2,
  Hotfix = 3,
  Standby2 = 4,
  Standby1 = 5,
  Major = 6,
  Minor = 7,
  Temp = 8,
  Test = 9,
  TestIn = 10,
}

export enum PurchaseStatusCode {
  None = 0,
  Start = 1,
  PublishSuccess = 2,
  End = 3,
  Error = 4,
  DuplicateOrder = 5,
  Refund = 6,
}

export enum StoreType {
  None = 0,
  GooglePlay = 1,
  AppStore = 2,
  OneStore = 3,
  MicrosoftStore = 4,
  GalaxyStore = 5,
}

export enum PurchasePeriodType {
  None = 0,
  Day = 1,
  Week = 2,
  Month = 3,
}

export enum PurchaseSourceType {
  None = 0,
  Product = 1,
  ProductMonthly = 2,
}

export enum ProductCategory {
  None = 0,
  Gem = 1,
  Monthly = 2,
  Package = 3,
  GachaDirect = 4,
  TimeLimit = 5,
}

export enum ProductDisplayTag {
  None = 0,
  New = 1,
  Hot = 2,
  Sale = 3,
}

export enum ProductTagType {
  Monthly = 0,
  Weekly = 1,
  Biweekly = 2,
}

export enum BillingTransactionEndType {
  None = 0,
  Success = 1,
  Cancel = 2,
}

export enum GachaRewardType {
  None = 0,
  Eligma = 1,
  Eleph = 2,
}

export enum ShopFreeRecruitType {
  None = 0,
  Accumulation = 1,
  Reset = 2,
}

export enum GachaDisplayTag {
  None = 0,
  Limited = 1,
  TwoStar = 2,
  ThreeStar = 3,
  Free = 4,
  New = 5,
  Fes = 6,
  SelectRecruit = 7,
}

export enum ShopFilterType {
  GachaTicket = 0,
  SecretStone = 1,
  SecretStone_1 = 2,
  SkillBook_Ultimate = 3,
  ExSkill = 4,
  SkillBook = 5,
  Craft = 6,
  AP = 7,
  CharacterExpItem = 8,
  Equip = 9,
  Material = 10,
  Creddit = 11,
  Furniture = 12,
  SelectItem = 13,
  Currency = 14,
  Hyakkiyako = 15,
  RedWinter = 16,
  Trinity = 17,
  Gehenna = 18,
  Abydos = 19,
  Millennium = 20,
  Arius = 21,
  Shanhaijing = 22,
  Valkyrie = 23,
  SRT = 24,
  Event = 25,
  ChaserTotalTicket = 26,
  SchoolTotalTicket = 27,
  ShopFilterDUMMY_1 = 28,
  ShopFilterDUMMY_2 = 29,
  ShopFilterDUMMY_3 = 30,
  ShopFilterDUMMY_4 = 31,
  ShopFilterDUMMY_5 = 32,
  ShopFilterDUMMY_6 = 33,
  ShopFilterDUMMY_7 = 34,
  ETC = 35,
  Bundle = 36,
}

export enum SocialMode {
  TITLE = 0,
  LOBBY = 1,
  FORMATION = 2,
  STAGE_SELECT = 3,
  BATTLE = 4,
  POPUP = 5,
  BATTLE_RESULT = 6,
  BATTLE_RESULT_VICTORY = 7,
  BATTLE_RESULT_DEFEAT = 8,
  INVALID = 9,
  TACTIC = 10,
  STRATEGY = 11,
  ACCONT = 12,
  CAMPAIGN_STORY = 13,
  CAMPAIGN_STAGE = 14,
  TACTICREADY = 15,
}

export enum AccountState {
  WaitingSignIn = 0,
  Normal = 1,
  Dormant = 2,
  Comeback = 3,
  Newbie = 4,
}

export enum MessagePopupLayout {
  TextOnly = 0,
  ImageBig = 1,
  ImageSmall = 2,
  UnlockCondition = 3,
}

export enum MessagePopupImagePositionType {
  ImageFirst = 0,
  TextFirst = 1,
}

export enum MessagePopupButtonType {
  Accept = 0,
  Cancel = 1,
  Command = 2,
}

export enum ToastType {
  None = 0,
  Tactic_Left = 1,
  Tactic_Right = 2,
  Social_Center = 3,
  Social_Mission = 4,
  Social_Right = 5,
  Notice_Center = 6,
}

export enum StrategyAIType {
  None = 0,
  Guard = 1,
  Pursuit = 2,
}

export enum StageDifficulty {
  None = 0,
  Normal = 1,
  Hard = 2,
  VeryHard = 3,
  VeryHard_Ex = 4,
}

export enum HexaUnitGrade {
  Grade1 = 0,
  Grade2 = 1,
  Grade3 = 2,
  Boss = 3,
}

export enum TacticEnvironment {
  None = 0,
  WarFog = 1,
}

export enum StrategyObjectType {
  None = 0,
  Start = 1,
  Heal = 2,
  Skill = 3,
  StatBuff = 4,
  Parcel = 5,
  ParcelOneTimePerAccount = 6,
  Portal = 7,
  PortalOneWayEnterance = 8,
  PortalOneWayExit = 9,
  Observatory = 10,
  Beacon = 11,
  BeaconOneTime = 12,
  EnemySpawn = 13,
  SwitchToggle = 14,
  SwitchMovableWhenToggleOff = 15,
  SwitchMovableWhenToggleOn = 16,
  FixedStart01 = 17,
  FixedStart02 = 18,
  FixedStart03 = 19,
  FixedStart04 = 20,
}

export enum StrategyEnvironment {
  None = 0,
  MapFog = 1,
}

export enum Tag {
  A = 0,
  a = 1,
  B = 2,
  b = 3,
  C = 4,
  c = 5,
  D = 6,
  d = 7,
  E = 8,
  e = 9,
  F = 10,
  f = 11,
  G = 12,
  g = 13,
  H = 14,
  h = 15,
  I = 16,
  i = 17,
  J = 18,
  j = 19,
  K = 20,
  k = 21,
  L = 22,
  l = 23,
  M = 24,
  m = 25,
  N = 26,
  n = 27,
  O = 28,
  o = 29,
  P = 30,
  p = 31,
  Q = 32,
  q = 33,
  R = 34,
  r = 35,
  S = 36,
  s = 37,
  T = 38,
  t = 39,
  U = 40,
  u = 41,
  V = 42,
  v = 43,
  W = 44,
  w = 45,
  X = 46,
  x = 47,
  Y = 48,
  y = 49,
  Z = 50,
  z = 51,
  aA = 52,
  aa = 53,
  aB = 54,
  ab = 55,
  aC = 56,
  ac = 57,
  aD = 58,
  ad = 59,
  aE = 60,
  ae = 61,
  aF = 62,
  af = 63,
  aG = 64,
  ag = 65,
  aH = 66,
  ah = 67,
  aI = 68,
  ai = 69,
  aJ = 70,
  aj = 71,
  aK = 72,
  ak = 73,
  aL = 74,
  al = 75,
  aM = 76,
  am = 77,
  aN = 78,
  an = 79,
  aO = 80,
  ao = 81,
  aP = 82,
  ap = 83,
  aQ = 84,
  aq = 85,
  aR = 86,
  ar = 87,
  aS = 88,
  as = 89,
  aT = 90,
  at = 91,
  aU = 92,
  au = 93,
  aV = 94,
  av = 95,
  aW = 96,
  aw = 97,
  aX = 98,
  ax = 99,
  aY = 100,
  ay = 101,
  aZ = 102,
  az = 103,
  BA = 104,
  Ba = 105,
  BB = 106,
  Bb = 107,
  BC = 108,
  Bc = 109,
  BD = 110,
  Bd = 111,
  BE = 112,
  Be = 113,
  BF = 114,
  Bf = 115,
  BG = 116,
  Bg = 117,
  BH = 118,
  Bh = 119,
  BI = 120,
  Bi = 121,
  BJ = 122,
  Bj = 123,
  BK = 124,
  Bk = 125,
  BL = 126,
  Bl = 127,
  BM = 128,
  Bm = 129,
  BN = 130,
  Bn = 131,
  BO = 132,
  Bo = 133,
  BP = 134,
  Bp = 135,
  BQ = 136,
  Bq = 137,
  BR = 138,
  Br = 139,
  BS = 140,
  Bs = 141,
  BT = 142,
  Bt = 143,
  BU = 144,
  Bu = 145,
  BV = 146,
  Bv = 147,
  BW = 148,
  Bw = 149,
  BX = 150,
  Bx = 151,
  BY = 152,
  By = 153,
  BZ = 154,
  Bz = 155,
  bA = 156,
  ba = 157,
  bB = 158,
  bb = 159,
  bC = 160,
  bc = 161,
  bD = 162,
  bd = 163,
  bE = 164,
  be = 165,
  bF = 166,
  bf = 167,
  bG = 168,
  bg = 169,
  bH = 170,
  bh = 171,
  bI = 172,
  bi = 173,
  bJ = 174,
  bj = 175,
  bK = 176,
  bk = 177,
  bL = 178,
  bl = 179,
  bM = 180,
  bm = 181,
  bN = 182,
  bn = 183,
  bO = 184,
  bo = 185,
  bP = 186,
  bp = 187,
  bQ = 188,
  bq = 189,
  bR = 190,
  br = 191,
  bS = 192,
  bs = 193,
  bT = 194,
  bt = 195,
  bU = 196,
  bu = 197,
  bV = 198,
  bv = 199,
  bW = 200,
  bw = 201,
  bX = 202,
  bx = 203,
  bY = 204,
  by = 205,
  bZ = 206,
  bz = 207,
  CA = 208,
  Ca = 209,
  CB = 210,
  Cb = 211,
  CC = 212,
  Cc = 213,
  CD = 214,
  Cd = 215,
  CE = 216,
  Ce = 217,
  CF = 218,
  Cf = 219,
  CG = 220,
  Cg = 221,
  CH = 222,
  Ch = 223,
  CI = 224,
  Ci = 225,
  CJ = 226,
  Cj = 227,
  CK = 228,
  Ck = 229,
  CL = 230,
  Cl = 231,
  CM = 232,
  Cm = 233,
  CN = 234,
  Cn = 235,
  CO = 236,
  Co = 237,
  CP = 238,
  Cp = 239,
  CQ = 240,
  Cq = 241,
  CR = 242,
  Cr = 243,
  CS = 244,
  Cs = 245,
  CT = 246,
  Ct = 247,
  CU = 248,
  Cu = 249,
  CV = 250,
  Cv = 251,
  CW = 252,
  Cw = 253,
  CX = 254,
  Cx = 255,
  CY = 256,
  Cy = 257,
  CZ = 258,
  Cz = 259,
  cA = 260,
  ca = 261,
  cB = 262,
  cb = 263,
  cC = 264,
  cc = 265,
  cD = 266,
  cd = 267,
  cE = 268,
  ce = 269,
  cF = 270,
  cf = 271,
  cG = 272,
  cg = 273,
  cH = 274,
  ch = 275,
  cI = 276,
  ci = 277,
  cJ = 278,
  cj = 279,
  cK = 280,
  ck = 281,
  cL = 282,
  cl = 283,
  cM = 284,
  cm = 285,
  cN = 286,
  cn = 287,
  cO = 288,
  co = 289,
  cP = 290,
  cp = 291,
  cQ = 292,
  cq = 293,
  cR = 294,
  cr = 295,
  cS = 296,
  cs = 297,
  cT = 298,
  ct = 299,
  cU = 300,
  cu = 301,
  cV = 302,
  cv = 303,
  cW = 304,
  cw = 305,
  cX = 306,
  cx = 307,
  cY = 308,
  cy = 309,
  cZ = 310,
  cz = 311,
  DA = 312,
  Da = 313,
  DB = 314,
  Db = 315,
  DC = 316,
  Dc = 317,
  DD = 318,
  Dd = 319,
  DE = 320,
  De = 321,
  DF = 322,
  Df = 323,
  DG = 324,
  Dg = 325,
  DH = 326,
  Dh = 327,
  DI = 328,
  Di = 329,
  DJ = 330,
  Dj = 331,
  DK = 332,
  Dk = 333,
  DL = 334,
  Dl = 335,
  DM = 336,
  Dm = 337,
  DN = 338,
  Dn = 339,
  DO = 340,
  Do = 341,
  DP = 342,
  Dp = 343,
  DQ = 344,
  Dq = 345,
  DR = 346,
  Dr = 347,
  DS = 348,
  Ds = 349,
  DT = 350,
  Dt = 351,
  DU = 352,
  Du = 353,
  DV = 354,
  Dv = 355,
  DW = 356,
  Dw = 357,
  DX = 358,
  Dx = 359,
  DY = 360,
  Dy = 361,
  DZ = 362,
  Dz = 363,
  dA = 364,
  da = 365,
  dB = 366,
  db = 367,
  dC = 368,
  dc = 369,
  dD = 370,
  dd = 371,
  dE = 372,
  de = 373,
  dF = 374,
  df = 375,
  dG = 376,
  dg = 377,
  dH = 378,
  dh = 379,
  dI = 380,
  di = 381,
  dJ = 382,
  dj = 383,
  dK = 384,
  dk = 385,
  dL = 386,
  dl = 387,
  dM = 388,
  dm = 389,
  dN = 390,
  dn = 391,
  dO = 392,
  do = 393,
  dP = 394,
  dp = 395,
  dQ = 396,
  dq = 397,
  dR = 398,
  dr = 399,
  dS = 400,
  ds = 401,
  dT = 402,
  dt = 403,
  dU = 404,
  du = 405,
  dV = 406,
  dv = 407,
  dW = 408,
  dw = 409,
  dX = 410,
  dx = 411,
  dY = 412,
  dy = 413,
  dZ = 414,
  dz = 415,
  EA = 416,
  Ea = 417,
  EB = 418,
  Eb = 419,
  EC = 420,
  Ec = 421,
  ED = 422,
  Ed = 423,
  EE = 424,
  Ee = 425,
  EF = 426,
  Ef = 427,
  EG = 428,
  Eg = 429,
  EH = 430,
  Eh = 431,
  EI = 432,
  Ei = 433,
  EJ = 434,
  Ej = 435,
  EK = 436,
  Ek = 437,
  EL = 438,
  El = 439,
  EM = 440,
  Em = 441,
  EN = 442,
  En = 443,
  EO = 444,
  Eo = 445,
  EP = 446,
  Ep = 447,
  EQ = 448,
  Eq = 449,
  ER = 450,
  Er = 451,
  ES = 452,
  Es = 453,
  ET = 454,
  Et = 455,
  EU = 456,
  Eu = 457,
  EV = 458,
  Ev = 459,
  EW = 460,
  Ew = 461,
  EX = 462,
  Ex = 463,
  EY = 464,
  Ey = 465,
  EZ = 466,
  Ez = 467,
  eA = 468,
  ea = 469,
  eB = 470,
  eb = 471,
  eC = 472,
  ec = 473,
  eD = 474,
  ed = 475,
  eE = 476,
  ee = 477,
  eF = 478,
  ef = 479,
  eG = 480,
  eg = 481,
  eH = 482,
  eh = 483,
  eI = 484,
  ei = 485,
  eJ = 486,
  ej = 487,
  eK = 488,
  ek = 489,
  eL = 490,
  el = 491,
  eM = 492,
  em = 493,
  eN = 494,
  en = 495,
  eO = 496,
  eo = 497,
  eP = 498,
  ep = 499,
  eQ = 500,
  eq = 501,
  eR = 502,
  er = 503,
  eS = 504,
  es = 505,
  eT = 506,
  et = 507,
  eU = 508,
  eu = 509,
  eV = 510,
  ev = 511,
  eW = 512,
  ew = 513,
  eX = 514,
  ex = 515,
  eY = 516,
  ey = 517,
  eZ = 518,
  ez = 519,
  FA = 520,
  Fa = 521,
  FB = 522,
  Fb = 523,
  FC = 524,
  Fc = 525,
  FD = 526,
  Fd = 527,
  FE = 528,
  Fe = 529,
  FF = 530,
  Ff = 531,
  FG = 532,
  Fg = 533,
  FH = 534,
  Fh = 535,
  FI = 536,
  Fi = 537,
  FJ = 538,
  Fj = 539,
  FK = 540,
  Fk = 541,
  FL = 542,
  Fl = 543,
  FM = 544,
  Fm = 545,
  FN = 546,
  Fn = 547,
  FO = 548,
  Fo = 549,
  FP = 550,
  Fp = 551,
  FQ = 552,
  Fq = 553,
  FR = 554,
  Fr = 555,
  FS = 556,
  Fs = 557,
  FT = 558,
  Ft = 559,
  FU = 560,
  Fu = 561,
  FV = 562,
  Fv = 563,
  FW = 564,
  Fw = 565,
  FX = 566,
  Fx = 567,
  FY = 568,
  Fy = 569,
  FZ = 570,
  Fz = 571,
  fA = 572,
  fa = 573,
  fB = 574,
  fb = 575,
  fC = 576,
  fc = 577,
  fD = 578,
  fd = 579,
  fE = 580,
  fe = 581,
  fF = 582,
  ff = 583,
  fG = 584,
  fg = 585,
  fH = 586,
  fh = 587,
  fI = 588,
  fi = 589,
  fJ = 590,
  fj = 591,
  fK = 592,
  fk = 593,
  fL = 594,
  fl = 595,
  fM = 596,
  fm = 597,
  fN = 598,
  fn = 599,
  fO = 600,
  fo = 601,
  fP = 602,
  fp = 603,
  fQ = 604,
  fq = 605,
  fR = 606,
  fr = 607,
  fS = 608,
  fs = 609,
  fT = 610,
  ft = 611,
  fU = 612,
  fu = 613,
  fV = 614,
  fv = 615,
  fW = 616,
  fw = 617,
  fX = 618,
  fx = 619,
  fY = 620,
  fy = 621,
  fZ = 622,
  fz = 623,
  GA = 624,
  Ga = 625,
  GB = 626,
  Gb = 627,
  GC = 628,
  Gc = 629,
  GD = 630,
  Gd = 631,
  GE = 632,
  Ge = 633,
  GF = 634,
  Gf = 635,
  GG = 636,
  Gg = 637,
  GH = 638,
  Gh = 639,
  GI = 640,
  Gi = 641,
  GJ = 642,
  Gj = 643,
  GK = 644,
  Gk = 645,
  GL = 646,
  Gl = 647,
  GM = 648,
  Gm = 649,
  GN = 650,
  Gn = 651,
  GO = 652,
  Go = 653,
  GP = 654,
  Gp = 655,
  GQ = 656,
  Gq = 657,
  GR = 658,
  Gr = 659,
  GS = 660,
  Gs = 661,
  GT = 662,
  Gt = 663,
  GU = 664,
  Gu = 665,
  GV = 666,
  Gv = 667,
  GW = 668,
  Gw = 669,
  GX = 670,
  Gx = 671,
  GY = 672,
  Gy = 673,
  GZ = 674,
  Gz = 675,
  gA = 676,
  ga = 677,
  gB = 678,
  gb = 679,
  gC = 680,
  gc = 681,
  gD = 682,
  gd = 683,
  gE = 684,
  ge = 685,
  gF = 686,
  gf = 687,
  gG = 688,
  gg = 689,
  gH = 690,
  gh = 691,
  gI = 692,
  gi = 693,
  gJ = 694,
  gj = 695,
  gK = 696,
  gk = 697,
  gL = 698,
  gl = 699,
  gM = 700,
  gm = 701,
  gN = 702,
  gn = 703,
  gO = 704,
  go = 705,
  gP = 706,
  gp = 707,
  gQ = 708,
  gq = 709,
  gR = 710,
  gr = 711,
  gS = 712,
  gs = 713,
  gT = 714,
  gt = 715,
  gU = 716,
  gu = 717,
  gV = 718,
  gv = 719,
  gW = 720,
  gw = 721,
  gX = 722,
  gx = 723,
  gY = 724,
  gy = 725,
  gZ = 726,
  gz = 727,
  HA = 728,
  Ha = 729,
  HB = 730,
  Hb = 731,
  HC = 732,
  Hc = 733,
  HD = 734,
  Hd = 735,
  HE = 736,
  He = 737,
  HF = 738,
  Hf = 739,
  HG = 740,
  Hg = 741,
  HH = 742,
  Hh = 743,
  HI = 744,
  Hi = 745,
  HJ = 746,
  Hj = 747,
  HK = 748,
  Hk = 749,
  HL = 750,
  Hl = 751,
  HM = 752,
  Hm = 753,
  HN = 754,
  Hn = 755,
  HO = 756,
  Ho = 757,
  HP = 758,
  Hp = 759,
  HQ = 760,
  Hq = 761,
  HR = 762,
  Hr = 763,
  HS = 764,
  Hs = 765,
  HT = 766,
  Ht = 767,
  HU = 768,
  Hu = 769,
  HV = 770,
  Hv = 771,
  HW = 772,
  Hw = 773,
  HX = 774,
  Hx = 775,
  HY = 776,
  Hy = 777,
  HZ = 778,
  Hz = 779,
  hA = 780,
  ha = 781,
  hB = 782,
  hb = 783,
  hC = 784,
  hc = 785,
  hD = 786,
  hd = 787,
  hE = 788,
  he = 789,
  hF = 790,
  hf = 791,
  hG = 792,
  hg = 793,
  hH = 794,
  hh = 795,
  hI = 796,
  hi = 797,
  hJ = 798,
  hj = 799,
  hK = 800,
  hk = 801,
  hL = 802,
  hl = 803,
  hM = 804,
  hm = 805,
  hN = 806,
  hn = 807,
  hO = 808,
  ho = 809,
  hP = 810,
  hp = 811,
  hQ = 812,
  hq = 813,
  hR = 814,
  hr = 815,
  hS = 816,
  hs = 817,
  hT = 818,
  ht = 819,
  hU = 820,
  hu = 821,
  hV = 822,
  hv = 823,
  hW = 824,
  hw = 825,
  hX = 826,
  hx = 827,
  hY = 828,
  hy = 829,
  hZ = 830,
  hz = 831,
  IA = 832,
  Ia = 833,
  IB = 834,
  Ib = 835,
  IC = 836,
  Ic = 837,
  ID = 838,
  Id = 839,
  IE = 840,
  Ie = 841,
  IF = 842,
  If = 843,
  IG = 844,
  Ig = 845,
  IH = 846,
  Ih = 847,
  II = 848,
  Ii = 849,
  IJ = 850,
  Ij = 851,
  IK = 852,
  Ik = 853,
  IL = 854,
  Il = 855,
  IM = 856,
  Im = 857,
  IN = 858,
  In = 859,
  IO = 860,
  Io = 861,
  IP = 862,
  Ip = 863,
  IQ = 864,
  Iq = 865,
  IR = 866,
  Ir = 867,
  IS = 868,
  Is = 869,
  IT = 870,
  It = 871,
  IU = 872,
  Iu = 873,
  IV = 874,
  Iv = 875,
  IW = 876,
  Iw = 877,
  IX = 878,
  Ix = 879,
  IY = 880,
  Iy = 881,
  IZ = 882,
  Iz = 883,
  iA = 884,
  ia = 885,
  iB = 886,
  ib = 887,
  iC = 888,
  ic = 889,
  iD = 890,
  id = 891,
  iE = 892,
  ie = 893,
  iF = 894,
  if = 895,
  iG = 896,
  ig = 897,
  iH = 898,
  ih = 899,
  iI = 900,
  ii = 901,
  iJ = 902,
  ij = 903,
  iK = 904,
  ik = 905,
  iL = 906,
  il = 907,
  iM = 908,
  im = 909,
  iN = 910,
  in = 911,
  iO = 912,
  io = 913,
  iP = 914,
  ip = 915,
  iQ = 916,
  iq = 917,
  iR = 918,
  ir = 919,
  iS = 920,
  is = 921,
  iT = 922,
  it = 923,
  iU = 924,
  iu = 925,
  iV = 926,
  iv = 927,
  iW = 928,
  iw = 929,
  iX = 930,
  ix = 931,
  iY = 932,
  iy = 933,
  iZ = 934,
  iz = 935,
  JA = 936,
  Ja = 937,
  JB = 938,
  Jb = 939,
  JC = 940,
  Jc = 941,
  JD = 942,
  Jd = 943,
  JE = 944,
  Je = 945,
  JF = 946,
  Jf = 947,
  JG = 948,
  Jg = 949,
  JH = 950,
  Jh = 951,
  JI = 952,
  Ji = 953,
  JJ = 954,
  Jj = 955,
  JK = 956,
  Jk = 957,
  JL = 958,
  Jl = 959,
  JM = 960,
  Jm = 961,
  JN = 962,
  Jn = 963,
  JO = 964,
  Jo = 965,
  JP = 966,
  Jp = 967,
  JQ = 968,
  Jq = 969,
  JR = 970,
  Jr = 971,
  JS = 972,
  Js = 973,
  JT = 974,
  Jt = 975,
  JU = 976,
  Ju = 977,
  JV = 978,
  Jv = 979,
  JW = 980,
  Jw = 981,
  JX = 982,
  Jx = 983,
  JY = 984,
  Jy = 985,
  JZ = 986,
  Jz = 987,
  jA = 988,
  ja = 989,
  jB = 990,
  jb = 991,
  jC = 992,
  jc = 993,
  jD = 994,
  jd = 995,
  jE = 996,
  je = 997,
  jF = 998,
  jf = 999,
  jG = 1000,
  jg = 1001,
  jH = 1002,
  jh = 1003,
  jI = 1004,
  ji = 1005,
  jJ = 1006,
  jj = 1007,
  jK = 1008,
  jk = 1009,
  jL = 1010,
  jl = 1011,
  jM = 1012,
  jm = 1013,
  jN = 1014,
  jn = 1015,
  jO = 1016,
  jo = 1017,
  jP = 1018,
  jp = 1019,
  jQ = 1020,
  jq = 1021,
  jR = 1022,
  jr = 1023,
  jS = 1024,
  js = 1025,
  jT = 1026,
  jt = 1027,
  jU = 1028,
  ju = 1029,
  jV = 1030,
  jv = 1031,
  jW = 1032,
  jw = 1033,
  jX = 1034,
  jx = 1035,
  jY = 1036,
  jy = 1037,
  jZ = 1038,
  jz = 1039,
  KA = 1040,
  Ka = 1041,
  KB = 1042,
  Kb = 1043,
  KC = 1044,
  Kc = 1045,
  KD = 1046,
  Kd = 1047,
  KE = 1048,
  Ke = 1049,
  KF = 1050,
  Kf = 1051,
  KG = 1052,
  Kg = 1053,
  KH = 1054,
  Kh = 1055,
  KI = 1056,
  Ki = 1057,
  KJ = 1058,
  Kj = 1059,
  KK = 1060,
  Kk = 1061,
  KL = 1062,
  Kl = 1063,
  KM = 1064,
  Km = 1065,
  KN = 1066,
  Kn = 1067,
  KO = 1068,
  Ko = 1069,
  KP = 1070,
  Kp = 1071,
  KQ = 1072,
  Kq = 1073,
  KR = 1074,
  Kr = 1075,
  KS = 1076,
  Ks = 1077,
  KT = 1078,
  Kt = 1079,
  KU = 1080,
  Ku = 1081,
  KV = 1082,
  Kv = 1083,
  KW = 1084,
  Kw = 1085,
  KX = 1086,
  Kx = 1087,
  KY = 1088,
  Ky = 1089,
  KZ = 1090,
  Kz = 1091,
  kA = 1092,
  ka = 1093,
  kB = 1094,
  kb = 1095,
  kC = 1096,
  kc = 1097,
  kD = 1098,
  kd = 1099,
  kE = 1100,
  ke = 1101,
  kF = 1102,
  kf = 1103,
  kG = 1104,
  kg = 1105,
  kH = 1106,
  kh = 1107,
  kI = 1108,
  ki = 1109,
  kJ = 1110,
  kj = 1111,
  kK = 1112,
  kk = 1113,
  kL = 1114,
  kl = 1115,
  kM = 1116,
  km = 1117,
  kN = 1118,
  kn = 1119,
  kO = 1120,
  ko = 1121,
  kP = 1122,
  kp = 1123,
  kQ = 1124,
  kq = 1125,
  kR = 1126,
  kr = 1127,
  kS = 1128,
  ks = 1129,
  kT = 1130,
  kt = 1131,
  kU = 1132,
  ku = 1133,
  kV = 1134,
  kv = 1135,
  kW = 1136,
  kw = 1137,
  kX = 1138,
  kx = 1139,
  kY = 1140,
  ky = 1141,
  kZ = 1142,
  kz = 1143,
  LA = 1144,
  La = 1145,
  LB = 1146,
  Lb = 1147,
  LC = 1148,
  Lc = 1149,
  LD = 1150,
  Ld = 1151,
  LE = 1152,
  Le = 1153,
  LF = 1154,
  Lf = 1155,
  LG = 1156,
  Lg = 1157,
  LH = 1158,
  Lh = 1159,
  LI = 1160,
  Li = 1161,
  LJ = 1162,
  Lj = 1163,
  LK = 1164,
  Lk = 1165,
  LL = 1166,
  Ll = 1167,
  LM = 1168,
  Lm = 1169,
  LN = 1170,
  Ln = 1171,
  LO = 1172,
  Lo = 1173,
  LP = 1174,
  Lp = 1175,
  LQ = 1176,
  Lq = 1177,
  LR = 1178,
  Lr = 1179,
  LS = 1180,
  Ls = 1181,
  LT = 1182,
  Lt = 1183,
  LU = 1184,
  Lu = 1185,
  LV = 1186,
  Lv = 1187,
  LW = 1188,
  Lw = 1189,
  LX = 1190,
  Lx = 1191,
  LY = 1192,
  Ly = 1193,
  LZ = 1194,
  Lz = 1195,
  lA = 1196,
  la = 1197,
  lB = 1198,
  lb = 1199,
  lC = 1200,
  lc = 1201,
  lD = 1202,
  ld = 1203,
  lE = 1204,
  le = 1205,
  lF = 1206,
  lf = 1207,
  lG = 1208,
  lg = 1209,
  lH = 1210,
  lh = 1211,
  lI = 1212,
  li = 1213,
  lJ = 1214,
  lj = 1215,
  lK = 1216,
  lk = 1217,
  lL = 1218,
  ll = 1219,
  lM = 1220,
  lm = 1221,
  lN = 1222,
  ln = 1223,
  lO = 1224,
  lo = 1225,
  lP = 1226,
  lp = 1227,
  lQ = 1228,
  lq = 1229,
  lR = 1230,
  lr = 1231,
  lS = 1232,
  ls = 1233,
  lT = 1234,
  lt = 1235,
  lU = 1236,
  lu = 1237,
  lV = 1238,
  lv = 1239,
  lW = 1240,
  lw = 1241,
  lX = 1242,
  lx = 1243,
  lY = 1244,
  ly = 1245,
  lZ = 1246,
  lz = 1247,
  MA = 1248,
  Ma = 1249,
  MB = 1250,
  Mb = 1251,
  MC = 1252,
  Mc = 1253,
  MD = 1254,
  Md = 1255,
  ME = 1256,
  Me = 1257,
  MF = 1258,
  Mf = 1259,
  MG = 1260,
  Mg = 1261,
  MH = 1262,
  Mh = 1263,
  MI = 1264,
  Mi = 1265,
  MJ = 1266,
  Mj = 1267,
  MK = 1268,
  Mk = 1269,
  ML = 1270,
  Ml = 1271,
  MM = 1272,
  Mm = 1273,
  MN = 1274,
  Mn = 1275,
  MO = 1276,
  Mo = 1277,
  MP = 1278,
  Mp = 1279,
  MQ = 1280,
  Mq = 1281,
  MR = 1282,
  Mr = 1283,
  MS = 1284,
  Ms = 1285,
  MT = 1286,
  Mt = 1287,
  MU = 1288,
  Mu = 1289,
  MV = 1290,
  Mv = 1291,
  MW = 1292,
  Mw = 1293,
  MX = 1294,
  Mx = 1295,
  MY = 1296,
  My = 1297,
  MZ = 1298,
  Mz = 1299,
  mA = 1300,
  ma = 1301,
  mB = 1302,
  mb = 1303,
  mC = 1304,
  mc = 1305,
  mD = 1306,
  md = 1307,
  mE = 1308,
  me = 1309,
  mF = 1310,
  mf = 1311,
  mG = 1312,
  mg = 1313,
  mH = 1314,
  mh = 1315,
  mI = 1316,
  mi = 1317,
  mJ = 1318,
  mj = 1319,
  mK = 1320,
  mk = 1321,
  mL = 1322,
  ml = 1323,
  mM = 1324,
  mm = 1325,
  mN = 1326,
  mn = 1327,
  mO = 1328,
  mo = 1329,
  mP = 1330,
  mp = 1331,
  mQ = 1332,
  mq = 1333,
  mR = 1334,
  mr = 1335,
  mS = 1336,
  ms = 1337,
  mT = 1338,
  mt = 1339,
  mU = 1340,
  mu = 1341,
  mV = 1342,
  mv = 1343,
  mW = 1344,
  mw = 1345,
  mX = 1346,
  mx = 1347,
  mY = 1348,
  my = 1349,
  mZ = 1350,
  mz = 1351,
  NA = 1352,
  Na = 1353,
  NB = 1354,
  Nb = 1355,
  NC = 1356,
  Nc = 1357,
  ND = 1358,
  Nd = 1359,
  NE = 1360,
  Ne = 1361,
  NF = 1362,
  Nf = 1363,
  NG = 1364,
  Ng = 1365,
  NH = 1366,
  Nh = 1367,
  NI = 1368,
  Ni = 1369,
  NJ = 1370,
  Nj = 1371,
  NK = 1372,
  Nk = 1373,
  NL = 1374,
  Nl = 1375,
  NM = 1376,
  Nm = 1377,
  NN = 1378,
  Nn = 1379,
  NO = 1380,
  No = 1381,
  NP = 1382,
  Np = 1383,
  NQ = 1384,
  Nq = 1385,
  NR = 1386,
  Nr = 1387,
  NS = 1388,
  Ns = 1389,
  NT = 1390,
  Nt = 1391,
  NU = 1392,
  Nu = 1393,
  NV = 1394,
  Nv = 1395,
  NW = 1396,
  Nw = 1397,
  NX = 1398,
  Nx = 1399,
  NY = 1400,
  Ny = 1401,
  NZ = 1402,
  Nz = 1403,
  nA = 1404,
  na = 1405,
  nB = 1406,
  nb = 1407,
  nC = 1408,
  nc = 1409,
  nD = 1410,
  nd = 1411,
  nE = 1412,
  ne = 1413,
  nF = 1414,
  nf = 1415,
  nG = 1416,
  ng = 1417,
  nH = 1418,
  nh = 1419,
  nI = 1420,
  ni = 1421,
  nJ = 1422,
  nj = 1423,
  nK = 1424,
  nk = 1425,
  nL = 1426,
  nl = 1427,
  nM = 1428,
  nm = 1429,
  nN = 1430,
  nn = 1431,
  nO = 1432,
  no = 1433,
  nP = 1434,
  np = 1435,
  nQ = 1436,
  nq = 1437,
  nR = 1438,
  nr = 1439,
  nS = 1440,
  ns = 1441,
  nT = 1442,
  nt = 1443,
  nU = 1444,
  nu = 1445,
  nV = 1446,
  nv = 1447,
  nW = 1448,
  nw = 1449,
  nX = 1450,
  nx = 1451,
  nY = 1452,
  ny = 1453,
  nZ = 1454,
  nz = 1455,
  OA = 1456,
  Oa = 1457,
  OB = 1458,
  Ob = 1459,
  OC = 1460,
  Oc = 1461,
  OD = 1462,
  Od = 1463,
  OE = 1464,
  Oe = 1465,
  OF = 1466,
  Of = 1467,
  OG = 1468,
  Og = 1469,
  OH = 1470,
  Oh = 1471,
  OI = 1472,
  Oi = 1473,
  OJ = 1474,
  Oj = 1475,
  OK = 1476,
  Ok = 1477,
  OL = 1478,
  Ol = 1479,
  OM = 1480,
  Om = 1481,
  ON = 1482,
  On = 1483,
  OO = 1484,
  Oo = 1485,
  OP = 1486,
  Op = 1487,
  OQ = 1488,
  Oq = 1489,
  OR = 1490,
  Or = 1491,
  OS = 1492,
  Os = 1493,
  OT = 1494,
  Ot = 1495,
  OU = 1496,
  Ou = 1497,
  OV = 1498,
  Ov = 1499,
  OW = 1500,
  Ow = 1501,
  OX = 1502,
  Ox = 1503,
  OY = 1504,
  Oy = 1505,
  OZ = 1506,
  Oz = 1507,
  oA = 1508,
  oa = 1509,
  oB = 1510,
  ob = 1511,
  oC = 1512,
  oc = 1513,
  oD = 1514,
  od = 1515,
  oE = 1516,
  oe = 1517,
  oF = 1518,
  of = 1519,
  oG = 1520,
  og = 1521,
  oH = 1522,
  oh = 1523,
  oI = 1524,
  oi = 1525,
  oJ = 1526,
  oj = 1527,
  oK = 1528,
  ok = 1529,
  oL = 1530,
  ol = 1531,
  oM = 1532,
  om = 1533,
  oN = 1534,
  on = 1535,
  oO = 1536,
  oo = 1537,
  oP = 1538,
  op = 1539,
  oQ = 1540,
  oq = 1541,
  oR = 1542,
  or = 1543,
  oS = 1544,
  os = 1545,
  oT = 1546,
  ot = 1547,
  oU = 1548,
  ou = 1549,
  oV = 1550,
  ov = 1551,
  oW = 1552,
  ow = 1553,
  oX = 1554,
  ox = 1555,
  oY = 1556,
  oy = 1557,
  oZ = 1558,
  oz = 1559,
  PA = 1560,
  Pa = 1561,
  PB = 1562,
  Pb = 1563,
  PC = 1564,
  Pc = 1565,
  PD = 1566,
  Pd = 1567,
  PE = 1568,
  Pe = 1569,
  PF = 1570,
  Pf = 1571,
  PG = 1572,
  Pg = 1573,
  PH = 1574,
  Ph = 1575,
  PI = 1576,
  Pi = 1577,
  PJ = 1578,
  Pj = 1579,
  PK = 1580,
  Pk = 1581,
  PL = 1582,
  Pl = 1583,
  PM = 1584,
  Pm = 1585,
  PN = 1586,
  Pn = 1587,
  PO = 1588,
  Po = 1589,
  PP = 1590,
  Pp = 1591,
  PQ = 1592,
  Pq = 1593,
  PR = 1594,
  Pr = 1595,
  PS = 1596,
  Ps = 1597,
  PT = 1598,
  Pt = 1599,
  PU = 1600,
  Pu = 1601,
  PV = 1602,
  Pv = 1603,
  PW = 1604,
  Pw = 1605,
  PX = 1606,
  Px = 1607,
  PY = 1608,
  Py = 1609,
  PZ = 1610,
  Pz = 1611,
  pA = 1612,
  pa = 1613,
  pB = 1614,
  pb = 1615,
  pC = 1616,
  pc = 1617,
  pD = 1618,
  pd = 1619,
  pE = 1620,
  pe = 1621,
  pF = 1622,
  pf = 1623,
  pG = 1624,
  pg = 1625,
  pH = 1626,
  ph = 1627,
  pI = 1628,
  pi = 1629,
  pJ = 1630,
  pj = 1631,
  pK = 1632,
  pk = 1633,
  pL = 1634,
  pl = 1635,
  pM = 1636,
  pm = 1637,
  pN = 1638,
  pn = 1639,
  pO = 1640,
  po = 1641,
  pP = 1642,
  pp = 1643,
  pQ = 1644,
  pq = 1645,
  pR = 1646,
  pr = 1647,
  pS = 1648,
  ps = 1649,
  pT = 1650,
  pt = 1651,
  pU = 1652,
  pu = 1653,
  pV = 1654,
  pv = 1655,
  pW = 1656,
  pw = 1657,
  pX = 1658,
  px = 1659,
  pY = 1660,
  py = 1661,
  pZ = 1662,
  pz = 1663,
  QA = 1664,
  Qa = 1665,
  QB = 1666,
  Qb = 1667,
  QC = 1668,
  Qc = 1669,
  QD = 1670,
  Qd = 1671,
  QE = 1672,
  Qe = 1673,
  QF = 1674,
  Qf = 1675,
  QG = 1676,
  Qg = 1677,
  QH = 1678,
  Qh = 1679,
  QI = 1680,
  Qi = 1681,
  QJ = 1682,
  Qj = 1683,
  QK = 1684,
  Qk = 1685,
  QL = 1686,
  Ql = 1687,
  QM = 1688,
  Qm = 1689,
  QN = 1690,
  Qn = 1691,
  QO = 1692,
  Qo = 1693,
  QP = 1694,
  Qp = 1695,
  QQ = 1696,
  Qq = 1697,
  QR = 1698,
  Qr = 1699,
  QS = 1700,
  Qs = 1701,
  QT = 1702,
  Qt = 1703,
  QU = 1704,
  Qu = 1705,
  QV = 1706,
  Qv = 1707,
  QW = 1708,
  Qw = 1709,
  QX = 1710,
  Qx = 1711,
  QY = 1712,
  Qy = 1713,
  QZ = 1714,
  Qz = 1715,
  qA = 1716,
  qa = 1717,
  qB = 1718,
  qb = 1719,
  qC = 1720,
  qc = 1721,
  qD = 1722,
  qd = 1723,
  qE = 1724,
  qe = 1725,
  qF = 1726,
  qf = 1727,
  qG = 1728,
  qg = 1729,
  qH = 1730,
  qh = 1731,
  qI = 1732,
  qi = 1733,
  qJ = 1734,
  qj = 1735,
  qK = 1736,
  qk = 1737,
  qL = 1738,
  ql = 1739,
  qM = 1740,
  qm = 1741,
  qN = 1742,
  qn = 1743,
  qO = 1744,
  qo = 1745,
  qP = 1746,
  qp = 1747,
  qQ = 1748,
  qq = 1749,
  qR = 1750,
  qr = 1751,
  qS = 1752,
  qs = 1753,
  qT = 1754,
  qt = 1755,
  qU = 1756,
  qu = 1757,
  qV = 1758,
  qv = 1759,
  qW = 1760,
  qw = 1761,
  qX = 1762,
  qx = 1763,
  qY = 1764,
  qy = 1765,
  qZ = 1766,
  qz = 1767,
  RA = 1768,
  Ra = 1769,
  RB = 1770,
  Rb = 1771,
  RC = 1772,
  Rc = 1773,
  RD = 1774,
  Rd = 1775,
  RE = 1776,
  Re = 1777,
  RF = 1778,
  Rf = 1779,
  RG = 1780,
  Rg = 1781,
  RH = 1782,
  Rh = 1783,
  RI = 1784,
  Ri = 1785,
  RJ = 1786,
  Rj = 1787,
  RK = 1788,
  Rk = 1789,
  RL = 1790,
  Rl = 1791,
  RM = 1792,
  Rm = 1793,
  RN = 1794,
  Rn = 1795,
  RO = 1796,
  Ro = 1797,
  RP = 1798,
  Rp = 1799,
  RQ = 1800,
  Rq = 1801,
  RR = 1802,
  Rr = 1803,
  RS = 1804,
  Rs = 1805,
  RT = 1806,
  Rt = 1807,
  RU = 1808,
  Ru = 1809,
  RV = 1810,
  Rv = 1811,
  RW = 1812,
  Rw = 1813,
  RX = 1814,
  Rx = 1815,
  RY = 1816,
  Ry = 1817,
  RZ = 1818,
  Rz = 1819,
  rA = 1820,
  ra = 1821,
  rB = 1822,
  rb = 1823,
  rC = 1824,
  rc = 1825,
  rD = 1826,
  rd = 1827,
  rE = 1828,
  re = 1829,
  rF = 1830,
  rf = 1831,
  rG = 1832,
  rg = 1833,
  rH = 1834,
  rh = 1835,
  rI = 1836,
  ri = 1837,
  rJ = 1838,
  rj = 1839,
  rK = 1840,
  rk = 1841,
  rL = 1842,
  rl = 1843,
  rM = 1844,
  rm = 1845,
  rN = 1846,
  rn = 1847,
  rO = 1848,
  ro = 1849,
  rP = 1850,
  rp = 1851,
  rQ = 1852,
  rq = 1853,
  rR = 1854,
  rr = 1855,
  rS = 1856,
  rs = 1857,
  rT = 1858,
  rt = 1859,
  rU = 1860,
  ru = 1861,
  rV = 1862,
  rv = 1863,
  rW = 1864,
  rw = 1865,
  rX = 1866,
  rx = 1867,
  rY = 1868,
  ry = 1869,
  rZ = 1870,
  rz = 1871,
  SA = 1872,
  Sa = 1873,
  SB = 1874,
  Sb = 1875,
  SC = 1876,
  Sc = 1877,
  SD = 1878,
  Sd = 1879,
  SE = 1880,
  Se = 1881,
  SF = 1882,
  Sf = 1883,
  SG = 1884,
  Sg = 1885,
  SH = 1886,
  Sh = 1887,
  SI = 1888,
  Si = 1889,
  SJ = 1890,
  Sj = 1891,
  SK = 1892,
  Sk = 1893,
  SL = 1894,
  Sl = 1895,
  SM = 1896,
  Sm = 1897,
  SN = 1898,
  Sn = 1899,
  SO = 1900,
  So = 1901,
  SP = 1902,
  Sp = 1903,
  SQ = 1904,
  Sq = 1905,
  SR = 1906,
  Sr = 1907,
  SS = 1908,
  Ss = 1909,
  ST = 1910,
  St = 1911,
  SU = 1912,
  Su = 1913,
  SV = 1914,
  Sv = 1915,
  SW = 1916,
  Sw = 1917,
  SX = 1918,
  Sx = 1919,
  SY = 1920,
  Sy = 1921,
  SZ = 1922,
  Sz = 1923,
  sA = 1924,
  sa = 1925,
  sB = 1926,
  sb = 1927,
  sC = 1928,
  sc = 1929,
  sD = 1930,
  sd = 1931,
  sE = 1932,
  se = 1933,
  sF = 1934,
  sf = 1935,
  sG = 1936,
  sg = 1937,
  sH = 1938,
  sh = 1939,
  sI = 1940,
  si = 1941,
  sJ = 1942,
  sj = 1943,
  sK = 1944,
  sk = 1945,
  sL = 1946,
  sl = 1947,
  sM = 1948,
  sm = 1949,
  sN = 1950,
  sn = 1951,
  sO = 1952,
  so = 1953,
  sP = 1954,
  sp = 1955,
  sQ = 1956,
  sq = 1957,
  sR = 1958,
  sr = 1959,
  sS = 1960,
  ss = 1961,
  sT = 1962,
  st = 1963,
  sU = 1964,
  su = 1965,
  sV = 1966,
  sv = 1967,
  sW = 1968,
  sw = 1969,
  sX = 1970,
  sx = 1971,
  sY = 1972,
  sy = 1973,
  sZ = 1974,
  sz = 1975,
  TA = 1976,
  Ta = 1977,
  TB = 1978,
  Tb = 1979,
  TC = 1980,
  Tc = 1981,
  TD = 1982,
  Td = 1983,
  TE = 1984,
  Te = 1985,
  TF = 1986,
  Tf = 1987,
  TG = 1988,
  Tg = 1989,
  TH = 1990,
  Th = 1991,
  TI = 1992,
  Ti = 1993,
  TJ = 1994,
  Tj = 1995,
  TK = 1996,
  Tk = 1997,
  TL = 1998,
  Tl = 1999,
  TM = 2000,
  Tm = 2001,
  TN = 2002,
  Tn = 2003,
  TO = 2004,
  To = 2005,
  TP = 2006,
  Tp = 2007,
  TQ = 2008,
  Tq = 2009,
  TR = 2010,
  Tr = 2011,
  TS = 2012,
  Ts = 2013,
  TT = 2014,
  Tt = 2015,
  TU = 2016,
  Tu = 2017,
  TV = 2018,
  Tv = 2019,
  TW = 2020,
  Tw = 2021,
  TX = 2022,
  Tx = 2023,
  TY = 2024,
  Ty = 2025,
  TZ = 2026,
  Tz = 2027,
  tA = 2028,
  ta = 2029,
  tB = 2030,
  tb = 2031,
  tC = 2032,
  tc = 2033,
  tD = 2034,
  td = 2035,
  tE = 2036,
  te = 2037,
  tF = 2038,
  tf = 2039,
  tG = 2040,
  tg = 2041,
  tH = 2042,
  th = 2043,
  tI = 2044,
  ti = 2045,
  tJ = 2046,
  tj = 2047,
  tK = 2048,
  tk = 2049,
  tL = 2050,
  tl = 2051,
  tM = 2052,
  tm = 2053,
  tN = 2054,
  tn = 2055,
  tO = 2056,
  to = 2057,
  tP = 2058,
  tp = 2059,
  tQ = 2060,
  tq = 2061,
  tR = 2062,
  tr = 2063,
  tS = 2064,
  ts = 2065,
  tT = 2066,
  tt = 2067,
  tU = 2068,
  tu = 2069,
  tV = 2070,
  tv = 2071,
  tW = 2072,
  tw = 2073,
  tX = 2074,
  tx = 2075,
  tY = 2076,
  ty = 2077,
  tZ = 2078,
  tz = 2079,
  UA = 2080,
  Ua = 2081,
  UB = 2082,
  Ub = 2083,
  UC = 2084,
  Uc = 2085,
  UD = 2086,
  Ud = 2087,
  UE = 2088,
  Ue = 2089,
  UF = 2090,
  Uf = 2091,
  UG = 2092,
  Ug = 2093,
  UH = 2094,
  Uh = 2095,
  UI = 2096,
  Ui = 2097,
  UJ = 2098,
  Uj = 2099,
  UK = 2100,
  Uk = 2101,
  UL = 2102,
  Ul = 2103,
  UM = 2104,
  Um = 2105,
  UN = 2106,
  Un = 2107,
  UO = 2108,
  Uo = 2109,
  UP = 2110,
  Up = 2111,
  UQ = 2112,
  Uq = 2113,
  UR = 2114,
  Ur = 2115,
  US = 2116,
  Us = 2117,
  UT = 2118,
  Ut = 2119,
  UU = 2120,
  Uu = 2121,
  UV = 2122,
  Uv = 2123,
  UW = 2124,
  Uw = 2125,
  UX = 2126,
  Ux = 2127,
  UY = 2128,
  Uy = 2129,
  UZ = 2130,
  Uz = 2131,
  uA = 2132,
  ua = 2133,
  uB = 2134,
  ub = 2135,
  uC = 2136,
  uc = 2137,
  uD = 2138,
  ud = 2139,
  uE = 2140,
  ue = 2141,
  uF = 2142,
  uf = 2143,
  uG = 2144,
  ug = 2145,
  uH = 2146,
  uh = 2147,
  uI = 2148,
  ui = 2149,
  uJ = 2150,
  uj = 2151,
  uK = 2152,
  uk = 2153,
  uL = 2154,
  ul = 2155,
  uM = 2156,
  um = 2157,
  uN = 2158,
  un = 2159,
  uO = 2160,
  uo = 2161,
  uP = 2162,
  up = 2163,
  uQ = 2164,
  uq = 2165,
  uR = 2166,
  ur = 2167,
  uS = 2168,
  us = 2169,
  uT = 2170,
  ut = 2171,
  uU = 2172,
  uu = 2173,
  uV = 2174,
  uv = 2175,
  uW = 2176,
  uw = 2177,
  uX = 2178,
  ux = 2179,
  uY = 2180,
  uy = 2181,
  uZ = 2182,
  uz = 2183,
  VA = 2184,
  Va = 2185,
  VB = 2186,
  Vb = 2187,
  VC = 2188,
  Vc = 2189,
  VD = 2190,
  Vd = 2191,
  VE = 2192,
  Ve = 2193,
  VF = 2194,
  Vf = 2195,
  VG = 2196,
  Vg = 2197,
  VH = 2198,
  Vh = 2199,
  VI = 2200,
  Vi = 2201,
  VJ = 2202,
  Vj = 2203,
  VK = 2204,
  Vk = 2205,
  VL = 2206,
  Vl = 2207,
  VM = 2208,
  Vm = 2209,
  VN = 2210,
  Vn = 2211,
  VO = 2212,
  Vo = 2213,
  VP = 2214,
  Vp = 2215,
  VQ = 2216,
  Vq = 2217,
  VR = 2218,
  Vr = 2219,
  VS = 2220,
  Vs = 2221,
  VT = 2222,
  Vt = 2223,
  VU = 2224,
  Vu = 2225,
  VV = 2226,
  Vv = 2227,
  VW = 2228,
  Vw = 2229,
  VX = 2230,
  Vx = 2231,
  VY = 2232,
  Vy = 2233,
  VZ = 2234,
  Vz = 2235,
  vA = 2236,
  va = 2237,
  vB = 2238,
  vb = 2239,
  vC = 2240,
  vc = 2241,
  vD = 2242,
  vd = 2243,
  vE = 2244,
  ve = 2245,
  vF = 2246,
  vf = 2247,
  vG = 2248,
  vg = 2249,
  vH = 2250,
  vh = 2251,
  vI = 2252,
  vi = 2253,
  vJ = 2254,
  vj = 2255,
  vK = 2256,
  vk = 2257,
  vL = 2258,
  vl = 2259,
  vM = 2260,
  vm = 2261,
  vN = 2262,
  vn = 2263,
  vO = 2264,
  vo = 2265,
  vP = 2266,
  vp = 2267,
  vQ = 2268,
  vq = 2269,
  vR = 2270,
  vr = 2271,
  vS = 2272,
  vs = 2273,
  vT = 2274,
  vt = 2275,
  vU = 2276,
  vu = 2277,
  vV = 2278,
  vv = 2279,
  vW = 2280,
  vw = 2281,
  vX = 2282,
  vx = 2283,
  vY = 2284,
  vy = 2285,
  vZ = 2286,
  vz = 2287,
  WA = 2288,
  Wa = 2289,
  WB = 2290,
  Wb = 2291,
  WC = 2292,
  Wc = 2293,
  WD = 2294,
  Wd = 2295,
  WE = 2296,
  We = 2297,
  WF = 2298,
  Wf = 2299,
  WG = 2300,
  Wg = 2301,
  WH = 2302,
  Wh = 2303,
  WI = 2304,
  Wi = 2305,
  WJ = 2306,
  Wj = 2307,
  WK = 2308,
  Wk = 2309,
  WL = 2310,
  Wl = 2311,
  WM = 2312,
  Wm = 2313,
  WN = 2314,
  Wn = 2315,
  WO = 2316,
  Wo = 2317,
  WP = 2318,
  Wp = 2319,
  WQ = 2320,
  Wq = 2321,
  WR = 2322,
  Wr = 2323,
  WS = 2324,
  Ws = 2325,
  WT = 2326,
  Wt = 2327,
  WU = 2328,
  Wu = 2329,
  WV = 2330,
  Wv = 2331,
  WW = 2332,
  Ww = 2333,
  WX = 2334,
  Wx = 2335,
  WY = 2336,
  Wy = 2337,
  WZ = 2338,
  Wz = 2339,
  wA = 2340,
  wa = 2341,
  wB = 2342,
  wb = 2343,
  wC = 2344,
  wc = 2345,
  wD = 2346,
  wd = 2347,
  wE = 2348,
  we = 2349,
  wF = 2350,
  wf = 2351,
  wG = 2352,
  wg = 2353,
  wH = 2354,
  wh = 2355,
  wI = 2356,
  wi = 2357,
  wJ = 2358,
  wj = 2359,
  wK = 2360,
  wk = 2361,
  wL = 2362,
  wl = 2363,
  wM = 2364,
  wm = 2365,
  wN = 2366,
  wn = 2367,
  wO = 2368,
  wo = 2369,
  wP = 2370,
  wp = 2371,
  wQ = 2372,
  wq = 2373,
  wR = 2374,
  wr = 2375,
  wS = 2376,
  ws = 2377,
  wT = 2378,
  wt = 2379,
  wU = 2380,
  wu = 2381,
  wV = 2382,
  wv = 2383,
  wW = 2384,
  ww = 2385,
  wX = 2386,
  wx = 2387,
  wY = 2388,
  wy = 2389,
  wZ = 2390,
  wz = 2391,
  XA = 2392,
  Xa = 2393,
  XB = 2394,
  Xb = 2395,
  XC = 2396,
  Xc = 2397,
  XD = 2398,
  Xd = 2399,
  XE = 2400,
  Xe = 2401,
  XF = 2402,
  Xf = 2403,
  XG = 2404,
  Xg = 2405,
  XH = 2406,
  Xh = 2407,
  XI = 2408,
  Xi = 2409,
  XJ = 2410,
  Xj = 2411,
  XK = 2412,
  Xk = 2413,
  XL = 2414,
  Xl = 2415,
  XM = 2416,
  Xm = 2417,
  XN = 2418,
  Xn = 2419,
  XO = 2420,
  Xo = 2421,
  XP = 2422,
  Xp = 2423,
  XQ = 2424,
  Xq = 2425,
  XR = 2426,
  Xr = 2427,
  XS = 2428,
  Xs = 2429,
  XT = 2430,
  Xt = 2431,
  XU = 2432,
  Xu = 2433,
  XV = 2434,
  Xv = 2435,
  XW = 2436,
  Xw = 2437,
  XX = 2438,
  Xx = 2439,
  XY = 2440,
  Xy = 2441,
  XZ = 2442,
  Xz = 2443,
  xA = 2444,
  xa = 2445,
  xB = 2446,
  xb = 2447,
  xC = 2448,
  xc = 2449,
  xD = 2450,
  xd = 2451,
  xE = 2452,
  xe = 2453,
  xF = 2454,
  xf = 2455,
  xG = 2456,
  xg = 2457,
  xH = 2458,
  xh = 2459,
  xI = 2460,
  xi = 2461,
  xJ = 2462,
  xj = 2463,
  xK = 2464,
  xk = 2465,
  xL = 2466,
  xl = 2467,
  xM = 2468,
  xm = 2469,
  xN = 2470,
  xn = 2471,
  xO = 2472,
  xo = 2473,
  xP = 2474,
  xp = 2475,
  xQ = 2476,
  xq = 2477,
  xR = 2478,
  xr = 2479,
  xS = 2480,
  xs = 2481,
  xT = 2482,
  xt = 2483,
  xU = 2484,
  xu = 2485,
  xV = 2486,
  xv = 2487,
  xW = 2488,
  xw = 2489,
  xX = 2490,
  xx = 2491,
  xY = 2492,
  xy = 2493,
  xZ = 2494,
  xz = 2495,
  YA = 2496,
  Ya = 2497,
  YB = 2498,
  Yb = 2499,
  YC = 2500,
  Yc = 2501,
  YD = 2502,
  Yd = 2503,
  YE = 2504,
  Ye = 2505,
  YF = 2506,
  Yf = 2507,
  YG = 2508,
  Yg = 2509,
  YH = 2510,
  Yh = 2511,
  YI = 2512,
  Yi = 2513,
  YJ = 2514,
  Yj = 2515,
  YK = 2516,
  Yk = 2517,
  YL = 2518,
  Yl = 2519,
  YM = 2520,
  Ym = 2521,
  YN = 2522,
  Yn = 2523,
  YO = 2524,
  Yo = 2525,
  YP = 2526,
  Yp = 2527,
  YQ = 2528,
  Yq = 2529,
  YR = 2530,
  Yr = 2531,
  YS = 2532,
  Ys = 2533,
  YT = 2534,
  Yt = 2535,
  YU = 2536,
  Yu = 2537,
  YV = 2538,
  Yv = 2539,
  YW = 2540,
  Yw = 2541,
  YX = 2542,
  Yx = 2543,
  YY = 2544,
  Yy = 2545,
  YZ = 2546,
  Yz = 2547,
  yA = 2548,
  ya = 2549,
  yB = 2550,
  yb = 2551,
  yC = 2552,
  yc = 2553,
  yD = 2554,
  yd = 2555,
  yE = 2556,
  ye = 2557,
  yF = 2558,
  yf = 2559,
  yG = 2560,
  yg = 2561,
  yH = 2562,
  yh = 2563,
  yI = 2564,
  yi = 2565,
  yJ = 2566,
  yj = 2567,
  yK = 2568,
  yk = 2569,
  yL = 2570,
  yl = 2571,
  yM = 2572,
  ym = 2573,
  yN = 2574,
  yn = 2575,
  yO = 2576,
  yo = 2577,
  yP = 2578,
  yp = 2579,
  yQ = 2580,
  yq = 2581,
  yR = 2582,
  yr = 2583,
  yS = 2584,
  ys = 2585,
  yT = 2586,
  yt = 2587,
  yU = 2588,
  yu = 2589,
  yV = 2590,
  yv = 2591,
  yW = 2592,
  yw = 2593,
  yX = 2594,
  yx = 2595,
  yY = 2596,
  yy = 2597,
  yZ = 2598,
  yz = 2599,
  ZA = 2600,
  Za = 2601,
  ZB = 2602,
  Zb = 2603,
  ZC = 2604,
  Zc = 2605,
  ZD = 2606,
  Zd = 2607,
  ZE = 2608,
  Ze = 2609,
  ZF = 2610,
  Zf = 2611,
  ZG = 2612,
  Zg = 2613,
  ZH = 2614,
  Zh = 2615,
  ZI = 2616,
  Zi = 2617,
  ZJ = 2618,
  Zj = 2619,
  ZK = 2620,
  Zk = 2621,
  ZL = 2622,
  Zl = 2623,
  ZM = 2624,
  Zm = 2625,
  ZN = 2626,
  Zn = 2627,
  ZO = 2628,
  Zo = 2629,
  ZP = 2630,
  Zp = 2631,
  ZQ = 2632,
  Zq = 2633,
  ZR = 2634,
  Zr = 2635,
  ZS = 2636,
  Zs = 2637,
  ZT = 2638,
  Zt = 2639,
  ZU = 2640,
  Zu = 2641,
  ZV = 2642,
  Zv = 2643,
  ZW = 2644,
  Zw = 2645,
  ZX = 2646,
  Zx = 2647,
  ZY = 2648,
  Zy = 2649,
  ZZ = 2650,
  Zz = 2651,
  zA = 2652,
  za = 2653,
  zB = 2654,
  zb = 2655,
  zC = 2656,
  zc = 2657,
  zD = 2658,
  zd = 2659,
  zE = 2660,
  ze = 2661,
  zF = 2662,
  zf = 2663,
  zG = 2664,
  zg = 2665,
  zH = 2666,
  zh = 2667,
  zI = 2668,
  zi = 2669,
  zJ = 2670,
  zj = 2671,
  zK = 2672,
  zk = 2673,
  zL = 2674,
  zl = 2675,
  zM = 2676,
  zm = 2677,
  zN = 2678,
  zn = 2679,
  zO = 2680,
  zo = 2681,
  zP = 2682,
  zp = 2683,
  zQ = 2684,
  zq = 2685,
  zR = 2686,
  zr = 2687,
  zS = 2688,
  zs = 2689,
  zT = 2690,
  zt = 2691,
  zU = 2692,
  zu = 2693,
  zV = 2694,
  zv = 2695,
  zW = 2696,
  zw = 2697,
  zX = 2698,
  zx = 2699,
  zY = 2700,
  zy = 2701,
  zZ = 2702,
  zz = 2703,
  aAA = 2704,
  aAa = 2705,
  aAB = 2706,
  aAb = 2707,
  aAC = 2708,
  aAc = 2709,
  aAD = 2710,
  aAd = 2711,
  aAE = 2712,
  aAe = 2713,
  aAF = 2714,
  aAf = 2715,
  aAG = 2716,
  aAg = 2717,
  aAH = 2718,
  aAh = 2719,
  aAI = 2720,
  aAi = 2721,
  aAJ = 2722,
  aAj = 2723,
  aAK = 2724,
  aAk = 2725,
  aAL = 2726,
  aAl = 2727,
  aAM = 2728,
  aAm = 2729,
  aAN = 2730,
  aAn = 2731,
  aAO = 2732,
  aAo = 2733,
  aAP = 2734,
  aAp = 2735,
  aAQ = 2736,
  aAq = 2737,
  aAR = 2738,
  aAr = 2739,
  aAS = 2740,
  aAs = 2741,
  aAT = 2742,
  aAt = 2743,
  aAU = 2744,
  aAu = 2745,
  aAV = 2746,
  aAv = 2747,
  aAW = 2748,
  aAw = 2749,
  aAX = 2750,
  aAx = 2751,
  aAY = 2752,
  aAy = 2753,
  aAZ = 2754,
  aAz = 2755,
  aaA = 2756,
  aaa = 2757,
  aaB = 2758,
  aab = 2759,
  aaC = 2760,
  aac = 2761,
  aaD = 2762,
  aad = 2763,
  aaE = 2764,
  aae = 2765,
  aaF = 2766,
  aaf = 2767,
  aaG = 2768,
  aag = 2769,
  aaH = 2770,
  aah = 2771,
  aaI = 2772,
  aai = 2773,
  aaJ = 2774,
  aaj = 2775,
  aaK = 2776,
  aak = 2777,
  aaL = 2778,
  aal = 2779,
  aaM = 2780,
  aam = 2781,
  aaN = 2782,
  aan = 2783,
  aaO = 2784,
  aao = 2785,
  aaP = 2786,
  aap = 2787,
  aaQ = 2788,
  aaq = 2789,
  aaR = 2790,
  aar = 2791,
  aaS = 2792,
  aas = 2793,
  aaT = 2794,
  aat = 2795,
  aaU = 2796,
  aau = 2797,
  aaV = 2798,
  aav = 2799,
  aaW = 2800,
  aaw = 2801,
  aaX = 2802,
  aax = 2803,
  aaY = 2804,
  aay = 2805,
  aaZ = 2806,
  aaz = 2807,
  aBA = 2808,
  aBa = 2809,
  aBB = 2810,
  aBb = 2811,
  aBC = 2812,
  aBc = 2813,
  aBD = 2814,
  aBd = 2815,
  aBE = 2816,
  aBe = 2817,
  aBF = 2818,
  aBf = 2819,
  aBG = 2820,
  aBg = 2821,
  aBH = 2822,
  aBh = 2823,
  aBI = 2824,
  aBi = 2825,
  aBJ = 2826,
  aBj = 2827,
  aBK = 2828,
  aBk = 2829,
  aBL = 2830,
  aBl = 2831,
  aBM = 2832,
  aBm = 2833,
  aBN = 2834,
  aBn = 2835,
  aBO = 2836,
  aBo = 2837,
  aBP = 2838,
  aBp = 2839,
  aBQ = 2840,
  aBq = 2841,
  aBR = 2842,
  aBr = 2843,
  aBS = 2844,
  aBs = 2845,
  aBT = 2846,
  aBt = 2847,
  aBU = 2848,
  aBu = 2849,
  aBV = 2850,
  aBv = 2851,
  aBW = 2852,
  aBw = 2853,
  aBX = 2854,
  aBx = 2855,
  aBY = 2856,
  aBy = 2857,
  aBZ = 2858,
  aBz = 2859,
  abA = 2860,
  aba = 2861,
  abB = 2862,
  abb = 2863,
  abC = 2864,
  abc = 2865,
  abD = 2866,
  abd = 2867,
  abE = 2868,
  abe = 2869,
  abF = 2870,
  abf = 2871,
  abG = 2872,
  abg = 2873,
  abH = 2874,
  abh = 2875,
  abI = 2876,
  abi = 2877,
  abJ = 2878,
  abj = 2879,
  abK = 2880,
  abk = 2881,
  abL = 2882,
  abl = 2883,
  abM = 2884,
  abm = 2885,
  abN = 2886,
  abn = 2887,
  abO = 2888,
  abo = 2889,
  abP = 2890,
  abp = 2891,
  abQ = 2892,
  abq = 2893,
  abR = 2894,
  abr = 2895,
  abS = 2896,
  abs = 2897,
  abT = 2898,
  abt = 2899,
  abU = 2900,
  abu = 2901,
  abV = 2902,
  abv = 2903,
  abW = 2904,
  abw = 2905,
  abX = 2906,
  abx = 2907,
  abY = 2908,
  aby = 2909,
  abZ = 2910,
  abz = 2911,
  aCA = 2912,
  aCa = 2913,
  aCB = 2914,
  aCb = 2915,
  aCC = 2916,
  aCc = 2917,
  aCD = 2918,
  aCd = 2919,
  aCE = 2920,
  aCe = 2921,
  aCF = 2922,
  aCf = 2923,
  aCG = 2924,
  aCg = 2925,
  aCH = 2926,
  aCh = 2927,
  aCI = 2928,
  aCi = 2929,
  aCJ = 2930,
  aCj = 2931,
  aCK = 2932,
  aCk = 2933,
  aCL = 2934,
  aCl = 2935,
  aCM = 2936,
  aCm = 2937,
  aCN = 2938,
  aCn = 2939,
  aCO = 2940,
  aCo = 2941,
  aCP = 2942,
  aCp = 2943,
  aCQ = 2944,
  aCq = 2945,
  aCR = 2946,
  aCr = 2947,
  aCS = 2948,
  aCs = 2949,
  aCT = 2950,
  aCt = 2951,
  aCU = 2952,
  aCu = 2953,
  aCV = 2954,
  aCv = 2955,
  aCW = 2956,
  aCw = 2957,
  aCX = 2958,
  aCx = 2959,
  aCY = 2960,
  aCy = 2961,
  aCZ = 2962,
  aCz = 2963,
  acA = 2964,
  aca = 2965,
  acB = 2966,
  acb = 2967,
  acC = 2968,
  acc = 2969,
  acD = 2970,
  acd = 2971,
  acE = 2972,
  ace = 2973,
  acF = 2974,
  acf = 2975,
  acG = 2976,
  acg = 2977,
  acH = 2978,
  ach = 2979,
  acI = 2980,
  aci = 2981,
  acJ = 2982,
  acj = 2983,
  acK = 2984,
  ack = 2985,
  acL = 2986,
  acl = 2987,
  acM = 2988,
  acm = 2989,
  acN = 2990,
  acn = 2991,
  acO = 2992,
  aco = 2993,
  acP = 2994,
  acp = 2995,
  acQ = 2996,
  acq = 2997,
  acR = 2998,
  acr = 2999,
  acS = 3000,
  acs = 3001,
  acT = 3002,
  act = 3003,
}

export enum Club {
  None = 0,
  Engineer = 1,
  CleanNClearing = 2,
  KnightsHospitaller = 3,
  IndeGEHENNA = 4,
  IndeMILLENNIUM = 5,
  IndeHyakkiyako = 6,
  IndeShanhaijing = 7,
  IndeTrinity = 8,
  FoodService = 9,
  Countermeasure = 10,
  BookClub = 11,
  MatsuriOffice = 12,
  GourmetClub = 13,
  HoukagoDessert = 14,
  RedwinterSecretary = 15,
  Schale = 16,
  TheSeminar = 17,
  AriusSqud = 18,
  Justice = 19,
  Fuuki = 20,
  Kohshinjo68 = 21,
  Meihuayuan = 22,
  SisterHood = 23,
  GameDev = 24,
  anzenkyoku = 25,
  RemedialClass = 26,
  SPTF = 27,
  TrinityVigilance = 28,
  Veritas = 29,
  TrainingClub = 30,
  Onmyobu = 31,
  Shugyobu = 32,
  Endanbou = 33,
  NinpoKenkyubu = 34,
  Class227 = 35,
  EmptyClub = 36,
  Emergentology = 37,
  RabbitPlatoon = 38,
  PandemoniumSociety = 39,
  HotSpringsDepartment = 40,
  TeaParty = 41,
  PublicPeaceBureau = 42,
  Genryumon = 43,
  BlackTortoisePromenade = 44,
  LaborParty = 45,
  KnowledgeLiberationFront = 46,
  Hyakkayouran = 47,
  ShinySparkleSociety = 48,
}

export type GroundVector3 = {
  X: number;
  Y: number;
  Z: number;
};

export type AcademyFavorScheduleExcelTable = {
  DataList: AcademyFavorScheduleExcel[];
};

export type AcademyFavorScheduleExcel = {
  Id: number;
  CharacterId: number;
  ScheduleGroupId: number;
  OrderInGroup: number;
  Location: string;
  LocalizeScenarioId: number;
  FavorRank: number;
  SecretStoneAmount: number;
  ScenarioSriptGroupId: number;
  RewardParcelType: (keyof typeof ParcelType)[];
  RewardParcelId: number[];
  RewardAmount: number[];
};

export type AcademyLocationExcelTable = {
  DataList: AcademyLocationExcel[];
};

export type AcademyLocationExcel = {
  Id: number;
  LocalizeEtcId: number;
  PrefabPath: string;
  IconImagePath: string;
  OpenCondition: (keyof typeof School)[];
  OpenConditionCount: number[];
  RewardParcelType: keyof typeof ParcelType;
  RewardParcelId: number;
  OpenTeacherRank: number;
};

export type AcademyLocationRankExcelTable = {
  DataList: AcademyLocationRankExcel[];
};

export type AcademyLocationRankExcel = {
  Rank: number;
  RankExp: number;
  TotalExp: number;
};

export type AcademyMessanger1ExcelTable = {
  DataList: AcademyMessanger1Excel[];
};

export type AcademyMessanger1Excel = {
  MessageGroupId: number;
  Id: number;
  CharacterId: number;
  MessageCondition: keyof typeof AcademyMessageConditions;
  ConditionValue: number;
  PreConditionGroupId: number;
  PreConditionFavorScheduleId: number;
  FavorScheduleId: number;
  NextGroupId: number;
  FeedbackTimeMillisec: number;
  MessageType: keyof typeof AcademyMessageTypes;
  ImagePath: string;
  MessageKR: string;
  MessageJP: string;
};

export type AcademyMessanger2ExcelTable = {
  DataList: AcademyMessanger2Excel[];
};

export type AcademyMessanger2Excel = {
  MessageGroupId: number;
  Id: number;
  CharacterId: number;
  MessageCondition: keyof typeof AcademyMessageConditions;
  ConditionValue: number;
  PreConditionGroupId: number;
  PreConditionFavorScheduleId: number;
  FavorScheduleId: number;
  NextGroupId: number;
  FeedbackTimeMillisec: number;
  MessageType: keyof typeof AcademyMessageTypes;
  ImagePath: string;
  MessageKR: string;
  MessageJP: string;
};

export type AcademyMessanger3ExcelTable = {
  DataList: AcademyMessanger3Excel[];
};

export type AcademyMessanger3Excel = {
  MessageGroupId: number;
  Id: number;
  CharacterId: number;
  MessageCondition: keyof typeof AcademyMessageConditions;
  ConditionValue: number;
  PreConditionGroupId: number;
  PreConditionFavorScheduleId: number;
  FavorScheduleId: number;
  NextGroupId: number;
  FeedbackTimeMillisec: number;
  MessageType: keyof typeof AcademyMessageTypes;
  ImagePath: string;
  MessageKR: string;
  MessageJP: string;
};

export type AcademyMessangerExcelTable = {
  DataList: AcademyMessangerExcel[];
};

export type AcademyMessangerExcel = {
  MessageGroupId: number;
  Id: number;
  CharacterId: number;
  MessageCondition: keyof typeof AcademyMessageConditions;
  ConditionValue: number;
  PreConditionGroupId: number;
  PreConditionFavorScheduleId: number;
  FavorScheduleId: number;
  NextGroupId: number;
  FeedbackTimeMillisec: number;
  MessageType: keyof typeof AcademyMessageTypes;
  ImagePath: string;
  MessageKR: string;
  MessageJP: string;
};

export type AcademyRewardExcelTable = {
  DataList: AcademyRewardExcel[];
};

export type AcademyRewardExcel = {
  Location: string;
  ScheduleGroupId: number;
  OrderInGroup: number;
  Id: number;
  ProgressTexture: string;
  LocalizeEtcId: number;
  LocationRank: number;
  FavorExp: number;
  SecretStoneAmount: number;
  SecretStoneProb: number;
  ExtraFavorExp: number;
  ExtraFavorExpProb: number;
  ExtraRewardParcelType: (keyof typeof ParcelType)[];
  ExtraRewardParcelId: number[];
  ExtraRewardAmount: number[];
  ExtraRewardProb: number[];
  IsExtraRewardDisplayed: boolean[];
  RewardParcelType: (keyof typeof ParcelType)[];
  RewardParcelId: number[];
  RewardAmount: number[];
};

export type AcademyTicketExcelTable = {
  DataList: AcademyTicketExcel[];
};

export type AcademyTicketExcel = {
  LocationRankSum: number;
  ScheduleTicktetMax: number;
};

export type AcademyZoneExcelTable = {
  DataList: AcademyZoneExcel[];
};

export type AcademyZoneExcel = {
  Id: number;
  LocationId: number;
  LocationRankForUnlock: number;
  LocalizeEtcId: number;
  StudentVisitProb: number[];
  RewardGroupId: number;
  Tags: (keyof typeof Tag)[];
};

export type AccountLevelExcelTable = {
  DataList: AccountLevelExcel[];
};

export type AccountLevelExcel = {
  Id: number;
  Level: number;
  Exp: number;
  APAutoChargeMax: number;
  NeedReportEvent: boolean;
};

export type AnimationBlendTable = {
  DataList: BlendData[];
};

export type BlendData = {
  Type: number;
  InfoList: BlendInfo[];
};

export type BlendInfo = {
  From: number;
  To: number;
  Blend: number;
};

export type AnimatorDataTable = {
  DataList: AnimatorData[];
};

export type AnimatorData = {
  DefaultStateName: string;
  Name: string;
  DataList: AniStateData[];
};

export type AniStateData = {
  StateName: string;
  StatePrefix: string;
  StateNameWithPrefix: string;
  Tag: string;
  SpeedParameterName: string;
  SpeedParamter: number;
  StateSpeed: number;
  ClipName: string;
  Length: number;
  FrameRate: number;
  IsLooping: boolean;
  Events: AniEventData[];
};

export type AniEventData = {
  Name: string;
  Time: number;
  IntParam: number;
  FloatParam: number;
  StringParam: string;
};

export type ArenaLevelSectionExcelTable = {
  DataList: ArenaLevelSectionExcel[];
};

export type ArenaLevelSectionExcel = {
  ArenaSeasonId: number;
  StartLevel: number;
  LastLevel: number;
  UserCount: number;
};

export type ArenaMapExcelTable = {
  DataList: ArenaMapExcel[];
};

export type ArenaMapExcel = {
  UniqueId: number;
  TerrainType: number;
  TerrainTypeLocalizeKey: string;
  ImagePath: string;
  GroundGroupId: number;
  GroundGroupNameLocalizeKey: string;
  StartRank: number;
  EndRank: number;
  GroundId: number;
};

export type ArenaNPCExcelTable = {
  DataList: ArenaNPCExcel[];
};

export type ArenaNPCExcel = {
  UniqueId: number;
  Rank: number;
  NPCAccountLevel: number;
  NPCLevel: number;
  NPCLevelDeviation: number;
  NPCStarGrade: number;
  UseTSS: boolean;
  ExceptionCharacterRarities: (keyof typeof Rarity)[];
  ExceptionMainCharacterIds: number[];
  ExceptionSupportCharacterIds: number[];
  ExceptionTSSIds: number[];
};

export type ArenaRewardExcelTable = {
  DataList: ArenaRewardExcel[];
};

export type ArenaRewardExcel = {
  UniqueId: number;
  ArenaRewardType: keyof typeof ArenaRewardType;
  RankStart: number;
  RankEnd: number;
  RankIconPath: string;
  RewardParcelType: (keyof typeof ParcelType)[];
  RewardParcelUniqueId: number[];
  RewardParcelUniqueName: string[];
  RewardParcelAmount: number[];
};

export type ArenaSeasonCloseRewardExcelTable = {
  DataList: ArenaSeasonCloseRewardExcel[];
};

export type ArenaSeasonCloseRewardExcel = {
  SeasonId: number;
  RankStart: number;
  RankEnd: number;
  RewardParcelType: (keyof typeof ParcelType)[];
  RewardParcelUniqueId: number[];
  RewardParcelUniqueName: string[];
  RewardParcelAmount: number[];
};

export type ArenaSeasonExcelTable = {
  DataList: ArenaSeasonExcel[];
};

export type ArenaSeasonExcel = {
  UniqueId: number;
  SeasonStartDate: string;
  SeasonEndDate: string;
  SeasonGroupLimit: number;
  PrevSeasonId: number;
};

export type AttendanceExcelTable = {
  DataList: AttendanceExcel[];
};

export type AttendanceExcel = {
  Id: number;
  Type: keyof typeof AttendanceType;
  CountdownPrefab: string;
  DisplayOrder: number;
  AccountType: keyof typeof AccountState;
  AccountLevelLimit: number;
  Title: string;
  InfomationLocalizeCode: string;
  CountRule: keyof typeof AttendanceCountRule;
  CountReset: keyof typeof AttendanceResetType;
  BookSize: number;
  StartDate: string;
  StartableEndDate: string;
  EndDate: string;
  ExpiryDate: number;
  MailType: keyof typeof MailType;
  DialogCategory: keyof typeof DialogCategory;
  TitleImagePath: string;
  DecorationImagePath: string;
};

export type AttendanceRewardExcelTable = {
  DataList: AttendanceRewardExcel[];
};

export type AttendanceRewardExcel = {
  AttendanceId: number;
  Day: number;
  RewardIcon: string;
  RewardParcelType: (keyof typeof ParcelType)[];
  RewardId: number[];
  RewardAmount: number[];
};

export type BattleLevelFactorExcelTable = {
  DataList: BattleLevelFactorExcel[];
};

export type BattleLevelFactorExcel = {
  LevelDiff: number;
  DamageRate: number;
};

export type BossExternalBTExcelTable = {
  DataList: BossExternalBTExcel[];
};

export type BossExternalBTExcel = {
  ExternalBTId: number;
  AIPhase: number;
  ExternalBTNodeType: keyof typeof ExternalBTNodeType;
  ExternalBTTrigger: keyof typeof ExternalBTTrigger;
  TriggerArgument: string;
  BehaviorRate: number;
  ExternalBehavior: keyof typeof ExternalBehavior;
  BehaviorArgument: string;
};

export type BossPhaseExcelTable = {
  DataList: BossPhaseExcel[];
};

export type BossPhaseExcel = {
  Id: number;
  AIPhase: number;
  NormalAttackSkillUniqueName: string;
  UseExSkill: boolean[];
};

export type BuffParticleExcelTable = {
  DataList: BuffParticleExcel[];
};

export type BuffParticleExcel = {
  UniqueId: number;
  UniqueName: string;
  BuffType: string;
  BuffName: string;
  ResourcePath: string;
};

export type BulletArmorDamageFactorExcelTable = {
  DataList: BulletArmorDamageFactorExcel[];
};

export type BulletArmorDamageFactorExcel = {
  DamageFactorGroupId: string;
  BulletType: keyof typeof BulletType;
  ArmorType: keyof typeof ArmorType;
  DamageRate: number;
  DamageAttribute: keyof typeof DamageAttribute;
  MinDamageRate: number;
  MaxDamageRate: number;
  ShowHighlightFloater: boolean;
};

export type CafeInfoExcelTable = {
  DataList: CafeInfoExcel[];
};

export type CafeInfoExcel = {
  CafeId: number;
  IsDefault: boolean;
  OpenConditionCafeId: keyof typeof OpenConditionContent;
  OpenConditionCafeInvite: keyof typeof OpenConditionContent;
};

export type CafeInteractionExcelTable = {
  DataList: CafeInteractionExcel[];
};

export type CafeInteractionExcel = {
  CharacterId: number;
  IgnoreIfUnobtained: boolean;
  IgnoreIfUnobtainedStartDate: string;
  IgnoreIfUnobtainedEndDate: string;
  BubbleType: (keyof typeof BubbleType)[];
  BubbleDuration: number[];
  FavorEmoticonRewardParcelType: keyof typeof ParcelType;
  FavorEmoticonRewardId: number;
  FavorEmoticonRewardAmount: number;
  CafeCharacterState: string[];
};

export type CafeProductionExcelTable = {
  DataList: CafeProductionExcel[];
};

export type CafeProductionExcel = {
  CafeId: number;
  Rank: number;
  CafeProductionParcelType: keyof typeof ParcelType;
  CafeProductionParcelId: number;
  ParcelProductionCoefficient: number;
  ParcelProductionCorrectionValue: number;
  ParcelStorageMax: number;
};

export type CafeRankExcelTable = {
  DataList: CafeRankExcel[];
};

export type CafeRankExcel = {
  CafeId: number;
  Rank: number;
  RecipeId: number;
  ComfortMax: number;
  TagCountMax: number;
  CharacterVisitMin: number;
  CharacterVisitMax: number;
  CafeVisitWeightBase: number;
  CafeVisitWeightTagBonusStep: number[];
  CafeVisitWeightTagBonus: number[];
};

export type CampaignChapterExcelTable = {
  DataList: CampaignChapterExcel[];
};

export type CampaignChapterExcel = {
  Id: number;
  Name: string;
  NormalImagePath: string;
  HardImagePath: string;
  Order: number;
  PreChapterId: number[];
  ChapterRewardId: number;
  ChapterHardRewardId: number;
  ChapterVeryHardRewardId: number;
  NormalCampaignStageId: number[];
  NormalExtraStageId: number[];
  HardCampaignStageId: number[];
  VeryHardCampaignStageId: number[];
  IsTacticSkip: boolean;
};

export type CampaignChapterRewardExcelTable = {
  DataList: CampaignChapterRewardExcel[];
};

export type CampaignChapterRewardExcel = {
  Id: number;
  CampaignChapterStar: number;
  ChapterRewardParcelType: (keyof typeof ParcelType)[];
  ChapterRewardId: number[];
  ChapterRewardAmount: number[];
};

export type CampaignStageExcelTable = {
  DataList: CampaignStageExcel[];
};

export type CampaignStageExcel = {
  Id: number;
  Deprecated: boolean;
  Name: string;
  StageNumber: string;
  CleardScenarioId: number;
  BattleDuration: number;
  StageEnterCostType: keyof typeof ParcelType;
  StageEnterCostId: number;
  StageEnterCostAmount: number;
  StageEnterEchelonCount: number;
  StarConditionTacticRankSCount: number;
  StarConditionTurnCount: number;
  EnterScenarioGroupId: number[];
  ClearScenarioGroupId: number[];
  StrategyMap: string;
  StrategyMapBG: string;
  CampaignStageRewardId: number;
  MaxTurn: number;
  StageTopography: keyof typeof StageTopography;
  RecommandLevel: number;
  BgmId: string;
  StrategyEnvironment: keyof typeof StrategyEnvironment;
  GroundId: number;
  StrategySkipGroundId: number;
  ContentType: keyof typeof ContentType;
  BGMId: number;
  FirstClearReportEventName: string;
  TacticRewardExp: number;
  FixedEchelonId: number;
  EchelonExtensionType: keyof typeof EchelonExtensionType;
};

export type CampaignStageRewardExcelTable = {
  DataList: CampaignStageRewardExcel[];
};

export type CampaignStageRewardExcel = {
  GroupId: number;
  RewardTag: keyof typeof RewardTag;
  StageRewardProb: number;
  StageRewardParcelType: keyof typeof ParcelType;
  StageRewardId: number;
  StageRewardAmount: number;
  IsDisplayed: boolean;
};

export type CampaignStrategyObjectExcelTable = {
  DataList: CampaignStrategyObjectExcel[];
};

export type CampaignStrategyObjectExcel = {
  Id: number;
  Key: number;
  Name: string;
  PrefabName: string;
  StrategyObjectType: keyof typeof StrategyObjectType;
  StrategyRewardParcelType: keyof typeof ParcelType;
  StrategyRewardID: number;
  StrategyRewardName: string;
  StrategyRewardAmount: number;
  StrategySightRange: number;
  PortalId: number;
  HealValue: number;
  SwithId: number;
  BuffId: number;
  Disposable: boolean;
};

export type CampaignUnitExcelTable = {
  DataList: CampaignUnitExcel[];
};

export type CampaignUnitExcel = {
  Id: number;
  Key: number;
  Name: string;
  PrefabName: string;
  StrategyPrefabName: string;
  EnterScenarioGroupId: number[];
  ClearScenarioGroupId: number[];
  GroundId: number;
  MoveRange: number;
  AIMoveType: keyof typeof StrategyAIType;
  Grade: keyof typeof HexaUnitGrade;
  EnvironmentType: keyof typeof TacticEnvironment;
  Scale: number;
  IsTacticSkip: boolean;
};

export type CharacterAcademyTagsExcelTable = {
  DataList: CharacterAcademyTagsExcel[];
};

export type CharacterAcademyTagsExcel = {
  Id: number;
  FavorTags: (keyof typeof Tag)[];
  FavorItemTags: (keyof typeof Tag)[];
  FavorItemUniqueTags: (keyof typeof Tag)[];
  ForbiddenTags: (keyof typeof Tag)[];
  ZoneWhiteListTags: (keyof typeof Tag)[];
};

export type CharacterAIExcelTable = {
  DataList: CharacterAIExcel[];
};

export type CharacterAIExcel = {
  Id: number;
  EngageType: keyof typeof EngageType;
  Positioning: keyof typeof PositioningType;
  CheckCanUseAutoSkill: boolean;
  DistanceReduceRatioObstaclePath: number;
  DistanceReduceObstaclePath: number;
  DistanceReduceRatioFormationPath: number;
  DistanceReduceFormationPath: number;
  MinimumPositionGap: number;
  CanUseObstacleOfKneelMotion: boolean;
  CanUseObstacleOfStandMotion: boolean;
  HasTargetSwitchingMotion: boolean;
};

export type CharacterCalculationLimitExcelTable = {
  DataList: CharacterCalculationLimitExcel[];
};

export type CharacterCalculationLimitExcel = {
  Id: number;
  TacticEntityType: keyof typeof TacticEntityType;
  CalculationValue: keyof typeof BattleCalculationStat;
  MinValue: number;
  MaxValue: number;
};

export type CharacterCombatSkinExcelTable = {
  DataList: CharacterCombatSkinExcel[];
};

export type CharacterCombatSkinExcel = {
  GroupId: string;
  UniqueId: number;
  ResourcePath: string;
};

export type CharacterDialogFieldExcelTable = {
  DataList: CharacterDialogFieldExcel[];
};

export type CharacterDialogFieldExcel = {
  GroupId: number;
  Phase: number;
  TargetIndex: number;
  DialogType: keyof typeof FieldDialogType;
  Duration: number;
  MotionName: string;
  IsInteractionDialog: boolean;
  HideUI: boolean;
  LocalizeKR: string;
  LocalizeJP: string;
};

export type CharacterExcelTable = {
  DataList: CharacterExcel[];
};

export type CharacterExcel = {
  Id: number;
  DevName: string;
  CostumeGroupId: number;
  IsPlayable: boolean;
  ProductionStep: keyof typeof ProductionStep;
  CollectionVisible: boolean;
  ReleaseDate: string;
  CollectionVisibleStartDate: string;
  CollectionVisibleEndDate: string;
  IsPlayableCharacter: boolean;
  LocalizeEtcId: number;
  Rarity: keyof typeof Rarity;
  IsNPC: boolean;
  TacticEntityType: keyof typeof TacticEntityType;
  CanSurvive: boolean;
  IsDummy: boolean;
  SubPartsCount: number;
  TacticRole: keyof typeof TacticRole;
  WeaponType: keyof typeof WeaponType;
  TacticRange: keyof typeof TacticRange;
  BulletType: keyof typeof BulletType;
  ArmorType: keyof typeof ArmorType;
  AimIKType: keyof typeof AimIKType;
  School: keyof typeof School;
  Club: keyof typeof Club;
  DefaultStarGrade: number;
  MaxStarGrade: number;
  StatLevelUpType: keyof typeof StatLevelUpType;
  SquadType: keyof typeof SquadType;
  Jumpable: boolean;
  PersonalityId: number;
  CharacterAIId: number;
  ExternalBTId: number;
  ScenarioCharacter: string;
  SpawnTemplateId: number;
  FavorLevelupType: number;
  EquipmentSlot: (keyof typeof EquipmentCategory)[];
  WeaponLocalizeId: number;
  DisplayEnemyInfo: boolean;
  BodyRadius: number;
  RandomEffectRadius: number;
  HPBarHide: boolean;
  HpBarHeight: number;
  HighlightFloaterHeight: number;
  EmojiOffsetX: number;
  EmojiOffsetY: number;
  MoveStartFrame: number;
  MoveEndFrame: number;
  JumpMotionFrame: number;
  AppearFrame: number;
  CanMove: boolean;
  CanFix: boolean;
  CanCrowdControl: boolean;
  CanBattleItemMove: boolean;
  IsAirUnit: boolean;
  AirUnitHeight: number;
  Tags: (keyof typeof Tag)[];
  SecretStoneItemId: number;
  SecretStoneItemAmount: number;
  CharacterPieceItemId: number;
  CharacterPieceItemAmount: number;
  CombineRecipeId: number;
};

export type CharacterGearExcelTable = {
  DataList: CharacterGearExcel[];
};

export type CharacterGearExcel = {
  Id: number;
  CharacterId: number;
  StatLevelUpType: keyof typeof StatLevelUpType;
  Tier: number;
  NextTierEquipment: number;
  RecipeId: number;
  OpenFavorLevel: number;
  MaxLevel: number;
  LearnSkillSlot: string;
  StatType: (keyof typeof EquipmentOptionType)[];
  MinStatValue: number[];
  MaxStatValue: number[];
  Icon: string;
  LocalizeEtcId: number;
  Tags: (keyof typeof Tag)[];
};

export type CharacterGearLevelExcelTable = {
  DataList: CharacterGearLevelExcel[];
};

export type CharacterGearLevelExcel = {
  Level: number;
  TierLevelExp: number[];
  TotalExp: number[];
};

export type CharacterIllustCoordinateExcelTable = {
  DataList: CharacterIllustCoordinateExcel[];
};

export type CharacterIllustCoordinateExcel = {
  Id: number;
  CharacterBodyCenterX: number;
  CharacterBodyCenterY: number;
  DefaultScale: number;
  MinScale: number;
  MaxScale: number;
};

export type CharacterLevelExcelTable = {
  DataList: CharacterLevelExcel[];
};

export type CharacterLevelExcel = {
  Level: number;
  Exp: number;
  TotalExp: number;
};

export type CharacterLevelStatFactorExcelTable = {
  DataList: CharacterLevelStatFactorExcel[];
};

export type CharacterLevelStatFactorExcel = {
  Level: number;
  CriticalFactor: number;
  StabilityFactor: number;
  DefenceFactor: number;
  AccuracyFactor: number;
};

export type CharacterSkillListExcelTable = {
  DataList: CharacterSkillListExcel[];
};

export type CharacterSkillListExcel = {
  CharacterSkillListGroupId: number;
  MinimumGradeCharacterWeapon: number;
  MinimumTierCharacterGear: number;
  FormIndex: number;
  IsRootMotion: boolean;
  IsMoveLeftRight: boolean;
  UseRandomAnimation: boolean;
  TSAInteractionId: number;
  NormalSkillGroupId: string[];
  NormalSkillTimeLineIndex: number[];
  ExSkillGroupId: string[];
  ExSkillTimeLineIndex: number[];
  PublicSkillGroupId: string[];
  PublicSkillTimeLineIndex: number[];
  PassiveSkillGroupId: string[];
  LeaderSkillGroupId: string[];
  ExtraPassiveSkillGroupId: string[];
  HiddenPassiveSkillGroupId: string[];
};

export type CharacterStatExcelTable = {
  DataList: CharacterStatExcel[];
};

export type CharacterStatExcel = {
  CharacterId: number;
  StabilityRate: number;
  StabilityPoint: number;
  AttackPower1: number;
  AttackPower100: number;
  MaxHP1: number;
  MaxHP100: number;
  DefensePower1: number;
  DefensePower100: number;
  HealPower1: number;
  HealPower100: number;
  DodgePoint: number;
  AccuracyPoint: number;
  CriticalPoint: number;
  CriticalResistPoint: number;
  CriticalDamageRate: number;
  CriticalDamageResistRate: number;
  BlockRate: number;
  HealEffectivenessRate: number;
  OppressionPower: number;
  OppressionResist: number;
  DefensePenetration1: number;
  DefensePenetration100: number;
  DefensePenetrationResist1: number;
  DefensePenetrationResist100: number;
  EnhanceExplosionRate: number;
  EnhancePierceRate: number;
  EnhanceMysticRate: number;
  EnhanceSonicRate: number;
  EnhanceSiegeRate: number;
  EnhanceNormalRate: number;
  EnhanceLightArmorRate: number;
  EnhanceHeavyArmorRate: number;
  EnhanceUnarmedRate: number;
  EnhanceElasticArmorRate: number;
  EnhanceStructureRate: number;
  EnhanceNormalArmorRate: number;
  ExtendBuffDuration: number;
  ExtendDebuffDuration: number;
  ExtendCrowdControlDuration: number;
  AmmoCount: number;
  AmmoCost: number;
  IgnoreDelayCount: number;
  NormalAttackSpeed: number;
  Range: number;
  InitialRangeRate: number;
  MoveSpeed: number;
  SightPoint: number;
  ActiveGauge: number;
  GroggyGauge: number;
  GroggyTime: number;
  StrategyMobility: number;
  ActionCount: number;
  StrategySightRange: number;
  DamageRatio: number;
  DamagedRatio: number;
  DamageRatio2Increase: number;
  DamageRatio2Decrease: number;
  DamagedRatio2Increase: number;
  DamagedRatio2Decrease: number;
  ExDamagedRatioIncrease: number;
  ExDamagedRatioDecrease: number;
  StreetBattleAdaptation: keyof typeof TerrainAdaptationStat;
  OutdoorBattleAdaptation: keyof typeof TerrainAdaptationStat;
  IndoorBattleAdaptation: keyof typeof TerrainAdaptationStat;
  RegenCost: number;
};

export type CharacterStatLimitExcelTable = {
  DataList: CharacterStatLimitExcel[];
};

export type CharacterStatLimitExcel = {
  Id: number;
  TacticEntityType: keyof typeof TacticEntityType;
  StatType: keyof typeof StatType;
  StatMinValue: number;
  StatMaxValue: number;
  StatRatioMinValue: number;
  StatRatioMaxValue: number;
};

export type CharacterStatsDetailExcelTable = {
  DataList: CharacterStatsDetailExcel[];
};

export type CharacterStatsDetailExcel = {
  Id: number;
  DetailShowStats: (keyof typeof StatType)[];
  IsStatsPercent: boolean[];
};

export type CharacterStatsTransExcelTable = {
  DataList: CharacterStatsTransExcel[];
};

export type CharacterStatsTransExcel = {
  TransSupportStats: keyof typeof StatType;
  EchelonExtensionType: keyof typeof EchelonExtensionType;
  TransSupportStatsFactor: number;
  StatTransType: keyof typeof StatTransType;
};

export type CharacterTranscendenceExcelTable = {
  DataList: CharacterTranscendenceExcel[];
};

export type CharacterTranscendenceExcel = {
  CharacterId: number;
  MaxFavorLevel: number[];
  StatBonusRateAttack: number[];
  StatBonusRateHP: number[];
  StatBonusRateHeal: number[];
  RecipeId: number[];
  SkillSlotA: string[];
  SkillSlotB: string[];
  MaxlevelStar: number[];
};

export type CharacterVictoryInteractionExcelTable = {
  DataList: CharacterVictoryInteractionExcel[];
};

export type CharacterVictoryInteractionExcel = {
  InteractionId: number;
  CostumeId01: number;
  PositionIndex01: number;
  VictoryStartAnimationPath01: string;
  VictoryEndAnimationPath01: string;
  CostumeId02: number;
  PositionIndex02: number;
  VictoryStartAnimationPath02: string;
  VictoryEndAnimationPath02: string;
  CostumeId03: number;
  PositionIndex03: number;
  VictoryStartAnimationPath03: string;
  VictoryEndAnimationPath03: string;
  CostumeId04: number;
  PositionIndex04: number;
  VictoryStartAnimationPath04: string;
  VictoryEndAnimationPath04: string;
  CostumeId05: number;
  PositionIndex05: number;
  VictoryStartAnimationPath05: string;
  VictoryEndAnimationPath05: string;
  CostumeId06: number;
  PositionIndex06: number;
  VictoryStartAnimationPath06: string;
  VictoryEndAnimationPath06: string;
};

export type CharacterWeaponExcelTable = {
  DataList: CharacterWeaponExcel[];
};

export type CharacterWeaponExcel = {
  Id: number;
  ImagePath: string;
  SetRecipe: number;
  StatLevelUpType: keyof typeof StatLevelUpType;
  AttackPower: number;
  AttackPower100: number;
  MaxHP: number;
  MaxHP100: number;
  HealPower: number;
  HealPower100: number;
  Unlock: boolean[];
  RecipeId: number[];
  MaxLevel: number[];
  LearnSkillSlot: string[];
  StatType: (keyof typeof EquipmentOptionType)[];
  StatValue: number[];
};

export type CharacterWeaponExpBonusExcelTable = {
  DataList: CharacterWeaponExpBonusExcel[];
};

export type CharacterWeaponExpBonusExcel = {
  WeaponType: keyof typeof WeaponType;
  WeaponExpGrowthA: number;
  WeaponExpGrowthB: number;
  WeaponExpGrowthC: number;
  WeaponExpGrowthZ: number;
};

export type CharacterWeaponLevelExcelTable = {
  DataList: CharacterWeaponLevelExcel[];
};

export type CharacterWeaponLevelExcel = {
  Level: number;
  Exp: number;
  TotalExp: number;
};

export type ClanAssistSlotExcelTable = {
  DataList: ClanAssistSlotExcel[];
};

export type ClanAssistSlotExcel = {
  SlotId: number;
  EchelonType: keyof typeof EchelonType;
  SlotNumber: number;
  AssistTermRewardPeriodFromSec: number;
  AssistRewardLimit: number;
  AssistRentRewardDailyMaxCount: number;
  AssistRentalFeeAmount: number;
};

export type ClanRewardExcelTable = {
  DataList: ClanRewardExcel[];
};

export type ClanRewardExcel = {
  ClanRewardType: keyof typeof ClanRewardType;
  EchelonType: keyof typeof EchelonType;
  RewardParcelType: keyof typeof ParcelType;
  RewardParcelId: number;
  RewardParcelAmount: number;
};

export type ClearDeckRuleExcelTable = {
  DataList: ClearDeckRuleExcel[];
};

export type ClearDeckRuleExcel = {
  ContentType: keyof typeof ContentType;
  SizeLimit: number;
};

export type ConquestCalculateExcelTable = {
  DataList: ConquestCalculateExcel[];
};

export type ConquestCalculateExcel = {
  EventContentId: number;
  CalculateConditionParcelType: keyof typeof ParcelType;
  CalculateConditionParcelUniqueId: number;
  CalculateConditionParcelAmount: number;
};

export type ConquestCameraSettingExcelTable = {
  DataList: ConquestCameraSettingExcel[];
};

export type ConquestCameraSettingExcel = {
  Id: number;
  ConquestMapBoundaryOffsetLeft: number;
  ConquestMapBoundaryOffsetRight: number;
  ConquestMapBoundaryOffsetTop: number;
  ConquestMapBoundaryOffsetBottom: number;
  ConquestMapCenterOffsetX: number;
  ConquestMapCenterOffsetY: number;
  CameraAngle: number;
  CameraZoomMax: number;
  CameraZoomMin: number;
  CameraZoomDefault: number;
};

export type ConquestErosionExcelTable = {
  DataList: ConquestErosionExcel[];
};

export type ConquestErosionExcel = {
  EventContentId: number;
  Id: number;
  ErosionType: keyof typeof ConquestErosionType;
  Phase: number;
  PhaseAlarm: boolean;
  StepIndex: number;
  PhaseStartConditionType: (keyof typeof ConquestConditionType)[];
  PhaseStartConditionParameter: string[];
  PhaseBeforeExposeConditionType: (keyof typeof ConquestConditionType)[];
  PhaseBeforeExposeConditionParameter: string[];
  ErosionBattleConditionParcelType: keyof typeof ParcelType;
  ErosionBattleConditionParcelUniqueId: number;
  ErosionBattleConditionParcelAmount: number;
  ConquestRewardId: number;
};

export type ConquestErosionUnitExcelTable = {
  DataList: ConquestErosionUnitExcel[];
};

export type ConquestErosionUnitExcel = {
  TilePrefabId: number;
  MassErosionUnitId: number;
  MassErosionUnitRotationY: number;
  IndividualErosionUnitId: number;
  IndividualErosionUnitRotationY: number;
};

export type ConquestEventExcelTable = {
  DataList: ConquestEventExcel[];
};

export type ConquestEventExcel = {
  EventContentId: number;
  MainStoryEventContentId: number;
  ConquestEventType: keyof typeof ConquestEventType;
  UseErosion: boolean;
  UseUnexpectedEvent: boolean;
  UseCalculate: boolean;
  UseConquestObject: boolean;
  EvnetMapGoalLocalize: string;
  EvnetMapNameLocalize: string;
  MapEnterScenarioGroupId: number;
  EvnetScenarioBG: string;
  ManageUnitChange: number;
  AssistCount: number;
  PlayTimeLimitInSeconds: number;
  AnimationUnitAmountMin: number;
  AnimationUnitAmountMax: number;
  AnimationUnitDelay: number;
  LocalizeUnexpected: string;
  LocalizeErosions: string;
  LocalizeStep: string;
  LocalizeTile: string;
  LocalizeMapInfo: string;
  LocalizeManage: string;
  LocalizeUpgrade: string;
  LocalizeTreasureBox: string;
  IndividualErosionDailyCount: number;
};

export type ConquestGroupBonusExcelTable = {
  DataList: ConquestGroupBonusExcel[];
};

export type ConquestGroupBonusExcel = {
  ConquestBonusId: number;
  School: (keyof typeof School)[];
  RecommandLocalizeEtcId: number;
  BonusParcelType: (keyof typeof ParcelType)[];
  BonusId: number[];
  BonusCharacterCount1: number[];
  BonusPercentage1: number[];
  BonusCharacterCount2: number[];
  BonusPercentage2: number[];
  BonusCharacterCount3: number[];
  BonusPercentage3: number[];
};

export type ConquestGroupBuffExcelTable = {
  DataList: ConquestGroupBuffExcel[];
};

export type ConquestGroupBuffExcel = {
  ConquestBuffId: number;
  School: (keyof typeof School)[];
  RecommandLocalizeEtcId: number;
  SkillGroupId: string;
};

export type ConquestMapExcelTable = {
  DataList: ConquestMapExcel[];
};

export type ConquestMapExcel = {
  EventContentId: number;
  DevName: string;
  MapDifficulty: keyof typeof StageDifficulty;
  StepIndex: number;
  ConquestMap: string;
  StepEnterScenarioGroupId: number;
  StepOpenConditionType: (keyof typeof ConquestConditionType)[];
  StepOpenConditionParameter: string[];
  MapGoalLocalize: string;
  StepGoalLocalize: string;
  StepNameLocalize: string;
  ConquestMapBG: string;
  CameraSettingId: number;
};

export type ConquestObjectExcelTable = {
  DataList: ConquestObjectExcel[];
};

export type ConquestObjectExcel = {
  Id: number;
  EventContentId: number;
  ConquestObjectType: keyof typeof ConquestObjectType;
  Key: number;
  Name: string;
  PrefabName: string;
  ConquestRewardParcelType: keyof typeof ParcelType;
  ConquestRewardID: number;
  ConquestRewardAmount: number;
  Disposable: boolean;
  StepIndex: number;
  StepObjectCount: number;
};

export type ConquestPlayGuideExcelTable = {
  DataList: ConquestPlayGuideExcel[];
};

export type ConquestPlayGuideExcel = {
  Id: number;
  EventContentId: number;
  DisplayOrder: number;
  GuideTitle: string;
  GuideImagePath: string;
  GuideText: string;
};

export type ConquestProgressResourceExcelTable = {
  DataList: ConquestProgressResourceExcel[];
};

export type ConquestProgressResourceExcel = {
  Id: number;
  EventContentId: number;
  Group: keyof typeof ConquestProgressType;
  ProgressResource: string;
  VoiceId: number[];
  ProgressLocalizeCode: string;
};

export type ConquestRewardExcelTable = {
  DataList: ConquestRewardExcel[];
};

export type ConquestRewardExcel = {
  GroupId: number;
  RewardTag: keyof typeof RewardTag;
  RewardProb: number;
  RewardParcelType: keyof typeof ParcelType;
  RewardId: number;
  RewardAmount: number;
  IsDisplayed: boolean;
};

export type ConquestStepExcelTable = {
  DataList: ConquestStepExcel[];
};

export type ConquestStepExcel = {
  EventContentId: number;
  MapDifficulty: keyof typeof StageDifficulty;
  Step: number;
  StepGoalLocalize: string;
  StepEnterScenarioGroupId: number;
  StepEnterItemType: keyof typeof ParcelType;
  StepEnterItemUniqueId: number;
  StepEnterItemAmount: number;
  UnexpectedEventUnitId: number[];
  UnexpectedEventPrefab: string;
  TreasureBoxObjectId: number;
  TreasureBoxCountPerStepOpen: number;
};

export type ConquestTileExcelTable = {
  DataList: ConquestTileExcel[];
};

export type ConquestTileExcel = {
  Id: number;
  Name: string;
  EventId: number;
  Step: number;
  PrefabName: string;
  TileNameLocalize: string;
  TileImageName: string;
  Playable: boolean;
  TileType: keyof typeof ConquestTileType;
  NotMapFog: boolean;
  GroupBonusId: number;
  ConquestCostType: keyof typeof ParcelType;
  ConquestCostId: number;
  ConquestCostAmount: number;
  ManageCostType: keyof typeof ParcelType;
  ManageCostId: number;
  ManageCostAmount: number;
  ConquestRewardId: number;
  MassErosionId: number;
  Upgrade2CostType: keyof typeof ParcelType;
  Upgrade2CostId: number;
  Upgrade2CostAmount: number;
  Upgrade3CostType: keyof typeof ParcelType;
  Upgrade3CostId: number;
  Upgrade3CostAmount: number;
};

export type ConquestUnexpectedEventExcelTable = {
  DataList: ConquestUnexpectedEventExcel[];
};

export type ConquestUnexpectedEventExcel = {
  EventContentId: number;
  UnexpectedEventConditionType: keyof typeof ParcelType;
  UnexpectedEventConditionUniqueId: number;
  UnexpectedEventConditionAmount: number;
  UnexpectedEventOccurDailyLimitCount: number;
  UnitCountPerStep: number;
  UnexpectedEventPrefab: string[];
  UnexpectedEventUnitId: number[];
};

export type ConquestUnitExcelTable = {
  DataList: ConquestUnitExcel[];
};

export type ConquestUnitExcel = {
  Id: number;
  Key: number;
  Name: string;
  PrefabName: string;
  StrategyPrefabName: string;
  Scale: number;
  ShieldEffectScale: number;
  UnitFxPrefabName: string;
  PointAnimation: string;
  EnemyType: keyof typeof ConquestEnemyType;
  Team: keyof typeof ConquestTeamType;
  UnitGroup: number;
  PrevUnitGroup: number;
  BattleDuration: number;
  GroundId: number;
  StarGoal: (keyof typeof StarGoalType)[];
  StarGoalAmount: number[];
  GroupBuffId: number;
  StageEnterCostType: keyof typeof ParcelType;
  StageEnterCostId: number;
  StageEnterCostAmount: number;
  ManageEchelonStageEnterCostType: keyof typeof ParcelType;
  ManageEchelonStageEnterCostId: number;
  ManageEchelonStageEnterCostAmount: number;
  EnterScenarioGroupId: number;
  ClearScenarioGroupId: number;
  ConquestRewardId: number;
  StageTopography: keyof typeof StageTopography;
  RecommandLevel: number;
  TacticRewardExp: number;
  FixedEchelonId: number;
  EchelonExtensionType: keyof typeof EchelonExtensionType;
};

export type ConstArenaExcelTable = {
  DataList: ConstArenaExcel[];
};

export type ConstArenaExcel = {
  AttackCoolTime: number;
  BattleDuration: number;
  DefenseCoolTime: number;
  TSSStartCoolTime: number;
  EndAlarm: number;
  TimeRewardMaxAmount: number;
  EnterCostType: keyof typeof ParcelType;
  EnterCostId: number;
  TicketCost: number;
  DailyRewardResetTime: string;
  OpenScenarioId: string;
  CharacterSlotHideRank: number[];
  MapSlotHideRank: number;
  RelativeOpponentRankStart: number[];
  RelativeOpponentRankEnd: number[];
  ModifiedStatType: (keyof typeof StatType)[];
  StatMulFactor: number[];
  StatSumFactor: number[];
  NPCName: string[];
  NPCMainCharacterCount: number;
  NPCSupportCharacterCount: number;
  NPCCharacterSkillLevel: number;
  TimeSpanInDaysForBattleHistory: number;
  HiddenCharacterImagePath: string;
  DefenseVictoryRewardMaxCount: number;
  TopRankerCountLimit: number;
  AutoRefreshIntervalMilliSeconds: number;
  EchelonSettingIntervalMilliSeconds: number;
  SkipAllowedTimeMilliSeconds: number;
  ShowSeasonChangeInfoStartTime: string;
  ShowSeasonChangeInfoEndTime: string;
  ShowSeasonId: number;
};

export type ConstAudioExcelTable = {
  DataList: ConstAudioExcel[];
};

export type ConstAudioExcel = {
  DefaultSnapShotName: string;
  BattleSnapShotName: string;
  RaidSnapShotName: string;
  ExSkillCutInSnapShotName: string;
};

export type ConstCombatExcelTable = {
  DataList: ConstCombatExcel[];
};

export type ConstCombatExcel = {
  SkillHandCount: number;
  DyingTime: number;
  BuffIconBlinkTime: number;
  ShowBufficonEXSkill: boolean;
  ShowBufficonPassiveSkill: boolean;
  ShowBufficonExtraPassiveSkill: boolean;
  ShowBufficonLeaderSkill: boolean;
  ShowBufficonGroundPassiveSkill: boolean;
  SuppliesConditionStringId: string;
  PublicSpeechBubbleOffsetX: number;
  PublicSpeechBubbleOffsetY: number;
  PublicSpeechBubbleOffsetZ: number;
  ShowRaidListCount: number;
  MaxRaidTicketCount: number;
  MaxRaidBossSkillSlot: number;
  EngageTimelinePath: string;
  EngageWithSupporterTimelinePath: string;
  VictoryTimelinePath: string;
  TimeLimitAlarm: number;
  EchelonMaxCommonCost: number;
  EchelonInitCommonCost: number;
  SkillSlotCoolTime: number;
  EnemyRegenCost: number;
  ChampionRegenCost: number;
  PlayerRegenCostDelay: number;
  CrowdControlFactor: number;
  RaidOpenScenarioId: string;
  EliminateRaidOpenScenarioId: string;
  DefenceConstA: number;
  DefenceConstB: number;
  DefenceConstC: number;
  DefenceConstD: number;
  AccuracyConstA: number;
  AccuracyConstB: number;
  AccuracyConstC: number;
  AccuracyConstD: number;
  CriticalConstA: number;
  CriticalConstB: number;
  CriticalConstC: number;
  CriticalConstD: number;
  MaxGroupBuffLevel: number;
  EmojiDefaultTime: number;
  TimeLineActionRotateSpeed: number;
  BodyRotateSpeed: number;
  NormalTimeScale: number;
  FastTimeScale: number;
  BulletTimeScale: number;
  UIDisplayDelayAfterSkillCutIn: number;
  UseInitialRangeForCoverMove: boolean;
  SlowTimeScale: number;
  AimIKMinDegree: number;
  AimIKMaxDegree: number;
  MinimumClearTime: number;
  MinimumClearLevelGap: number;
  CheckCheaterMaxUseCostNonArena: number;
  CheckCheaterMaxUseCostArena: number;
  AllowedMaxTimeScale: number;
  RandomAnimationOutput: number;
  SummonedTeleportDistance: number;
  ArenaMinimumClearTime: number;
  WORLDBOSSBATTLELITTLE: number;
  WORLDBOSSBATTLEMIDDLE: number;
  WORLDBOSSBATTLEHIGH: number;
  WORLDBOSSBATTLEVERYHIGH: number;
  WorldRaidAutoSyncTermSecond: number;
  WorldRaidBossHpDecreaseTerm: number;
  WorldRaidBossParcelReactionDelay: number;
  RaidRankingJumpMinimumWaitingTime: number;
  EffectTeleportDistance: number;
  AuraExitThresholdMargin: number;
  TSAInteractionDamageFactor: number;
  VictoryInteractionRate: number;
  EchelonExtensionEngageTimelinePath: string;
  EchelonExtensionEngageWithSupporterTimelinePath: string;
  EchelonExtensionVictoryTimelinePath: string;
  EchelonExtensionEchelonMaxCommonCost: number;
  EchelonExtensionEchelonInitCommonCost: number;
  EchelonExtensionCostRegenRatio: number;
  CheckCheaterMaxUseCostMultiFloorRaid: number;
};

export type ConstCommonExcelTable = {
  DataList: ConstCommonExcel[];
};

export type ConstCommonExcel = {
  CampaignMainStageMaxRank: number;
  CampaignMainStageBestRecord: number;
  HardAdventurePlayCountRecoverDailyNumber: number;
  HardStageCount: number;
  TacticRankClearTime: number;
  BaseTimeScale: number;
  GachaPercentage: number;
  AcademyFavorZoneId: number;
  CafePresetSlotCount: number;
  CafeMonologueIntervalMillisec: number;
  CafeMonologueDefaultDuration: number;
  CafeBubbleIdleDurationMilliSec: number;
  FindGiftTimeLimit: number;
  CafeAutoChargePeriodInMsc: number;
  CafeProductionDecimalPosition: number;
  CafeSetGroupApplyCount: number;
  WeekDungeonFindGiftRewardLimitCount: number;
  StageFailedCurrencyRefundRate: number;
  EnterDeposit: number;
  AccountMaxLevel: number;
  MainSquadExpBonus: number;
  SupportSquadExpBonus: number;
  AccountExpRatio: number;
  MissionToastLifeTime: number;
  ExpItemInsertLimit: number;
  ExpItemInsertAccelTime: number;
  CharacterLvUpCoefficient: number;
  EquipmentLvUpCoefficient: number;
  ExpEquipInsertLimit: number;
  EquipLvUpCoefficient: number;
  NicknameLength: number;
  CraftDuration: number[];
  CraftLimitTime: number;
  ShiftingCraftDuration: number[];
  ShiftingCraftTicketConsumeAmount: number;
  ShiftingCraftSlotMaxCapacity: number;
  CraftTicketItemUniqueId: number;
  CraftTicketConsumeAmount: number;
  AcademyEnterCostType: keyof typeof ParcelType;
  AcademyEnterCostId: number;
  AcademyTicketCost: number;
  MassangerMessageExpireDay: number;
  CraftLeafNodeGenerateLv1Count: number;
  CraftLeafNodeGenerateLv2Count: number;
  TutorialGachaShopId: number;
  BeforehandGachaShopId: number;
  TutorialGachaGoodsId: number;
  EquipmentSlotOpenLevel: number[];
  ScenarioAutoDelayMillisec: number;
  JoinOrCreateClanCoolTimeFromHour: number;
  ClanMaxMember: number;
  ClanSearchResultCount: number;
  ClanMaxApplicant: number;
  ClanRejoinCoolTimeFromSecond: number;
  ClanWordBalloonMaxCharacter: number;
  CallNameRenameCoolTimeFromHour: number;
  CallNameMinimumLength: number;
  CallNameMaximumLength: number;
  LobbyToScreenModeWaitTime: number;
  ScreenshotToLobbyButtonHideDelay: number;
  PrologueScenarioID01: number;
  PrologueScenarioID02: number;
  TutorialHardStage11: number;
  TutorialSpeedButtonStage: number;
  TutorialCharacterDefaultCount: number;
  TutorialShopCategoryType: keyof typeof ShopCategoryType;
  AdventureStrategyPlayTimeLimitInSeconds: number;
  WeekDungoenTacticPlayTimeLimitInSeconds: number;
  RaidTacticPlayTimeLimitInSeconds: number;
  RaidOpponentListAmount: number;
  CraftBaseGoldRequired: number[];
  PostExpiredDayAttendance: number;
  PostExpiredDayInventoryOverflow: number;
  PostExpiredDayGameManager: number;
  UILabelCharacterWrap: string;
  RequestTimeOut: number;
  MailStorageSoftCap: number;
  MailStorageHardCap: number;
  ClearDeckStorageSize: number;
  ClearDeckNoStarViewCount: number;
  ClearDeck1StarViewCount: number;
  ClearDeck2StarViewCount: number;
  ClearDeck3StarViewCount: number;
  ExSkillLevelMax: number;
  PublicSkillLevelMax: number;
  PassiveSkillLevelMax: number;
  ExtraPassiveSkillLevelMax: number;
  AccountCommentMaxLength: number;
  CafeSummonCoolTimeFromHour: number;
  LimitedStageDailyClearCount: number;
  LimitedStageEntryTimeLimit: number;
  LimitedStageEntryTimeBuffer: number;
  LimitedStagePointAmount: number;
  LimitedStagePointPerApMin: number;
  LimitedStagePointPerApMax: number;
  AccountLinkReward: number;
  MonthlyProductCheckDays: number;
  WeaponLvUpCoefficient: number;
  ShowRaidMyListCount: number;
  MaxLevelExpMasterCoinRatio: number;
  RaidEnterCostType: keyof typeof ParcelType;
  RaidEnterCostId: number;
  RaidTicketCost: number;
  TimeAttackDungeonScenarioId: string;
  TimeAttackDungoenPlayCountPerTicket: number;
  TimeAttackDungeonEnterCostType: keyof typeof ParcelType;
  TimeAttackDungeonEnterCostId: number;
  TimeAttackDungeonEnterCost: number;
  ClanLeaderTransferLastLoginLimit: number;
  MonthlyProductRepurchasePopupLimit: number;
  CommonFavorItemTags: (keyof typeof Tag)[];
  MaxApMasterCoinPerWeek: number;
  CraftOpenExpTier1: number;
  CraftOpenExpTier2: number;
  CraftOpenExpTier3: number;
  CharacterEquipmentGearSlot: number;
  BirthDayDDay: number;
  RecommendedFriendsLvDifferenceLimit: number;
  DDosDetectCount: number;
  DDosCheckIntervalInSeconds: number;
  MaxFriendsCount: number;
  MaxFriendsRequest: number;
  FriendsSearchRequestCount: number;
  FriendsMaxApplicant: number;
  IdCardDefaultCharacterId: number;
  IdCardDefaultBgId: number;
  WorldRaidGemEnterCost: number;
  WorldRaidGemEnterAmout: number;
  FriendIdCardCommentMaxLength: number;
  FormationPresetNumberOfEchelonTab: number;
  FormationPresetNumberOfEchelon: number;
  FormationPresetRecentNumberOfEchelon: number;
  FormationPresetEchelonTabTextLength: number;
  FormationPresetEchelonSlotTextLength: number;
  CharProfileRowIntervalKr: number;
  CharProfileRowIntervalJp: number;
  CharProfilePopupRowIntervalKr: number;
  CharProfilePopupRowIntervalJp: number;
  BeforehandGachaCount: number;
  BeforehandGachaGroupId: number;
  RenewalDisplayOrderDay: number;
  EmblemDefaultId: number;
  BirthdayMailStartDate: string;
  BirthdayMailRemainDate: number;
  BirthdayMailParcelType: keyof typeof ParcelType;
  BirthdayMailParcelId: number;
  BirthdayMailParcelAmount: number;
  ClearDeckAverageDeckCount: number;
  ClearDeckWorldRaidSaveConditionCoefficient: number;
  ClearDeckShowCount: number;
  CharacterMaxLevel: number;
  PotentialBonusStatMaxLevelMaxHP: number;
  PotentialBonusStatMaxLevelAttackPower: number;
  PotentialBonusStatMaxLevelHealPower: number;
  PotentialOpenConditionCharacterLevel: number;
};

export type ConstConquestExcelTable = {
  DataList: ConstConquestExcel[];
};

export type ConstConquestExcel = {
  ManageUnitChange: number;
  AssistCount: number;
  PlayTimeLimitInSeconds: number;
  AnimationUnitAmountMin: number;
  AnimationUnitAmountMax: number;
  AnimationUnitDelay: number;
};

export type ConstEventCommonExcelTable = {
  DataList: ConstEventCommonExcel[];
};

export type ConstEventCommonExcel = {
  EventContentHardStageCount: number;
  EventStrategyPlayTimeLimitInSeconds: number;
  SubEventChangeLimitSeconds: number;
  SubEventInstantClear: boolean;
  CardShopProbWeightCount: number;
  CardShopProbWeightRarity: keyof typeof Rarity;
  MeetupScenarioReplayResource: string;
  MeetupScenarioReplayTitleLocalize: string;
  SpecialOperactionCollectionGroupId: number;
  TreasureNormalVariationAmount: number;
  TreasureLoopVariationAmount: number;
  TreasureLimitVariationLoopCount: number;
  TreasureLimitVariationClearLoopCount: number;
};

export type ConstFieldExcelTable = {
  DataList: ConstFieldExcel[];
};

export type ConstFieldExcel = {
  DialogSmoothTime: number;
  TalkDialogDurationDefault: number;
  ThinkDialogDurationDefault: number;
  IdleThinkDelayMin: number;
  IdleThinkDelayMax: number;
  ExclaimDurationDefault: number;
  QuestionDurationDefault: number;
  UpsetDurationDefault: number;
  SurpriseDurationDefault: number;
  BulbDurationDefault: number;
  HeartDurationDefault: number;
  SweatDurationDefault: number;
  AngryDurationDefault: number;
  MusicDurationDefault: number;
  DotDurationDefault: number;
  MomotalkDurationDefault: number;
  PhoneDurationDefault: number;
  KeywordDurationDefault: number;
  EvidenceDurationDefault: number;
};

export type ConstMiniGameShootingExcelTable = {
  DataList: ConstMiniGameShootingExcel[];
};

export type ConstMiniGameShootingExcel = {
  NormalStageId: number;
  NormalSectionCount: number;
  HardStageId: number;
  HardSectionCount: number;
  FreeStageId: number;
  FreeSectionCount: number;
  PlayerCharacterId: number[];
  HiddenPlayerCharacterId: number;
  CameraSmoothTime: number;
  SpawnEffectPath: string;
  WaitTimeAfterSpawn: number;
};

export type ConstMinigameTBGExcelTable = {
  DataList: ConstMinigameTBGExcel[];
};

export type ConstMinigameTBGExcel = {
  ConquestMapBoundaryOffsetLeft: number;
  ConquestMapBoundaryOffsetRight: number;
  ConquestMapBoundaryOffsetTop: number;
  ConquestMapBoundaryOffsetBottom: number;
  ConquestMapCenterOffsetX: number;
  ConquestMapCenterOffsetY: number;
  CameraAngle: number;
  CameraZoomMax: number;
  CameraZoomMin: number;
  CameraZoomDefault: number;
  ThemaLoadingProgressTime: number;
  MapAllyRotation: number;
  AniAllyBattleAttack: string;
  EffectAllyBattleAttack: string;
  EffectAllyBattleDamage: string;
  AniEnemyBattleAttack: string;
  EffectEnemyBattleAttack: string;
  EffectEnemyBattleDamage: string;
  EncounterAllyRotation: number;
  EncounterEnemyRotation: number;
  EncounterRewardReceiveIndex: number;
};

export type ConstNewbieContentExcelTable = {
  DataList: ConstNewbieContentExcel[];
};

export type ConstNewbieContentExcel = {
  NewbieGachaReleaseDate: string;
  NewbieGachaCheckDays: number;
  NewbieGachaTokenGraceTime: number;
  NewbieAttendanceReleaseDate: string;
  NewbieAttendanceStartableEndDay: number;
  NewbieAttendanceEndDay: number;
};

export type ConstStrategyExcelTable = {
  DataList: ConstStrategyExcel[];
};

export type ConstStrategyExcel = {
  HexaMapBoundaryOffset: number;
  HexaMapStartCameraOffset: number;
  CameraZoomMax: number;
  CameraZoomMin: number;
  CameraZoomDefault: number;
  HealCostType: keyof typeof CurrencyTypes;
  HealCostAmount: number[];
  CanHealHpRate: number;
  PlayTimeLimitInSeconds: number;
  AdventureEchelonCount: number;
  RaidEchelonCount: number;
  DefaultEchelonCount: number;
  EventContentEchelonCount: number;
  TimeAttackDungeonEchelonCount: number;
  WorldRaidEchelonCount: number;
  TacticSkipClearTimeSeconds: number;
  TacticSkipFramePerSecond: number;
  ConquestEchelonCount: number;
  StoryEchelonCount: number;
  MultiSweepPresetCount: number;
  MultiSweepPresetNameMaxLength: number;
};

export type ContentEnterCostReduceExcelTable = {
  DataList: ContentEnterCostReduceExcel[];
};

export type ContentEnterCostReduceExcel = {
  EnterCostReduceGroupId: number;
  ContentType: keyof typeof ContentType;
  StageId: number;
  ReduceEnterCostType: keyof typeof ParcelType;
  ReduceEnterCostId: number;
  ReduceAmount: number;
};

export type ContentsFeverExcelTable = {
  DataList: ContentsFeverExcel[];
};

export type ContentsFeverExcel = {
  ConditionContent: keyof typeof FeverBattleType;
  SkillFeverCheckCondition: keyof typeof SkillPriorityCheckTarget;
  SkillCostFever: number;
  FeverStartTime: number;
  FeverDurationTime: number;
};

export type ContentSpoilerPopupExcelTable = {
  DataList: ContentSpoilerPopupExcel[];
};

export type ContentSpoilerPopupExcel = {
  ContentType: keyof typeof ContentType;
  SpoilerPopupTitle: string;
  SpoilerPopupDescription: string;
  IsWarningPopUp: boolean;
  ConditionScenarioModeId: number;
};

export type CostumeExcelTable = {
  DataList: CostumeExcel[];
};

export type CostumeExcel = {
  CostumeGroupId: number;
  CostumeUniqueId: number;
  DevName: string;
  ProductionStep: keyof typeof ProductionStep;
  IsDefault: boolean;
  CollectionVisible: boolean;
  ReleaseDate: string;
  CollectionVisibleStartDate: string;
  CollectionVisibleEndDate: string;
  Rarity: keyof typeof Rarity;
  CharacterSkillListGroupId: number;
  SpineResourceName: string;
  SpineResourceNameDiorama: string;
  SpineResourceNameDioramaForFormConversion: string[];
  EntityMaterialType: keyof typeof EntityMaterialType;
  ModelPrefabName: string;
  CafeModelPrefabName: string;
  EchelonModelPrefabName: string;
  StrategyModelPrefabName: string;
  TextureDir: string;
  CollectionTexturePath: string;
  CollectionBGTexturePath: string;
  UseObjectHPBAR: boolean;
  TextureBoss: string;
  TextureSkillCard: string[];
  InformationPacel: string;
  AnimationSSR: string;
  EnterStrategyAnimationName: string;
  AnimationValidator: boolean;
  CharacterVoiceGroupId: number;
};

export type CouponStuffExcelTable = {
  DataList: CouponStuffExcel[];
};

export type CouponStuffExcel = {
  StuffId: number;
  ParcelType: keyof typeof ParcelType;
  ParcelId: number;
  LimitAmount: number;
  CouponStuffNameLocalizeKey: string;
};

export type CurrencyExcelTable = {
  DataList: CurrencyExcel[];
};

export type CurrencyExcel = {
  ID: number;
  LocalizeEtcId: number;
  CurrencyType: keyof typeof CurrencyTypes;
  CurrencyName: string;
  Icon: string;
  Rarity: keyof typeof Rarity;
  AutoChargeMsc: number;
  AutoChargeAmount: number;
  CurrencyOverChargeType: keyof typeof CurrencyOverChargeType;
  CurrencyAdditionalChargeType: keyof typeof CurrencyAdditionalChargeType;
  ChargeLimit: number;
  OverChargeLimit: number;
  SpriteName: string;
  DailyRefillType: keyof typeof DailyRefillType;
  DailyRefillAmount: number;
  DailyRefillTime: number[];
};

export type DefaultCharacterExcelTable = {
  DataList: DefaultCharacterExcel[];
};

export type DefaultCharacterExcel = {
  CharacterId: number;
  FavoriteCharacter: boolean;
  Level: number;
  Exp: number;
  FavorExp: number;
  FavorRank: number;
  StarGrade: number;
  ExSkillLevel: number;
  PassiveSkillLevel: number;
  ExtraPassiveSkillLevel: number;
  CommonSkillLevel: number;
  LeaderSkillLevel: number;
};

export type DefaultEchelonExcelTable = {
  DataList: DefaultEchelonExcel[];
};

export type DefaultEchelonExcel = {
  EchlonId: number;
  LeaderId: number;
  MainId: number[];
  SupportId: number[];
  TssId: number;
};

export type DefaultFurnitureExcelTable = {
  DataList: DefaultFurnitureExcel[];
};

export type DefaultFurnitureExcel = {
  Id: number;
  Location: keyof typeof FurnitureLocation;
  PositionX: number;
  PositionY: number;
  Rotation: number;
};

export type DefaultMailExcelTable = {
  DataList: DefaultMailExcel[];
};

export type DefaultMailExcel = {
  Id: number;
  LocalizeCodeId: number;
  MailType: keyof typeof MailType;
  MailSendPeriodFrom: string;
  MailSendPeriodTo: string;
  RewardParcelType: (keyof typeof ParcelType)[];
  RewardParcelId: number[];
  RewardParcelAmount: number[];
};

export type DefaultParcelExcelTable = {
  DataList: DefaultParcelExcel[];
};

export type DefaultParcelExcel = {
  ParcelType: keyof typeof ParcelType;
  ParcelId: number;
  ParcelAmount: number;
};

export type DuplicateBonusExcelTable = {
  DataList: DuplicateBonusExcel[];
};

export type DuplicateBonusExcel = {
  Id: number;
  ItemCategory: keyof typeof ItemCategory;
  ItemId: number;
  CharacterId: number;
  RewardParcelType: keyof typeof ParcelType;
  RewardParcelId: number;
  RewardParcelAmount: number;
};

export type EchelonConstraintExcelTable = {
  DataList: EchelonConstraintExcel[];
};

export type EchelonConstraintExcel = {
  GroupId: number;
  IsWhiteList: boolean;
  CharacterId: number[];
  PersonalityId: number[];
  WeaponType: keyof typeof WeaponType;
  School: keyof typeof School;
  Club: keyof typeof Club;
  Role: keyof typeof TacticRole;
};

export type EliminateRaidRankingRewardExcelTable = {
  DataList: EliminateRaidRankingRewardExcel[];
};

export type EliminateRaidRankingRewardExcel = {
  RankingRewardGroupId: number;
  Id: number;
  RankStart: number;
  RankEnd: number;
  PercentRankStart: number;
  PercentRankEnd: number;
  Tier: number;
  RewardParcelType: (keyof typeof ParcelType)[];
  RewardParcelUniqueId: number[];
  RewardParcelUniqueName: string[];
  RewardParcelAmount: number[];
};

export type EliminateRaidSeasonManageExcelTable = {
  DataList: EliminateRaidSeasonManageExcel[];
};

export type EliminateRaidSeasonManageExcel = {
  SeasonId: number;
  SeasonDisplay: number;
  SeasonStartData: string;
  SeasonEndData: string;
  SettlementEndDate: string;
  LobbyTableBGPath: string;
  LobbyScreenBGPath: string;
  OpenRaidBossGroup01: string;
  OpenRaidBossGroup02: string;
  OpenRaidBossGroup03: string;
  RankingRewardGroupId: number;
  MaxSeasonRewardGauage: number;
  StackedSeasonRewardGauge: number[];
  SeasonRewardId: number[];
  LimitedRewardIdNormal: number;
  LimitedRewardIdHard: number;
  LimitedRewardIdVeryhard: number;
  LimitedRewardIdHardcore: number;
  LimitedRewardIdExtreme: number;
  LimitedRewardIdInsane: number;
  LimitedRewardIdTorment: number;
};

export type EliminateRaidStageExcelTable = {
  DataList: EliminateRaidStageExcel[];
};

export type EliminateRaidStageExcel = {
  Id: number;
  UseBossIndex: boolean;
  UseBossAIPhaseSync: boolean;
  RaidBossGroup: string;
  RaidEnterCostType: keyof typeof ParcelType;
  RaidEnterCostId: number;
  RaidEnterCostAmount: number;
  BossSpinePath: string;
  PortraitPath: string;
  BGPath: string;
  RaidCharacterId: number;
  BossCharacterId: number[];
  Difficulty: keyof typeof Difficulty;
  IsOpen: boolean;
  MaxPlayerCount: number;
  RaidRoomLifeTime: number;
  BattleDuration: number;
  GroundId: number;
  GroundDevName: string;
  EnterTimeLine: string;
  TacticEnvironment: keyof typeof TacticEnvironment;
  DefaultClearScore: number;
  MaximumScore: number;
  PerSecondMinusScore: number;
  HPPercentScore: number;
  MinimumAcquisitionScore: number;
  MaximumAcquisitionScore: number;
  RaidRewardGroupId: number;
  BattleReadyTimelinePath: string[];
  BattleReadyTimelinePhaseStart: number[];
  BattleReadyTimelinePhaseEnd: number[];
  VictoryTimelinePath: string;
  PhaseChangeTimelinePath: string;
  TimeLinePhase: number;
  EnterScenarioKey: number;
  ClearScenarioKey: number;
  ShowSkillCard: boolean;
  BossBGInfoKey: number;
  EchelonExtensionType: keyof typeof EchelonExtensionType;
};

export type EliminateRaidStageLimitedRewardExcelTable = {
  DataList: EliminateRaidStageLimitedRewardExcel[];
};

export type EliminateRaidStageLimitedRewardExcel = {
  LimitedRewardId: number;
  LimitedRewardParcelType: (keyof typeof ParcelType)[];
  LimitedRewardParcelUniqueId: number[];
  LimitedRewardAmount: number[];
};

export type EliminateRaidStageRewardExcelTable = {
  DataList: EliminateRaidStageRewardExcel[];
};

export type EliminateRaidStageRewardExcel = {
  GroupId: number;
  IsClearStageRewardHideInfo: boolean;
  ClearStageRewardProb: number;
  ClearStageRewardParcelType: keyof typeof ParcelType;
  ClearStageRewardParcelUniqueID: number;
  ClearStageRewardParcelUniqueName: string;
  ClearStageRewardAmount: number;
};

export type EliminateRaidStageSeasonRewardExcelTable = {
  DataList: EliminateRaidStageSeasonRewardExcel[];
};

export type EliminateRaidStageSeasonRewardExcel = {
  SeasonRewardId: number;
  SeasonRewardParcelType: (keyof typeof ParcelType)[];
  SeasonRewardParcelUniqueId: number[];
  SeasonRewardParcelUniqueName: string[];
  SeasonRewardAmount: number[];
};

export type EmblemExcelTable = {
  DataList: EmblemExcel[];
};

export type EmblemExcel = {
  Id: number;
  Category: keyof typeof EmblemCategory;
  Rarity: keyof typeof Rarity;
  DisplayOrder: number;
  LocalizeEtcId: number;
  LocalizeCodeId: number;
  UseAtLocalizeId: number;
  EmblemTextVisible: boolean;
  IconPath: string;
  EmblemIconPath: string;
  EmblemIconNumControl: number;
  EmblemIconBGPath: string;
  EmblemBGPathJp: string;
  EmblemBGPathKr: string;
  DisplayType: keyof typeof EmblemDisplayType;
  DisplayStartDate: string;
  DisplayEndDate: string;
  DislpayFavorLevel: number;
  CheckPassType: keyof typeof EmblemCheckPassType;
  EmblemParameter: number;
  CheckPassCount: number;
};

export type EmoticonSpecialExcelTable = {
  DataList: EmoticonSpecialExcel[];
};

export type EmoticonSpecialExcel = {
  UniqueId: number;
  CharacterUniqueId: number;
  Random: string;
};

export type EquipmentExcelTable = {
  DataList: EquipmentExcel[];
};

export type EquipmentExcel = {
  Id: number;
  EquipmentCategory: keyof typeof EquipmentCategory;
  Rarity: keyof typeof Rarity;
  LocalizeEtcId: number;
  Wear: boolean;
  MaxLevel: number;
  RecipeId: number;
  TierInit: number;
  NextTierEquipment: number;
  StackableMax: number;
  Icon: string;
  ImageName: string;
  Tags: (keyof typeof Tag)[];
  CraftQualityTier0: number;
  CraftQualityTier1: number;
  CraftQualityTier2: number;
  ShiftingCraftQuality: number;
  ShopCategory: (keyof typeof ShopCategoryType)[];
  ShortcutTypeId: number;
};

export type EquipmentLevelExcelTable = {
  DataList: EquipmentLevelExcel[];
};

export type EquipmentLevelExcel = {
  Level: number;
  TierLevelExp: number[];
  TotalExp: number[];
};

export type EquipmentStatExcelTable = {
  DataList: EquipmentStatExcel[];
};

export type EquipmentStatExcel = {
  EquipmentId: number;
  StatLevelUpType: keyof typeof StatLevelUpType;
  StatType: (keyof typeof EquipmentOptionType)[];
  MinStat: number[];
  MaxStat: number[];
  LevelUpInsertLimit: number;
  LevelUpFeedExp: number;
  LevelUpFeedCostCurrency: keyof typeof CurrencyTypes;
  LevelUpFeedCostAmount: number;
  EquipmentCategory: keyof typeof EquipmentCategory;
  LevelUpFeedAddExp: number;
  DefaultMaxLevel: number;
  TranscendenceMax: number;
  DamageFactorGroupId: string;
};

export type EventContentArchiveBannerOffsetExcelTable = {
  DataList: EventContentArchiveBannerOffsetExcel[];
};

export type EventContentArchiveBannerOffsetExcel = {
  EventContentId: number;
  OffsetX: number;
  OffsetY: number;
  ScaleX: number;
  ScaleY: number;
};

export type EventContentBoxGachaElementExcelTable = {
  DataList: EventContentBoxGachaElementExcel[];
};

export type EventContentBoxGachaElementExcel = {
  EventContentId: number;
  Id: number;
  Round: number;
  GroupId: number;
};

export type EventContentBoxGachaManageExcelTable = {
  DataList: EventContentBoxGachaManageExcel[];
};

export type EventContentBoxGachaManageExcel = {
  EventContentId: number;
  Round: number;
  GoodsId: number;
  IsLoop: boolean;
};

export type EventContentBoxGachaShopExcelTable = {
  DataList: EventContentBoxGachaShopExcel[];
};

export type EventContentBoxGachaShopExcel = {
  EventContentId: number;
  GroupId: number;
  GroupElementAmount: number;
  Round: number;
  IsLegacy: boolean;
  IsPrize: boolean;
  GoodsId: number[];
  DisplayOrder: number;
};

export type EventContentBuffExcelTable = {
  DataList: EventContentBuffExcel[];
};

export type EventContentBuffExcel = {
  EventContentBuffId: number;
  IsBuff: boolean;
  CharacterTag: keyof typeof Tag;
  EnumType: keyof typeof EventContentBuffFindRule;
  EnumTypeValue: string[];
  SkillGroupId: string;
  IconPath: string;
  SpriteName: string;
  BuffDescriptionLocalizeCodeId: string;
};

export type EventContentBuffGroupExcelTable = {
  DataList: EventContentBuffGroupExcel[];
};

export type EventContentBuffGroupExcel = {
  EventContentId: number;
  BuffContentId: number;
  BuffGroupId: number;
  BuffGroupNameLocalizeCodeId: string;
  EventContentBuffId1: number;
  BuffNameLocalizeCodeId1: string;
  BuffDescriptionIconPath1: string;
  EventContentBuffId2: number;
  BuffNameLocalizeCodeId2: string;
  BuffDescriptionIconPath2: string;
  EventContentDebuffId: number;
  DebuffNameLocalizeCodeId: string;
  DeBuffDescriptionIconPath: string;
  BuffGroupProb: number;
};

export type EventContentCardExcelTable = {
  DataList: EventContentCardExcel[];
};

export type EventContentCardExcel = {
  CardGroupId: number;
  EventContentId: number;
  LocalizeEtcId: number;
  IconPath: string;
  BackIconPath: string;
  RewardParcelType: (keyof typeof ParcelType)[];
  RewardParcelId: number[];
};

export type EventContentCardShopExcelTable = {
  DataList: EventContentCardShopExcel[];
};

export type EventContentCardShopExcel = {
  EventContentId: number;
  Id: number;
  Rarity: keyof typeof Rarity;
  CostGoodsId: number;
  CardGroupId: number;
  IsLegacy: boolean;
  RefreshGroup: number;
  Prob: number;
  ProbWeight1: number;
  RewardParcelType: (keyof typeof ParcelType)[];
  RewardParcelId: number[];
  RewardParcelAmount: number[];
};

export type EventContentChangeExcelTable = {
  DataList: EventContentChangeExcel[];
};

export type EventContentChangeExcel = {
  EventContentId: number;
  ChangeCount: number;
  IsLast: boolean;
  RewardParcelType: keyof typeof ParcelType;
  RewardId: number;
  RewardAmount: number;
  ChangeCostType: keyof typeof ParcelType;
  ChangeCostId: number;
  ChangeCostAmount: number;
};

export type EventContentChangeScenarioExcelTable = {
  DataList: EventContentChangeScenarioExcel[];
};

export type EventContentChangeScenarioExcel = {
  EventContentId: number;
  ChangeType: keyof typeof EventChangeType;
  ChangeCount: number;
  ScenarioGroupId: number;
};

export type EventContentCharacterBonusExcelTable = {
  DataList: EventContentCharacterBonusExcel[];
};

export type EventContentCharacterBonusExcel = {
  EventContentId: number;
  CharacterId: number;
  EventContentItemType: (keyof typeof EventContentItemType)[];
  BonusPercentage: number[];
};

export type EventContentCollectionExcelTable = {
  DataList: EventContentCollectionExcel[];
};

export type EventContentCollectionExcel = {
  Id: number;
  EventContentId: number;
  GroupId: number;
  UnlockConditionType: keyof typeof EventCollectionUnlockType;
  UnlockConditionParameter: number[];
  MultipleConditionCheckType: keyof typeof MultipleConditionCheckType;
  UnlockConditionCount: number;
  IsObject: boolean;
  IsHorizon: boolean;
  EmblemResource: string;
  ThumbResource: string;
  FullResource: string;
  LocalizeEtcId: number;
  SubNameLocalizeCodeId: string;
};

export type EventContentCurrencyItemExcelTable = {
  DataList: EventContentCurrencyItemExcel[];
};

export type EventContentCurrencyItemExcel = {
  EventContentId: number;
  EventContentItemType: keyof typeof EventContentItemType;
  ItemUniqueId: number;
};

export type EventContentDebuffRewardExcelTable = {
  DataList: EventContentDebuffRewardExcel[];
};

export type EventContentDebuffRewardExcel = {
  EventContentId: number;
  EventStageId: number;
  EventContentItemType: keyof typeof EventContentItemType;
  RewardPercentage: number;
};

export type EventContentDiceRaceEffectExcelTable = {
  DataList: EventContentDiceRaceEffectExcel[];
};

export type EventContentDiceRaceEffectExcel = {
  EventContentId: number;
  EventContentDiceRaceResultType: keyof typeof EventContentDiceRaceResultType;
  IsDiceResult: boolean;
  AniClip: string;
  VoiceId: number[];
};

export type EventContentDiceRaceExcelTable = {
  DataList: EventContentDiceRaceExcel[];
};

export type EventContentDiceRaceExcel = {
  EventContentId: number;
  DiceCostGoodsId: number;
  SkipableLap: number;
  DiceRacePawnPrefab: string;
  IsUsingFixedDice: boolean;
  DiceRaceEventType: string[];
};

export type EventContentDiceRaceNodeExcelTable = {
  DataList: EventContentDiceRaceNodeExcel[];
};

export type EventContentDiceRaceNodeExcel = {
  EventContentId: number;
  NodeId: number;
  EventContentDiceRaceNodeType: keyof typeof EventContentDiceRaceNodeType;
  MoveForwardTypeArg: number;
  RewardParcelType: (keyof typeof ParcelType)[];
  RewardParcelId: number[];
  RewardAmount: number[];
};

export type EventContentDiceRaceProbExcelTable = {
  DataList: EventContentDiceRaceProbExcel[];
};

export type EventContentDiceRaceProbExcel = {
  EventContentId: number;
  EventContentDiceRaceResultType: keyof typeof EventContentDiceRaceResultType;
  CostItemId: number;
  CostItemAmount: number;
  DiceResult: number;
  Prob: number;
};

export type EventContentDiceRaceTotalRewardExcelTable = {
  DataList: EventContentDiceRaceTotalRewardExcel[];
};

export type EventContentDiceRaceTotalRewardExcel = {
  EventContentId: number;
  RewardID: number;
  RequiredLapFinishCount: number;
  DisplayLapFinishCount: number;
  RewardParcelType: (keyof typeof ParcelType)[];
  RewardParcelId: number[];
  RewardParcelAmount: number[];
};

export type EventContentExcelTable = {
  DataList: EventContentExcel[];
};

export type EventContentExcel = {
  Id: number;
  DevName: string;
  EventContentId: number;
  BgImagePath: string;
};

export type EventContentFortuneGachaExcelTable = {
  DataList: EventContentFortuneGachaExcel[];
};

export type EventContentFortuneGachaExcel = {
  FortuneGachaGroupId: number;
  LocalizeEtcId: number;
  IconPath: string;
};

export type EventContentFortuneGachaModifyExcelTable = {
  DataList: EventContentFortuneGachaModifyExcel[];
};

export type EventContentFortuneGachaModifyExcel = {
  EventContentId: number;
  TargetGrade: number;
  ProbModifyStartCount: number;
  UsePrefabName: string;
  BucketImagePath: string;
  ShopBgImagePath: string;
  TitleLocalizeKey: string;
};

export type EventContentFortuneGachaShopExcelTable = {
  DataList: EventContentFortuneGachaShopExcel[];
};

export type EventContentFortuneGachaShopExcel = {
  EventContentId: number;
  Id: number;
  Grade: number;
  CostGoodsId: number;
  IsLegacy: boolean;
  FortuneGachaGroupId: number;
  Prob: number;
  ProbModifyValue: number;
  ProbModifyLimit: number;
  RewardParcelType: (keyof typeof ParcelType)[];
  RewardParcelId: number[];
  RewardParcelAmount: number[];
};

export type EventContentLobbyMenuExcelTable = {
  DataList: EventContentLobbyMenuExcel[];
};

export type EventContentLobbyMenuExcel = {
  EventContentId: number;
  EventContentType: keyof typeof EventContentType;
  IconSpriteName: string;
  ButtonText: string;
  DisplayOrder: number;
  IconOffsetX: number;
  IconOffsetY: number;
  ReddotSpriteName: string;
};

export type EventContentLocationExcelTable = {
  DataList: EventContentLocationExcel[];
};

export type EventContentLocationExcel = {
  EventContentId: number;
  Id: number;
  LocalizeEtcId: number;
  PrefabPath: string;
  LocationResetScheduleCount: number;
  ScheduleEventPointCostParcelType: keyof typeof ParcelType;
  ScheduleEventPointCostParcelId: number;
  ScheduleEventPointCostParcelAmount: number;
  RewardParcelType: keyof typeof ParcelType;
  RewardParcelId: number;
  InformationGroupId: number;
};

export type EventContentLocationRewardExcelTable = {
  DataList: EventContentLocationRewardExcel[];
};

export type EventContentLocationRewardExcel = {
  Location: string;
  ScheduleGroupId: number;
  OrderInGroup: number;
  Id: number;
  ProgressTexture: string;
  VoiceId: number[];
  LocalizeEtcId: number;
  LocationRank: number;
  FavorExp: number;
  SecretStoneAmount: number;
  SecretStoneProb: number;
  ExtraFavorExp: number;
  ExtraFavorExpProb: number;
  ExtraRewardParcelType: (keyof typeof ParcelType)[];
  ExtraRewardParcelId: number[];
  ExtraRewardAmount: number[];
  ExtraRewardProb: number[];
  IsExtraRewardDisplayed: boolean[];
  RewardParcelType: (keyof typeof ParcelType)[];
  RewardParcelId: number[];
  RewardAmount: number[];
};

export type EventContentMeetupExcelTable = {
  DataList: EventContentMeetupExcel[];
};

export type EventContentMeetupExcel = {
  Id: number;
  EventContentId: number;
  CharacterId: number;
  ConditionScenarioGroupId: number;
  ConditionType: keyof typeof MeetupConditionType;
  ConditionParameter: number[];
  ConditionPrintType: keyof typeof MeetupConditionPrintType;
};

export type EventContentMiniEventShortCutExcelTable = {
  DataList: EventContentMiniEventShortCutExcel[];
};

export type EventContentMiniEventShortCutExcel = {
  Id: number;
  LocalizeEtcId: number;
  ShorcutContentType: keyof typeof EventTargetType;
};

export type EventContentMiniEventTokenExcelTable = {
  DataList: EventContentMiniEventTokenExcel[];
};

export type EventContentMiniEventTokenExcel = {
  EventContentId: number;
  ItemUniqueId: number;
  MaximumAmount: number;
};

export type EventContentMissionExcelTable = {
  DataList: EventContentMissionExcel[];
};

export type EventContentMissionExcel = {
  Id: number;
  EventContentId: number;
  GroupId: number;
  GroupName: string;
  Category: keyof typeof MissionCategory;
  Description: number;
  ResetType: keyof typeof MissionResetType;
  ToastDisplayType: keyof typeof MissionToastDisplayConditionType;
  ToastImagePath: string;
  ViewFlag: boolean;
  DisplayOrder: number;
  PreMissionId: number[];
  AccountType: keyof typeof AccountState;
  AccountLevel: number;
  ShortcutUI: string[];
  ChallengeStageShortcut: number;
  CompleteConditionType: keyof typeof MissionCompleteConditionType;
  IsCompleteExtensionTime: boolean;
  CompleteConditionCount: number;
  CompleteConditionParameter: number[];
  CompleteConditionParameterTag: (keyof typeof Tag)[];
  RewardIcon: string;
  CompleteConditionMissionId: number[];
  CompleteConditionMissionCount: number;
  MissionRewardParcelType: (keyof typeof ParcelType)[];
  MissionRewardParcelId: number[];
  MissionRewardAmount: number[];
  ConditionRewardParcelType: (keyof typeof ParcelType)[];
  ConditionRewardParcelId: number[];
  ConditionRewardAmount: number[];
};

export type EventContentPlayGuideExcelTable = {
  DataList: EventContentPlayGuideExcel[];
};

export type EventContentPlayGuideExcel = {
  Id: number;
  EventContentId: number;
  DisplayOrder: number;
  GuideTitle: string;
  GuideImagePath: string;
  GuideText: string;
};

export type EventContentScenarioExcelTable = {
  DataList: EventContentScenarioExcel[];
};

export type EventContentScenarioExcel = {
  Id: number;
  EventContentId: number;
  ReplayDisplayGroup: number;
  Order: number;
  RecollectionNumber: number;
  IsRecollection: boolean;
  IsMeetup: boolean;
  IsOmnibus: boolean;
  ScenarioGroupId: number[];
  ScenarioConditionType: keyof typeof EventContentScenarioConditionType;
  ConditionAmount: number;
  ConditionEventContentId: number;
  ClearedScenarioGroupId: number;
  RecollectionSummaryLocalizeScenarioId: number;
  RecollectionResource: string;
  IsRecollectionHorizon: boolean;
  CostParcelType: keyof typeof ParcelType;
  CostId: number;
  CostAmount: number;
  RewardParcelType: (keyof typeof ParcelType)[];
  RewardId: number[];
  RewardAmount: number[];
};

export type EventContentSeasonExcelTable = {
  DataList: EventContentSeasonExcel[];
};

export type EventContentSeasonExcel = {
  EventContentId: number;
  OriginalEventContentId: number;
  IsReturn: boolean;
  Name: string;
  EventContentType: keyof typeof EventContentType;
  OpenConditionContent: keyof typeof OpenConditionContent;
  EventDisplay: boolean;
  IconOrder: number;
  SubEventType: keyof typeof SubEventType;
  SubEvent: boolean;
  EventItemId: number;
  MainEventId: number;
  EventChangeOpenCondition: number;
  BeforehandExposedTime: string;
  EventContentOpenTime: string;
  EventContentCloseTime: string;
  ExtensionTime: string;
  MainIconParcelPath: string;
  SubIconParcelPath: string;
  BeforehandBgImagePath: string;
  MinigamePrologScenarioGroupId: number;
  BeforehandScenarioGroupId: number[];
  MainBannerImagePath: string;
  MainBgImagePath: string;
  ShiftTriggerStageId: number;
  ShiftMainBgImagePath: string;
  MinigameLobbyPrefabName: string;
  MinigameVictoryPrefabName: string;
  MinigameMissionBgPrefabName: string;
  CardBgImagePath: string;
  EventAssist: boolean;
  EventContentReleaseType: keyof typeof EventContentReleaseType;
  EventContentStageRewardIdPermanent: number;
  RewardTagPermanent: keyof typeof RewardTag;
  MiniEventShortCutScenarioModeId: number;
};

export type EventContentShopExcelTable = {
  DataList: EventContentShopExcel[];
};

export type EventContentShopExcel = {
  EventContentId: number;
  Id: number;
  LocalizeEtcId: number;
  CategoryType: keyof typeof ShopCategoryType;
  IsLegacy: boolean;
  GoodsId: number[];
  DisplayOrder: number;
  SalePeriodFrom: string;
  SalePeriodTo: string;
  PurchaseCooltimeMin: number;
  PurchaseCountLimit: number;
  PurchaseCountResetType: keyof typeof PurchaseCountResetType;
  BuyReportEventName: string;
  RestrictBuyWhenInventoryFull: boolean;
};

export type EventContentShopInfoExcelTable = {
  DataList: EventContentShopInfoExcel[];
};

export type EventContentShopInfoExcel = {
  EventContentId: number;
  CategoryType: keyof typeof ShopCategoryType;
  LocalizeCode: number;
  CostParcelType: (keyof typeof ParcelType)[];
  CostParcelId: number[];
  IsRefresh: boolean;
  IsSoldOutDimmed: boolean;
  AutoRefreshCoolTime: number;
  RefreshAbleCount: number;
  GoodsId: number[];
  OpenPeriodFrom: string;
  OpenPeriodTo: string;
  ShopProductUpdateDate: string;
};

export type EventContentShopRefreshExcelTable = {
  DataList: EventContentShopRefreshExcel[];
};

export type EventContentShopRefreshExcel = {
  EventContentId: number;
  Id: number;
  LocalizeEtcId: number;
  IsLegacy: boolean;
  GoodsId: number;
  DisplayOrder: number;
  CategoryType: keyof typeof ShopCategoryType;
  RefreshGroup: number;
  Prob: number;
  BuyReportEventName: string;
};

export type EventContentSpecialOperationsExcelTable = {
  DataList: EventContentSpecialOperationsExcel[];
};

export type EventContentSpecialOperationsExcel = {
  EventContentId: number;
  PointItemId: number;
};

export type EventContentSpineDialogOffsetExcelTable = {
  DataList: EventContentSpineDialogOffsetExcel[];
};

export type EventContentSpineDialogOffsetExcel = {
  EventContentId: number;
  EventContentType: keyof typeof EventContentType;
  CostumeUniqueId: number;
  SpineOffsetX: number;
  SpineOffsetY: number;
  DialogOffsetX: number;
  DialogOffsetY: number;
};

export type EventContentSpoilerPopupExcelTable = {
  DataList: EventContentSpoilerPopupExcel[];
};

export type EventContentSpoilerPopupExcel = {
  EventContentId: number;
  SpoilerPopupTitle: string;
  SpoilerPopupDescription: string;
  IsWarningPopUp: boolean;
  ConditionScenarioModeId: number;
};

export type EventContentStageExcelTable = {
  DataList: EventContentStageExcel[];
};

export type EventContentStageExcel = {
  Id: number;
  Name: string;
  EventContentId: number;
  StageDifficulty: keyof typeof StageDifficulty;
  StageNumber: string;
  StageDisplay: number;
  PrevStageId: number;
  OpenDate: number;
  OpenEventPoint: number;
  OpenConditionScenarioPermanentSubEventId: number;
  PrevStageSubEventId: number;
  OpenConditionScenarioId: number;
  OpenConditionContentType: keyof typeof EventContentType;
  OpenConditionContentId: number;
  BattleDuration: number;
  StageEnterCostType: keyof typeof ParcelType;
  StageEnterCostId: number;
  StageEnterCostAmount: number;
  StageEnterEchelonCount: number;
  StarConditionTacticRankSCount: number;
  StarConditionTurnCount: number;
  EnterScenarioGroupId: number[];
  ClearScenarioGroupId: number[];
  StrategyMap: string;
  StrategyMapBG: string;
  EventContentStageRewardId: number;
  MaxTurn: number;
  StageTopography: keyof typeof StageTopography;
  RecommandLevel: number;
  BgmId: string;
  StrategyEnvironment: keyof typeof StrategyEnvironment;
  GroundID: number;
  ContentType: keyof typeof ContentType;
  BGMId: number;
  InstantClear: boolean;
  BuffContentId: number;
  FixedEchelonId: number;
  ChallengeDisplay: boolean;
  StarGoal: (keyof typeof StarGoalType)[];
  StarGoalAmount: number[];
  IsDefeatBattle: boolean;
  StageHint: number;
  EchelonExtensionType: keyof typeof EchelonExtensionType;
};

export type EventContentStageRewardExcelTable = {
  DataList: EventContentStageRewardExcel[];
};

export type EventContentStageRewardExcel = {
  GroupId: number;
  RewardTag: keyof typeof RewardTag;
  RewardProb: number;
  RewardParcelType: keyof typeof ParcelType;
  RewardId: number;
  RewardAmount: number;
  IsDisplayed: boolean;
};

export type EventContentStageTotalRewardExcelTable = {
  DataList: EventContentStageTotalRewardExcel[];
};

export type EventContentStageTotalRewardExcel = {
  Id: number;
  EventContentId: number;
  RequiredEventItemAmount: number;
  RewardParcelType: (keyof typeof ParcelType)[];
  RewardParcelId: number[];
  RewardParcelAmount: number[];
};

export type EventContentZoneExcelTable = {
  DataList: EventContentZoneExcel[];
};

export type EventContentZoneExcel = {
  Id: number;
  OriginalZoneId: number;
  LocationId: number;
  LocationRank: number;
  EventPointForLocationRank: number;
  LocalizeEtcId: number;
  StudentVisitProb: number[];
  RewardGroupId: number;
  Tags: (keyof typeof Tag)[];
  WhiteListTags: (keyof typeof Tag)[];
};

export type EventContentZoneVisitRewardExcelTable = {
  DataList: EventContentZoneVisitRewardExcel[];
};

export type EventContentZoneVisitRewardExcel = {
  EventContentId: number;
  EventContentLocationId: number;
  DevName: string;
  CharacterId: number;
  CharacterDevName: string;
  VisitRewardParcelType: (keyof typeof ParcelType)[];
  VisitRewardParcelId: number[];
  VisitRewardAmount: number[];
  VisitRewardProb: number[];
};

export type FarmingDungeonLocationManageExcelTable = {
  DataList: FarmingDungeonLocationManageExcel[];
};

export type FarmingDungeonLocationManageExcel = {
  FarmingDungeonLocationId: number;
  ContentType: keyof typeof ContentType;
  WeekDungeonType: keyof typeof WeekDungeonType;
  SchoolDungeonType: keyof typeof SchoolDungeonType;
  Order: number;
  OpenStartDateTime: string;
  OpenEndDateTime: string;
  LocationButtonImagePath: string;
  LocalizeCodeTitle: number;
  LocalizeCodeInfo: number;
};

export type FavorLevelExcelTable = {
  DataList: FavorLevelExcel[];
};

export type FavorLevelExcel = {
  Level: number;
  ExpType: number[];
};

export type FavorLevelRewardExcelTable = {
  DataList: FavorLevelRewardExcel[];
};

export type FavorLevelRewardExcel = {
  CharacterId: number;
  FavorLevel: number;
  StatType: (keyof typeof EquipmentOptionType)[];
  StatValue: number[];
  RewardParcelType: (keyof typeof ParcelType)[];
  RewardParcelId: number[];
  RewardAmount: number[];
};

export type FieldContentStageExcelTable = {
  DataList: FieldContentStageExcel[];
};

export type FieldContentStageExcel = {
  Id: number;
  SeasonId: number;
  AreaId: number;
  GroupId: number;
  StageDifficulty: keyof typeof StageDifficulty;
  Name: string;
  BattleDuration: number;
  StageEnterCostType: keyof typeof ParcelType;
  StageEnterCostId: number;
  StageEnterCostAmount: number;
  StageTopography: keyof typeof StageTopography;
  RecommandLevel: number;
  GroundID: number;
  BGMId: number;
  InstantClear: boolean;
  FixedEchelonId: number;
  SkipFormationSettings: boolean;
};

export type FieldContentStageRewardExcelTable = {
  DataList: FieldContentStageRewardExcel[];
};

export type FieldContentStageRewardExcel = {
  GroupId: number;
  RewardTag: keyof typeof RewardTag;
  RewardProb: number;
  RewardParcelType: keyof typeof ParcelType;
  RewardId: number;
  RewardAmount: number;
  IsDisplayed: boolean;
};

export type FieldDateExcelTable = {
  DataList: FieldDateExcel[];
};

export type FieldDateExcel = {
  UniqueId: number;
  SeasonId: number;
  OpenDate: number;
  DateLocalizeKey: string;
  EntrySceneId: number;
  StartConditionType: keyof typeof FieldConditionType;
  StartConditionId: number;
  EndConditionType: keyof typeof FieldConditionType;
  EndConditionId: number;
  OpenConditionStage: number;
  DateResultSpinePath: string;
  DateResultSpineOffsetX: number;
};

export type FieldEvidenceExcelTable = {
  DataList: FieldEvidenceExcel[];
};

export type FieldEvidenceExcel = {
  UniqueId: number;
  NameLocalizeKey: string;
  DescriptionLocalizeKey: string;
  DetailLocalizeKey: string;
  ImagePath: string;
};

export type FieldInteractionExcelTable = {
  DataList: FieldInteractionExcel[];
};

export type FieldInteractionExcel = {
  UniqueId: number;
  FieldDateId: number;
  ShowEmoji: boolean;
  KeywordLocalize: string;
  FieldSeasonId: number;
  InteractionType: (keyof typeof FieldInteractionType)[];
  InteractionId: number[];
  ConditionClass: keyof typeof FieldConditionClass;
  ConditionClassParameters: number[];
  OnceOnly: boolean;
  ConditionIndex: number[];
  ConditionType: (keyof typeof FieldConditionType)[];
  ConditionId: number[];
  NegateCondition: boolean[];
};

export type FieldKeywordExcelTable = {
  DataList: FieldKeywordExcel[];
};

export type FieldKeywordExcel = {
  UniqueId: number;
  NameLocalizeKey: string;
  DescriptionLocalizeKey: string;
  ImagePath: string;
};

export type FieldMasteryExcelTable = {
  DataList: FieldMasteryExcel[];
};

export type FieldMasteryExcel = {
  UniqueId: number;
  SeasonId: number;
  Order: number;
  ExpAmount: number;
  TokenType: keyof typeof ParcelType;
  TokenId: number;
  TokenRequirement: number;
  AccomplishmentConditionType: keyof typeof FieldConditionType;
  AccomplishmentConditionId: number;
};

export type FieldMasteryLevelExcelTable = {
  DataList: FieldMasteryLevelExcel[];
};

export type FieldMasteryLevelExcel = {
  Level: number;
  Id: number[];
  Exp: number[];
  TotalExp: number[];
  RewardId: number[];
};

export type FieldMasteryManageExcelTable = {
  DataList: FieldMasteryManageExcel[];
};

export type FieldMasteryManageExcel = {
  FieldSeason: number;
  LocalizeEtc: number;
  ImagePath: string;
  LevelId: number;
};

export type FieldQuestExcelTable = {
  DataList: FieldQuestExcel[];
};

export type FieldQuestExcel = {
  UniqueId: number;
  FieldSeasonId: number;
  IsDaily: boolean;
  FieldDateId: number;
  Opendate: number;
  AssetPath: string;
  RewardId: number;
  Prob: number;
  QuestNamKey: number;
  QuestDescKey: number;
};

export type FieldRewardExcelTable = {
  DataList: FieldRewardExcel[];
};

export type FieldRewardExcel = {
  GroupId: number;
  RewardProb: number;
  RewardParcelType: keyof typeof ParcelType;
  RewardId: number;
  RewardAmount: number;
};

export type FieldSceneExcelTable = {
  DataList: FieldSceneExcel[];
};

export type FieldSceneExcel = {
  UniqueId: number;
  DateId: number;
  GroupId: number;
  ArtLevelPath: string;
  DesignLevelPath: string;
  BGMId: number;
  ConditionalBGMQuestId: number[];
  BeginConditionalBGMScenarioGroupId: number[];
  EndConditionalBGMScenarioGroupId: number[];
  ConditionalBGMId: number[];
};

export type FieldSeasonExcelTable = {
  DataList: FieldSeasonExcel[];
};

export type FieldSeasonExcel = {
  UniqueId: number;
  EventContentId: number;
  EntryDateId: number;
  InstantEntryDateId: number;
  StartDate: string;
  EndDate: string;
  LobbyBGMChangeStageId: number;
  CharacterIconPath: string;
  MasteryImagePath: string;
};

export type FieldStoryStageExcelTable = {
  DataList: FieldStoryStageExcel[];
};

export type FieldStoryStageExcel = {
  Id: number;
  SeasonId: number;
  Name: string;
  BattleDuration: number;
  StageTopography: keyof typeof StageTopography;
  RecommandLevel: number;
  GroundID: number;
  BGMId: number;
  FixedEchelonId: number;
  SkipFormationSettings: boolean;
};

export type FieldTutorialExcelTable = {
  DataList: FieldTutorialExcel[];
};

export type FieldTutorialExcel = {
  SeasonId: number;
  TutorialType: (keyof typeof FieldTutorialType)[];
  ConditionType: (keyof typeof FieldConditionType)[];
  ConditionId: number[];
};

export type FieldWorldMapZoneExcelTable = {
  DataList: FieldWorldMapZoneExcel[];
};

export type FieldWorldMapZoneExcel = {
  Id: number;
  GroupId: number;
  Date: number;
  OpenConditionType: keyof typeof FieldConditionType;
  OpenConditionId: number;
  CloseConditionType: keyof typeof FieldConditionType;
  CloseConditionId: number;
  ResultFieldScene: number;
  FieldStageInteractionId: number;
  LocalizeCode: number;
};

export type FixedEchelonSettingExcelTable = {
  DataList: FixedEchelonSettingExcel[];
};

export type FixedEchelonSettingExcel = {
  FixedEchelonID: number;
  EchelonSceneSkip: boolean;
  MainLeaderSlot: number;
  MainCharacterID: number[];
  MainLevel: number[];
  MainGrade: number[];
  MainExSkillLevel: number[];
  MainNoneExSkillLevel: number[];
  MainEquipment1Tier: number[];
  MainEquipment1Level: number[];
  MainEquipment2Tier: number[];
  MainEquipment2Level: number[];
  MainEquipment3Tier: number[];
  MainEquipment3Level: number[];
  MainCharacterWeaponGrade: number[];
  MainCharacterWeaponLevel: number[];
  MainCharacterGearTier: number[];
  MainCharacterGearLevel: number[];
  SupportCharacterID: number[];
  SupportLevel: number[];
  SupportGrade: number[];
  SupportExSkillLevel: number[];
  SupportNoneExSkillLevel: number[];
  SupportEquipment1Tier: number[];
  SupportEquipment1Level: number[];
  SupportEquipment2Tier: number[];
  SupportEquipment2Level: number[];
  SupportEquipment3Tier: number[];
  SupportEquipment3Level: number[];
  SupportCharacterWeaponGrade: number[];
  SupportCharacterWeaponLevel: number[];
  SupportCharacterGearTier: number[];
  SupportCharacterGearLevel: number[];
  InteractionTSCharacterId: number;
};

export type FixedStrategyExcelTable = {
  DataList: FixedStrategyExcel[];
};

export type FixedStrategyExcel = {
  Id: number;
  StageEnterEchelon01FixedEchelonId: number;
  StageEnterEchelon01Starttile: number;
  StageEnterEchelon02FixedEchelonId: number;
  StageEnterEchelon02Starttile: number;
  StageEnterEchelon03FixedEchelonId: number;
  StageEnterEchelon03Starttile: number;
  StageEnterEchelon04FixedEchelonId: number;
  StageEnterEchelon04Starttile: number;
};

export type FloaterCommonExcelTable = {
  DataList: FloaterCommonExcel[];
};

export type FloaterCommonExcel = {
  Id: number;
  TacticEntityType: keyof typeof TacticEntityType;
  FloaterOffsetPosX: number;
  FloaterOffsetPosY: number;
  FloaterRandomPosRangeX: number;
  FloaterRandomPosRangeY: number;
};

export type FormationLocationExcelTable = {
  DataList: FormationLocationExcel[];
};

export type FormationLocationExcel = {
  Id: number;
  GroupID: number;
  SlotZ: number[];
  SlotX: number[];
};

export type FurnitureExcelTable = {
  DataList: FurnitureExcel[];
};

export type FurnitureExcel = {
  Id: number;
  ProductionStep: keyof typeof ProductionStep;
  Rarity: keyof typeof Rarity;
  Category: keyof typeof FurnitureCategory;
  SubCategory: keyof typeof FurnitureSubCategory;
  LocalizeEtcId: number;
  StarGradeInit: number;
  Tier: number;
  Icon: string;
  SizeWidth: number;
  SizeHeight: number;
  OtherSize: number;
  ExpandWidth: number;
  Enable: boolean;
  ReverseRotation: boolean;
  Prefab: string;
  PrefabExpand: string;
  SubPrefab: string;
  SubExpandPrefab: string;
  CornerPrefab: string;
  StackableMax: number;
  RecipeCraftId: number;
  SetGroudpId: number;
  ComfortBonus: number;
  VisitOperationType: number;
  VisitBonusOperationType: number;
  Tags: (keyof typeof Tag)[];
  CraftQualityTier0: number;
  CraftQualityTier1: number;
  CraftQualityTier2: number;
  ShiftingCraftQuality: number;
  FurnitureFunctionType: keyof typeof FurnitureFunctionType;
  FurnitureFunctionParameter: number;
  VideoId: number;
  EventCollectionId: number;
  FurnitureBubbleOffsetX: number;
  FurnitureBubbleOffsetY: number;
  CafeCharacterStateReq: string[];
  CafeCharacterStateAdd: string[];
  CafeCharacterStateMake: string[];
  CafeCharacterStateOnly: string[];
};

export type FurnitureGroupExcelTable = {
  DataList: FurnitureGroupExcel[];
};

export type FurnitureGroupExcel = {
  Id: number;
  GroupNameLocalize: number;
  LocalizeEtcId: number;
  RequiredFurnitureCount: number[];
  ComfortBonus: number[];
};

export type FurnitureTemplateElementExcelTable = {
  DataList: FurnitureTemplateElementExcel[];
};

export type FurnitureTemplateElementExcel = {
  FurnitureTemplateId: number;
  FurnitureId: number;
  Location: keyof typeof FurnitureLocation;
  PositionX: number;
  PositionY: number;
  Rotation: number;
  Order: number;
};

export type FurnitureTemplateExcelTable = {
  DataList: FurnitureTemplateExcel[];
};

export type FurnitureTemplateExcel = {
  FurnitureTemplateId: number;
  FunitureTemplateTitle: number;
  ThumbnailImagePath: string;
  ImagePath: string;
};

export type GachaCraftNodeExcelTable = {
  DataList: GachaCraftNodeExcel[];
};

export type GachaCraftNodeExcel = {
  ID: number;
  Tier: number;
  QuickCraftNodeDisplayOrder: number;
  NodeQuality: number;
  Icon: string;
  LocalizeKey: number;
  Property: number;
};

export type GachaCraftNodeGroupExcelTable = {
  DataList: GachaCraftNodeGroupExcel[];
};

export type GachaCraftNodeGroupExcel = {
  NodeId: number;
  GachaGroupId: number;
  ProbWeight: number;
};

export type GachaCraftOpenTagExcelTable = {
  DataList: GachaCraftOpenTagExcel[];
};

export type GachaCraftOpenTagExcel = {
  NodeTier: keyof typeof CraftNodeTier;
  Tag: (keyof typeof Tag)[];
};

export type GachaElementExcelTable = {
  DataList: GachaElementExcel[];
};

export type GachaElementExcel = {
  ID: number;
  GachaGroupID: number;
  ParcelType: keyof typeof ParcelType;
  ParcelID: number;
  Rarity: keyof typeof Rarity;
  ParcelAmountMin: number;
  ParcelAmountMax: number;
  Prob: number;
  State: number;
};

export type GachaElementRecursiveExcelTable = {
  DataList: GachaElementRecursiveExcel[];
};

export type GachaElementRecursiveExcel = {
  ID: number;
  GachaGroupID: number;
  ParcelType: keyof typeof ParcelType;
  ParcelID: number;
  ParcelAmountMin: number;
  ParcelAmountMax: number;
  Prob: number;
  State: number;
};

export type GachaGroupExcelTable = {
  DataList: GachaGroupExcel[];
};

export type GachaGroupExcel = {
  ID: number;
  NameKr: string;
  IsRecursive: boolean;
  GroupType: keyof typeof GachaGroupType;
};

export type GoodsExcelTable = {
  DataList: GoodsExcel[];
};

export type GoodsExcel = {
  Id: number;
  Type: number;
  Rarity: keyof typeof Rarity;
  IconPath: string;
  ConsumeParcelType: (keyof typeof ParcelType)[];
  ConsumeParcelId: number[];
  ConsumeParcelAmount: number[];
  ConsumeCondition: (keyof typeof ConsumeCondition)[];
  ConsumeGachaTicketType: keyof typeof GachaTicketType;
  ConsumeGachaTicketTypeAmount: number;
  ProductIdAOS: number;
  ProductIdiOS: number;
  ConsumeExtraStep: number[];
  ConsumeExtraAmount: number[];
  State: number;
  ParcelType: (keyof typeof ParcelType)[];
  ParcelId: number[];
  ParcelAmount: number[];
};

export type GroundExcelTable = {
  DataList: GroundExcel[];
};

export type GroundExcel = {
  Id: number;
  StageFileName: string[];
  GroundSceneName: string;
  FormationGroupId: number;
  StageTopography: keyof typeof StageTopography;
  EnemyBulletType: keyof typeof BulletType;
  EnemyArmorType: keyof typeof ArmorType;
  LevelNPC: number;
  LevelMinion: number;
  LevelElite: number;
  LevelChampion: number;
  LevelBoss: number;
  ObstacleLevel: number;
  GradeNPC: number;
  GradeMinion: number;
  GradeElite: number;
  GradeChampion: number;
  GradeBoss: number;
  PlayerSightPointAdd: number;
  PlayerSightPointRate: number;
  PlayerAttackRangeAdd: number;
  PlayerAttackRangeRate: number;
  EnemySightPointAdd: number;
  EnemySightPointRate: number;
  EnemyAttackRangeAdd: number;
  EnemyAttackRangeRate: number;
  PlayerSkillRangeAdd: number;
  PlayerSkillRangeRate: number;
  EnemySkillRangeAdd: number;
  EnemySkillRangeRate: number;
  PlayerMinimumPositionGapRate: number;
  EnemyMinimumPositionGapRate: number;
  PlayerSightRangeMax: boolean;
  EnemySightRangeMax: boolean;
  TSSAirUnitHeight: number;
  IsPhaseBGM: boolean;
  BGMId: number;
  WarningUI: boolean;
  TSSHatchOpen: boolean;
  ForcedTacticSpeed: keyof typeof TacticSpeed;
  ForcedSkillUse: keyof typeof TacticSkillUse;
  ShowNPCSkillCutIn: keyof typeof ShowSkillCutIn;
  ImmuneHitBeforeTimeOutEnd: boolean;
  UIBattleHideFromScratch: boolean;
  BattleReadyTimelinePath: string;
  BeforeVictoryTimelinePath: string;
  HideNPCWhenBattleEnd: boolean;
  UIHpScale: number;
  UIEmojiScale: number;
  UISkillMainLogScale: number;
  AllyPassiveSkillId: string[];
  AllyPassiveSkillLevel: number[];
  EnemyPassiveSkillId: string[];
  EnemyPassiveSkillLevel: number[];
};

export type GroundGridFlat = {
  X: number;
  Y: number;
  StartX: number;
  StartY: number;
  Gap: number;
  Nodes: GroundNodeFlat[];
  Version: string;
};

export type GroundNodeFlat = {
  X: number;
  Y: number;
  IsCanNotUseSkill: boolean;
  Position: GroundVector3;
  NodeType: keyof typeof GroundNodeType;
  OriginalNodeType: keyof typeof GroundNodeType;
};

export type GroundModuleRewardExcelTable = {
  DataList: GroundModuleRewardExcel[];
};

export type GroundModuleRewardExcel = {
  GroupId: number;
  RewardParcelType: keyof typeof ParcelType;
  RewardParcelId: number;
  RewardParcelAmount: number;
  RewardParcelProbability: number;
  IsDisplayed: boolean;
  DropItemModelPrefabPath: string;
};

export type GroundNodeLayerFlat = {
  Layers: number[];
};

export type GuideMissionExcelTable = {
  DataList: GuideMissionExcel[];
};

export type GuideMissionExcel = {
  SeasonId: number;
  Id: number;
  Category: keyof typeof MissionCategory;
  IsLegacy: boolean;
  TabNumber: number;
  PreMissionId: number[];
  Description: number;
  ToastDisplayType: keyof typeof MissionToastDisplayConditionType;
  ToastImagePath: string;
  ShortcutUI: string[];
  CompleteConditionType: keyof typeof MissionCompleteConditionType;
  CompleteConditionCount: number;
  CompleteConditionParameter: number[];
  CompleteConditionParameterTag: (keyof typeof Tag)[];
  IsAutoClearForScenario: boolean;
  MissionRewardParcelType: (keyof typeof ParcelType)[];
  MissionRewardParcelId: number[];
  MissionRewardAmount: number[];
};

export type GuideMissionOpenStageConditionExcelTable = {
  DataList: GuideMissionOpenStageConditionExcel[];
};

export type GuideMissionOpenStageConditionExcel = {
  SeasonId: number;
  OrderNumber: number;
  TabLocalizeCode: string;
  ClearScenarioModeId: number;
  LockScenarioTextLocailzeCode: string;
  ShortcutScenarioUI: string;
  ClearStageId: number;
  LockStageTextLocailzeCode: string;
  ShortcutStageUI: string;
};

export type GuideMissionSeasonExcelTable = {
  DataList: GuideMissionSeasonExcel[];
};

export type GuideMissionSeasonExcel = {
  Id: number;
  TitleLocalizeCode: string;
  PermanentInfomationLocalizeCode: string;
  InfomationLocalizeCode: string;
  AccountType: keyof typeof AccountState;
  Enabled: boolean;
  BannerOpenDate: string;
  StartDate: string;
  StartableEndDate: string;
  EndDate: string;
  CloseBannerAfterCompletion: boolean;
  MaximumLoginCount: number;
  ExpiryDate: number;
  SpineCharacterId: number;
  RequirementParcelImage: string;
  RewardImage: string;
  LobbyBannerImage: string;
  BackgroundImage: string;
  TitleImage: string;
  RequirementParcelType: keyof typeof ParcelType;
  RequirementParcelId: number;
  RequirementParcelAmount: number;
  TabType: keyof typeof GuideMissionTabType;
  IsPermanent: boolean;
  PreSeasonId: number;
};

export type HpBarAbbreviationExcelTable = {
  DataList: HpBarAbbreviationExcel[];
};

export type HpBarAbbreviationExcel = {
  MonsterLv: number;
  StandardHpBar: number;
  RaidBossHpBar: number;
};

export type IdCardBackgroundExcelTable = {
  DataList: IdCardBackgroundExcel[];
};

export type IdCardBackgroundExcel = {
  Id: number;
  Rarity: keyof typeof Rarity;
  DisplayOrder: number;
  CollectionVisible: boolean;
  IsDefault: boolean;
  BgPath: string;
  LocalizeEtcId: number;
  Icon: string;
};

export type InformationStrategyObjectExcelTable = {
  DataList: InformationStrategyObjectExcel[];
};

export type InformationStrategyObjectExcel = {
  Id: number;
  StageId: number;
  PageName: string;
  LocalizeCodeId: string;
};

export type ItemExcelTable = {
  DataList: ItemExcel[];
};

export type ItemExcel = {
  Id: number;
  GroupId: number;
  Rarity: keyof typeof Rarity;
  ProductionStep: keyof typeof ProductionStep;
  LocalizeEtcId: number;
  ItemCategory: keyof typeof ItemCategory;
  Quality: number;
  Icon: string;
  SpriteName: string;
  StackableMax: number;
  StackableFunction: number;
  ImmediateUse: boolean;
  UsingResultParcelType: keyof typeof ParcelType;
  UsingResultId: number;
  UsingResultAmount: number;
  MailType: keyof typeof MailType;
  ExpiryChangeParcelType: keyof typeof ParcelType;
  ExpiryChangeId: number;
  ExpiryChangeAmount: number;
  CanTierUpgrade: boolean;
  TierUpgradeRecipeCraftId: number;
  Tags: (keyof typeof Tag)[];
  CraftQualityTier0: number;
  CraftQualityTier1: number;
  CraftQualityTier2: number;
  ShiftingCraftQuality: number;
  MaxGiftTags: number;
  ShopCategory: (keyof typeof ShopCategoryType)[];
  ExpirationDateTime: string;
  ExpirationNotifyDateIn: number;
  ShortcutTypeId: number;
  GachaTicket: keyof typeof GachaTicketType;
};

export type KnockBackExcelTable = {
  DataList: KnockBackExcel[];
};

export type KnockBackExcel = {
  Index: number;
  Dist: number;
  Speed: number;
};

export type LimitedStageExcelTable = {
  DataList: LimitedStageExcel[];
};

export type LimitedStageExcel = {
  Id: number;
  Name: string;
  SeasonId: number;
  StageDifficulty: keyof typeof StageDifficulty;
  StageNumber: string;
  StageDisplay: number;
  PrevStageId: number;
  OpenDate: number;
  OpenEventPoint: number;
  BattleDuration: number;
  StageEnterCostType: keyof typeof ParcelType;
  StageEnterCostId: number;
  StageEnterCostAmount: number;
  StageEnterEchelonCount: number;
  StarConditionTacticRankSCount: number;
  StarConditionTurnCount: number;
  EnterScenarioGroupId: number[];
  ClearScenarioGroupId: number[];
  StrategyMap: string;
  StrategyMapBG: string;
  StageRewardId: number;
  MaxTurn: number;
  StageTopography: keyof typeof StageTopography;
  RecommandLevel: number;
  BgmId: string;
  StrategyEnvironment: keyof typeof StrategyEnvironment;
  GroundID: number;
  ContentType: keyof typeof ContentType;
  BGMId: number;
  InstantClear: boolean;
  BuffContentId: number;
  ChallengeDisplay: boolean;
};

export type LimitedStageRewardExcelTable = {
  DataList: LimitedStageRewardExcel[];
};

export type LimitedStageRewardExcel = {
  GroupId: number;
  RewardTag: keyof typeof RewardTag;
  RewardProb: number;
  RewardParcelType: keyof typeof ParcelType;
  RewardId: number;
  RewardAmount: number;
  IsDisplayed: boolean;
};

export type LimitedStageSeasonExcelTable = {
  DataList: LimitedStageSeasonExcel[];
};

export type LimitedStageSeasonExcel = {
  Id: number;
  StartDate: string;
  EndDate: string;
  TypeACount: number;
  TypeBCount: number;
  TypeCCount: number;
};

export type LocalizeCharProfileExcelTable = {
  DataList: LocalizeCharProfileExcel[];
};

export type LocalizeCharProfileExcel = {
  CharacterId: number;
  StatusMessageKr: string;
  StatusMessageJp: string;
  FullNameKr: string;
  FullNameJp: string;
  FamilyNameKr: string;
  FamilyNameRubyKr: string;
  PersonalNameKr: string;
  PersonalNameRubyKr: string;
  FamilyNameJp: string;
  FamilyNameRubyJp: string;
  PersonalNameJp: string;
  PersonalNameRubyJp: string;
  SchoolYearKr: string;
  SchoolYearJp: string;
  CharacterAgeKr: string;
  CharacterAgeJp: string;
  BirthDay: string;
  BirthdayKr: string;
  BirthdayJp: string;
  CharHeightKr: string;
  CharHeightJp: string;
  DesignerNameKr: string;
  DesignerNameJp: string;
  IllustratorNameKr: string;
  IllustratorNameJp: string;
  CharacterVoiceKr: string;
  CharacterVoiceJp: string;
  HobbyKr: string;
  HobbyJp: string;
  WeaponNameKr: string;
  WeaponDescKr: string;
  WeaponNameJp: string;
  WeaponDescJp: string;
  ProfileIntroductionKr: string;
  ProfileIntroductionJp: string;
  CharacterSSRNewKr: string;
  CharacterSSRNewJp: string;
};

export type LocalizeCodeInBuildExcelTable = {
  DataList: LocalizeCodeInBuildExcel[];
};

export type LocalizeCodeInBuildExcel = {
  Key: number;
  Kr: string;
  Jp: string;
};

export type LocalizeEtcExcelTable = {
  DataList: LocalizeEtcExcel[];
};

export type LocalizeEtcExcel = {
  Key: number;
  NameKr: string;
  DescriptionKr: string;
  NameJp: string;
  DescriptionJp: string;
};

export type LocalizeFieldExcelTable = {
  DataList: LocalizeFieldExcel[];
};

export type LocalizeFieldExcel = {
  Key: number;
  Kr: string;
  Jp: string;
};

export type LocalizeGachaShopExcelTable = {
  DataList: LocalizeGachaShopExcel[];
};

export type LocalizeGachaShopExcel = {
  GachaShopId: number;
  TabNameKr: string;
  TabNameJp: string;
  TitleNameKr: string;
  TitleNameJp: string;
  SubTitleKr: string;
  SubTitleJp: string;
  GachaDescriptionKr: string;
  GachaDescriptionJp: string;
};

export type LogicEffectCommonVisualExcelTable = {
  DataList: LogicEffectCommonVisualExcel[];
};

export type LogicEffectCommonVisualExcel = {
  StringID: number;
  IconSpriteName: string;
  IconDispelColor: number[];
  ParticleEnterPath: string;
  ParticleEnterSocket: keyof typeof EffectBone;
  ParticleLoopPath: string;
  ParticleLoopSocket: keyof typeof EffectBone;
  ParticleEndPath: string;
  ParticleEndSocket: keyof typeof EffectBone;
  ParticleApplyPath: string;
  ParticleApplySocket: keyof typeof EffectBone;
  ParticleRemovedPath: string;
  ParticleRemovedSocket: keyof typeof EffectBone;
};

export type MemoryLobbyExcelTable = {
  DataList: MemoryLobbyExcel[];
};

export type MemoryLobbyExcel = {
  Id: number;
  ProductionStep: keyof typeof ProductionStep;
  LocalizeEtcId: number;
  CharacterId: number;
  PrefabName: string;
  MemoryLobbyCategory: keyof typeof MemoryLobbyCategory;
  SlotTextureName: string;
  RewardTextureName: string;
  BGMId: number;
  AudioClipJp: string;
  AudioClipKr: string;
};

export type MiniGameAudioAnimatorExcelTable = {
  DataList: MiniGameAudioAnimatorExcel[];
};

export type MiniGameAudioAnimatorExcel = {
  ControllerNameHash: number;
  VoiceNamePrefix: string;
  StateNameHash: number;
  StateName: string;
  IgnoreInterruptDelay: boolean;
  IgnoreInterruptPlay: boolean;
  Volume: number;
  Delay: number;
  AudioPriority: number;
  AudioClipPath: string[];
  VoiceHash: number[];
};

export type MiniGameMissionExcelTable = {
  DataList: MiniGameMissionExcel[];
};

export type MiniGameMissionExcel = {
  Id: number;
  EventContentId: number;
  GroupId: number;
  GroupName: string;
  Category: keyof typeof MissionCategory;
  Description: number;
  ResetType: keyof typeof MissionResetType;
  ToastDisplayType: keyof typeof MissionToastDisplayConditionType;
  ToastImagePath: string;
  ViewFlag: boolean;
  DisplayOrder: number;
  PreMissionId: number[];
  AccountType: keyof typeof AccountState;
  AccountLevel: number;
  ShortcutUI: string[];
  CompleteConditionType: keyof typeof MissionCompleteConditionType;
  IsCompleteExtensionTime: boolean;
  CompleteConditionCount: number;
  CompleteConditionParameter: number[];
  CompleteConditionParameterTag: (keyof typeof Tag)[];
  RewardIcon: string;
  MissionRewardParcelType: (keyof typeof ParcelType)[];
  MissionRewardParcelId: number[];
  MissionRewardAmount: number[];
};

export type MiniGamePlayGuideExcelTable = {
  DataList: MiniGamePlayGuideExcel[];
};

export type MiniGamePlayGuideExcel = {
  Id: number;
  EventContentId: number;
  DisplayOrder: number;
  GuideTitle: string;
  GuideImagePath: string;
  GuideText: string;
};

export type MiniGameRhythmBgmExcelTable = {
  DataList: MiniGameRhythmBgmExcel[];
};

export type MiniGameRhythmBgmExcel = {
  RhythmBgmId: number;
  EventContentId: number;
  StageSelectImagePath: string;
  Bpm: number;
  Bgm: number;
  BgmNameText: string;
  BgmArtistText: string;
  HasLyricist: boolean;
  BgmComposerText: string;
  BgmLength: number;
};

export type MiniGameRhythmExcelTable = {
  DataList: MiniGameRhythmExcel[];
};

export type MiniGameRhythmExcel = {
  UniqueId: number;
  RhythmBgmId: number;
  PresetName: string;
  StageDifficulty: keyof typeof Difficulty;
  IsSpecial: boolean;
  OpenStageScoreAmount: number;
  MaxHp: number;
  MissDamage: number;
  CriticalHPRestoreValue: number;
  MaxScore: number;
  FeverScoreRate: number;
  NoteScoreRate: number;
  ComboScoreRate: number;
  AttackScoreRate: number;
  FeverCriticalRate: number;
  FeverAttackRate: number;
  MaxHpScore: number;
  RhythmFileName: string;
  ArtLevelSceneName: string;
  ComboImagePath: string;
};

export type MiniGameShootingCharacterExcelTable = {
  DataList: MiniGameShootingCharacterExcel[];
};

export type MiniGameShootingCharacterExcel = {
  UniqueId: number;
  SpineResourceName: string;
  BodyRadius: number;
  ModelPrefabName: string;
  NormalAttackSkillData: string;
  PublicSkillData: string[];
  DeathSkillData: string;
  MaxHP: number;
  AttackPower: number;
  DefensePower: number;
  CriticalRate: number;
  CriticalDamageRate: number;
  AttackRange: number;
  MoveSpeed: number;
  ShotTime: number;
  IsBoss: boolean;
  Scale: number;
  IgnoreObstacleCheck: boolean;
  CharacterVoiceGroupId: number;
};

export type MiniGameShootingGeasExcelTable = {
  DataList: MiniGameShootingGeasExcel[];
};

export type MiniGameShootingGeasExcel = {
  UniqueId: number;
  GeasType: keyof typeof Geas;
  Icon: string;
  Probability: number;
  MaxOverlapCount: number;
  GeasData: string;
  NeedGeasId: number;
  HideInPausePopup: boolean;
};

export type MiniGameShootingStageExcelTable = {
  DataList: MiniGameShootingStageExcel[];
};

export type MiniGameShootingStageExcel = {
  UniqueId: number;
  BgmId: number;
  CostGoodsId: number;
  Difficulty: keyof typeof Difficulty;
  DesignLevel: string;
  ArtLevel: string;
  StartBattleDuration: number;
  DefaultBattleDuration: number;
  DefaultLogicEffect: string;
  CameraSizeRate: number;
  EventContentStageRewardId: number;
};

export type MiniGameShootingStageRewardExcelTable = {
  DataList: MiniGameShootingStageRewardExcel[];
};

export type MiniGameShootingStageRewardExcel = {
  GroupId: number;
  RewardId: number;
  ClearSection: number;
  RewardParcelType: (keyof typeof ParcelType)[];
  RewardParcelId: number[];
  RewardParcelAmount: number[];
};

export type MinigameTBGDiceExcelTable = {
  DataList: MinigameTBGDiceExcel[];
};

export type MinigameTBGDiceExcel = {
  EventContentId: number;
  UniqueId: number;
  DiceGroup: number;
  DiceResult: number;
  Prob: number;
  ProbModifyCondition: (keyof typeof TBGProbModifyCondition)[];
  ProbModifyValue: number[];
  ProbModifyLimit: number[];
};

export type MinigameTBGEncounterExcelTable = {
  DataList: MinigameTBGEncounterExcel[];
};

export type MinigameTBGEncounterExcel = {
  EventContentId: number;
  UniqueId: number;
  AllThema: boolean;
  ThemaIndex: number;
  ThemaType: keyof typeof TBGThemaType;
  ObjectType: keyof typeof TBGObjectType;
  EnemyImagePath: string;
  EnemyPrefabName: string;
  EnemyNameLocalize: string;
  OptionGroupId: number;
  RewardHide: boolean;
  EncounterTitleLocalize: string;
  StoryImagePath: string;
  BeforeStoryLocalize: string;
  BeforeStoryOption1Localize: string;
  BeforeStoryOption2Localize: string;
  BeforeStoryOption3Localize: string;
  AllyAttackLocalize: string;
  EnemyAttackLocalize: string;
  AttackDefenceLocalize: string;
  ClearStoryLocalize: string;
  DefeatStoryLocalize: string;
  RunawayStoryLocalize: string;
};

export type MinigameTBGEncounterOptionExcelTable = {
  DataList: MinigameTBGEncounterOptionExcel[];
};

export type MinigameTBGEncounterOptionExcel = {
  OptionGroupId: number;
  UniqueId: number;
  SlotIndex: number;
  OptionTitleLocalize: string;
  OptionSuccessLocalize: string;
  OptionSuccessRewardGroupId: number;
  OptionSuccessOrHigherDiceCount: number;
  OptionGreatSuccessOrHigherDiceCount: number;
  OptionFailLocalize: string;
  OptionFailLessDiceCount: number;
  RunawayOrHigherDiceCount: number;
  RewardHide: boolean;
};

export type MinigameTBGEncounterRewardExcelTable = {
  DataList: MinigameTBGEncounterRewardExcel[];
};

export type MinigameTBGEncounterRewardExcel = {
  GroupId: number;
  UniqueId: number;
  TBGOptionSuccessType: keyof typeof TBGOptionSuccessType;
  Paremeter: number;
  ParcelType: keyof typeof ParcelType;
  ParcelId: number;
  Amount: number;
  Prob: number;
};

export type MinigameTBGItemExcelTable = {
  DataList: MinigameTBGItemExcel[];
};

export type MinigameTBGItemExcel = {
  UniqueId: number;
  ItemType: keyof typeof TBGItemType;
  TBGItemEffectType: keyof typeof TBGItemEffectType;
  ItemParameter: number;
  LocalizeETCId: string;
  Icon: string;
  BuffIcon: string;
  EncounterCount: number;
  DiceEffectAniClip: string;
};

export type MinigameTBGObjectExcelTable = {
  DataList: MinigameTBGObjectExcel[];
};

export type MinigameTBGObjectExcel = {
  UniqueId: number;
  Key: string;
  PrefabName: string;
  ObjectType: keyof typeof TBGObjectType;
  ObjectCostType: keyof typeof ParcelType;
  ObjectCostId: number;
  ObjectCostAmount: number;
  Disposable: boolean;
  ReEncounterCost: boolean;
};

export type MinigameTBGSeasonExcelTable = {
  DataList: MinigameTBGSeasonExcel[];
};

export type MinigameTBGSeasonExcel = {
  EventContentId: number;
  ItemSlot: number;
  DefaultEchelonHp: number;
  DefaultItemDiceId: number;
  EchelonSlot1CharacterId: number;
  EchelonSlot2CharacterId: number;
  EchelonSlot3CharacterId: number;
  EchelonSlot4CharacterId: number;
  EchelonSlot1Portrait: string;
  EchelonSlot2Portrait: string;
  EchelonSlot3Portrait: string;
  EchelonSlot4Portrait: string;
  EventUseCostType: keyof typeof ParcelType;
  EventUseCostId: number;
  EchelonRevivalCostType: keyof typeof ParcelType;
  EchelonRevivalCostId: number;
  EchelonRevivalCostAmount: number;
  EnemyBossHP: number;
  EnemyMinionHP: number;
  AttackDamage: number;
  CriticalAttackDamage: number;
  RoundItemSelectLimit: number;
  InstantClearRound: number;
  MaxHp: number;
  MapImagePath: string;
  MapNameLocalize: string;
};

export type MinigameTBGThemaExcelTable = {
  DataList: MinigameTBGThemaExcel[];
};

export type MinigameTBGThemaExcel = {
  EventContentId: number;
  UniqueId: number;
  ThemaIndex: number;
  ThemaType: keyof typeof TBGThemaType;
  ThemaMap: string;
  ThemaMapBG: string;
  PortalCondition: (keyof typeof TBGPortalCondition)[];
  PortalConditionParameter: string[];
  ThemaNameLocalize: string;
  ThemaLoadingImage: string;
  ThemaPlayerPrefab: string;
  ThemaLeaderId: number;
  ThemaGoalLocalize: string;
  InstantClearCostAmount: number;
};

export type MiniGameTBGThemaRewardExcelTable = {
  DataList: MiniGameTBGThemaRewardExcel[];
};

export type MiniGameTBGThemaRewardExcel = {
  EventContentId: number;
  ThemaRound: number;
  ThemaUniqueId: number;
  IsLoop: boolean;
  MiniGameTBGThemaRewardType: keyof typeof MiniGameTBGThemaRewardType;
  RewardParcelType: (keyof typeof ParcelType)[];
  RewardParcelId: number[];
  RewardParcelAmount: number[];
};

export type MinigameTBGVoiceExcelTable = {
  DataList: MinigameTBGVoiceExcel[];
};

export type MinigameTBGVoiceExcel = {
  EventContentId: number;
  UniqueId: number;
  VoiceCondition: keyof typeof TBGVoiceCondition;
  VoiceId: number;
};

export type MissionExcelTable = {
  DataList: MissionExcel[];
};

export type MissionExcel = {
  Id: number;
  Category: keyof typeof MissionCategory;
  Description: number;
  ResetType: keyof typeof MissionResetType;
  ToastDisplayType: keyof typeof MissionToastDisplayConditionType;
  ToastImagePath: string;
  ViewFlag: boolean;
  Limit: boolean;
  StartDate: string;
  EndDate: string;
  EndDay: number;
  StartableEndDate: string;
  DateAutoRefer: keyof typeof ContentType;
  DisplayOrder: number;
  PreMissionId: number[];
  AccountType: keyof typeof AccountState;
  AccountLevel: number;
  ContentTags: (keyof typeof SuddenMissionContentType)[];
  ShortcutUI: string[];
  ChallengeStageShortcut: number;
  CompleteConditionType: keyof typeof MissionCompleteConditionType;
  CompleteConditionCount: number;
  CompleteConditionParameter: number[];
  CompleteConditionParameterTag: (keyof typeof Tag)[];
  RewardIcon: string;
  MissionRewardParcelType: (keyof typeof ParcelType)[];
  MissionRewardParcelId: number[];
  MissionRewardAmount: number[];
};

export type NormalSkillTemplateExcelTable = {
  DataList: NormalSkillTemplateExcel[];
};

export type NormalSkillTemplateExcel = {
  Index: number;
  FirstCoolTime: number;
  CoolTime: number;
  MultiAni: boolean;
};

export type ObstacleExcelTable = {
  DataList: ObstacleExcel[];
};

export type ObstacleExcel = {
  Index: number;
  PrefabName: string;
  JumpAble: boolean;
  SubOffset: number[];
  X: number;
  Z: number;
  Hp: number;
  MaxHp: number;
  BlockRate: number;
  EvasionRate: number;
  DestroyType: keyof typeof ObstacleDestroyType;
  Point1Offeset: number[];
  EnemyPoint1Osset: number[];
  Point2Offeset: number[];
  EnemyPoint2Osset: number[];
  SubObstacleID: number[];
};

export type ObstacleFireLineCheckExcelTable = {
  DataList: ObstacleFireLineCheckExcel[];
};

export type ObstacleFireLineCheckExcel = {
  MyObstacleFireLineCheck: boolean;
  AllyObstacleFireLineCheck: boolean;
  EnemyObstacleFireLineCheck: boolean;
  EmptyObstacleFireLineCheck: boolean;
};

export type ObstacleStatExcelTable = {
  DataList: ObstacleStatExcel[];
};

export type ObstacleStatExcel = {
  StringID: number;
  Name: string;
  MaxHP1: number;
  MaxHP100: number;
  BlockRate: number;
  Dodge: number;
  CanNotStandRange: number;
  HighlightFloaterHeight: number;
};

export type OpenConditionExcelTable = {
  DataList: OpenConditionExcel[];
};

export type OpenConditionExcel = {
  OpenConditionContentType: keyof typeof OpenConditionContent;
  LockUI: string[];
  ShortcutPopupPriority: number;
  ShortcutUIName: string[];
  ShortcutParam: number;
  Scene: string;
  HideWhenLocked: boolean;
  AccountLevel: number;
  ScenarioModeId: number;
  CampaignStageId: number;
  MultipleConditionCheckType: keyof typeof MultipleConditionCheckType;
  OpenDayOfWeek: keyof typeof WeekDay;
  OpenHour: number;
  CloseDayOfWeek: keyof typeof WeekDay;
  CloseHour: number;
  OpenedCafeId: number;
  CafeIdforCafeRank: number;
  CafeRank: number;
  ContentsOpenShow: boolean;
  ContentsOpenShortcutUI: string;
};

export type ParcelAutoSynthExcelTable = {
  DataList: ParcelAutoSynthExcel[];
};

export type ParcelAutoSynthExcel = {
  RequireParcelType: keyof typeof ParcelType;
  RequireParcelId: number;
  RequireParcelAmount: number;
  SynthStartAmount: number;
  SynthEndAmount: number;
  SynthMaxItem: boolean;
  ResultParcelType: keyof typeof ParcelType;
  ResultParcelId: number;
  ResultParcelAmount: number;
};

export type PersonalityExcelTable = {
  DataList: PersonalityExcel[];
};

export type PersonalityExcel = {
  Id: number;
  Name: string;
};

export type PickupDuplicateBonusExcelTable = {
  DataList: PickupDuplicateBonusExcel[];
};

export type PickupDuplicateBonusExcel = {
  Id: number;
  ShopCategoryType: keyof typeof ShopCategoryType;
  ShopId: number;
  PickupCharacterId: number;
  RewardParcelType: keyof typeof ParcelType;
  RewardParcelId: number;
  RewardParcelAmount: number;
};

export type PresetCharacterGroupExcelTable = {
  DataList: PresetCharacterGroupExcel[];
};

export type PresetCharacterGroupExcel = {
  PresetCharacterGroupId: number;
  GetPresetType: string;
  Level: number;
  Exp: number;
  FavorExp: number;
  FavorRank: number;
  StarGrade: number;
  ExSkillLevel: number;
  PassiveSkillLevel: number;
  ExtraPassiveSkillLevel: number;
  CommonSkillLevel: number;
  LeaderSkillLevel: number;
  EquipSlot01: boolean;
  EquipSlotTier01: number;
  EquipSlotLevel01: number;
  EquipSlot02: boolean;
  EquipSlotTier02: number;
  EquipSlotLevel02: number;
  EquipSlot03: boolean;
  EquipSlotTier03: number;
  EquipSlotLevel03: number;
  EquipCharacterWeapon: boolean;
  EquipCharacterWeaponTier: number;
  EquipCharacterWeaponLevel: number;
  EquipCharacterGear: boolean;
  EquipCharacterGearTier: number;
  EquipCharacterGearLevel: number;
  PotentialType01: keyof typeof PotentialStatBonusRateType;
  PotentialLevel01: number;
  PotentialType02: keyof typeof PotentialStatBonusRateType;
  PotentialLevel02: number;
  PotentialType03: keyof typeof PotentialStatBonusRateType;
  PotentialLevel03: number;
};

export type PresetCharacterGroupSettingExcelTable = {
  DataList: PresetCharacterGroupSettingExcel[];
};

export type PresetCharacterGroupSettingExcel = {
  CharacterId: number;
  ArenaSimulatorFixed: boolean;
  PresetType: string[];
};

export type PresetParcelsExcelTable = {
  DataList: PresetParcelsExcel[];
};

export type PresetParcelsExcel = {
  ParcelType: keyof typeof ParcelType;
  ParcelId: number;
  PresetGroupId: number;
  ParcelAmount: number;
};

export type ProductExcelTable = {
  DataList: ProductExcel[];
};

export type ProductExcel = {
  Id: number;
  ProductId: string;
  StoreType: keyof typeof StoreType;
  Price: number;
  PriceReference: string;
  PurchasePeriodType: keyof typeof PurchasePeriodType;
  PurchasePeriodLimit: number;
  ParcelType: (keyof typeof ParcelType)[];
  ParcelId: number[];
  ParcelAmount: number[];
};

export type ProductMonthlyExcelTable = {
  DataList: ProductMonthlyExcel[];
};

export type ProductMonthlyExcel = {
  Id: number;
  ProductId: string;
  StoreType: keyof typeof StoreType;
  Price: number;
  PriceReference: string;
  ProductTagType: keyof typeof ProductTagType;
  MonthlyDays: number;
  ParcelType: (keyof typeof ParcelType)[];
  ParcelId: number[];
  ParcelAmount: number[];
  EnterCostReduceGroupId: number;
  DailyParcelType: (keyof typeof ParcelType)[];
  DailyParcelId: number[];
  DailyParcelAmount: number[];
};

export type PropVector3 = {
  X: number;
  Y: number;
  Z: number;
};

export type PropMotion = {
  Name: string;
  Positions: PropVector3[];
  Rotations: PropVector3[];
};

export type PropRootMotionFlat = {
  RootMotions: PropMotion[];
};

export type ProtocolSettingExcelTable = {
  DataList: ProtocolSettingExcel[];
};

export type ProtocolSettingExcel = {
  Protocol: string;
  OpenConditionContent: keyof typeof OpenConditionContent;
  Currency: boolean;
  Inventory: boolean;
  Mail: boolean;
};

export type RaidRankingRewardExcelTable = {
  DataList: RaidRankingRewardExcel[];
};

export type RaidRankingRewardExcel = {
  RankingRewardGroupId: number;
  Id: number;
  RankStart: number;
  RankEnd: number;
  PercentRankStart: number;
  PercentRankEnd: number;
  Tier: number;
  RewardParcelType: (keyof typeof ParcelType)[];
  RewardParcelUniqueId: number[];
  RewardParcelUniqueName: string[];
  RewardParcelAmount: number[];
};

export type RaidSeasonManageExcelTable = {
  DataList: RaidSeasonManageExcel[];
};

export type RaidSeasonManageExcel = {
  SeasonId: number;
  SeasonDisplay: number;
  SeasonStartData: string;
  SeasonEndData: string;
  SettlementEndDate: string;
  OpenRaidBossGroup: string[];
  RankingRewardGroupId: number;
  MaxSeasonRewardGauage: number;
  StackedSeasonRewardGauge: number[];
  SeasonRewardId: number[];
};

export type RaidStageExcelTable = {
  DataList: RaidStageExcel[];
};

export type RaidStageExcel = {
  Id: number;
  UseBossIndex: boolean;
  UseBossAIPhaseSync: boolean;
  RaidBossGroup: string;
  PortraitPath: string;
  BGPath: string;
  RaidCharacterId: number;
  BossCharacterId: number[];
  Difficulty: keyof typeof Difficulty;
  DifficultyOpenCondition: boolean;
  MaxPlayerCount: number;
  RaidRoomLifeTime: number;
  BattleDuration: number;
  GroundId: number;
  GroundDevName: string;
  EnterTimeLine: string;
  TacticEnvironment: keyof typeof TacticEnvironment;
  DefaultClearScore: number;
  MaximumScore: number;
  PerSecondMinusScore: number;
  HPPercentScore: number;
  MinimumAcquisitionScore: number;
  MaximumAcquisitionScore: number;
  RaidRewardGroupId: number;
  BattleReadyTimelinePath: string[];
  BattleReadyTimelinePhaseStart: number[];
  BattleReadyTimelinePhaseEnd: number[];
  VictoryTimelinePath: string;
  PhaseChangeTimelinePath: string;
  TimeLinePhase: number;
  EnterScenarioKey: number;
  ClearScenarioKey: number;
  ShowSkillCard: boolean;
  BossBGInfoKey: number;
  EchelonExtensionType: keyof typeof EchelonExtensionType;
};

export type RaidStageRewardExcelTable = {
  DataList: RaidStageRewardExcel[];
};

export type RaidStageRewardExcel = {
  GroupId: number;
  IsClearStageRewardHideInfo: boolean;
  ClearStageRewardProb: number;
  ClearStageRewardParcelType: keyof typeof ParcelType;
  ClearStageRewardParcelUniqueID: number;
  ClearStageRewardParcelUniqueName: string;
  ClearStageRewardAmount: number;
};

export type RaidStageSeasonRewardExcelTable = {
  DataList: RaidStageSeasonRewardExcel[];
};

export type RaidStageSeasonRewardExcel = {
  SeasonRewardId: number;
  SeasonRewardParcelType: (keyof typeof ParcelType)[];
  SeasonRewardParcelUniqueId: number[];
  SeasonRewardParcelUniqueName: string[];
  SeasonRewardAmount: number[];
};

export type RecipeCraftExcelTable = {
  DataList: RecipeCraftExcel[];
};

export type RecipeCraftExcel = {
  Id: number;
  DevName: string;
  RecipeType: keyof typeof RecipeType;
  RecipeIngredientId: number;
  RecipeIngredientDevName: string;
  ParcelType: (keyof typeof ParcelType)[];
  ParcelId: number[];
  ParcelDevName: string[];
  ResultAmountMin: number[];
  ResultAmountMax: number[];
};

export type RecipeExcelTable = {
  DataList: RecipeExcel[];
};

export type RecipeExcel = {
  Id: number;
  RecipeType: keyof typeof RecipeType;
  RecipeIngredientId: number;
  RecipeSelectionGroupId: number;
  ParcelType: (keyof typeof ParcelType)[];
  ParcelId: number[];
  ResultAmountMin: number[];
  ResultAmountMax: number[];
};

export type RecipeIngredientExcelTable = {
  DataList: RecipeIngredientExcel[];
};

export type RecipeIngredientExcel = {
  Id: number;
  RecipeType: keyof typeof RecipeType;
  CostParcelType: (keyof typeof ParcelType)[];
  CostId: number[];
  CostAmount: number[];
  IngredientParcelType: (keyof typeof ParcelType)[];
  IngredientId: number[];
  IngredientAmount: number[];
  CostTimeInSecond: number;
};

export type RecipeSelectionAutoUseExcelTable = {
  DataList: RecipeSelectionAutoUseExcel[];
};

export type RecipeSelectionAutoUseExcel = {
  Id: number;
  ParcelType: keyof typeof ParcelType;
  TargetItemId: number;
  Priority: number[];
};

export type RecipeSelectionGroupExcelTable = {
  DataList: RecipeSelectionGroupExcel[];
};

export type RecipeSelectionGroupExcel = {
  RecipeSelectionGroupId: number;
  RecipeSelectionGroupComponentId: number;
  ParcelType: keyof typeof ParcelType;
  ParcelId: number;
  ResultAmountMin: number;
  ResultAmountMax: number;
};

export type Position = {
  X: number;
  Z: number;
};

export type Motion = {
  Name: string;
  Positions: Position[];
};

export type MoveEnd = {
  Normal: Motion;
  Stand: Motion;
  Kneel: Motion;
};

export type Form = {
  MoveEnd: MoveEnd;
  PublicSkill: Motion;
};

export type RootMotionFlat = {
  Forms: Form[];
  ExSkills: Motion[];
  MoveLeft: Motion;
  MoveRight: Motion;
};

export type ScenarioExcelTable = {
  DataList: ScenarioExcel[];
};

export type ScenarioExcel = {
  None: (keyof typeof ScenarioBGType)[];
  Idle: (keyof typeof ScenarioCharacterAction)[];
  Cafe: keyof typeof DialogCategory;
  Talk: keyof typeof DialogType;
  Open: keyof typeof StoryCondition;
  EnterConver: keyof typeof EmojiEvent;
  Center: keyof typeof ScenarioZoomAnchors;
  Instant: keyof typeof ScenarioZoomType;
  Prologue: keyof typeof ScenarioContentType;
};

export type ScenarioModeExcelTable = {
  DataList: ScenarioModeExcel[];
};

export type ScenarioModeExcel = {
  ModeId: number;
  ModeType: keyof typeof ScenarioModeTypes;
  SubType: keyof typeof ScenarioModeSubTypes;
  VolumeId: number;
  ChapterId: number;
  EpisodeId: number;
  Hide: boolean;
  Open: boolean;
  IsContinue: boolean;
  EpisodeContinueModeId: number;
  FrontScenarioGroupId: number[];
  StrategyId: number;
  GroundId: number;
  IsDefeatBattle: boolean;
  BattleDuration: number;
  BackScenarioGroupId: number[];
  ClearedModeId: number[];
  ScenarioModeRewardId: number;
  IsScenarioSpecialReward: boolean;
  AccountLevelLimit: number;
  ClearedStageId: number;
  NeedClub: keyof typeof Club;
  NeedClubStudentCount: number;
  NeedTSS: number;
  EventContentId: number;
  EventContentType: keyof typeof EventContentType;
  EventContentCondition: number;
  EventContentConditionGroup: number;
  MapDifficulty: keyof typeof StageDifficulty;
  StepIndex: number;
  RecommendLevel: number;
  EventIconParcelPath: string;
  Lof: boolean;
  StageTopography: keyof typeof StageTopography;
  FixedEchelonId: number;
  CompleteReportEventName: string;
  EchelonExtensionType: keyof typeof EchelonExtensionType;
};

export type ScenarioModeRewardExcelTable = {
  DataList: ScenarioModeRewardExcel[];
};

export type ScenarioModeRewardExcel = {
  ScenarioModeRewardId: number;
  RewardTag: keyof typeof RewardTag;
  RewardProb: number;
  RewardParcelType: keyof typeof ParcelType;
  RewardParcelId: number;
  RewardParcelAmount: number;
  IsDisplayed: boolean;
};

export type ScenarioReplayExcelTable = {
  DataList: ScenarioReplayExcel[];
};

export type ScenarioReplayExcel = {
  ModeId: number;
  VolumeId: number;
  ReplayType: keyof typeof ScenarioModeReplayTypes;
  ChapterId: number;
  EpisodeId: number;
  FrontScenarioGroupId: number[];
  GroundId: number;
  BattleDuration: number;
  BackScenarioGroupId: number[];
};

export type ScenarioScriptField1ExcelTable = {
  DataList: ScenarioScriptField1Excel[];
};

export type ScenarioScriptField1Excel = {
  GroupId: number;
  SelectionGroup: number;
  BGMId: number;
  Sound: string;
  Transition: number;
  BGName: number;
  BGEffect: number;
  PopupFileName: string;
  ScriptKr: string;
  TextJp: string;
  VoiceJp: string;
};

export type SchoolDungeonRewardExcelTable = {
  DataList: SchoolDungeonRewardExcel[];
};

export type SchoolDungeonRewardExcel = {
  GroupId: number;
  DungeonType: keyof typeof SchoolDungeonType;
  RewardTag: keyof typeof RewardTag;
  RewardParcelType: keyof typeof ParcelType;
  RewardParcelId: number;
  RewardParcelAmount: number;
  RewardParcelProbability: number;
  IsDisplayed: boolean;
};

export type SchoolDungeonStageExcelTable = {
  DataList: SchoolDungeonStageExcel[];
};

export type SchoolDungeonStageExcel = {
  StageId: number;
  DungeonType: keyof typeof SchoolDungeonType;
  Difficulty: number;
  BattleDuration: number;
  PrevStageId: number;
  StageEnterCostType: (keyof typeof ParcelType)[];
  StageEnterCostId: number[];
  StageEnterCostAmount: number[];
  StageEnterCostMinimumAmount: number[];
  GroundId: number;
  StarGoal: (keyof typeof StarGoalType)[];
  StarGoalAmount: number[];
  StageTopography: keyof typeof StageTopography;
  RecommandLevel: number;
  StageRewardId: number;
  PlayTimeLimitInSeconds: number;
  EchelonExtensionType: keyof typeof EchelonExtensionType;
};

export type ServiceActionExcelTable = {
  DataList: ServiceActionExcel[];
};

export type ServiceActionExcel = {
  ServiceActionType: keyof typeof ServiceActionType;
  IsLegacy: boolean;
  GoodsId: number;
};

export type ShiftingCraftRecipeExcelTable = {
  DataList: ShiftingCraftRecipeExcel[];
};

export type ShiftingCraftRecipeExcel = {
  Id: number;
  DisplayOrder: number;
  NotificationId: number;
  ResultParcel: keyof typeof ParcelType;
  ResultId: number;
  ResultAmount: number;
  RequireItemId: number;
  RequireItemAmount: number;
  RequireGold: number;
  IngredientTag: (keyof typeof Tag)[];
  IngredientExp: number;
};

export type ShopCashExcelTable = {
  DataList: ShopCashExcel[];
};

export type ShopCashExcel = {
  Id: number;
  CashProductId: number;
  PackageType: keyof typeof PurchaseSourceType;
  LocalizeEtcId: number;
  IconPath: string;
  DisplayOrder: number;
  RenewalDisplayOrder: number;
  CategoryType: keyof typeof ProductCategory;
  DisplayTag: keyof typeof ProductDisplayTag;
  SalePeriodFrom: string;
  SalePeriodTo: string;
  PeriodTag: boolean;
  AccountLevelLimit: number;
  AccountLevelHide: boolean;
  ClearMissionLimit: number;
  ClearMissionHide: boolean;
  PurchaseReportEventName: string;
};

export type ShopCashScenarioResourceInfoExcelTable = {
  DataList: ShopCashScenarioResourceInfoExcel[];
};

export type ShopCashScenarioResourceInfoExcel = {
  ScenarioResrouceInfoId: number;
  ShopCashId: number;
  IconPath: string;
};

export type ShopExcelTable = {
  DataList: ShopExcel[];
};

export type ShopExcel = {
  Id: number;
  LocalizeEtcId: number;
  CategoryType: keyof typeof ShopCategoryType;
  IsLegacy: boolean;
  GoodsId: number[];
  DisplayOrder: number;
  SalePeriodFrom: string;
  SalePeriodTo: string;
  PurchaseCooltimeMin: number;
  PurchaseCountLimit: number;
  PurchaseCountResetType: keyof typeof PurchaseCountResetType;
  BuyReportEventName: string;
  RestrictBuyWhenInventoryFull: boolean;
  DisplayTag: keyof typeof ProductDisplayTag;
  ShopUpdateGroupId: number;
};

export type ShopFilterClassifiedExcelTable = {
  DataList: ShopFilterClassifiedExcel[];
};

export type ShopFilterClassifiedExcel = {
  Id: number;
  CategoryType: keyof typeof ShopCategoryType;
  ConsumeParcelType: keyof typeof ParcelType;
  ConsumeParcelId: number;
  ShopFilterType: keyof typeof ShopFilterType;
  GoodsId: number;
};

export type ShopFreeRecruitExcelTable = {
  DataList: ShopFreeRecruitExcel[];
};

export type ShopFreeRecruitExcel = {
  Id: number;
  FreeRecruitPeriodFrom: string;
  FreeRecruitPeriodTo: string;
  FreeRecruitType: keyof typeof ShopFreeRecruitType;
  FreeRecruitDecorationImagePath: string;
  ShopRecruitId: number[];
};

export type ShopFreeRecruitPeriodExcelTable = {
  DataList: ShopFreeRecruitPeriodExcel[];
};

export type ShopFreeRecruitPeriodExcel = {
  ShopFreeRecruitId: number;
  ShopFreeRecruitIntervalId: number;
  IntervalDate: string;
  FreeRecruitCount: number;
};

export type ShopInfoExcelTable = {
  DataList: ShopInfoExcel[];
};

export type ShopInfoExcel = {
  CategoryType: keyof typeof ShopCategoryType;
  IsRefresh: boolean;
  IsSoldOutDimmed: boolean;
  CostParcelType: (keyof typeof ParcelType)[];
  CostParcelId: number[];
  AutoRefreshCoolTime: number;
  RefreshAbleCount: number;
  GoodsId: number[];
  OpenPeriodFrom: string;
  OpenPeriodTo: string;
  ShopProductUpdateTime: string;
  DisplayParcelType: keyof typeof ParcelType;
  DisplayParcelId: number;
  IsShopVisible: boolean;
  DisplayOrder: number;
  ShopUpdateDate: number;
  ShopUpdateGroupId1: number;
  ShopUpdateGroupId2: number;
  ShopUpdateGroupId3: number;
  ShopUpdateGroupId4: number;
  ShopUpdateGroupId5: number;
  ShopUpdateGroupId6: number;
  ShopUpdateGroupId7: number;
  ShopUpdateGroupId8: number;
  ShopUpdateGroupId9: number;
  ShopUpdateGroupId10: number;
  ShopUpdateGroupId11: number;
  ShopUpdateGroupId12: number;
};

export type ShopRecruitExcelTable = {
  DataList: ShopRecruitExcel[];
};

export type ShopRecruitExcel = {
  Id: number;
  CategoryType: keyof typeof ShopCategoryType;
  IsLegacy: boolean;
  OneGachaGoodsId: number;
  TenGachaGoodsId: number;
  GoodsDevName: string;
  DisplayTag: keyof typeof GachaDisplayTag;
  DisplayOrder: number;
  GachaBannerPath: string;
  VideoId: number[];
  LinkedRobbyBannerId: number;
  InfoCharacterId: number[];
  SalePeriodFrom: string;
  SalePeriodTo: string;
  RecruitCoinId: number;
  RecruitSellectionShopId: number;
  PurchaseCooltimeMin: number;
  PurchaseCountLimit: number;
  PurchaseCountResetType: keyof typeof PurchaseCountResetType;
  IsNewbie: boolean;
  IsSelectRecruit: boolean;
  DirectPayInvisibleTokenId: number;
  DirectPayAndroidShopCashId: number;
  DirectPayAppleShopCashId: number;
};

export type ShopRefreshExcelTable = {
  DataList: ShopRefreshExcel[];
};

export type ShopRefreshExcel = {
  Id: number;
  LocalizeEtcId: number;
  IsLegacy: boolean;
  GoodsId: number;
  GoodsType: number;
  DisplayOrder: number;
  CategoryType: keyof typeof ShopCategoryType;
  RefreshGroup: number;
  Prob: number;
  BuyReportEventName: string;
  DisplayTag: keyof typeof ProductDisplayTag;
};

export type SkillExcelTable = {
  DataList: SkillExcel[];
};

export type SkillExcel = {
  Id: number;
  LocalizeSkillId: number;
  GroupId: string;
  SkillDataKey: string;
  VisualDataKey: string;
  Level: number;
  SkillCost: number;
  ExtraSkillCost: number;
  EnemySkillCost: number;
  ExtraEnemySkillCost: number;
  NPCSkillCost: number;
  ExtraNPCSkillCost: number;
  BulletType: keyof typeof BulletType;
  StartCoolTime: number;
  CoolTime: number;
  EnemyStartCoolTime: number;
  EnemyCoolTime: number;
  NPCStartCoolTime: number;
  NPCCoolTime: number;
  UseAtg: number;
  RequireCharacterLevel: number;
  RequireLevelUpMaterial: number;
  IconName: string;
  IsShowInfo: boolean;
  IsShowSpeechbubble: boolean;
  PublicSpeechDuration: number;
  AdditionalToolTipId: number;
  TextureSkillCardForFormConversion: string;
  SkillCardLabelPath: string;
};

export type SpecialLobbyIllustExcelTable = {
  DataList: SpecialLobbyIllustExcel[];
};

export type SpecialLobbyIllustExcel = {
  UniqueId: number;
  DevName: string;
  CharacterCostumeUniqueId: number;
  PrefabName: string;
  SlotTextureName: string;
  RewardTextureName: string;
};

export type StatLevelInterpolationExcelTable = {
  DataList: StatLevelInterpolationExcel[];
};

export type StatLevelInterpolationExcel = {
  Level: number;
  StatTypeIndex: number[];
};

export type StickerGroupExcelTable = {
  DataList: StickerGroupExcel[];
};

export type StickerGroupExcel = {
  Id: number;
  Layout: string;
  UniqueLayoutPath: string;
  StickerGroupIconpath: string;
  PageCompleteSlot: number;
  PageCompleteRewardParcelType: keyof typeof ParcelType;
  PageCompleteRewardParcelId: number;
  PageCompleteRewardAmount: number;
  LocalizeTitle: number;
  LocalizeDescription: number;
  StickerGroupCoverpath: string;
};

export type StickerPageContentExcelTable = {
  DataList: StickerPageContentExcel[];
};

export type StickerPageContentExcel = {
  Id: number;
  StickerGroupId: number;
  StickerPageId: number;
  StickerSlot: number;
  StickerGetConditionType: keyof typeof StickerGetConditionType;
  StickerCheckPassType: keyof typeof StickerCheckPassType;
  GetStickerConditionType: keyof typeof GetStickerConditionType;
  StickerGetConditionCount: number;
  StickerGetConditionParameter: number[];
  StickerGetConditionParameterTag: (keyof typeof Tag)[];
  PackedStickerIconLocalizeEtcId: number;
  PackedStickerIconPath: string;
  IconPath: string;
  StickerDetailPath: string;
};

export type StoryStrategyExcelTable = {
  DataList: StoryStrategyExcel[];
};

export type StoryStrategyExcel = {
  Id: number;
  Name: string;
  Localize: string;
  StageEnterEchelonCount: number;
  BattleDuration: number;
  WhiteListId: number;
  StrategyMap: string;
  StrategyMapBG: string;
  MaxTurn: number;
  StageTopography: keyof typeof StageTopography;
  StrategyEnvironment: keyof typeof StrategyEnvironment;
  ContentType: keyof typeof ContentType;
  BGMId: number;
  FirstClearReportEventName: string;
};

export type StrategyObjectBuffDefineExcelTable = {
  DataList: StrategyObjectBuffDefineExcel[];
};

export type StrategyObjectBuffDefineExcel = {
  StrategyObjectBuffID: number;
  StrategyObjectTurn: number;
  SkillGroupId: string;
  LocalizeCodeId: number;
  IconPath: string;
};

export type StringTestExcelTable = {
  DataList: StringTestExcel[];
};

export type StringTestExcel = {
  String: string[];
  Sentence1: string;
  Script: string;
};

export type SystemMailExcelTable = {
  DataList: SystemMailExcel[];
};

export type SystemMailExcel = {
  MailType: keyof typeof MailType;
  ExpiredDay: number;
  Sender: string;
  Comment: string;
};

export type TacticalSupportSystemExcelTable = {
  DataList: TacticalSupportSystemExcel[];
};

export type TacticalSupportSystemExcel = {
  Id: number;
  SummonedTime: number;
  DefaultPersonalityId: number;
  CanTargeting: boolean;
  CanCover: boolean;
  ObstacleUniqueName: string;
  ObstacleCoverRange: number;
  SummonSkilllGroupId: string;
  CrashObstacleOBBWidth: number;
  CrashObstacleOBBHeight: number;
  IsTSSBlockedNodeCheck: boolean;
  NumberOfUses: number;
  InventoryOffsetX: number;
  InventoryOffsetY: number;
  InventoryOffsetZ: number;
  InteractionChar: number;
  CharacterInteractionStartDelay: number;
  GetOnStartEffectPath: string;
  GetOnEndEffectPath: string;
  SummonerCharacterId: number;
  InteractionFrame: number;
  TSAInteractionAddDuration: number;
  InteractionStudentExSkillGroupId: string;
  InteractionSkillCardTexture: string;
  InteractionSkillSpine: string;
  RetreatFrame: number;
  DestroyFrame: number;
};

export type TacticArenaSimulatorSettingExcelTable = {
  DataList: TacticArenaSimulatorSettingExcel[];
};

export type TacticArenaSimulatorSettingExcel = {
  Order: number;
  Repeat: number;
  AttackerFrom: keyof typeof ArenaSimulatorServer;
  AttackerUserArenaGroup: number;
  AttackerUserArenaRank: number;
  AttackerPresetGroupId: number;
  AttackerStrikerNum: number;
  AttackerSpecialNum: number;
  DefenderFrom: keyof typeof ArenaSimulatorServer;
  DefenderUserArenaGroup: number;
  DefenderUserArenaRank: number;
  DefenderPresetGroupId: number;
  DefenderStrikerNum: number;
  DefenderSpecialNum: number;
  GroundId: number;
};

export type TacticDamageSimulatorSettingExcelTable = {
  DataList: TacticDamageSimulatorSettingExcel[];
};

export type TacticDamageSimulatorSettingExcel = {
  Order: number;
  Repeat: number;
  TestPreset: number;
  TestBattleTime: number;
  StrikerSquard: number;
  SpecialSquard: number;
  ReplaceCharacterCostRegen: boolean;
  ReplaceCostRegenValue: number;
  UseAutoSkill: boolean;
  OverrideStreetAdaptation: keyof typeof TerrainAdaptationStat;
  OverrideOutdoorAdaptation: keyof typeof TerrainAdaptationStat;
  OverrideIndoorAdaptation: keyof typeof TerrainAdaptationStat;
  ApplyOverrideAdaptation: boolean;
  GroundId: number;
  FixedCharacter: number[];
};

export type TacticEntityEffectFilterExcelTable = {
  DataList: TacticEntityEffectFilterExcel[];
};

export type TacticEntityEffectFilterExcel = {
  TargetEffectName: string;
  ShowEffectToVehicle: boolean;
  ShowEffectToBoss: boolean;
};

export type TacticSimulatorSettingExcelTable = {
  DataList: TacticSimulatorSettingExcel[];
};

export type TacticSimulatorSettingExcel = {
  GroundId: number;
  GetExp: number;
  GetStarGrade: number;
  Equipment: number;
};

export type TacticSkipExcelTable = {
  DataList: TacticSkipExcel[];
};

export type TacticSkipExcel = {
  LevelDiff: number;
  HPResult: number;
};

export type TacticTimeAttackSimulatorConfigExcelTable = {
  DataList: TacticTimeAttackSimulatorConfigExcel[];
};

export type TacticTimeAttackSimulatorConfigExcel = {
  Order: number;
  Repeat: number;
  PresetGroupId: number;
  AttackStrikerNum: number;
  AttackSpecialNum: number;
  GeasId: number;
};

export type TerrainAdaptationFactorExcelTable = {
  DataList: TerrainAdaptationFactorExcel[];
};

export type TerrainAdaptationFactorExcel = {
  TerrainAdaptation: keyof typeof StageTopography;
  TerrainAdaptationStat: keyof typeof TerrainAdaptationStat;
  ShotFactor: number;
  BlockFactor: number;
  AccuracyFactor: number;
  DodgeFactor: number;
  AttackPowerFactor: number;
};

export type TimeAttackDungeonExcelTable = {
  DataList: TimeAttackDungeonExcel[];
};

export type TimeAttackDungeonExcel = {
  Id: number;
  TimeAttackDungeonType: keyof typeof TimeAttackDungeonType;
  LocalizeEtcKey: number;
  IconPath: string;
  InformationGroupID: number;
};

export type TimeAttackDungeonGeasExcelTable = {
  DataList: TimeAttackDungeonGeasExcel[];
};

export type TimeAttackDungeonGeasExcel = {
  Id: number;
  TimeAttackDungeonType: keyof typeof TimeAttackDungeonType;
  LocalizeEtcKey: number;
  BattleDuration: number;
  ClearDefaultPoint: number;
  ClearTimeWeightPoint: number;
  TimeWeightConst: number;
  Difficulty: number;
  RecommandLevel: number;
  GroundId: number;
  AllyPassiveSkillId: string[];
  AllyPassiveSkillLevel: number[];
  EnemyPassiveSkillId: string[];
  EnemyPassiveSkillLevel: number[];
  GeasIconPath: string[];
  GeasLocalizeEtcKey: number[];
};

export type TimeAttackDungeonRewardExcelTable = {
  DataList: TimeAttackDungeonRewardExcel[];
};

export type TimeAttackDungeonRewardExcel = {
  Id: number;
  RewardMaxPoint: number;
  RewardType: (keyof typeof TimeAttackDungeonRewardType)[];
  RewardMinPoint: number[];
  RewardParcelType: (keyof typeof ParcelType)[];
  RewardParcelId: number[];
  RewardParcelDefaultAmount: number[];
  RewardParcelMaxAmount: number[];
};

export type TimeAttackDungeonSeasonManageExcelTable = {
  DataList: TimeAttackDungeonSeasonManageExcel[];
};

export type TimeAttackDungeonSeasonManageExcel = {
  Id: number;
  StartDate: string;
  EndDate: string;
  UISlot: number;
  DungeonId: number;
  DifficultyGeas: number[];
  TimeAttackDungeonRewardId: number;
  RoomLifeTimeInSeconds: number;
};

export type TranscendenceRecipeExcelTable = {
  DataList: TranscendenceRecipeExcel[];
};

export type TranscendenceRecipeExcel = {
  Id: number;
  DevName: string;
  CostCurrencyType: keyof typeof CurrencyTypes;
  CostCurrencyAmount: number;
  ParcelType: (keyof typeof ParcelType)[];
  ParcelId: number[];
  ParcelAmount: number[];
};

export type TrophyCollectionExcelTable = {
  DataList: TrophyCollectionExcel[];
};

export type TrophyCollectionExcel = {
  GroupId: number;
  LocalizeCodeId: number;
  FurnitureId: number[];
};

export type WeekDungeonExcelTable = {
  DataList: WeekDungeonExcel[];
};

export type WeekDungeonExcel = {
  StageId: number;
  WeekDungeonType: keyof typeof WeekDungeonType;
  Difficulty: number;
  BattleDuration: number;
  PrevStageId: number;
  StageEnterCostType: (keyof typeof ParcelType)[];
  StageEnterCostId: number[];
  StageEnterCostAmount: number[];
  GroundId: number;
  StarGoal: (keyof typeof StarGoalType)[];
  StarGoalAmount: number[];
  StageTopography: keyof typeof StageTopography;
  RecommandLevel: number;
  StageRewardId: number;
  PlayTimeLimitInSeconds: number;
  BattleRewardExp: number;
  BattleRewardPlayerExp: number;
  GroupBuffID: number[];
  EchelonExtensionType: keyof typeof EchelonExtensionType;
};

export type WeekDungeonFindGiftRewardExcelTable = {
  DataList: WeekDungeonFindGiftRewardExcel[];
};

export type WeekDungeonFindGiftRewardExcel = {
  StageRewardId: number;
  DevName: string;
  RewardParcelType: (keyof typeof ParcelType)[];
  RewardParcelId: number[];
  RewardParcelAmount: number[];
  RewardParcelProbability: number[];
  DropItemModelPrefabPath: string[];
};

export type WeekDungeonGroupBuffExcelTable = {
  DataList: WeekDungeonGroupBuffExcel[];
};

export type WeekDungeonGroupBuffExcel = {
  WeekDungeonBuffId: number;
  School: keyof typeof School;
  RecommandLocalizeEtcId: number;
  FormationLocalizeEtcId: number;
  SkillGroupId: string;
};

export type WeekDungeonOpenScheduleExcelTable = {
  DataList: WeekDungeonOpenScheduleExcel[];
};

export type WeekDungeonOpenScheduleExcel = {
  WeekDay: keyof typeof WeekDay;
  Open: (keyof typeof WeekDungeonType)[];
};

export type WeekDungeonRewardExcelTable = {
  DataList: WeekDungeonRewardExcel[];
};

export type WeekDungeonRewardExcel = {
  GroupId: number;
  DungeonType: keyof typeof WeekDungeonType;
  RewardParcelType: keyof typeof ParcelType;
  RewardParcelId: number;
  RewardParcelAmount: number;
  RewardParcelProbability: number;
  IsDisplayed: boolean;
  DropItemModelPrefabPath: string;
};

export type WorldRaidBossGroupExcelTable = {
  DataList: WorldRaidBossGroupExcel[];
};

export type WorldRaidBossGroupExcel = {
  Id: number;
  WorldRaidBossGroupId: number;
  WorldBossName: string;
  WorldBossPopupPortrait: string;
  WorldBossPopupBG: string;
  WorldBossParcelPortrait: string;
  WorldBossListParcel: string;
  WorldBossHP: number;
  UIHideBeforeSpawn: boolean;
  HideAnotherBossKilled: boolean;
  WorldBossClearRewardGroupId: number;
  AnotherBossKilled: number[];
  EchelonConstraintGroupId: number;
  ExclusiveOperatorBossSpawn: string;
  ExclusiveOperatorBossKill: string;
  ExclusiveOperatorScenarioBattle: string;
  ExclusiveOperatorBossDamaged: string;
  BossGroupOpenCondition: number;
};

export type WorldRaidConditionExcelTable = {
  DataList: WorldRaidConditionExcel[];
};

export type WorldRaidConditionExcel = {
  Id: number;
  LockUI: string[];
  HideWhenLocked: boolean;
  AccountLevel: number;
  ScenarioModeId: number[];
  CampaignStageID: number[];
  MultipleConditionCheckType: keyof typeof MultipleConditionCheckType;
  AfterWhenDate: string;
  WorldRaidBossKill: number[];
};

export type WorldRaidFavorBuffExcelTable = {
  DataList: WorldRaidFavorBuffExcel[];
};

export type WorldRaidFavorBuffExcel = {
  WorldRaidFavorRank: number;
  WorldRaidFavorRankBonus: number;
};

export type WorldRaidSeasonManageExcelTable = {
  DataList: WorldRaidSeasonManageExcel[];
};

export type WorldRaidSeasonManageExcel = {
  SeasonId: number;
  EventContentId: number;
  EnterTicket: keyof typeof CurrencyTypes;
  WorldRaidLobbyScene: string;
  WorldRaidLobbyBanner: string;
  WorldRaidLobbyBG: string;
  WorldRaidLobbyBannerShow: boolean;
  SeasonOpenCondition: number;
  WorldRaidLobbyEnterScenario: number;
  CanPlayNotSeasonTime: boolean;
  WorldRaidUniqueThemeLobbyUI: boolean;
  WorldRaidUniqueThemeName: string;
  CanWorldRaidGemEnter: boolean;
  HideWorldRaidTicketUI: boolean;
  UseWorldRaidCommonToast: boolean;
  OpenRaidBossGroupId: number[];
  BossSpawnTime: string[];
  EliminateTime: string[];
  ScenarioOutputConditionId: number[];
  ConditionScenarioGroupid: number[];
  WorldRaidMapEnterOperator: string;
  UseFavorRankBuff: boolean;
};

export type WorldRaidStageExcelTable = {
  DataList: WorldRaidStageExcel[];
};

export type WorldRaidStageExcel = {
  Id: number;
  UseBossIndex: boolean;
  UseBossAIPhaseSync: boolean;
  WorldRaidBossGroupId: number;
  PortraitPath: string;
  BGPath: string;
  RaidCharacterId: number;
  BossCharacterId: number[];
  AssistCharacterLimitCount: number;
  WorldRaidDifficulty: keyof typeof WorldRaidDifficulty;
  DifficultyOpenCondition: boolean;
  RaidEnterAmount: number;
  ReEnterAmount: number;
  BattleDuration: number;
  GroundId: number;
  RaidBattleEndRewardGroupId: number;
  RaidRewardGroupId: number;
  BattleReadyTimelinePath: string[];
  BattleReadyTimelinePhaseStart: number[];
  BattleReadyTimelinePhaseEnd: number[];
  VictoryTimelinePath: string;
  PhaseChangeTimelinePath: string;
  TimeLinePhase: number;
  EnterScenarioKey: number;
  ClearScenarioKey: number;
  UseFixedEchelon: boolean;
  FixedEchelonId: number;
  IsRaidScenarioBattle: boolean;
  ShowSkillCard: boolean;
  BossBGInfoKey: number;
  DamageToWorldBoss: number;
  AllyPassiveSkill: string[];
  AllyPassiveSkillLevel: number[];
  SaveCurrentLocalBossHP: boolean;
  EchelonExtensionType: keyof typeof EchelonExtensionType;
};

export type WorldRaidStageRewardExcelTable = {
  DataList: WorldRaidStageRewardExcel[];
};

export type WorldRaidStageRewardExcel = {
  GroupId: number;
  IsClearStageRewardHideInfo: boolean;
  ClearStageRewardProb: number;
  ClearStageRewardParcelType: keyof typeof ParcelType;
  ClearStageRewardParcelUniqueID: number;
  ClearStageRewardParcelUniqueName: string;
  ClearStageRewardAmount: number;
};

export type AudioAnimatorExcel = {
  ControllerNameHash: number;
  VoiceNamePrefix: string;
  StateNameHash: number;
  StateName: string;
  IgnoreInterruptDelay: boolean;
  IgnoreInterruptPlay: boolean;
  Volume: number;
  Delay: number;
  RandomPitchMin: number;
  RandomPitchMax: number;
  AudioPriority: number;
  AudioClipPath: string[];
  VoiceHash: number[];
};

export type BGMExcel = {
  Id: number;
  Nation: (keyof typeof Nation)[];
  Path: string[];
  Volume: number[];
  LoopStartTime: number[];
  LoopEndTime: number[];
  LoopTranstionTime: number[];
  LoopOffsetTime: number[];
};

export type BGMRaidExcel = {
  StageId: number;
  PhaseIndex: number;
  BGMId: number;
};

export type BGMUIExcel = {
  UIPrefab: number;
  BGMId: number;
  BGMId2nd: number;
  BGMId3rd: number;
  EventContentId: number;
};

export type CameraExcel = {
  UniqueId: number;
  MinDistance: number;
  MaxDistance: number;
  RotationX: number;
  RotationY: number;
  MoveInstantly: boolean;
  MoveInstantlyRotationSave: boolean;
  LeftMargin: number;
  BottomMargin: number;
  IgnoreEnemies: boolean;
  UseRailPointCompensation: boolean;
};

export type CharacterDialogEventExcel = {
  CostumeUniqueId: number;
  OriginalCharacterId: number;
  DisplayOrder: number;
  EventID: number;
  ProductionStep: keyof typeof ProductionStep;
  DialogCategory: keyof typeof DialogCategory;
  DialogCondition: keyof typeof DialogCondition;
  DialogConditionDetail: keyof typeof DialogConditionDetail;
  DialogConditionDetailValue: number;
  GroupId: number;
  DialogType: keyof typeof DialogType;
  ActionName: string;
  Duration: number;
  AnimationName: string;
  LocalizeKR: string;
  LocalizeJP: string;
  VoiceId: number[];
  CollectionVisible: boolean;
  CVCollectionType: keyof typeof CVCollectionType;
  UnlockEventSeason: number;
  ScenarioGroupId: number;
  LocalizeCVGroup: string;
};

export type CharacterDialogExcel = {
  CharacterId: number;
  CostumeUniqueId: number;
  DisplayOrder: number;
  ProductionStep: keyof typeof ProductionStep;
  DialogCategory: keyof typeof DialogCategory;
  DialogCondition: keyof typeof DialogCondition;
  Anniversary: keyof typeof Anniversary;
  StartDate: string;
  EndDate: string;
  GroupId: number;
  DialogType: keyof typeof DialogType;
  ActionName: string;
  Duration: number;
  AnimationName: string;
  LocalizeKR: string;
  LocalizeJP: string;
  VoiceId: number[];
  ApplyPosition: boolean;
  PosX: number;
  PosY: number;
  CollectionVisible: boolean;
  CVCollectionType: keyof typeof CVCollectionType;
  UnlockFavorRank: number;
  UnlockEquipWeapon: boolean;
  LocalizeCVGroup: string;
};

export type CharacterPotentialExcel = {
  Id: number;
  PotentialStatGroupId: number;
  PotentialStatBonusRateType: keyof typeof PotentialStatBonusRateType;
  IsUnnecessaryStat: boolean;
};

export type CharacterPotentialRewardExcel = {
  Id: number;
  RequirePotentialStatType: (keyof typeof PotentialStatBonusRateType)[];
  RequirePotentialStatLevel: number[];
  RewardParcelType: keyof typeof ParcelType;
  RewardId: number;
  RewardAmount: number;
};

export type CharacterPotentialStatExcel = {
  PotentialStatGroupId: number;
  PotentialLevel: number;
  RecipeId: number;
  StatBonusRate: number;
};

export type CharacterVoiceExcel = {
  CharacterVoiceUniqueId: number;
  CharacterVoiceGroupId: number;
  VoiceHash: number;
  OnlyOne: boolean;
  Priority: number;
  DisplayOrder: number;
  CollectionVisible: boolean;
  CVCollectionType: keyof typeof CVCollectionType;
  UnlockFavorRank: number;
  LocalizeCVGroup: string;
  Nation: (keyof typeof Nation)[];
  Volume: number[];
  Delay: number[];
  Path: string[];
};

export type ClanChattingEmojiExcel = {
  Id: number;
  TabGroupId: number;
  DisplayOrder: number;
  ImagePathKr: string;
  ImagePathJp: string;
};

export type CombatEmojiExcel = {
  UniqueId: number;
  EmojiEvent: keyof typeof EmojiEvent;
  OrderOfPriority: number;
  EmojiDuration: boolean;
  EmojiReversal: boolean;
  EmojiTurnOn: boolean;
  ShowEmojiDelay: number;
  ShowDefaultBG: boolean;
};

export type ContentsScenarioExcel = {
  Id: number;
  LocalizeId: number;
  DisplayOrder: number;
  ScenarioContentType: keyof typeof ScenarioContentType;
  ScenarioGroupId: number[];
};

export type ContentsShortcutExcel = {
  UniqueId: number;
  ContentType: keyof typeof ContentType;
  EventContentId: number;
  ScenarioModeVolume: number;
  ScenarioModeChapter: number;
  ShortcutOpenTime: string;
  ShortcutCloseTime: string;
  ConditionContentId: number;
  ConquestMapDifficulty: keyof typeof StageDifficulty;
  ConquestStepIndex: number;
  ShortcutContentId: number;
  ShortcutUIName: string[];
  Localize: string;
};

export type EventContentNotifyExcel = {
  Id: number;
  LocalizeEtcId: number;
  IconPath: string;
  EventNotifyType: keyof typeof EventNotifyType;
  EventTargetType: keyof typeof EventTargetType;
  ShortcutEventTargetType: keyof typeof EventTargetType;
  IsShortcutEnable: boolean;
};

export type EventContentTreasureCellRewardExcel = {
  Id: number;
  LocalizeCodeID: string;
  RewardParcelType: (keyof typeof ParcelType)[];
  RewardParcelId: number[];
  RewardParcelAmount: number[];
};

export type EventContentTreasureExcel = {
  EventContentId: number;
  TitleLocalize: string;
  LoopRound: number;
  UsePrefabName: string;
  TreasureBGImagePath: string;
};

export type EventContentTreasureRewardExcel = {
  Id: number;
  LocalizeCodeID: string;
  CellUnderImageWidth: number;
  CellUnderImageHeight: number;
  HiddenImage: boolean;
  RewardParcelType: (keyof typeof ParcelType)[];
  RewardParcelId: number[];
  RewardParcelAmount: number[];
  CellUnderImagePath: string;
  TreasureSmallImagePath: string;
};

export type EventContentTreasureRoundExcel = {
  EventContentId: number;
  TreasureRound: number;
  TreasureRoundSize: number[];
  CellVisualSortUnstructed: boolean;
  CellCheckGoodsId: number;
  CellRewardId: number;
  RewardID: number[];
  RewardAmount: number[];
  TreasureCellImagePath: string;
};

export type InformationExcel = {
  GroupID: number;
  PageName: string;
  LocalizeCodeId: string;
  TutorialParentName: string[];
  UIName: string[];
};

export type LoadingImageExcel = {
  ID: number;
  ImagePathKr: string;
  ImagePathJp: string;
  DisplayWeight: number;
};

export type LocalizeErrorExcel = {
  Key: number;
  ErrorLevel: keyof typeof WebAPIErrorLevel;
  Kr: string;
  Jp: string;
};

export type LocalizeExcel = {
  Key: number;
  Kr: string;
  Jp: string;
};

export type LocalizeSkillExcel = {
  Key: number;
  NameKr: string;
  DescriptionKr: string;
  SkillInvokeLocalizeKr: string;
  NameJp: string;
  DescriptionJp: string;
  SkillInvokeLocalizeJp: string;
};

export type MessagePopupExcel = {
  StringId: number;
  MessagePopupLayout: keyof typeof MessagePopupLayout;
  OrderType: keyof typeof MessagePopupImagePositionType;
  Image: string;
  TitleText: number;
  SubTitleText: number;
  MessageText: number;
  ConditionText: number[];
  DisplayXButton: boolean;
  Button: (keyof typeof MessagePopupButtonType)[];
  ButtonText: number[];
  ButtonCommand: string[];
  ButtonParameter: string[];
};

export type MiniGameDreamCollectionScenarioExcel = {
  Id: number;
  IsSkip: boolean;
  EventContentId: number;
  Parameter: (keyof typeof DreamMakerParameterType)[];
  ParameterAmount: number[];
  ScenarioGroupId: number;
};

export type MiniGameDreamDailyPointExcel = {
  UniqueId: number;
  EventContentId: number;
  TotalParameterMin: number;
  TotalParameterMax: number;
  DailyPointCoefficient: number;
  DailyPointCorrectionValue: number;
};

export type MiniGameDreamEndingExcel = {
  EventContentId: number;
  EndingId: number;
  DreamMakerEndingType: keyof typeof DreamMakerEndingType;
  Order: number;
  ScenarioGroupId: number;
  EndingCondition: (keyof typeof DreamMakerEndingCondition)[];
  EndingConditionValue: number[];
};

export type MiniGameDreamEndingRewardExcel = {
  EventContentId: number;
  EndingId: number;
  LocalizeEtcId: number;
  DreamMakerEndingRewardType: keyof typeof DreamMakerEndingRewardType;
  DreamMakerEndingType: keyof typeof DreamMakerEndingType;
  RewardParcelType: (keyof typeof ParcelType)[];
  RewardParcelId: number[];
  RewardParcelAmount: number[];
};

export type MiniGameDreamInfoExcel = {
  EventContentId: number;
  DreamMakerMultiplierCondition: keyof typeof DreamMakerMultiplierCondition;
  DreamMakerMultiplierConditionValue: number;
  DreamMakerMultiplierMax: number;
  DreamMakerDays: number;
  DreamMakerActionPoint: number;
  DreamMakerParcelType: keyof typeof ParcelType;
  DreamMakerParcelId: number;
  DreamMakerDailyPointParcelType: keyof typeof ParcelType;
  DreamMakerDailyPointId: number;
  DreamMakerParameterTransfer: number;
  ScheduleCostGoodsId: number;
  LobbyBGMChangeScenarioId: number;
};

export type MiniGameDreamParameterExcel = {
  Id: number;
  EventContentId: number;
  ParameterType: keyof typeof DreamMakerParameterType;
  LocalizeEtcId: number;
  IconPath: string;
  ParameterBase: number;
  ParameterBaseMax: number;
  ParameterMin: number;
  ParameterMax: number;
};

export type MiniGameDreamReplayScenarioExcel = {
  EventContentId: number;
  ScenarioGroupId: number;
  Order: number;
  ReplaySummaryTitleLocalize: number;
  ReplaySummaryLocalizeScenarioId: number;
  ReplayScenarioResource: string;
  IsReplayScenarioHorizon: boolean;
};

export type MiniGameDreamScheduleExcel = {
  EventContentId: number;
  DreamMakerScheduleGroupId: number;
  DisplayOrder: number;
  LocalizeEtcId: number;
  IconPath: string;
  LoadingResource01: string;
  LoadingResource02: string;
  AnimationName: string;
};

export type MiniGameDreamScheduleResultExcel = {
  Id: number;
  EventContentId: number;
  DreamMakerResult: keyof typeof DreamMakerResult;
  DreamMakerScheduleGroup: number;
  Prob: number;
  RewardParameter: (keyof typeof DreamMakerParameterType)[];
  RewardParameterOperationType: (keyof typeof DreamMakerParamOperationType)[];
  RewardParameterAmount: number[];
  RewardParcelType: keyof typeof ParcelType;
  RewardParcelId: number;
  RewardParcelAmount: number;
};

export type MiniGameDreamTimelineExcel = {
  Id: number;
  EventContentId: number;
  GroupId: number;
  DreamMakerDays: number;
  DreamMakerActionPoint: number;
  EnterScenarioGroupId: number;
  Bgm: number;
  ArtLevelPath: string;
  DesignLevelPath: string;
};

export type MinigameDreamVoiceExcel = {
  EventContentId: number;
  UniqueId: number;
  VoiceCondition: keyof typeof DreamMakerVoiceCondition;
  VoiceClip: number;
};

export type MissionEmergencyCompleteExcel = {
  MissionId: number;
  EmergencyComplete: boolean;
};

export type MultiFloorRaidRewardExcel = {
  RewardGroupId: number;
  ClearStageRewardProb: number;
  ClearStageRewardParcelType: keyof typeof ParcelType;
  ClearStageRewardParcelUniqueID: number;
  ClearStageRewardAmount: number;
};

export type MultiFloorRaidSeasonManageExcel = {
  SeasonId: number;
  LobbyEnterScenario: number;
  ShowLobbyBanner: boolean;
  SeasonStartDate: string;
  SeasonEndDate: string;
  SettlementEndDate: string;
  OpenRaidBossGroupId: string;
  EnterScenarioKey: number;
  LobbyImgPath: string;
  LevelImgPath: string;
};

export type MultiFloorRaidStageExcel = {
  Id: number;
  EchelonExtensionType: keyof typeof EchelonExtensionType;
  BossGroupId: string;
  AssistSlot: number;
  StageOpenCondition: number;
  FloorListSection: boolean;
  FloorListSectionOpenCondition: number;
  FloorListSectionLabel: number;
  Difficulty: number;
  UseBossIndex: boolean;
  UseBossAIPhaseSync: boolean;
  FloorListImgPath: string;
  FloorImgPath: string;
  RaidCharacterId: number;
  BossCharacterId: number[];
  StatChangeId: number[];
  BattleDuration: number;
  GroundId: number;
  RecommendLevel: number;
  RewardGroupId: number;
  BattleReadyTimelinePath: string[];
  BattleReadyTimelinePhaseStart: number[];
  BattleReadyTimelinePhaseEnd: number[];
  VictoryTimelinePath: string;
  ShowSkillCard: boolean;
};

export type MultiFloorRaidStatChangeExcel = {
  StatChangeId: number;
  StatType: (keyof typeof StatType)[];
  StatAdd: number[];
  StatMultiply: number[];
  ApplyCharacterId: number[];
};

export type OperatorExcel = {
  UniqueId: number;
  GroupId: string;
  OperatorCondition: keyof typeof OperatorCondition;
  OutputSequence: number;
  RandomWeight: number;
  OutputDelay: number;
  Duration: number;
  OperatorOutputPriority: number;
  PortraitPath: string;
  TextLocalizeKey: string;
  VoiceId: number[];
  OperatorWaitQueue: boolean;
};

export type ScenarioBGEffectExcel = {
  Name: number;
  Effect: string;
  Scroll: keyof typeof ScenarioBGScroll;
  ScrollTime: number;
  ScrollFrom: number;
  ScrollTo: number;
};

export type ScenarioBGNameExcel = {
  Name: number;
  ProductionStep: keyof typeof ProductionStep;
  BGFileName: string;
  BGType: keyof typeof ScenarioBGType;
  AnimationRoot: string;
  AnimationName: string;
  SpineScale: number;
  SpineLocalPosX: number;
  SpineLocalPosY: number;
};

export type ScenarioCharacterEmotionExcel = {
  EmoticonName: string;
  Name: number;
};

export type ScenarioCharacterNameExcel = {
  CharacterName: number;
  ProductionStep: keyof typeof ProductionStep;
  NameKR: string;
  NicknameKR: string;
  NameJP: string;
  NicknameJP: string;
  Shape: keyof typeof ScenarioCharacterShapes;
  SpinePrefabName: string;
  SmallPortrait: string;
};

export type ScenarioCharacterSituationSetExcel = {
  Name: number;
  Face: string;
  Behavior: string;
  Action: string;
  Shape: string;
  Effect: number;
  Emotion: number;
};

export type ScenarioEffectExcel = {
  EffectName: string;
  Name: number;
};

export type ScenarioResourceInfoExcel = {
  Id: number;
  ScenarioModeId: number;
  VideoId: number;
  BgmId: number;
  AudioName: string;
  SpinePath: string;
  Ratio: number;
  LobbyAniPath: string;
  MovieCGPath: string;
  LocalizeId: number;
};

export type ScenarioScriptExcel = {
  GroupId: number;
  SelectionGroup: number;
  BGMId: number;
  Sound: string;
  Transition: number;
  BGName: number;
  BGEffect: number;
  PopupFileName: string;
  ScriptKr: string;
  TextJp: string;
  VoiceId: number;
};

export type ScenarioTransitionExcel = {
  Name: number;
  TransitionOut: string;
  TransitionOutDuration: number;
  TransitionOutResource: string;
  TransitionIn: string;
  TransitionInDuration: number;
  TransitionInResource: string;
};

export type ShortcutTypeExcel = {
  Id: number;
  IsAscending: boolean;
  ContentType: (keyof typeof ShortcutContentType)[];
};

export type SkillAdditionalTooltipExcel = {
  GroupId: number;
  AdditionalSkillGroupId: string;
  ShowSkillSlot: string;
};

export type SoundUIExcel = {
  ID: number;
  SoundUniqueId: string;
  Path: string;
};

export type SpineLipsyncExcel = {
  VoiceId: number;
  AnimJson: string;
};

export type StageFileRefreshSettingExcel = {
  GroundId: number;
  ForceSave: boolean;
};

export type ToastExcel = {
  Id: number;
  ToastType: keyof typeof ToastType;
  MissionId: number;
  TextId: number;
  LifeTime: number;
};

export type TutorialCharacterDialogExcel = {
  TalkId: number;
  AnimationName: string;
  LocalizeKR: string;
  LocalizeJP: string;
  VoiceId: number;
};

export type TutorialExcel = {
  ID: number;
  CompletionReportEventName: string;
  CompulsoryTutorial: boolean;
  DescriptionTutorial: boolean;
  TutorialStageId: number;
  UIName: string[];
  TutorialParentName: string[];
};

export type TutorialFailureImageExcel = {
  Id: number;
  Contents: keyof typeof TutorialFailureContentType;
  Type: string;
  ImagePathKr: string;
  ImagePathJp: string;
};

export type VideoExcel = {
  Id: number;
  Nation: (keyof typeof Nation)[];
  VideoPath: string[];
  SoundPath: string[];
  SoundVolume: number[];
};

export type VoiceCommonExcel = {
  VoiceEvent: keyof typeof VoiceEvent;
  Rate: number;
  VoiceHash: number[];
};

export type VoiceExcel = {
  UniqueId: number;
  Id: number;
  Nation: (keyof typeof Nation)[];
  Path: string[];
  Volume: number[];
};

export type VoiceLogicEffectExcel = {
  LogicEffectNameHash: number;
  Self: boolean;
  Priority: number;
  VoiceHash: number[];
  VoiceId: number;
};

export type VoiceRoomExceptionExcel = {
  CostumeUniqueId: number;
  LinkedCharacterVoicePrintType: keyof typeof CVPrintType;
  LinkedCostumeUniqueId: number;
};

export type VoiceSpineExcel = {
  UniqueId: number;
  Id: number;
  Nation: (keyof typeof Nation)[];
  Path: string[];
  SoundVolume: number[];
};
