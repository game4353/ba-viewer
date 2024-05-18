type VercelRequest = import("@vercel/node").VercelRequest;
type VercelResponse = import("@vercel/node").VercelResponse;
const fs = require("fs");
const path = require("path");

module.exports = function handler(req: VercelRequest, res: VercelResponse) {
  const { name = "academyfavorscheduleexceltable" } = req.query;
  const jsonPath = path.join(process.cwd(), "src/assets/game/excel");
  const filePath = path.join(jsonPath, name + ".json");
  const j = fs.readFileSync(filePath);
  return res.json(j);
};
