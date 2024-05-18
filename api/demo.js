"use strict";
// Can't send large response (4.5MB)
// https://vercel.com/guides/how-to-bypass-vercel-body-size-limit-serverless-functions
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fs_1 = require("fs");
function jsonToTsv(jsonString) {
    const excel = JSON.parse(jsonString);
    const jsonArray = excel.DataList;
    if (!Array.isArray(jsonArray))
        return null;
    if (jsonArray.length === 0)
        return "";
    const headers = Object.keys(jsonArray[0]);
    const tsvRows = jsonArray.map((row) => {
        return headers
            .map((header) => {
            const value = row[header];
            if (value == null)
                return "";
            if (typeof value === "object")
                return JSON.stringify(value).replace(/\t/g, " ");
            return value.toString().replace(/\t/g, " ");
        })
            .join("\t");
    });
    return `${headers.join("\t")}\n${tsvRows.join("\n")}`;
}
function handler(req, res) {
    const { name = "" } = req.query;
    const folder = path.join(process.cwd(), "src/assets/game/excel");
    const file = path.join(folder, name + ".json");
    if (!(0, fs_1.existsSync)(file))
        res.json({ message: "file not found." });
    else {
        const json = (0, fs_1.readFileSync)(file, { encoding: "utf-8" });
        const tsv = jsonToTsv(json);
        return res.send(tsv);
    }
}
exports.default = handler;
