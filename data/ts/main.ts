import { copyFileSync, cpSync, lstatSync } from "fs";
import { cropAtlas } from "./crop/index.js";
import { tidyEventShop } from "./tidy/event/index.js";
import { writeJson } from "./util.js";
import path from "path";
import { AaFolder, AssetFolder, /*MxFolder,*/ PngFolder } from "./path.js";
import { Character } from "./tidy/character/character.js";

function copyPaste(fromThis: string, toThisFolder: string) {
  const s = lstatSync(fromThis);
  const fn = path.basename(fromThis);
  const dest = path.resolve(toThisFolder, fn);
  if (s.isFile()) {
    copyFileSync(fromThis, dest);
  } else if (s.isDirectory()) {
    cpSync(fromThis, dest, { recursive: true });
  } else {
    throw new Error(fromThis);
  }
}

async function main() {
  writeJson(Character.getCharacter(), "character", true);
  writeJson(Character.getGear(), "characterGear", true);
  writeJson(Character.getWeapon(), "characterWeapon", true);
  writeJson(Character.getStat(), "characterStat", true);
  writeJson(tidyEventShop(), "eventShop", true);

  await cropAtlas();

  // copyPaste(MxFolder + "/SpineBackground", AssetFolder);
  // copyPaste(MxFolder + "/SpineCharacters", AssetFolder);
  // copyPaste(MxFolder + "/SpineLobbies", AssetFolder);

  copyPaste(PngFolder + `/Combat`, AssetFolder + "/Atlas");
  copyPaste(PngFolder + `/Common`, AssetFolder + "/Atlas");
  copyPaste(PngFolder + `/Event`, AssetFolder + "/Atlas");

  const aa2asset = [
    "/UIs/00_Images/Banner",
    "/UIs/01_Common/02_Equipment",
    "/UIs/01_Common/03_NonEquipment",
    "/UIs/01_Common/11_SchoolIcon",
    "/UIs/01_Common/13_CampaignImage",
    "/UIs/01_Common/14_CharacterCollect",
    "/UIs/01_Common/16_CafeItem",
    "/UIs/01_Common/21_EnemyInfo",
    "/UIs/01_Common/27_EventContent/Enter_Parcel",
    "/UIs/01_Common/27_EventContent/Main_BgImage",
    "/UIs/01_Common/35_TimeAttack",
    "/UIs/01_Common/40_Gear",
    "/UIs/01_Common/46_MultiFloorRaid",
    "/UIs/02_Tactics/02_SkillIcon",
    "/UIs/02_Tactics/04_BuffIcon",
    "/UIs/02_Tactics/06_Raid",
  ];
  for (const n of aa2asset)
    cpSync(AaFolder + n, AssetFolder + n, {
      recursive: true,
    });
}

function test() {}

main()
  .then(() => {
    console.log("done");
  })
  .catch((e) => {
    console.log(e);
  });
test();
