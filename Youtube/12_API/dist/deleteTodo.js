"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = void 0;
const db_1 = require("./db");
//deleteTodo/:id
const deleteTodo = (req, res) => {
    const id = req.params.id;
    const todoIndex = db_1.db.findIndex((todo) => todo.id === id); //! Bu bize index´i veriyor.
    if (todoIndex > -1) {
        db_1.db.splice(todoIndex, 1);
    }
    return res.status(200).send({
        msg: `ID si ${id} olan basarili bir sekilde silindi`
    });
};
exports.deleteTodo = deleteTodo;
