const glob = import.meta.glob(
  [
    "~game/UIs/00_Images/Banner/**/*.png",
    "~game/UIs/01_Common/02_Equipment/**/*.png",
    "~game/UIs/01_Common/03_NonEquipment/**/*.png",
    "~game/UIs/01_Common/11_SchoolIcon/**/*.png",
    "~game/UIs/01_Common/13_CampaignImage/**/*.png",
    "~game/UIs/01_Common/14_CharacterCollect/**/*.png",
    "~game/UIs/01_Common/16_CafeItem/**/*.png",
    "~game/UIs/01_Common/21_EnemyInfo/**/*.png",
    "~game/UIs/01_Common/27_EventContent/Enter_Parcel/**/*.png",
    "~game/UIs/01_Common/27_EventContent/Main_BgImage/**/*.png",
    "~game/UIs/01_Common/29_GuideMission/**/*.png",
    "~game/UIs/01_Common/31_ClanEmoji/ClanChat_Emoji_113_Jp.png",
    "~game/UIs/01_Common/31_ClanEmoji/ClanChat_Emoji_126_Jp.png",
    "~game/UIs/01_Common/35_TimeAttack/**/*.png",
    "~game/UIs/01_Common/40_Gear/**/*.png",
    "~game/UIs/01_Common/46_MultiFloorRaid/**/*.png",
    "~game/UIs/02_Tactics/02_SkillIcon/**/*.png",
    "~game/UIs/02_Tactics/04_BuffIcon/**/*.png",
    "~game/UIs/02_Tactics/06_Raid/**/*.png",
  ],
  {
    eager: true,
    import: "default",
  },
);
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [
    key
      .match(/(UIs.+)\.png/)
      ?.at(1)
      ?.toLowerCase() ?? "",
    value as string,
  ]),
);
/** @param path Starts with 'UIs/', ends without '.png'. */
export function uiPath(path: string) {
  const p = images[path.toLowerCase()];
  if (p != null) return p;
  const jp = images[path.toLowerCase() + "_jp"];
  if (jp != null) return jp;
  console.error(`Unable to find ${path}`);
  return "";
}
