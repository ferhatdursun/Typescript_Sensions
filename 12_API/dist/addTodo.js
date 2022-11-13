"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTodo = void 0;
const db_1 = require("./db");
const addTodo = (req, res) => {
    const { text } = req.body;
    console.log(text);
    const todoitem = {
        isDone: false,
        text,
        id: Math.random().toString(),
    };
    db_1.db.push(todoitem);
    const responseData = {
        msg: "Basarili bir sekilde eklendi",
        payload: todoitem,
    };
    res.status(201).send(responseData);
};
exports.addTodo = addTodo;
