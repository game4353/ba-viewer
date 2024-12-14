// To deploy api, use `pnpm run api`

// Can't send large response (4.5MB)
// https://vercel.com/guides/how-to-bypass-vercel-body-size-limit-serverless-functions

// Can't read big folder or have big import (500MB)

import type { VercelRequest, VercelResponse } from "@vercel/node";
import { readFileSync } from "fs";
import * as path from "path";

const cache = new Map<string, Object>();
const title = [
  "Student",
  "Enemy",
  "TimeAttack",
  "Challenge",
  "Common",
  "Manual",
  "NPC",
  "Ground",
  "TSS",
  "TestCharacter",
];
const folder = path.join(
  process.cwd(),
  "public/data/DB/LevelSkillDataDBSchema",
);
title.forEach((name) => {
  const file = path.join(folder, name + ".json");
  const json = readFileSync(file, { encoding: "utf-8" });
  const arr = JSON.parse(json) as any[];
  arr.forEach((o) => {
    const k = o["Key"] as string;
    if (cache.has(k)) return;
    cache.set(k, o["Bytes"]);
  });
});

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { key = "" } = req.query;
  if (Array.isArray(key)) return res.json(key.map((k) => cache.get(k)));
  if (cache.has(key)) return res.json(cache.get(key));
  return res.json({});
}
