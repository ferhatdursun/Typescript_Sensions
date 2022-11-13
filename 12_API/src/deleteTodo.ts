import {Handler} from "express";
import { db } from "./db";
import { SuccessResponse } from "./types";

//deleteTodo/:id

export const deleteTodo: Handler = (req, res) => {
    const id = req.params.id;
    const todoIndex = db.findIndex((todo) => todo.id === id) //! Bu bize index´i veriyor.

    if (todoIndex > -1) {
        db.splice(todoIndex, 1);

    }
    return res.status(200).send({
        msg: `ID si ${id} olan basarili bir sekilde silindi`
    } as SuccessResponse)
}