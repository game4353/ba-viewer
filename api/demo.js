"use strict";
// don't send large response:
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
            var _a, _b;
            const value = row[header];
            return (_b = (_a = value === null || value === void 0 ? void 0 : value.toString()) === null || _a === void 0 ? void 0 : _a.replace(/\t/g, " ")) !== null && _b !== void 0 ? _b : "";
        })
            .join("\t");
    });
    return `${headers.join("\t")}\n${tsvRows.join("\n")}`;
}
function handler(req, res) {
    const { name = "" } = req.query;
    const folder = path.join(process.cwd(), "src/assets/game/excel");
    const file = path.join(folder, name + ".json");
    const json = (0, fs_1.readFileSync)(file, { encoding: "utf-8" });
    const tsv = jsonToTsv(json);
    return res.send(tsv);
}
exports.default = handler;
