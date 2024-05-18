"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handler(req, res) {
    var _a = req.query.name, name = _a === void 0 ? "World" : _a;
    return res.json({
        message: "Hello ".concat(name, "!"),
    });
}
exports.default = handler;
