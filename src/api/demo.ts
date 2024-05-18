// don't send large response:
// https://vercel.com/guides/how-to-bypass-vercel-body-size-limit-serverless-functions

import type { VercelRequest, VercelResponse } from "@vercel/node";
import * as path from "path";
import { readFileSync } from "fs";

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { name = "SpineCharacters" } = req.query;
  const folder = path.join(process.cwd(), "src/assets/game");
  const file = path.join(folder, name + ".json");
  const json = readFileSync(file, { encoding: "utf-8" });
  return res.json(JSON.parse(json));
}
