"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodos = void 0;
const db_1 = require("./db");
const getTodos = (req, res) => {
    res.status(200).json(db_1.db);
};
exports.getTodos = getTodos;
