// @ts-ignore
import { default as challenge } from "~game/db/LevelSkillDataDBSchema/Challenge.json";
// @ts-ignore
import { default as common } from "~game/db/LevelSkillDataDBSchema/Common.json";
// @ts-ignore
import { default as enemy } from "~game/db/LevelSkillDataDBSchema/Enemy.json";
// @ts-ignore
import { default as ground } from "~game/db/LevelSkillDataDBSchema/Ground.json";
// @ts-ignore
import { default as manual } from "~game/db/LevelSkillDataDBSchema/Manual.json";
// @ts-ignore
import { default as npc } from "~game/db/LevelSkillDataDBSchema/NPC.json";
// @ts-ignore
import { default as student } from "~game/db/LevelSkillDataDBSchema/Student.json";
// @ts-ignore
import { default as testCharacter } from "~game/db/LevelSkillDataDBSchema/TestCharacter.json";
// @ts-ignore
import { default as timeAttack } from "~game/db/LevelSkillDataDBSchema/TimeAttack.json";
// @ts-ignore
import { default as tss } from "~game/db/LevelSkillDataDBSchema/TSS.json";

function findKey(key: string, arr: any[]) {
  return arr.find((v) => v.Key === key)?.Bytes;
}

export function getLevelSkillData(key: string) {
  return (
    findKey(key, student as any[]) ??
    findKey(key, enemy as any[]) ??
    findKey(key, timeAttack as any[]) ??
    findKey(key, challenge as any[]) ??
    findKey(key, common as any[]) ??
    findKey(key, manual as any[]) ??
    findKey(key, npc as any[]) ??
    findKey(key, ground as any[]) ??
    findKey(key, tss as any[]) ??
    findKey(key, testCharacter as any[]) ??
    console.error(`Unable to find LevelSkillData "${key}".`)
  );
}
