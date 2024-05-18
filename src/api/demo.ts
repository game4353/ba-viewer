// Can't send large response (4.5MB)
// https://vercel.com/guides/how-to-bypass-vercel-body-size-limit-serverless-functions

// Can't read big folder or have big import (500MB)

import type { VercelRequest, VercelResponse } from "@vercel/node";
import * as path from "path";
import { existsSync, readFileSync } from "fs";

function jsonToTsv(jsonString: string): string | null {
  const excel = JSON.parse(jsonString);
  const jsonArray = excel.DataList;
  if (!Array.isArray(jsonArray)) return null;
  if (jsonArray.length === 0) return "";
  const headers = Object.keys(jsonArray[0]);
  const tsvRows = jsonArray.map((row) => {
    return headers
      .map((header) => {
        const value = row[header];
        if (value == null) return "";
        if (typeof value === "object")
          return JSON.stringify(value).replace(/\t/g, " ");
        return value.toString().replace(/\t/g, " ");
      })
      .join("\t");
  });
  return `${headers.join("\t")}\n${tsvRows.join("\n")}`;
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { name = "" } = req.query;
  const folder = path.join(process.cwd(), "src/assets/game/excel");
  const file = path.join(folder, name + ".json");
  if (!existsSync(file)) res.json({ message: "file not found." });
  else {
    const json = readFileSync(file, { encoding: "utf-8" });
    const tsv = jsonToTsv(json);
    return res.send(tsv);
  }
}
