export default function custom(key?: string): string {
  if (key?.slice(-2, -1) === "_")
    return custom(key.slice(0, -2)) + key.slice(-1);
  switch (key) {
    case "CVGroup_Formation_Select":
      return "編成選択";
    case "CVGroup_Tactic_Defeat":
      return "戦略撤退";
    case "CVGroup_Tactic_Victory":
      return "戦略勝利";
    case "CVGroup_Growup":
      return "生徒強化";
    case "CVGroup_Formation_In":
      return "編成";
    case "CVGroup_Tactic_In":
      return "戦略入場";
    case "CVGroup_Battle_In":
      return "戦術入場";
    case "CVGroup_Battle_Victory":
      return "戦術勝利";
    case "CVGroup_Relationship_Up":
      return "絆ランク増加";
    case "CVGroup_Battle_Defense":
      return "回避";
    case "CVGroup_Battle_Covered":
      return "遮蔽";
    case "CVGroup_Battle_TacticalAction":
      return "戦術移動";
    case "CVGroup_Battle_Move":
      return "セクション移動";
    case "CVGroup_ExSkill":
      return "EXスキル";
    case "CVGroup_ExSkill_Level":
      return "EXスキル（フィールド）";
    case "CVGroup_CommonSkill":
      return "ノーマルスキル";
    case "CVGroup_Battle_Retire":
      return "戦術撤退";
    case "CVGroup_Battle_Buffed":
      return "バフ";
    case "CVGroup_Battle_Recovery":
      return "回復";
    case "CVGroup_Battle_BuffSelf":
      return "自己バフ";
    case "CVGroup_Battle_Shout":
      return "攻撃";
    case "CVGroup_Battle_Damage":
      return "負傷";
    default:
      return key ?? "";
  }
}
