type VercelRequest = import("@vercel/node").VercelRequest;
type VercelResponse = import("@vercel/node").VercelResponse;
const fs = require("fs");

module.exports = function handler(req: VercelRequest, res: VercelResponse) {
  const { name = "World" } = req.query;
  const j = fs.readFileSync(`./src/assets/game/excel/${name}.json`);
  return res.json(j);
};
