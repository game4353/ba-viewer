type VercelRequest = import("@vercel/node").VercelRequest;
type VercelResponse = import("@vercel/node").VercelResponse;
const fs = require("fs");

module.exports = function handler(req: VercelRequest, res: VercelResponse) {
  const { name = "World" } = req.query;
  let path: string;
  if (Array.isArray(name)) {
    path = name[0].split("_").join("/");
  } else {
    path = name.split("_").join("/");
  }
  const j = fs.readFileSync(path);
  return res.json(j);
};
