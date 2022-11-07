"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTodo = void 0;
const db_1 = require("./db");
const addTodo = (req, res) => {
    const body = req.body;
    const todoitem = {
        isDone: false,
        text: body.text,
        id: Math.random().toString()
    };
    db_1.db.push(todoitem);
    res.status(200).send({
        msg: "Basarili bir sekilde eklendi"
    });
};
exports.addTodo = addTodo;
