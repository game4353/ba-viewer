const cache: Partial<Record<string, any[]>> = {};

async function findKey(key: string, filename: string) {
  if (!(filename in cache)) {
    const url = `/game/db/LevelSkillDataDBSchema/${filename}.json`;
    const res = await fetch(url);
    cache[filename] = await res.json();
  }
  return cache[filename]!.find((v) => v.Key === key)?.Bytes;
}

export async function getLevelSkillData(key: string) {
  return (
    (await findKey(key, "Student")) ??
    (await findKey(key, "Enemy")) ??
    (await findKey(key, "TimeAttack")) ??
    (await findKey(key, "Challenge")) ??
    (await findKey(key, "Common")) ??
    (await findKey(key, "Manual")) ??
    (await findKey(key, "NPC")) ??
    (await findKey(key, "Ground")) ??
    (await findKey(key, "TSS")) ??
    (await findKey(key, "TestCharacter")) ??
    console.error(`Unable to find LevelSkillData "${key}".`)
  );
}
