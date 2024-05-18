type VercelRequest = import("@vercel/node").VercelRequest;
type VercelResponse = import("@vercel/node").VercelResponse;

module.exports = function handler(req: VercelRequest, res: VercelResponse) {
  const { name = "World" } = req.query;
  return res.json({
    message: `Hello ${name}!`,
  });
};
