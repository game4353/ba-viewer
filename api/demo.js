"use strict";
// don't send large response:
// https://vercel.com/guides/how-to-bypass-vercel-body-size-limit-serverless-functions
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fs_1 = require("fs");
function handler(req, res) {
    const { name = "SpineCharacters" } = req.query;
    const folder = path.join(process.cwd(), "src/assets/game");
    const file = path.join(folder, name + ".json");
    const json = (0, fs_1.readFileSync)(file, { encoding: "utf-8" });
    return res.json(JSON.parse(json));
}
exports.default = handler;
