export class Tab {
  name: string;
  path: string;
  icon: string;
  constructor(name: string, path: string, icon: string) {
    this.icon = icon;
    this.name = name;
    this.path = path;
  }
}

export const TABS = {
  student: new Tab("生徒", "/student", "mdi-face-woman"),
  party: new Tab("編成", "/party", "mdi-human-female-female"),
  gacha: new Tab("募集", "/gacha", "mdi-email"),
  item: new Tab("アイテム", "/parcel/item", "mdi-cube"),
  currency: new Tab("財貨", "/parcel/currency", "mdi-cash-100"),
  equipment: new Tab("装備", "/parcel/equipment", "mdi-bag-checked"),
  furniture: new Tab("家具", "/parcel/furniture", "mdi-table-chair"),
  craft: new Tab("製造", "/craft", "fa:fas fa-monument"),
  shop: new Tab("ショップ", "/shop", "mdi-cart"),
  mission: new Tab("任務", "/mission", "custom:cap"),
  bounty: new Tab("指名手配", "/bounty", "custom:sushi"),
  commissions: new Tab("特別依頼", "/commissions", "mdi-credit-card"),
  scrimmage: new Tab("学園交流会", "/scrimmage", "mdi-kabaddi"),
  event: new Tab("イベント", "/event", "mdi-calendar-star"),
  guide: new Tab("ガイドミッション", "/guide", "mdi-calendar-week"),
  // balancingSchaleSBooks: new Tab(
  //   "総決算",
  //   "balancingschalesbooks",
  //   "mdi-fountain-pen"
  // ),
  totalAssault: new Tab("総力戦", "/totalassault", "mdi-emoticon-angry"),
  jointFiringDrill: new Tab(
    "合同火力演習",
    "/jointfiringdrill",
    "mdi-clock-fast",
  ),
  grandAssault: new Tab("大決戦", "/grandassault", "mdi-emoticon-devil"),
  set: new Tab("制約解除決戦", "/multifloor", "custom:evilTower"),
  message: new Tab("メッセージ", "/message", "mdi-chat"),
  storyBond: new Tab("絆ストーリー", "/story/bond", "mdi-heart"),
  gift: new Tab("プレゼント", "/gift", "mdi-gift"),
  // aaaaaaaaa: new Tab("メインストーリー", "", ""),
  // aaaaaaaaa: new Tab("ミニストーリー", "", ""),
  // aaaaaaaaa: new Tab("グループストーリー", "", ""),
  // aaaaaaaaa: new Tab("絆ストーリー", "", ""),
  // aaaaaaaaa: new Tab("お仕事ストーリー", "", ""),
  // aaaaaaaaa: new Tab("イベントストーリー", "", ""),
};
