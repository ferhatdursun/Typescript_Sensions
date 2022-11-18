"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleTodo = void 0;
const db_1 = require("./db");
const toggleTodo = (req, res) => {
    const id = req.params.id;
    const todoIndex = db_1.db.findIndex((todo) => todo.id === id);
    if (todoIndex > -1) {
        db_1.db[todoIndex].isDone = !db_1.db[todoIndex].isDone;
    }
    return res.status(200).send({
        msg: `ID"si ${id} olan basarili bir sekilde tooglandi.`
    });
};
exports.toggleTodo = toggleTodo;
