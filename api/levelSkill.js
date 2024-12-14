"use strict";
// To deploy api, use `pnpm run api`
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path = require("path");
const cache = new Map();
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
const folder = path.join(process.cwd(), "public/data/DB/LevelSkillDataDBSchema");
title.forEach((name) => {
    const file = path.join(folder, name + ".json");
    const json = (0, fs_1.readFileSync)(file, { encoding: "utf-8" });
    const arr = JSON.parse(json);
    arr.forEach((o) => {
        const k = o["Key"];
        if (cache.has(k))
            return;
        cache.set(k, o["Bytes"]);
    });
});
function handler(req, res) {
    const { key = "" } = req.query;
    if (Array.isArray(key))
        return res.json(key.map((k) => cache.get(k)));
    if (cache.has(key))
        return res.json(cache.get(key));
    return res.json({});
}
exports.default = handler;
