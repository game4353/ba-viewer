"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handler(req, res) {
    const { name = "World" } = req.query;
    return res.json({
        message: `Hello ${name}!`,
    });
}
exports.default = handler;
