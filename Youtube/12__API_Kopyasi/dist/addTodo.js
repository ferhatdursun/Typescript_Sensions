"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodo = void 0;
const db_1 = require("./db");
const getTodo = (req, res) => {
    const body = req.body;
    const todoitem = {
        isDone: false,
        text: body.text,
        id: Math.random().toString()
    };
    db_1.db.push(todoitem);
    console.log(todoitem);
    const responseData = {
        msg: "Es wurde erfolgreich eingefügt",
        payload: todoitem,
    };
    res.status(201).send(responseData);
};
exports.getTodo = getTodo;
